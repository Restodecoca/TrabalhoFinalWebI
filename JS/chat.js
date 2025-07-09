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
        if (!localStorage.getItem('chatEducaUserType')) {
            localStorage.setItem('chatEducaUserType', 'student');
        }
    }

    setupEventListeners() {
        this.chatInput.addEventListener('keypress', e => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        this.chatInput.addEventListener('input', () => {
            this.sendButton.disabled = this.chatInput.value.trim() === '';
        });
        this.chatMessages.addEventListener('click', () => this.chatInput.focus());
    }

    sendQuickMessage(text) {
        if (!text.trim()) return;
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

    sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;
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
        const div = document.createElement('div');
        div.className = `message ${sender}-message`;
        const hora = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        const html = sender === 'bot' ? this.markdownToHtml(text) : text;
        div.innerHTML = `<div>${html}</div><div class="message-time">${hora}</div>`;
        this.chatMessages.insertBefore(div, this.typingIndicator);
        this.scrollToBottom();
    }

    markdownToHtml(t) {
        return t
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>')
            .replace(/^- (.*$)/gm, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
            .replace(/<\/ul>\s*<ul>/g, '')
            .replace(/^## (.*$)/gm, '<h3>$1</h3>')
            .replace(/`([^`]+)`/g, '<code>$1</code>');
    }

    addBotResponse(msg) {
        const tipo = localStorage.getItem('chatEducaUserType') || 'student';
        const r = window.knowledgeBase?.findResponse(msg, tipo);
        const texto = r ? r.text : this.getEducationalResponse(msg);
        this.addMessage(texto, 'bot');
        if (r?.materials?.length) this.addMaterials(r.materials);
    }

    getEducationalResponse(m) {
        const t = m.toLowerCase();
        if (/(fra[çc]ã|fra[çc]õe)s/.test(t))
            return "🔢 Frações representam partes de um todo. Ex.: 1/2 é metade de algo. Quer mais exemplos?";
        if (t.includes('porcentagem') || t.includes('%'))
            return "📊 Porcentagem expressa partes de 100. Ex.: 50% = metade. Quer aprender a calcular?";
        if (t.includes('decimal') || t.includes('decimais'))
            return "🔢 Números decimais usam vírgula para separar parte inteira e decimal. Ex.: 2,5.";
        if (t.includes('sujeito') && t.includes('predicado'))
            return "📝 Sujeito pratica a ação; predicado a descreve. Ex.: 'O menino correu'.";
        if (t.includes('sujeito'))
            return "📝 Sujeito é de quem ou do que se fala. Ex.: 'Maria estuda'.";
        if (t.includes('predicado'))
            return "📝 Predicado é o que se diz do sujeito. Ex.: 'Maria estuda muito'.";
        if (t.includes('célula'))
            return "🔬 Células são as menores unidades da vida, com núcleo, citoplasma e membrana.";
        if (t.includes('fotossíntese'))
            return "🌱 Fotossíntese: plantas convertem luz, água e CO₂ em glicose e oxigênio.";
        if (t.includes('ciclo da água'))
            return "💧 Evaporação, condensação e precipitação formam o ciclo da água.";
        if (/(matem[áa]tica|conta|número)/.test(t))
            return this.getRandomResponse(this.subjectResponses.matematica);
        if (/(portugu[eê]s|gram[áa]tica|texto|verbo)/.test(t))
            return this.getRandomResponse(this.subjectResponses.portugues);
        if (/(ci[eê]ncias|biologia|f[íi]sica|qu[íi]mica)/.test(t))
            return this.getRandomResponse(this.subjectResponses.ciencias);
        if (/(como resolver|como fazer)/.test(t))
            return "📚 Vamos passo a passo. Conte o que já sabe e aplicaremos a técnica correta.";
        if (/(o que é|o que são)/.test(t))
            return "💡 Vou explicar de forma clara e com exemplos práticos.";
        if (/(ajuda|socorro|não entendo)/.test(t))
            return "😊 Calma! Explique a parte difícil e trabalharemos juntos.";
        if (/(obrigad[oa]|valeu)/.test(t))
            return "😊 De nada! Sempre que precisar, estou aqui.";
        if (/(oi|olá|bom dia|boa tarde|boa noite)/.test(t))
            return "👋 Olá! Em que matéria posso ajudar hoje?";
        return this.getRandomResponse(this.educationalResponses);
    }

    getRandomResponse(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
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
        return Math.random() * 2000 + 1000;
    }

    goBack() {
        if (confirm('Tem certeza que deseja sair do chat?')) {
            window.history.length > 1 ? window.history.back() : window.location.href = '../index.html';
        }
    }

    addWelcomeExamples() {
        const ex = [
            "Experimente perguntar: 'Como resolver equações do primeiro grau?'",
            "Ou: 'O que é sujeito e predicado?'",
            "Também posso ajudar com: 'O que são células?'"
        ];
        setTimeout(() => {
            this.addMessage("💡 Algumas sugestões para começar:", 'bot');
            ex.forEach((e, i) => setTimeout(() => this.addMessage(e, 'bot'), (i + 1) * 1000));
        }, 2000);
    }

    addMaterials(materials) {
        const wrap = document.createElement('div');
        wrap.className = 'message bot-message materials-message';
        const time = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        const content = document.createElement('div');
        content.className = 'materials-content';
        const h = document.createElement('h4');
        h.textContent = '📚 Materiais Complementares:';
        content.appendChild(h);
        const list = document.createElement('div');
        list.className = 'materials-list';
        materials.forEach(m => {
            const item = document.createElement('div');
            item.className = 'material-item';
            item.style.cursor = 'pointer';
            item.addEventListener('click', e => {
                if (e.target.tagName !== 'A' && !e.target.closest('a')) window.open(m.url, '_blank');
            });
            const icon = document.createElement('i');
            icon.className = `fas fa-${this.getMaterialIcon(m.icon)}`;
            item.appendChild(icon);
            const span = document.createElement('span');
            span.className = 'material-title';
            span.textContent = m.title;
            item.appendChild(span);
            const link = document.createElement('a');
            link.href = m.url;
            link.target = '_blank';
            link.className = 'material-link';
            link.title = `Abrir: ${m.title}`;
            const ic = document.createElement('i');
            ic.className = 'fas fa-external-link-alt';
            link.appendChild(ic);
            item.appendChild(link);
            list.appendChild(item);
        });
        content.appendChild(list);
        wrap.appendChild(content);
        const t = document.createElement('div');
        t.className = 'message-time';
        t.textContent = time;
        wrap.appendChild(t);
        this.chatMessages.insertBefore(wrap, this.typingIndicator);
        this.scrollToBottom();
    }

    getMaterialIcon(n) {
        return ({
            play: 'play-circle',
            'pencil-alt': 'pencil-alt',
            book: 'book',
            users: 'users',
            gamepad: 'gamepad',
            calculator: 'calculator',
            ruler: 'ruler',
            shapes: 'shapes',
            'book-open': 'book-open',
            'question-circle': 'question-circle',
            home: 'home',
            'spell-check': 'spell-check',
            'book-reader': 'book-reader',
            glasses: 'glasses',
            list: 'list',
            flask: 'flask',
            microscope: 'microscope',
            globe: 'globe',
            telescope: 'telescope',
            rocket: 'rocket',
            tint: 'tint',
            leaf: 'leaf',
            utensils: 'utensils'
        })[n] || 'file';
    }
}

let chatApp;
function sendQuickMessage(t) {
    chatApp?.sendQuickMessage(t);
}
function sendMessage() {
    chatApp?.sendMessage();
}
function goBack() {
    chatApp?.goBack();
}
document.addEventListener('DOMContentLoaded', () => {
    chatApp = new ChatApp();
});
document.addEventListener('touchstart', e => {
    if (e.touches.length > 1) e.preventDefault();
});
document.addEventListener('touchstart', e => {
    if (e.target.classList.contains('quick-btn') || e.target.classList.contains('send-button')) {
        e.target.style.transform = 'scale(0.95)';
    }
});
document.addEventListener('touchend', e => {
    if (e.target.classList.contains('quick-btn') || e.target.classList.contains('send-button')) {
        setTimeout(() => {
            e.target.style.transform = '';
        }, 100);
    }
});
