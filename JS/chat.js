// Chat JavaScript for ChatEduca
class ChatApp {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.sendButton = document.getElementById('sendButton');
        this.typingIndicator = document.getElementById('typingIndicator');
        
        this.educationalResponses = [
            "Excelente pergunta! Vou explicar isso de forma clara e simples para você.",
            "Essa é uma dúvida muito comum! Deixe-me te ajudar com uma explicação detalhada.",
            "Ótima questão educacional! Vou te dar uma resposta completa e alguns exemplos.",
            "Que pergunta interessante! Vou explicar passo a passo para facilitar seu entendimento.",
            "Essa matéria é muito importante! Vou te ajudar a compreender melhor esse conceito."
        ];

        this.subjectResponses = {
            matematica: [
                "Em matemática, a chave é sempre praticar! Vamos resolver isso juntos passo a passo.",
                "Matemática pode parecer difícil, mas com a técnica certa fica mais fácil!",
                "Ótima pergunta de matemática! Vou explicar usando exemplos práticos."
            ],
            portugues: [
                "O português é uma língua rica! Vou explicar essa regra de forma clara.",
                "Essa é uma dúvida comum em português. Vou te dar exemplos para facilitar.",
                "Português pode ser desafiador, mas vamos descomplicar isso juntos!"
            ],
            ciencias: [
                "Ciências é fascinante! Vou explicar esse conceito de forma interessante.",
                "Que pergunta científica legal! Vou usar exemplos do dia a dia para explicar.",
                "A ciência está em tudo ao nosso redor! Vou te mostrar como isso funciona."
            ]
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.chatInput.focus();
        this.scrollToBottom();
        this.setDefaultUserType();
    }

    setDefaultUserType() {
        // Define o tipo de usuário padrão se não estiver definido
        if (!localStorage.getItem('chatEducaUserType')) {
            localStorage.setItem('chatEducaUserType', 'student');
        }
    }

    setupEventListeners() {
        // Enter para enviar mensagem
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Controlar estado do botão
        this.chatInput.addEventListener('input', () => {
            this.sendButton.disabled = this.chatInput.value.trim() === '';
        });

        // Foco no input ao clicar na área de mensagens
        this.chatMessages.addEventListener('click', () => {
            this.chatInput.focus();
        });
    }

    sendQuickMessage(text) {
        if (text.trim() !== '') {
            this.addMessage(text, 'user');
            this.chatInput.value = '';
            this.sendButton.disabled = true;
            this.chatInput.disabled = true;
            
            this.showTypingIndicator();
            
            setTimeout(() => {
                this.hideTypingIndicator();
                this.addBotResponse(text);
                this.chatInput.disabled = false;
                this.chatInput.focus();
            }, this.getRandomDelay());
        }
    }

    sendMessage() {
        const message = this.chatInput.value.trim();
        
        if (message === '') return;

        this.addMessage(message, 'user');
        
        this.chatInput.value = '';
        this.sendButton.disabled = true;
        this.chatInput.disabled = true;

        this.showTypingIndicator();

        setTimeout(() => {
            this.hideTypingIndicator();
            this.addBotResponse(message);
            this.chatInput.disabled = false;
            this.chatInput.focus();
        }, this.getRandomDelay());
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        // Converter Markdown para HTML se for mensagem do bot
        const formattedText = sender === 'bot' ? this.markdownToHtml(text) : text;
        
        messageDiv.innerHTML = `
            <div>${formattedText}</div>
            <div class="message-time">${timeString}</div>
        `;
        
        this.chatMessages.insertBefore(messageDiv, this.typingIndicator);
        this.scrollToBottom();
    }

    markdownToHtml(text) {
        return text
            // Negrito **texto**
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Itálico *texto*
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Quebras de linha
            .replace(/\n/g, '<br>')
            // Listas com -
            .replace(/^- (.*$)/gm, '<li>$1</li>')
            // Envolver listas em <ul>
            .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
            // Corrigir múltiplas <ul> consecutivas
            .replace(/<\/ul>\s*<ul>/g, '')
            // Títulos com ##
            .replace(/^## (.*$)/gm, '<h3>$1</h3>')
            // Código inline `código`
            .replace(/`([^`]+)`/g, '<code>$1</code>');
    }

    addBotResponse(userMessage) {
        // Verificar se a knowledge-base está disponível
        if (window.knowledgeBase) {
            const userType = localStorage.getItem('chatEducaUserType') || 'student';
            const response = window.knowledgeBase.findResponse(userMessage, userType);
            
            if (response) {
                this.addMessage(response.text, 'bot');
                
                // Adicionar materiais se existirem
                if (response.materials && response.materials.length > 0) {
                    this.addMaterials(response.materials);
                }
            } else {
                // Resposta padrão se não encontrar na knowledge-base
                const fallbackResponse = this.getEducationalResponse(userMessage);
                this.addMessage(fallbackResponse, 'bot');
            }
        } else {
            // Fallback se knowledge-base não estiver disponível
            const response = this.getEducationalResponse(userMessage);
            this.addMessage(response, 'bot');
        }
    }

    getEducationalResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Respostas específicas para conceitos do Fundamental II
        if (lowerMessage.includes('fração') || lowerMessage.includes('frações')) {
            return "� Frações representam partes de um todo! Por exemplo: 1/2 significa 1 parte de algo dividido em 2 partes iguais. É como metade de uma pizza! Quer que eu explique as operações com frações?";
        }
        
        if (lowerMessage.includes('porcentagem') || lowerMessage.includes('%')) {
            return "📊 Porcentagem é uma forma de expressar quantos de cada 100! Por exemplo: 50% = 50 de cada 100 = metade. É muito usado em descontos e notas. Quer aprender a calcular?";
        }
        
        if (lowerMessage.includes('decimal') || lowerMessage.includes('decimais')) {
            return "🔢 Números decimais usam vírgula para separar a parte inteira da parte decimal. Por exemplo: 2,5 = 2 inteiros e 5 décimos. É como 2 + 1/2!";
        }
        
        if (lowerMessage.includes('fração') || lowerMessage.includes('frações')) {
            return "🔢 Frações representam partes de um todo! Por exemplo, 1/2 significa uma parte de duas partes iguais. Para somar frações, você precisa do mesmo denominador. Ex: 1/4 + 1/4 = 2/4 = 1/2. Precisa de mais exemplos?";
        }
        
        // Respostas específicas para português
        if (lowerMessage.includes('sujeito') && lowerMessage.includes('predicado')) {
            return "📝 O sujeito é quem pratica a ação na frase. Por exemplo: 'O menino correu'. Quem correu? O menino (sujeito). O predicado é 'correu' (o que o sujeito fez). Quer praticar com mais frases?";
        }
        
        if (lowerMessage.includes('sujeito')) {
            return "📝 O sujeito é de quem ou do que se fala na frase. Por exemplo: 'Maria estuda'. Quem estuda? Maria é o sujeito. Posso dar mais exemplos?";
        }
        
        if (lowerMessage.includes('predicado')) {
            return "📝 O predicado é o que se diz sobre o sujeito. Na frase 'Maria estuda muito', o predicado é 'estuda muito'. Ele nos conta o que Maria faz. Posso dar mais exemplos?";
        }
        
        // Respostas específicas para ciências
        if (lowerMessage.includes('célula') || lowerMessage.includes('células')) {
            return "🔬 As células são as menores unidades da vida! Todo ser vivo é formado por células. Existem células animais e vegetais. As células têm núcleo, citoplasma e membrana. Quer saber mais sobre as partes da célula?";
        }
        
        if (lowerMessage.includes('fotossíntese')) {
            return "🌱 A fotossíntese é o processo que as plantas usam para fazer seu próprio alimento! Elas capturam luz solar, água e CO2 do ar para produzir glicose (açúcar) e oxigênio. Por isso as plantas são verdes e produzem o oxigênio que respiramos!";
        }
        
        if (lowerMessage.includes('ciclo da água')) {
            return "💧 O ciclo da água tem três etapas principais: evaporação (água vira vapor), condensação (vapor vira nuvem) e precipitação (chuva). É assim que a água se renova na natureza! Quer saber mais detalhes?";
        }
        
        // Detectar matéria pela mensagem
        if (lowerMessage.includes('matemática') || lowerMessage.includes('matematica') || 
            lowerMessage.includes('conta') || lowerMessage.includes('número')) {
            return this.getRandomResponse(this.subjectResponses.matematica);
        }
        
        if (lowerMessage.includes('português') || lowerMessage.includes('portugues') || 
            lowerMessage.includes('gramática') || lowerMessage.includes('texto') || 
            lowerMessage.includes('verbo')) {
            return this.getRandomResponse(this.subjectResponses.portugues);
        }
        
        if (lowerMessage.includes('ciências') || lowerMessage.includes('ciencias') || 
            lowerMessage.includes('biologia') || lowerMessage.includes('física') || 
            lowerMessage.includes('química')) {
            return this.getRandomResponse(this.subjectResponses.ciencias);
        }

        // Respostas específicas para perguntas comuns
        if (lowerMessage.includes('como resolver') || lowerMessage.includes('como fazer')) {
            return "Vou te ensinar o passo a passo! 📚 Primeiro, vamos identificar o que sabemos, depois aplicar a técnica adequada. Você pode me dar mais detalhes sobre o exercício?";
        }

        if (lowerMessage.includes('o que é') || lowerMessage.includes('o que são')) {
            return "Ótima pergunta conceitual! 💡 Vou explicar de forma clara e simples, com exemplos práticos para você entender melhor.";
        }

        if (lowerMessage.includes('ajuda') || lowerMessage.includes('socorro') || lowerMessage.includes('não entendo')) {
            return "Calma, estou aqui para te ajudar! 😊 Vamos resolver isso juntos. Pode me explicar qual parte está mais difícil para você?";
        }

        if (lowerMessage.includes('obrigado') || lowerMessage.includes('obrigada') || lowerMessage.includes('valeu')) {
            return "De nada! 😊 Fico feliz em ajudar você a aprender. Se tiver mais dúvidas, estou sempre aqui!";
        }

        if (lowerMessage.includes('oi') || lowerMessage.includes('olá') || lowerMessage.includes('bom dia') || 
            lowerMessage.includes('boa tarde') || lowerMessage.includes('boa noite')) {
            return "Olá! 👋 Que bom te ver aqui! Estou pronto para ajudar você com suas dúvidas educacionais. Em que matéria posso te auxiliar hoje?";
        }

        // Resposta padrão educacional
        return this.getRandomResponse(this.educationalResponses);
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    showTypingIndicator() {
        this.typingIndicator.style.display = 'block';
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.typingIndicator.style.display = 'none';
    }

    scrollToBottom() {
        setTimeout(() => {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }, 100);
    }

    getRandomDelay() {
        return Math.random() * 2000 + 1000; // Entre 1 e 3 segundos
    }

    goBack() {
        if (confirm('Tem certeza que deseja sair do chat?')) {
            // Try to go back in history, fallback to home page
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = '../index.html';
            }
        }
    }

    addWelcomeExamples() {
        const examples = [
            "Experimente perguntar: 'Como resolver equações do primeiro grau?'",
            "Ou: 'O que é sujeito e predicado?'",
            "Também posso ajudar com: 'O que são células?'"
        ];
        
        setTimeout(() => {
            this.addMessage("💡 Algumas sugestões para começar:", 'bot');
            examples.forEach((example, index) => {
                setTimeout(() => {
                    this.addMessage(example, 'bot');
                }, (index + 1) * 1000);
            });
        }, 2000);
    }

    addMaterials(materials) {
        const materialsDiv = document.createElement('div');
        materialsDiv.className = 'message bot-message materials-message';
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        // Criar container de conteúdo
        const materialsContent = document.createElement('div');
        materialsContent.className = 'materials-content';
        
        // Criar título
        const title = document.createElement('h4');
        title.textContent = '📚 Materiais Complementares:';
        materialsContent.appendChild(title);
        
        // Criar lista de materiais
        const materialsList = document.createElement('div');
        materialsList.className = 'materials-list';
        
        materials.forEach(material => {
            const materialItem = document.createElement('div');
            materialItem.className = 'material-item';
            materialItem.style.cursor = 'pointer';
            
            // Adicionar evento de clique no item todo
            materialItem.addEventListener('click', (e) => {
                // Prevenir propagação se clicou no link direto
                if (e.target.tagName === 'A' || e.target.closest('a')) {
                    return;
                }
                window.open(material.url, '_blank');
            });
            
            // Ícone do material
            const icon = document.createElement('i');
            icon.className = `fas fa-${this.getMaterialIcon(material.icon)}`;
            materialItem.appendChild(icon);
            
            // Título do material
            const titleSpan = document.createElement('span');
            titleSpan.className = 'material-title';
            titleSpan.textContent = material.title;
            materialItem.appendChild(titleSpan);
            
            // Link do material
            const link = document.createElement('a');
            link.href = material.url;
            link.target = '_blank';
            link.className = 'material-link';
            link.title = `Abrir: ${material.title}`;
            
            const linkIcon = document.createElement('i');
            linkIcon.className = 'fas fa-external-link-alt';
            link.appendChild(linkIcon);
            
            materialItem.appendChild(link);
            materialsList.appendChild(materialItem);
        });
        
        materialsContent.appendChild(materialsList);
        materialsDiv.appendChild(materialsContent);
        
        // Adicionar timestamp
        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = timeString;
        materialsDiv.appendChild(timeDiv);
        
        this.chatMessages.insertBefore(materialsDiv, this.typingIndicator);
        this.scrollToBottom();
    }

    getMaterialIcon(iconName) {
        const iconMap = {
            'play': 'play-circle',
            'pencil-alt': 'pencil-alt',
            'book': 'book',
            'users': 'users',
            'gamepad': 'gamepad',
            'calculator': 'calculator',
            'ruler': 'ruler',
            'shapes': 'shapes',
            'book-open': 'book-open',
            'question-circle': 'question-circle',
            'home': 'home',
            'spell-check': 'spell-check',
            'book-reader': 'book-reader',
            'glasses': 'glasses',
            'list': 'list',
            'flask': 'flask',
            'microscope': 'microscope',
            'globe': 'globe',
            'telescope': 'telescope',
            'rocket': 'rocket',
            'tint': 'tint',
            'leaf': 'leaf',
            'utensils': 'utensils'
        };
        
        return iconMap[iconName] || 'file';
    }
}

// Instância global do chat
let chatApp;

// Funções globais para os botões
function sendQuickMessage(text) {
    if (chatApp) {
        chatApp.sendQuickMessage(text);
    }
}

function sendMessage() {
    if (chatApp) {
        chatApp.sendMessage();
    }
}

function goBack() {
    if (chatApp) {
        chatApp.goBack();
    }
}

// Inicializar quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    chatApp = new ChatApp();
});

// Prevenir zoom no iOS
document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
});

// Feedback visual ao tocar (mobile)
document.addEventListener('touchstart', function(e) {
    if (e.target.classList.contains('quick-btn') || e.target.classList.contains('send-button')) {
        e.target.style.transform = 'scale(0.95)';
    }
});

document.addEventListener('touchend', function(e) {
    if (e.target.classList.contains('quick-btn') || e.target.classList.contains('send-button')) {
        setTimeout(() => {
            e.target.style.transform = '';
        }, 100);
    }
});
