// ==========================================================================
// FAQ ACCORDION FUNCTIONALITY
// ==========================================================================

class FAQAccordion {
    constructor(selector = '.faq-section', options = {}) {
        this.faqSection = document.querySelector(selector);
        if (!this.faqSection) return;
        
        this.faqItems = this.faqSection.querySelectorAll('.faq-item');
        this.config = {
            allowMultiple: false, // Set to true to allow multiple items open
            autoClose: true,      // Auto close when clicking outside
            animationDuration: 400,
            scrollToOpen: false,  // Scroll to item when opened
            ...options            // Override with custom options
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupAccessibility();
    }
    
    bindEvents() {
        this.faqItems.forEach((item, index) => {
            const question = item.querySelector('.faq-question');
            const toggle = item.querySelector('.faq-toggle');
            
            // Click on question or toggle button
            question.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleItem(item);
            });
            
            // Keyboard navigation
            question.addEventListener('keydown', (e) => {
                this.handleKeyboard(e, item, index);
            });
        });
        
        // Auto close when clicking outside
        if (this.config.autoClose) {
            document.addEventListener('click', (e) => {
                if (!this.faqSection.contains(e.target)) {
                    this.closeAllItems();
                }
            });
        }
    }
    
    setupAccessibility() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const toggle = item.querySelector('.faq-toggle');
            const answer = item.querySelector('.faq-answer');
            
            // Add ARIA attributes
            const questionId = `faq-question-${Date.now()}-${Math.random()}`;
            const answerId = `faq-answer-${Date.now()}-${Math.random()}`;
            
            question.setAttribute('id', questionId);
            question.setAttribute('aria-expanded', 'false');
            question.setAttribute('aria-controls', answerId);
            question.setAttribute('tabindex', '0');
            question.setAttribute('role', 'button');
            
            answer.setAttribute('id', answerId);
            answer.setAttribute('aria-labelledby', questionId);
            answer.setAttribute('role', 'region');
            
            toggle.setAttribute('aria-hidden', 'true');
        });
    }
    
    toggleItem(item) {
        const isActive = item.classList.contains('active');
        
        if (isActive) {
            this.closeItem(item);
        } else {
            if (!this.config.allowMultiple) {
                this.closeAllItems();
            }
            this.openItem(item);
        }
    }
    
    openItem(item) {
        const question = item.querySelector('.faq-question');
        const toggle = item.querySelector('.faq-toggle');
        const answer = item.querySelector('.faq-answer');
        const content = answer.querySelector('.answer-content');
        
        // Add active class
        item.classList.add('active');
        answer.classList.add('open');
        
        // Update ARIA attributes
        question.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-expanded', 'true');
        
        // Set max-height for smooth animation
        const contentHeight = content.scrollHeight;
        answer.style.maxHeight = contentHeight + 'px';
        
        // Optional: Scroll to item
        if (this.config.scrollToOpen) {
            setTimeout(() => {
                item.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, this.config.animationDuration / 2);
        }
        
        // Dispatch custom event
        item.dispatchEvent(new CustomEvent('faq:opened', {
            detail: { item, question: question.textContent.trim() }
        }));
    }
    
    closeItem(item) {
        const question = item.querySelector('.faq-question');
        const toggle = item.querySelector('.faq-toggle');
        const answer = item.querySelector('.faq-answer');
        
        // Remove active class
        item.classList.remove('active');
        answer.classList.remove('open');
        
        // Update ARIA attributes
        question.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-expanded', 'false');
        
        // Reset max-height
        answer.style.maxHeight = '0px';
        
        // Dispatch custom event
        item.dispatchEvent(new CustomEvent('faq:closed', {
            detail: { item, question: question.textContent.trim() }
        }));
    }
    
    closeAllItems() {
        this.faqItems.forEach(item => {
            if (item.classList.contains('active')) {
                this.closeItem(item);
            }
        });
    }
    
    openAllItems() {
        this.faqItems.forEach(item => {
            if (!item.classList.contains('active')) {
                this.openItem(item);
            }
        });
    }
    
    handleKeyboard(e, item, index) {
        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                this.toggleItem(item);
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.focusNextItem(index);
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.focusPrevItem(index);
                break;
            case 'Home':
                e.preventDefault();
                this.focusFirstItem();
                break;
            case 'End':
                e.preventDefault();
                this.focusLastItem();
                break;
            case 'Escape':
                this.closeAllItems();
                break;
        }
    }
    
    focusNextItem(currentIndex) {
        const nextIndex = (currentIndex + 1) % this.faqItems.length;
        const nextQuestion = this.faqItems[nextIndex].querySelector('.faq-question');
        nextQuestion.focus();
    }
    
    focusPrevItem(currentIndex) {
        const prevIndex = currentIndex === 0 ? this.faqItems.length - 1 : currentIndex - 1;
        const prevQuestion = this.faqItems[prevIndex].querySelector('.faq-question');
        prevQuestion.focus();
    }
    
    focusFirstItem() {
        const firstQuestion = this.faqItems[0].querySelector('.faq-question');
        firstQuestion.focus();
    }
    
    focusLastItem() {
        const lastQuestion = this.faqItems[this.faqItems.length - 1].querySelector('.faq-question');
        lastQuestion.focus();
    }
    
    // Public methods for external control
    openItemByIndex(index) {
        if (this.faqItems[index]) {
            this.openItem(this.faqItems[index]);
        }
    }
    
    closeItemByIndex(index) {
        if (this.faqItems[index]) {
            this.closeItem(this.faqItems[index]);
        }
    }
    
    destroy() {
        // Clean up event listeners and reset styles
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            question.replaceWith(question.cloneNode(true));
            answer.style.maxHeight = '';
            item.classList.remove('active');
            answer.classList.remove('open');
        });
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FAQAccordion;
}

// Global access
window.FAQAccordion = FAQAccordion;