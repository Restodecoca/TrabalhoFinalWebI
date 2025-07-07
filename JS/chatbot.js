// ChatBot JavaScript for ChatEduca
// Only execute on chat pages
if (typeof window !== 'undefined' && window.location && 
    (window.location.pathname.includes('chat') || document.getElementById('chatMessages'))) {
    
class ChatBot {
    constructor() {
        this.userType = 'student';
        this.conversationHistory = [];
        this.isTyping = false;
        this.currentMessageId = 0;
        
        this.initializeElements();
        this.initializeEventListeners();
        this.loadUserType();
        this.loadConversationHistory();
        
        console.log('ChatBot initialized');
    }
    
    initializeElements() {
        this.chatMessages = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendMessage');
        this.clearButton = document.getElementById('clearChat');
        this.quickButtons = document.querySelectorAll('.quick-btn');
        this.userTypeSelect = document.getElementById('userType');
        this.loadingOverlay = document.getElementById('loadingOverlay');
        
        // Verify required elements exist
        if (!this.chatMessages || !this.messageInput || !this.sendButton) {
            throw new Error('ChatBot required elements not found');
        }
    }
    
    initializeEventListeners() {
        // Send message button
        this.sendButton.addEventListener('click', () => this.sendMessage());
        
        // Enter key in input
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        // Clear chat button
        this.clearButton.addEventListener('click', () => this.clearChat());
        
        // Quick question buttons
        this.quickButtons.forEach(button => {
            button.addEventListener('click', () => {
                const question = button.getAttribute('data-question');
                this.sendQuickMessage(question);
            });
        });
        
        // Input focus handling
        this.messageInput.addEventListener('focus', () => {
            this.scrollToBottom();
        });
        
        // Auto-resize input
        this.messageInput.addEventListener('input', () => {
            this.updateSendButtonState();
        });
        
        // User type change
        if (this.userTypeSelect) {
            this.userTypeSelect.addEventListener('change', () => {
                this.setUserType(this.userTypeSelect.value);
            });
        }
    }
    
    loadUserType() {
        const savedUserType = localStorage.getItem('chatEducaUserType');
        if (savedUserType) {
            this.userType = savedUserType;
            if (this.userTypeSelect) {
                this.userTypeSelect.value = savedUserType;
            }
        }
    }
    
    setUserType(type) {
        this.userType = type;
        localStorage.setItem('chatEducaUserType', type);
        console.log(`User type set to: ${type}`);
    }
    
    loadConversationHistory() {
        const savedHistory = localStorage.getItem('chatEducaHistory');
        if (savedHistory) {
            try {
                this.conversationHistory = JSON.parse(savedHistory);
                this.displayConversationHistory();
            } catch (e) {
                console.error('Error loading conversation history:', e);
            }
        }
    }
    
    saveConversationHistory() {
        localStorage.setItem('chatEducaHistory', JSON.stringify(this.conversationHistory));
    }
    
    displayConversationHistory() {
        // Clear existing messages except the initial one
        const messages = this.chatMessages.querySelectorAll('.message:not(.initial-message)');
        messages.forEach(msg => msg.remove());
        
        // Display saved messages
        this.conversationHistory.forEach(message => {
            this.displayMessage(message.text, message.isUser, message.timestamp, false);
        });
        
        this.scrollToBottom();
    }
    
    sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message || this.isTyping) return;
        
        this.displayMessage(message, true);
        this.messageInput.value = '';
        this.updateSendButtonState();
        
        // Add to conversation history
        this.conversationHistory.push({
            text: message,
            isUser: true,
            timestamp: new Date().toISOString()
        });
        
        this.processMessage(message);
    }
    
    sendQuickMessage(question) {
        if (this.isTyping) return;
        
        this.displayMessage(question, true);
        
        // Add to conversation history
        this.conversationHistory.push({
            text: question,
            isUser: true,
            timestamp: new Date().toISOString()
        });
        
        this.processMessage(question);
    }
    
    processMessage(message) {
        this.showTypingIndicator();
        
        // Simulate processing time
        const processingTime = Math.random() * 2000 + 1000; // 1-3 seconds
        
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.hideTypingIndicator();
            this.displayMessage(response.text, false);
            
            // Add materials if available
            if (response.materials && response.materials.length > 0) {
                this.displayMaterials(response.materials);
            }
            
            // Add to conversation history
            this.conversationHistory.push({
                text: response.text,
                isUser: false,
                timestamp: new Date().toISOString()
            });
            
            this.saveConversationHistory();
        }, processingTime);
    }
    
    generateResponse(message) {
        const lowercaseMessage = message.toLowerCase();
        
        // Use knowledge base to find appropriate response
        const response = window.knowledgeBase.findResponse(lowercaseMessage, this.userType);
        
        if (response) {
            return response;
        }
        
        // Default response if no match found
        return {
            text: this.getDefaultResponse(),
            materials: []
        };
    }
    
    getDefaultResponse() {
        const defaultResponses = {
            student: [
                "Não encontrei uma resposta específica para sua pergunta. Pode ser mais específico sobre qual matéria ou tema você gostaria de saber?",
                "Hmm, não tenho certeza sobre essa questão. Pode reformular sua pergunta ou me dizer se é sobre Matemática, Português ou Ciências?",
                "Desculpe, não consegui entender sua pergunta. Pode tentar ser mais específico? Estou aqui para ajudar com dúvidas escolares!"
            ],
            parent: [
                "Não encontrei informações específicas sobre sua pergunta. Pode me dizer mais sobre como posso ajudar você a apoiar o aprendizado do seu filho?",
                "Desculpe, não tenho uma orientação específica para essa situação. Pode reformular sua pergunta ou me dizer sobre qual matéria escolar você precisa de ajuda?",
                "Não consegui entender completamente sua pergunta. Pode ser mais específico sobre como posso ajudar você a acompanhar os estudos do seu filho?"
            ]
        };
        
        const responses = defaultResponses[this.userType] || defaultResponses.student;
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    displayMessage(text, isUser, timestamp = null, animate = true) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        messageElement.id = `message-${this.currentMessageId++}`;
        
        const currentTime = timestamp ? new Date(timestamp) : new Date();
        const timeString = currentTime.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        messageElement.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${isUser ? 'user' : 'robot'}"></i>
            </div>
            <div class="message-content">
                <p>${this.formatMessage(text)}</p>
            </div>
            <div class="message-time">
                <span>${timeString}</span>
            </div>
        `;
        
        this.chatMessages.appendChild(messageElement);
        
        if (animate) {
            messageElement.style.opacity = '0';
            messageElement.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                messageElement.style.transition = 'all 0.3s ease-out';
                messageElement.style.opacity = '1';
                messageElement.style.transform = 'translateY(0)';
            }, 100);
        }
        
        this.scrollToBottom();
    }
    
    formatMessage(text) {
        // Format the message text with basic HTML
        let formattedText = text;
        
        // Bold text
        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Italic text
        formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Line breaks
        formattedText = formattedText.replace(/\n/g, '<br>');
        
        // Highlight subjects
        formattedText = formattedText.replace(/(Matemática|Português|Ciências)/g, '<strong style="color: var(--secondary-color);">$1</strong>');
        
        return formattedText;
    }
    
    displayMaterials(materials) {
        const materialsElement = document.createElement('div');
        materialsElement.className = 'message bot-message';
        materialsElement.id = `materials-${this.currentMessageId++}`;
        
        let materialsHTML = '<div class="material-links"><h4>📚 Materiais Complementares:</h4>';
        
        materials.forEach(material => {
            materialsHTML += `
                <a href="${material.url}" target="_blank" rel="noopener noreferrer" class="material-link">
                    <i class="fas fa-${material.icon}"></i>
                    ${material.title}
                </a>
            `;
        });
        
        materialsHTML += '</div>';
        
        materialsElement.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                ${materialsHTML}
            </div>
            <div class="message-time">
                <span>${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
        `;
        
        this.chatMessages.appendChild(materialsElement);
        this.scrollToBottom();
    }
    
    showTypingIndicator() {
        this.isTyping = true;
        this.sendButton.disabled = true;
        this.updateSendButtonState();
        
        const typingElement = document.createElement('div');
        typingElement.className = 'message bot-message typing-indicator';
        typingElement.id = 'typing-indicator';
        
        typingElement.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span>ChatEduca está digitando</span>
                    <div class="typing-dots">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            </div>
        `;
        
        this.chatMessages.appendChild(typingElement);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        this.isTyping = false;
        this.sendButton.disabled = false;
        this.updateSendButtonState();
        
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    updateSendButtonState() {
        const hasText = this.messageInput.value.trim().length > 0;
        this.sendButton.disabled = !hasText || this.isTyping;
        this.sendButton.style.opacity = this.sendButton.disabled ? '0.5' : '1';
    }
    
    scrollToBottom() {
        setTimeout(() => {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }, 100);
    }
    
    clearChat() {
        // Show confirmation dialog
        if (confirm('Tem certeza que deseja limpar toda a conversa?')) {
            // Remove all messages except the initial one
            const messages = this.chatMessages.querySelectorAll('.message:not(.initial-message)');
            messages.forEach(msg => msg.remove());
            
            // Clear conversation history
            this.conversationHistory = [];
            this.saveConversationHistory();
            
            // Show success message
            if (window.chatEducaMain) {
                window.chatEducaMain.showNotification('Conversa limpa com sucesso!', 'success');
            }
            
            // Reset message counter
            this.currentMessageId = 0;
        }
    }
    
    updateWelcomeMessage(message) {
        const initialMessage = this.chatMessages.querySelector('.bot-message .message-content p');
        if (initialMessage) {
            initialMessage.textContent = message;
        }
    }
    
    updateHeight() {
        // Update chat height for mobile devices
        if (window.chatEducaMain && window.chatEducaMain.isMobile()) {
            const viewportHeight = window.innerHeight;
            const headerHeight = document.querySelector('.header').offsetHeight;
            const maxHeight = viewportHeight - headerHeight - 200;
            
            this.chatMessages.style.maxHeight = `${maxHeight}px`;
        }
    }
    
    // Public methods for external use
    addMessage(text, isUser = false) {
        this.displayMessage(text, isUser);
        
        this.conversationHistory.push({
            text: text,
            isUser: isUser,
            timestamp: new Date().toISOString()
        });
        
        this.saveConversationHistory();
    }
    
    getConversationHistory() {
        return this.conversationHistory;
    }
    
    exportConversation() {
        const conversation = this.conversationHistory.map(msg => ({
            sender: msg.isUser ? 'Usuário' : 'ChatEduca',
            message: msg.text,
            time: new Date(msg.timestamp).toLocaleString('pt-BR')
        }));
        
        const blob = new Blob([JSON.stringify(conversation, null, 2)], {
            type: 'application/json'
        });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chatEduca-conversa-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
    }
}

// Initialize ChatBot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if we're on the chat page (check for required elements)
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    
    if (!chatMessages || !messageInput) {
        console.log('ChatBot elements not found - not on chat page');
        return;
    }
    
    // Wait for knowledge base to load
    if (window.knowledgeBase) {
        window.chatbot = new ChatBot();
    } else {
        // Wait for knowledge base to load
        const checkKnowledgeBase = setInterval(() => {
            if (window.knowledgeBase) {
                window.chatbot = new ChatBot();
                clearInterval(checkKnowledgeBase);
            }
        }, 100);
    }
});

// Error handling for chatbot
window.addEventListener('error', function(e) {
    // Only show chatbot errors if we're on the chat page
    if (document.getElementById('chatMessages')) {
        console.error('ChatBot error:', e);
        
        if (window.chatEducaMain) {
            window.chatEducaMain.showNotification(
                'Ocorreu um erro no chatbot. Tente recarregar a página.',
                'error'
            );
        }
    }
});

// Handle offline/online status
window.addEventListener('online', function() {
    if (window.chatEducaMain) {
        window.chatEducaMain.showNotification('Conexão restaurada!', 'success');
    }
});

window.addEventListener('offline', function() {
    if (window.chatEducaMain) {
        window.chatEducaMain.showNotification(
            'Você está offline. Algumas funcionalidades podem não funcionar.',
            'warning'
        );
    }
});

// Export ChatBot class for external use
window.ChatBot = ChatBot;

// Mobile-specific optimizations for ChatBot
if (window.chatEducaMain && window.chatEducaMain.isMobile()) {
    // Add touch-friendly improvements
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    
    // Improve scrolling on mobile
    if (chatMessages) {
        chatMessages.style.webkitOverflowScrolling = 'touch';
        chatMessages.style.overflowScrolling = 'touch';
    }
    
    // Handle virtual keyboard
    if (messageInput) {
        messageInput.addEventListener('focus', function() {
            setTimeout(() => {
                this.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        });
    }
    
    // Add swipe to close mobile menu
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchmove', function(e) {
        if (!startX || !startY) return;
        
        const xDiff = startX - e.touches[0].clientX;
        const yDiff = startY - e.touches[0].clientY;
        
        const nav = document.querySelector('.nav');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        
        if (nav && nav.classList.contains('mobile-nav-open')) {
            if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff > 50) {
                // Swipe left to close menu
                nav.classList.remove('mobile-nav-open');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
        
        startX = null;
        startY = null;
    });
}

} // End of chat page check
