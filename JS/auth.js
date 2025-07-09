class AuthManager {
    constructor() {
        this.currentUser = null;
        this.users = this.loadUsers();
        this.initializeEventListeners();
        this.checkAuthStatus();
        
        // Verificar se está na página de login
        const isLoginPage = window.location.pathname.includes('login.html');
        
        // Se não estiver na página de login e não estiver autenticado, redirecionar
        if (!isLoginPage && !this.isAuthenticated()) {
            this.redirectToLogin();
        }
        
        // Se estiver na página de login e já estiver autenticado, redirecionar para home
        if (isLoginPage && this.isAuthenticated()) {
            this.redirectToHome();
        }
    }

    loadUsers() {
        // Carregar usuários do localStorage ou usar dados padrão
        const savedUsers = localStorage.getItem('chatEducaUsers');
        if (savedUsers) {
            return JSON.parse(savedUsers);
        }
        
        // Usuários padrão para demonstração
        const defaultUsers = [
            {
                id: 1,
                name: "João Silva",
                email: "aluno@demo.com",
                password: "senha123",
                userType: "student",
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                name: "Maria Santos",
                email: "responsavel@demo.com",
                password: "senha123",
                userType: "parent",
                createdAt: new Date().toISOString()
            }
        ];
        
        this.saveUsers(defaultUsers);
        return defaultUsers;
    }

    saveUsers(users) {
        localStorage.setItem('chatEducaUsers', JSON.stringify(users));
    }

    initializeEventListeners() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Register form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        }

        // Switch between login and register
        const registerLink = document.getElementById('registerLink');
        const loginLink = document.getElementById('loginLink');
        
        if (registerLink) {
            registerLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showRegisterForm();
            });
        }

        if (loginLink) {
            loginLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showLoginForm();
            });
        }

        // Logout button (se existir)
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }

        // Enter key support
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const activeForm = document.querySelector('form:not([style*="display: none"])');
                if (activeForm) {
                    activeForm.dispatchEvent(new Event('submit', { cancelable: true }));
                }
            }
        });
    }

    async handleLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            this.showMessage('Por favor, preencha todos os campos.', 'error');
            return;
        }

        this.setLoading(true, 'login');

        // Simular delay de autenticação
        setTimeout(() => {
            const user = this.users.find(u => u.email === email && u.password === password);
            
            if (user) {
                this.currentUser = user;
                localStorage.setItem('chatEducaCurrentUser', JSON.stringify(user));
                this.showMessage('Login realizado com sucesso!', 'success');
                
                // Redirecionar para o index após 1 segundo
                setTimeout(() => {
                    this.redirectToHome();
                }, 1000);
            } else {
                this.showMessage('E-mail ou senha incorretos.', 'error');
            }
            
            this.setLoading(false, 'login');
        }, 1000);
    }

    async handleRegister(e) {
        e.preventDefault();
        
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        const userType = document.getElementById('userType').value;
        
        if (!name || !email || !password || !userType) {
            this.showMessage('Por favor, preencha todos os campos.', 'error');
            return;
        }

        if (password.length < 6) {
            this.showMessage('A senha deve ter pelo menos 6 caracteres.', 'error');
            return;
        }

        this.setLoading(true, 'register');

        // Simular delay de registro
        setTimeout(() => {
            // Verificar se o e-mail já existe
            if (this.users.find(u => u.email === email)) {
                this.showMessage('Este e-mail já está cadastrado.', 'error');
                this.setLoading(false, 'register');
                return;
            }

            // Criar novo usuário
            const newUser = {
                id: this.users.length + 1,
                name,
                email,
                password,
                userType,
                createdAt: new Date().toISOString()
            };

            this.users.push(newUser);
            this.saveUsers(this.users);
            
            this.showMessage('Conta criada com sucesso! Faça login para continuar.', 'success');
            
            // Voltar para o formulário de login após 2 segundos
            setTimeout(() => {
                this.showLoginForm();
                document.getElementById('email').value = email;
            }, 2000);
            
            this.setLoading(false, 'register');
        }, 1000);
    }

    showLoginForm() {
        const loginCard = document.querySelector('.login-card');
        const registerCard = document.getElementById('registerCard');
        
        loginCard.style.display = 'block';
        registerCard.style.display = 'none';
        
        loginCard.classList.add('fade-in');
        this.clearMessages();
    }

    showRegisterForm() {
        const loginCard = document.querySelector('.login-card');
        const registerCard = document.getElementById('registerCard');
        
        loginCard.style.display = 'none';
        registerCard.style.display = 'block';
        
        registerCard.classList.add('fade-in');
        this.clearMessages();
    }

    setLoading(loading, formType) {
        const button = formType === 'login' ? 
            document.querySelector('.btn-login') : 
            document.querySelector('.btn-register');
        
        if (loading) {
            button.classList.add('loading');
            button.disabled = true;
            const icon = button.querySelector('i');
            icon.className = 'fas fa-spinner';
        } else {
            button.classList.remove('loading');
            button.disabled = false;
            const icon = button.querySelector('i');
            icon.className = formType === 'login' ? 'fas fa-sign-in-alt' : 'fas fa-user-plus';
        }
    }

    showMessage(message, type) {
        this.clearMessages();
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        
        const activeForm = document.querySelector('.login-card:not([style*="display: none"]), .register-card:not([style*="display: none"])');
        if (activeForm) {
            const form = activeForm.querySelector('form');
            form.parentNode.insertBefore(messageDiv, form);
        }
    }

    clearMessages() {
        const messages = document.querySelectorAll('.message');
        messages.forEach(msg => msg.remove());
    }

    checkAuthStatus() {
        const savedUser = localStorage.getItem('chatEducaCurrentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
        }
    }

    redirectToLogin() {
        // Determinar o caminho correto para login.html
        const currentPath = window.location.pathname;
        let loginPath;
        
        if (currentPath.includes('/HTML/')) {
            loginPath = 'login.html';
        } else {
            loginPath = 'HTML/login.html';
        }
        
        window.location.href = loginPath;
    }

    redirectToHome() {
        // Determinar o caminho correto para index.html
        const currentPath = window.location.pathname;
        let homePath;
        
        if (currentPath.includes('/HTML/')) {
            homePath = '../index.html';
        } else {
            homePath = 'index.html';
        }
        
        window.location.href = homePath;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('chatEducaCurrentUser');
        this.redirectToLogin();
    }

    getCurrentUser() {
        return this.currentUser;
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }

    getUserDisplayName() {
        return this.currentUser ? this.currentUser.name : 'Usuário';
    }

    getUserType() {
        return this.currentUser ? this.currentUser.userType : null;
    }
}

// Inicializar o gerenciador de autenticação quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    window.authManager = new AuthManager();
});