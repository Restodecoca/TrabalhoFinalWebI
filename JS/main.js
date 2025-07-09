document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    initializeSmoothScrolling();
    initializeFeedbackForm();
    initializeAnimations();
    initializeUserTypeHandling();
});

function initializeApp() {
    document.body.classList.add('loaded');
    handleResponsiveDesign();
    addGlobalEventListeners();
}

function initializeSmoothScrolling() {
    document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const id = link.getAttribute('href').substring(1);
            const target = document.getElementById(id);
            if (!target) return;
            const offset = document.querySelector('.header').offsetHeight;
            window.scrollTo({ top: target.offsetTop - offset - 20, behavior: 'smooth' });
            updateActiveNavLink(link);
        });
    });
}

function updateActiveNavLink(active) {
    document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
    active.classList.add('active');
}

function initializeFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        handleFeedbackSubmission();
    });
}

function handleFeedbackSubmission() {
    const type = document.getElementById('feedbackType').value;
    const text = document.getElementById('feedbackText').value.trim();
    if (!type || !text) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }

    const btn = document.querySelector('.btn-submit');
    const html = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        document.getElementById('feedbackForm').reset();
        btn.innerHTML = html;
        btn.disabled = false;
        showNotification('Feedback enviado com sucesso! Obrigado pela sua contribuição.', 'success');
    }, 2000);
}

function showNotification(msg, type = 'info') {
    document.querySelectorAll('.notification').forEach(n => n.remove());

    const n = document.createElement('div');
    n.className = `notification ${type}`;
    n.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${msg}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>`;
    n.style.cssText = `
        position:fixed;top:100px;right:20px;background:${getNotificationColor(type)};
        color:#fff;padding:1rem;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.15);
        z-index:10000;display:flex;align-items:center;gap:.5rem;max-width:400px;
        animation:slideInRight .3s ease-out;`;
    document.body.appendChild(n);

    setTimeout(() => {
        if (!n.parentElement) return;
        n.style.animation = 'slideOutRight .3s ease-in';
        setTimeout(() => n.remove(), 300);
    }, 5000);
}

const iconMap = { success: 'check-circle', error: 'exclamation-circle', warning: 'exclamation-triangle', info: 'info-circle' };
function getNotificationIcon(t) { return iconMap[t] || 'info-circle'; }
const colorMap = { success: '#4CAF50', error: '#F44336', warning: '#FF9800', info: '#2196F3' };
function getNotificationColor(t) { return colorMap[t] || '#2196F3'; }

function initializeAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('fade-in-up');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    document.querySelectorAll('.about-card, .feature-card, .tip-card').forEach(el => observer.observe(el));
}

function initializeUserTypeHandling() {
    const sel = document.getElementById('userType');
    if (!sel) return;
    sel.addEventListener('change', () => handleUserTypeChange(sel.value));
    handleUserTypeChange(sel.value);
}

function handleUserTypeChange(type) {
    localStorage.setItem('chatEducaUserType', type);
    updateUIForUserType(type);
}

function updateUIForUserType(type) {
    document.body.classList.remove('user-student', 'user-parent');
    document.body.classList.add(`user-${type}`);
    updateContentForUserType(type);
}

function updateContentForUserType(t) {
    const txt = {
        student: 'Olá, aluno! Estou aqui para ajudar com suas dúvidas escolares.',
        parent: 'Olá, responsável! Estou aqui para apoiar o aprendizado do seu filho.'
    };
    console.log(`Content updated for user type: ${t}`, txt[t]);
}

function handleResponsiveDesign() {
    const toggle = document.getElementById('mobileMenuToggle');
    const nav = document.querySelector('.nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-nav-open');
        toggle.classList.toggle('active');
        toggle.querySelector('i').classList.toggle('fa-times');
        toggle.querySelector('i').classList.toggle('fa-bars');
    });

    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        nav.classList.remove('mobile-nav-open');
        toggle.classList.remove('active');
        const ic = toggle.querySelector('i');
        ic.classList.remove('fa-times');
        ic.classList.add('fa-bars');
    }));

    window.addEventListener('resize', debounce(() => {
        handleWindowResize();
        if (window.innerWidth > 768) {
            nav.classList.remove('mobile-nav-open');
            toggle.classList.remove('active');
            const ic = toggle.querySelector('i');
            ic.classList.remove('fa-times');
            ic.classList.add('fa-bars');
        }
    }, 250));
}

function handleWindowResize() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

function addGlobalEventListeners() {
    window.addEventListener('scroll', debounce(handleScroll, 10));
    document.addEventListener('keydown', handleKeyboardNavigation);
    document.addEventListener('click', handleOutsideClicks);
}

function handleScroll() {
    const header = document.querySelector('.header');
    const y = window.pageYOffset || document.documentElement.scrollTop;
    if (typeof handleScroll.last === 'undefined') handleScroll.last = 0;

    header.classList.toggle('scrolled', y > 50);

    if (y > 100) {
        header.classList.toggle('header-hidden', y > handleScroll.last);
        header.classList.toggle('header-visible', y <= handleScroll.last);
    } else {
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
    }
    handleScroll.last = y;
    updateActiveSection();
}

function updateActiveSection() {
    const headerH = document.querySelector('.header').offsetHeight;
    let current = '';
    document.querySelectorAll('section[id]').forEach(sec => {
        if (window.pageYOffset >= sec.offsetTop - headerH - 100) current = sec.id;
    });
    document.querySelectorAll('.nav a[href^="#"]').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
}

function handleKeyboardNavigation(e) {
    if (e.key === 'Escape') {
        const ov = document.getElementById('loadingOverlay');
        if (ov) ov.classList.remove('show');
    }
    if (e.key === 'Enter' && e.target.classList.contains('quick-btn')) e.target.click();
}

function handleOutsideClicks(e) {
    const nav = document.querySelector('.nav');
    const toggle = document.getElementById('mobileMenuToggle');
    if (nav && nav.classList.contains('mobile-nav-open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('mobile-nav-open');
        toggle.classList.remove('active');
        const ic = toggle.querySelector('i');
        ic.classList.remove('fa-times');
        ic.classList.add('fa-bars');
    }
}

function debounce(fn, delay) {
    let t;
    return (...a) => {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, a), delay);
    };
}

window.chatEducaMain = { showNotification, handleUserTypeChange, updateUIForUserType, debounce };
