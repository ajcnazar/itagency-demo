// Initialize particles.js
if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS.load('particles-js', 'assets/data/particles-config.json');
}

// Load SVG icon sprites
fetch('/assets/images/icons/icons-sprite.svg')
.then(response => response.text())
.then(svgContent => {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = svgContent;
    document.body.insertBefore(div, document.body.firstChild);
})
.catch(error => {
    // Silent fail
});

// Initialize all components when DOM loads
document.addEventListener('DOMContentLoaded', async function() {
    
    try {
        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                delay: 100,
                once: false,
                mirror: true,
                offset: 50,
                easing: 'ease-out-cubic',
                anchorPlacement: 'top-bottom',
                disable: false,
                startEvent: 'DOMContentLoaded',
                animatedClassName: 'aos-animate',
                initClassName: 'aos-init',
            });
        }
        
        // Load services data for Typed.js
        if (typeof Typed !== 'undefined' && document.getElementById('typed-element')) {
            try {
                const response = await fetch('assets/data/services.json');
                const data = await response.json();
                
                // Initialize Typed.js
                const typed = new Typed('#typed-element', {
                    strings: data.services,
                    typeSpeed: data.typewriterConfig.typeSpeed,
                    backSpeed: data.typewriterConfig.deleteSpeed,
                    startDelay: 1500,
                    backDelay: data.typewriterConfig.deleteDelay,
                    loop: data.typewriterConfig.loop,
                    showCursor: data.typewriterConfig.showCursor,
                    cursorChar: data.typewriterConfig.cursorChar,
                    autoInsertCss: true,
                });

                window.serviceTyped = typed;
            } catch (error) {
                // Fallback with default strings
                const typed = new Typed('#typed-element', {
                    strings: ['Web Development', 'Digital Marketing', 'SEO Optimization'],
                    typeSpeed: 50,
                    backSpeed: 30,
                    backDelay: 1500,
                    loop: true,
                    showCursor: true,
                    cursorChar: '|'
                });
                window.serviceTyped = typed;
            }
        }

        // Initialize Portfolio
        initPortfolioIsotope();

        // Refresh AOS
        setTimeout(() => {
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }, 100);
        
    } catch (error) {
        // Initialize AOS as fallback
        try {
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    delay: 100,
                    once: false,
                    mirror: true,
                    offset: 50,
                    easing: 'ease-out-cubic'
                });
            }
        } catch (aosError) {
            // Silent fail
        }
    }
});

// Typed.js control functions
function pauseTyping() {
    if (window.serviceTyped) {
        window.serviceTyped.stop();
    }
}

function resumeTyping() {
    if (window.serviceTyped) {
        window.serviceTyped.start();
    }
}

function resetTyping() {
    if (window.serviceTyped) {
        window.serviceTyped.reset();
    }
}

// AOS control functions
function refreshAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

function disableAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({ disable: true });
    }
}

function enableAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            delay: 100,
            once: false,
            mirror: true,
            offset: 50,
            easing: 'ease-out-cubic'
        });
    }
}

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        pauseTyping();
    } else {
        resumeTyping();
        refreshAOS();
    }
});

// Expose utility functions globally
window.AOSUtils = {
    refresh: refreshAOS,
    disable: disableAOS,
    enable: enableAOS
};

window.TypingUtils = {
    pause: pauseTyping,
    resume: resumeTyping,
    reset: resetTyping
};

// ==========================================================================
// RESPONSIVE HEADER
// ==========================================================================

function initResponsiveHeader() {
    const header = document.querySelector('.header');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navbar = document.getElementById('navbar');
    const body = document.body;
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    if (!header || !mobileMenuToggle || !navbar) return;

    // Funciones del menú móvil
    function openMobileMenu() {
        navbar.classList.add('mobile-menu-open');
        mobileMenuToggle.classList.add('active');
        body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        navbar.classList.remove('mobile-menu-open');
        mobileMenuToggle.classList.remove('active');
        body.style.overflow = '';
        closeAllDropdowns();
    }

    function toggleMobileMenu() {
        if (navbar.classList.contains('mobile-menu-open')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    // Event listeners del menú móvil
    mobileMenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu();
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        const isClickInsideMenu = navbar.contains(e.target);
        const isClickOnToggle = mobileMenuToggle.contains(e.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && navbar.classList.contains('mobile-menu-open')) {
            closeMobileMenu();
        }
    });

    // Cerrar menú al hacer click en nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                closeMobileMenu();
            }
        });
    });

    // Funciones de dropdown
    function closeAllDropdowns() {
        dropdownMenus.forEach(menu => {
            menu.classList.remove('dropdown-open');
        });
        dropdownToggles.forEach(toggle => {
            toggle.classList.remove('active');
        });
    }

    function toggleDropdown(dropdownId, toggleElement) {
        const dropdownMenu = document.getElementById(dropdownId);
        
        if (!dropdownMenu) return;

        const isOpen = dropdownMenu.classList.contains('dropdown-open');
        closeAllDropdowns();
        
        if (!isOpen) {
            dropdownMenu.classList.add('dropdown-open');
            toggleElement.classList.add('active');
        }
    }

    // Event listeners de dropdown
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdownId = this.getAttribute('data-dropdown');
            toggleDropdown(dropdownId, this);
        });
    });

    // Cerrar dropdown al hacer click fuera (solo móvil)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            const isClickInsideDropdown = Array.from(dropdownMenus).some(menu => 
                menu.contains(e.target)
            );
            const isClickOnToggle = Array.from(dropdownToggles).some(toggle => 
                toggle.contains(e.target)
            );
            
            if (!isClickInsideDropdown && !isClickOnToggle) {
                closeAllDropdowns();
            }
        }
    });

    // Cerrar dropdown al hacer click en items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                closeAllDropdowns();
                closeMobileMenu();
            }
        });
    });

    // Efecto de scroll del header
    function handleHeaderScroll() {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
            header.classList.remove('header-transparent');
        } else {
            header.classList.remove('header-scrolled');
            header.classList.add('header-transparent');
        }
    }

    // Estado inicial del header
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.add('header-transparent');
    }

    window.addEventListener('scroll', handleHeaderScroll);

    // Manejo de resize de ventana
    function handleWindowResize() {
        if (window.innerWidth > 992) {
            closeMobileMenu();
            closeAllDropdowns();
        }
    }

    window.addEventListener('resize', handleWindowResize);

    // Navegación por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (navbar.classList.contains('mobile-menu-open')) {
                closeMobileMenu();
            }
            closeAllDropdowns();
        }
    });
}
initResponsiveHeader();

// ==========================================================================
// TESTIMONIALS CAROUSEL
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    if (typeof UniversalSlider !== 'undefined' && document.querySelector('.testimonials-carousel')) {
        const testimonialsSlider = new UniversalSlider('.testimonials-carousel', {
            slidesPerView: {
                desktop: 3,
                tablet: 1,
                mobile: 1 
            },
            breakpoints: {
                mobile: 576,
                tablet: 992
            },
            autoplay: true,
            autoplayDelay: 4000,
            pagination: true,
            arrows: false,
            loop: true,
            touchEnabled: true,
            classes: {
                container: 'testimonials-container',
                slide: 'testimonial-slide',
                pagination: 'slider-pagination',
                paginationDot: 'pagination-dot',
                paginationActive: 'active'
            }
        });
    }
});

// ==========================================================================
// CUSTOMERS CAROUSEL
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    if (typeof UniversalSlider !== 'undefined' && document.querySelector('.customers-carousel')) {
        const customersSlider = new UniversalSlider('.customers-carousel', {
            slidesPerView: {
                desktop: 5,
                tablet: 3,
                mobile: 2 
            },
            slideBy: 1,
            breakpoints: {
                mobile: 576,
                tablet: 992
            },
            autoplay: true,
            autoplayDelay: 3000,
            pagination: false,
            arrows: false,
            loop: true,
            touchEnabled: true,
        });
    }
});

// ==========================================================================
// FAQ ACCORDION
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    if (typeof FAQAccordion !== 'undefined' && document.querySelector('.faq-section')) {
        const faq = new FAQAccordion('.faq-section');
    }
});



// ==========================================================================
// NEWSLETTER FORM SUBMISSION
// ==========================================================================

const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const checkbox = this.querySelector('input[name="newsletter-agreement"]');
        
        if (checkbox && !checkbox.checked) {
            alert('Please agree to the Privacy Policy');
            return;
        }
        
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// ==========================================================================
// SCROLL TO TOP FUNCTIONALITY
// ==========================================================================

const scrollToTop = document.getElementById('scrollToTop');
if (scrollToTop) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTop.classList.add('show');
        } else {
            scrollToTop.classList.remove('show');
        }
    });

    scrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for footer links
document.querySelectorAll('.footer-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});