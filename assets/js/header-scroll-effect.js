// ==========================================================================
// HEADER SCROLL EFFECT API
// ==========================================================================

/**
 * HeaderScrollEffect class handles the header appearance changes based on scroll position
 * Provides smooth transitions between transparent and solid background states
 */
class HeaderScrollEffect {
  /**
   * Constructor initializes the header scroll effect
   * @param {Object} options - Configuration options for the effect
   */
  constructor(options = {}) {
    // Merge default configuration with user options
    this.config = {
      headerSelector: '.header',                    // CSS selector for the header element
      scrollThreshold: 50,                         // Scroll distance to trigger the effect (in pixels)
      scrolledClass: 'header-scrolled',            // CSS class applied when scrolled
      transparentClass: 'header-transparent',      // CSS class applied when at top
      ...options                                   // Override defaults with user options
    };

    // Get the header element from DOM
    this.header = document.querySelector(this.config.headerSelector);
    this.isScrolled = false;                       // Track current header state
    this.ticking = false;                          // Prevent multiple animation frames

    // Exit early if header element is not found
    if (!this.header) {
      console.warn(`Header element not found: ${this.config.headerSelector}`);
      return;
    }

    // Initialize the effect
    this.init();
  }

  /**
   * Initialize the header scroll effect
   * Sets up event listeners and initial state
   */
  init() {
    // Add initial transparent class to header
    this.header.classList.add(this.config.transparentClass);
    
    // Bind event handlers to maintain correct 'this' context
    this.handleScroll = this.handleScroll.bind(this);
    this.updateHeader = this.updateHeader.bind(this);
    
    // Add optimized scroll event listener with passive option for better performance
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    
    // Check initial scroll position on page load
    this.updateHeader();
  }

  /**
   * Handle scroll events with performance optimization
   * Uses requestAnimationFrame to throttle updates
   */
  handleScroll() {
    // Only request animation frame if not already pending
    if (!this.ticking) {
      requestAnimationFrame(this.updateHeader);
      this.ticking = true;
    }
  }

  /**
   * Update header appearance based on current scroll position
   * This is the core logic that determines header state
   */
  updateHeader() {
    // Get current scroll position (cross-browser compatible)
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Determine if header should be in scrolled state
    const shouldBeScrolled = scrollTop > this.config.scrollThreshold;

    // Only update if state has actually changed (prevents unnecessary DOM manipulation)
    if (shouldBeScrolled !== this.isScrolled) {
      this.isScrolled = shouldBeScrolled;
      
      if (this.isScrolled) {
        // User has scrolled past threshold - show solid header
        this.header.classList.add(this.config.scrolledClass);
        this.header.classList.remove(this.config.transparentClass);
      } else {
        // User is at top of page - show transparent header
        this.header.classList.remove(this.config.scrolledClass);
        this.header.classList.add(this.config.transparentClass);
      }

      // Dispatch custom event for other scripts to listen to header state changes
      this.header.dispatchEvent(new CustomEvent('headerStateChange', {
        detail: { isScrolled: this.isScrolled, scrollTop }
      }));
    }

    // Reset animation frame flag
    this.ticking = false;
  }

  /**
   * Public method to manually force header into scrolled state
   * Useful for pages that should always show solid header
   */
  forceScrolledState() {
    this.header.classList.add(this.config.scrolledClass);
    this.header.classList.remove(this.config.transparentClass);
    this.isScrolled = true;
  }

  /**
   * Public method to manually force header into transparent state
   * Useful for resetting header appearance
   */
  forceTransparentState() {
    this.header.classList.remove(this.config.scrolledClass);
    this.header.classList.add(this.config.transparentClass);
    this.isScrolled = false;
  }

  /**
   * Update configuration options after initialization
   * @param {Object} newConfig - New configuration options to merge
   */
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Clean up event listeners and remove classes
   * Important for preventing memory leaks in SPAs
   */
  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
    this.header.classList.remove(this.config.scrolledClass, this.config.transparentClass);
  }

  /**
   * Static factory method for creating new instances
   * @param {Object} options - Configuration options
   * @return {HeaderScrollEffect} New instance of HeaderScrollEffect
   */
  static init(options = {}) {
    return new HeaderScrollEffect(options);
  }
}

/**
 * Utility function for quick initialization
 * Provides a simpler API for basic usage
 * @param {Object} options - Configuration options
 * @return {HeaderScrollEffect} New instance of HeaderScrollEffect
 */
function initHeaderScrollEffect(options = {}) {
  return HeaderScrollEffect.init(options);
}

/**
 * Auto-initialization when DOM is ready
 * Creates a default instance with custom scroll threshold
 */
document.addEventListener('DOMContentLoaded', () => {
  const headerEffect = initHeaderScrollEffect({
    scrollThreshold: 80,    // Trigger effect when scrolled 80px from top
  });
});

/**
 * Export for module systems (CommonJS, Node.js)
 * Allows importing in other JavaScript modules
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HeaderScrollEffect, initHeaderScrollEffect };
}