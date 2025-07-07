// Main JavaScript for ChatEduca
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize feedback form
    initializeFeedbackForm();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize user type handling
    initializeUserTypeHandling();
});

// Initialize the main application
function initializeApp() {
    console.log('ChatEduca initialized successfully!');
    
    // Add loading states
    document.body.classList.add('loaded');
    
    // Initialize responsive behavior
    handleResponsiveDesign();
    
    // Add event listeners for better UX
    addGlobalEventListeners();
}

// Initialize smooth scrolling for navigation
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(this);
            }
        });
    });
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Initialize feedback form
function initializeFeedbackForm() {
    const feedbackForm = document.getElementById('feedbackForm');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFeedbackSubmission();
        });
    }
}

// Handle feedback form submission
function handleFeedbackSubmission() {
    const feedbackType = document.getElementById('feedbackType').value;
    const feedbackText = document.getElementById('feedbackText').value;
    
    if (!feedbackType || !feedbackText.trim()) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset form
        document.getElementById('feedbackForm').reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showNotification('Feedback enviado com sucesso! Obrigado pela sua contribuição.', 'success');
        
        // Log feedback (in a real app, this would be sent to a server)
        console.log('Feedback enviado:', { type: feedbackType, text: feedbackText });
    }, 2000);
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add notification to body
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Get notification icon
function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Get notification color
function getNotificationColor(type) {
    const colors = {
        success: '#4CAF50',
        error: '#F44336',
        warning: '#FF9800',
        info: '#2196F3'
    };
    return colors[type] || '#2196F3';
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.about-card, .feature-card, .tip-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize user type handling
function initializeUserTypeHandling() {
    const userTypeSelect = document.getElementById('userType');
    
    if (userTypeSelect) {
        userTypeSelect.addEventListener('change', function() {
            const selectedType = this.value;
            handleUserTypeChange(selectedType);
        });
        
        // Set initial user type
        handleUserTypeChange(userTypeSelect.value);
    }
}

// Handle user type change
function handleUserTypeChange(userType) {
    // Store user type in localStorage
    localStorage.setItem('chatEducaUserType', userType);
    
    // Update UI based on user type
    updateUIForUserType(userType);
}

// Update UI for user type
function updateUIForUserType(userType) {
    const body = document.body;
    
    // Remove existing user type classes
    body.classList.remove('user-student', 'user-parent');
    
    // Add new user type class
    body.classList.add(`user-${userType}`);
    
    // Update content based on user type
    updateContentForUserType(userType);
}

// Update content for user type
function updateContentForUserType(userType) {
    const userSpecificContent = {
        student: {
            welcomeMessage: 'Olá, aluno! Estou aqui para ajudar com suas dúvidas escolares.',
            tipFocus: 'Seja específico com suas dúvidas e aproveite os materiais complementares.'
        },
        parent: {
            welcomeMessage: 'Olá, responsável! Estou aqui para ajudar você a apoiar o aprendizado do seu filho.',
            tipFocus: 'Peça orientações sobre como ajudar e solicite exercícios para praticar juntos.'
        }
    };
    
    const content = userSpecificContent[userType];
    if (content) {
        // Content updated for user type
        console.log(`Content updated for user type: ${userType}`);
    }
}

// Handle responsive design
function handleResponsiveDesign() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-nav-open');
            this.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('mobile-nav-open');
                mobileMenuToggle.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', debounce(function() {
        handleWindowResize();
        
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            if (nav) nav.classList.remove('mobile-nav-open');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    }, 250));
}

// Handle window resize
function handleWindowResize() {
    // Update viewport height for mobile
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Add global event listeners
function addGlobalEventListeners() {
    // Handle scroll events
    window.addEventListener('scroll', debounce(function() {
        handleScroll();
    }, 10));
    
    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        handleKeyboardNavigation(e);
    });
    
    // Handle clicks outside elements
    document.addEventListener('click', function(e) {
        handleOutsideClicks(e);
    });
}

// Handle scroll events
function handleScroll() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Store previous scroll position
    if (typeof handleScroll.lastScrollTop === 'undefined') {
        handleScroll.lastScrollTop = 0;
    }
    
    // Add/remove scrolled class to header
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Hide/show header based on scroll direction
    if (scrollTop > 100) { // Only start hiding after scrolling 100px
        if (scrollTop > handleScroll.lastScrollTop) {
            // Scrolling down - hide header
            header.classList.add('header-hidden');
            header.classList.remove('header-visible');
        } else {
            // Scrolling up - show header
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
    } else {
        // Always show header when near top
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
    }
    
    // Update last scroll position
    handleScroll.lastScrollTop = scrollTop;
    
    // Update active section in navigation
    updateActiveSection();
}

// Update active section in navigation
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        if (window.pageYOffset >= sectionTop - headerHeight - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Handle keyboard navigation
function handleKeyboardNavigation(e) {
    // ESC key to close modals/overlays
    if (e.key === 'Escape') {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay && loadingOverlay.classList.contains('show')) {
            loadingOverlay.classList.remove('show');
        }
    }
    
    // Enter key on buttons
    if (e.key === 'Enter' && e.target.classList.contains('quick-btn')) {
        e.target.click();
    }
}

// Handle outside clicks
function handleOutsideClicks(e) {
    // Close mobile menu if clicking outside
    const nav = document.querySelector('.nav');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (nav && nav.classList.contains('mobile-nav-open')) {
        if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            nav.classList.remove('mobile-nav-open');
            mobileMenuToggle.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

// Utility function: Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility function: Throttle
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if user is on mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Check if user prefers reduced motion
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        margin-left: 0.5rem;
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .header.scrolled {
        background: rgba(46, 125, 50, 0.95);
        backdrop-filter: blur(10px);
    }
    
    .nav a.active {
        color: #FFD700;
    }
    
    .nav a.active::after {
        width: 100%;
    }
    
    .loaded .fade-in-up {
        animation: fadeInUp 0.8s ease-out;
    }
    
    .user-student .quick-btn[data-question*="Como posso ajudar"] {
        display: none;
    }
    
    .user-parent .quick-btn[data-question*="resolver"] {
        opacity: 0.7;
    }
`;
document.head.appendChild(style);

// Export functions for use in other modules
window.chatEducaMain = {
    showNotification,
    handleUserTypeChange,
    updateUIForUserType,
    isMobile,
    prefersReducedMotion,
    debounce,
    throttle
};
