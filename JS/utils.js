// Utility functions for ChatEduca
class Utils {
    // Format date and time
    static formatDateTime(date = new Date()) {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        return date.toLocaleDateString('pt-BR', options);
    }
    
    // Format time only
    static formatTime(date = new Date()) {
        const options = {
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleTimeString('pt-BR', options);
    }
    
    // Sanitize HTML to prevent XSS
    static sanitizeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
    
    // Check if string is empty or whitespace
    static isEmpty(str) {
        return !str || str.trim().length === 0;
    }
    
    // Capitalize first letter
    static capitalize(str) {
        if (this.isEmpty(str)) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    
    // Remove accents from string
    static removeAccents(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    
    // Check if device is mobile
    static isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // Check if device is tablet
    static isTabletDevice() {
        return /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent);
    }
    
    // Get device type
    static getDeviceType() {
        if (this.isMobileDevice()) return 'mobile';
        if (this.isTabletDevice()) return 'tablet';
        return 'desktop';
    }
    
    // Check if browser supports feature
    static browserSupports(feature) {
        const features = {
            localStorage: typeof(Storage) !== 'undefined',
            sessionStorage: typeof(Storage) !== 'undefined',
            geolocation: navigator.geolocation !== undefined,
            notifications: 'Notification' in window,
            serviceWorker: 'serviceWorker' in navigator,
            webSpeech: 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window
        };
        
        return features[feature] || false;
    }
    
    // Local storage helpers
    static saveToLocalStorage(key, data) {
        if (this.browserSupports('localStorage')) {
            try {
                localStorage.setItem(key, JSON.stringify(data));
                return true;
            } catch (e) {
                console.error('Error saving to localStorage:', e);
                return false;
            }
        }
        return false;
    }
    
    static loadFromLocalStorage(key, defaultValue = null) {
        if (this.browserSupports('localStorage')) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (e) {
                console.error('Error loading from localStorage:', e);
                return defaultValue;
            }
        }
        return defaultValue;
    }
    
    static removeFromLocalStorage(key) {
        if (this.browserSupports('localStorage')) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (e) {
                console.error('Error removing from localStorage:', e);
                return false;
            }
        }
        return false;
    }
    
    // Session storage helpers
    static saveToSessionStorage(key, data) {
        if (this.browserSupports('sessionStorage')) {
            try {
                sessionStorage.setItem(key, JSON.stringify(data));
                return true;
            } catch (e) {
                console.error('Error saving to sessionStorage:', e);
                return false;
            }
        }
        return false;
    }
    
    static loadFromSessionStorage(key, defaultValue = null) {
        if (this.browserSupports('sessionStorage')) {
            try {
                const item = sessionStorage.getItem(key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (e) {
                console.error('Error loading from sessionStorage:', e);
                return defaultValue;
            }
        }
        return defaultValue;
    }
    
    // Cookie helpers
    static setCookie(name, value, days = 7) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }
    
    static getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    static deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    
    // URL helpers
    static getURLParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    
    static updateURLParameter(key, value) {
        const url = new URL(window.location.href);
        url.searchParams.set(key, value);
        window.history.replaceState({}, '', url.toString());
    }
    
    // Validation helpers
    static isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    static isValidPhone(phone) {
        const re = /^[\d\s\-\(\)\+]{10,}$/;
        return re.test(phone);
    }
    
    static isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }
    
    // String helpers
    static truncateText(text, maxLength = 100, suffix = '...') {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + suffix;
    }
    
    static slugify(text) {
        return text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
    
    static wordCount(text) {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    }
    
    static readingTime(text, wordsPerMinute = 200) {
        const words = this.wordCount(text);
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min de leitura`;
    }
    
    // Array helpers
    static shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    static uniqueArray(array) {
        return [...new Set(array)];
    }
    
    static groupBy(array, key) {
        return array.reduce((groups, item) => {
            const group = item[key];
            if (!groups[group]) groups[group] = [];
            groups[group].push(item);
            return groups;
        }, {});
    }
    
    // Math helpers
    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    static percentage(value, total) {
        return ((value / total) * 100).toFixed(2);
    }
    
    static average(numbers) {
        return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    }
    
    // DOM helpers
    static createElement(tag, className = '', innerHTML = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        return element;
    }
    
    static addEventListeners(element, events, handler) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, handler);
        });
    }
    
    static removeEventListeners(element, events, handler) {
        events.split(' ').forEach(event => {
            element.removeEventListener(event, handler);
        });
    }
    
    static isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    static scrollToElement(element, offset = 0) {
        const elementTop = element.offsetTop - offset;
        window.scrollTo({
            top: elementTop,
            behavior: 'smooth'
        });
    }
    
    // Animation helpers
    static fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        const start = performance.now();
        
        const animate = (currentTime) => {
            const elapsedTime = currentTime - start;
            const progress = Math.min(elapsedTime / duration, 1);
            
            element.style.opacity = progress;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    static fadeOut(element, duration = 300) {
        const start = performance.now();
        const startOpacity = parseFloat(element.style.opacity) || 1;
        
        const animate = (currentTime) => {
            const elapsedTime = currentTime - start;
            const progress = Math.min(elapsedTime / duration, 1);
            
            element.style.opacity = startOpacity * (1 - progress);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    // Error handling
    static handleError(error, context = 'Unknown') {
        console.error(`Error in ${context}:`, error);
        
        // Send error to tracking service in production
        if (window.errorTracker) {
            window.errorTracker.track(error, context);
        }
        
        // Show user-friendly message
        if (window.chatEducaMain) {
            window.chatEducaMain.showNotification(
                'Ops! Algo deu errado. Tente novamente.',
                'error'
            );
        }
    }
    
    // Performance helpers
    static debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }
    
    static throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Accessibility helpers
    static announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.style.position = 'absolute';
        announcement.style.left = '-9999px';
        announcement.style.width = '1px';
        announcement.style.height = '1px';
        announcement.style.overflow = 'hidden';
        
        document.body.appendChild(announcement);
        announcement.textContent = message;
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    static trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
    
    // Analytics helpers
    static trackEvent(eventName, eventData = {}) {
        // Google Analytics or other tracking
        if (window.gtag) {
            window.gtag('event', eventName, eventData);
        }
        
        // Custom tracking
        if (window.customTracker) {
            window.customTracker.track(eventName, eventData);
        }
        
        console.log('Event tracked:', eventName, eventData);
    }
    
    static trackPageView(pageName) {
        this.trackEvent('page_view', {
            page_title: pageName,
            page_location: window.location.href
        });
    }
    
    // Educational helpers specific to ChatEduca
    static getSubjectFromMessage(message) {
        const subjects = {
            matematica: ['matemática', 'math', 'número', 'conta', 'equação', 'fração', 'geometria', 'álgebra'],
            portugues: ['português', 'gramática', 'texto', 'verbo', 'sujeito', 'predicado', 'acentuação', 'ortografia'],
            ciencias: ['ciências', 'biologia', 'física', 'química', 'célula', 'sistema', 'água', 'energia']
        };
        
        const lowerMessage = message.toLowerCase();
        
        for (const [subject, keywords] of Object.entries(subjects)) {
            if (keywords.some(keyword => lowerMessage.includes(keyword))) {
                return subject;
            }
        }
        
        return 'geral';
    }
    
    static getDifficultyLevel(message) {
        const basicKeywords = ['o que é', 'como é', 'explique', 'básico'];
        const intermediateKeywords = ['como fazer', 'resolver', 'calcular'];
        const advancedKeywords = ['demonstre', 'prove', 'analise', 'compare'];
        
        const lowerMessage = message.toLowerCase();
        
        if (advancedKeywords.some(keyword => lowerMessage.includes(keyword))) {
            return 'avançado';
        } else if (intermediateKeywords.some(keyword => lowerMessage.includes(keyword))) {
            return 'intermediário';
        } else if (basicKeywords.some(keyword => lowerMessage.includes(keyword))) {
            return 'básico';
        }
        
        return 'intermediário';
    }
    
    static formatEducationalContent(content) {
        // Format educational content with proper styling
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>')
            .replace(/^(.*)$/, '<p>$1</p>');
    }
    
    static generateQuizQuestion(topic, difficulty = 'básico') {
        // This would integrate with a quiz generation system
        // For now, return a placeholder
        return {
            question: `Pergunta sobre ${topic} - nível ${difficulty}`,
            options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
            correct: 0,
            explanation: 'Explicação da resposta correta'
        };
    }
}

// Export Utils class
window.Utils = Utils;

// Also export for CommonJS if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}

// Initialize some utilities when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    Utils.trackPageView('ChatEduca - Home');
    
    // Set up error tracking
    window.addEventListener('error', function(e) {
        Utils.handleError(e.error, 'Global Error Handler');
    });
    
    // Set up unhandled promise rejection tracking
    window.addEventListener('unhandledrejection', function(e) {
        Utils.handleError(e.reason, 'Unhandled Promise Rejection');
    });
    
    console.log('Utils initialized successfully');
});
