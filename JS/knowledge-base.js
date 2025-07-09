class KnowledgeBase {
    constructor() {
        this.responses = {
            matematica: {
                fracoes: {
                    keywords: ['fração', 'frações', 'numerador', 'denominador', 'dividir', 'parte', 'inteiro', 'decimal'],
                    text: "**Frações** representam partes de um todo!\n\n**Estrutura:**\n- **Numerador** (número de cima): quantas partes temos\n- **Denominador** (número de baixo): em quantas partes o todo foi dividido\n\n**Exemplo:** 3/4 significa que temos 3 partes de um todo que foi dividido em 4 partes.\n\n**Operações básicas:**\n- **Soma/Subtração:** Use denominadores iguais\n- **Multiplicação:** Multiplique numerador por numerador e denominador por denominador\n- **Divisão:** Multiplique pela fração invertida\n\n**Frações e decimais:** 1/2 = 0,5 | 1/4 = 0,25 | 3/4 = 0,75\n\n**Dica:** Sempre simplifique o resultado dividindo numerador e denominador pelo mesmo número!",
                    materials: [
                        { title: "Vídeo: Frações e Decimais", url: "https://www.youtube.com/watch?v=def456", icon: "play" },
                        { title: "Atividades com Frações", url: "https://www.example.com/jogos-fracao", icon: "question-circle" }
                    ]
                },
                porcentagem: {
                    keywords: ['porcentagem', 'percentual', '%', 'desconto', 'aumento', 'proporção'],
                    text: "**Porcentagem** é uma forma de expressar uma parte de 100!\n\n**Conceito básico:**\n- **%** significa 'por cento' ou 'de cada 100'\n- **50%** = 50 de cada 100 = 1/2 = 0,5\n\n**Principais porcentagens:**\n- **25%** = 1/4 = 0,25\n- **50%** = 1/2 = 0,5\n- **75%** = 3/4 = 0,75\n- **100%** = 1 inteiro\n\n**Cálculos simples:**\n- **10% de 100** = 10\n- **20% de 50** = 10\n- **50% de 80** = 40\n\n**Dica:** Para calcular 10%, divida por 10. Para 50%, divida por 2!",
                    materials: [
                        { title: "Calculadora de Porcentagem", url: "https://www.example.com/calc-porcentagem", icon: "calculator" },
                        { title: "Vídeo: Porcentagem no Dia a Dia", url: "https://www.youtube.com/watch?v=pqr123", icon: "play" }
                    ]
                },
                geometria: {
                    keywords: ['geometria', 'área', 'perímetro', 'triângulo', 'quadrado', 'retângulo', 'círculo', 'formas'],
                    text: "**Geometria** é o estudo das formas, tamanhos e posições!\n\n**Principais conceitos:**\n- **Perímetro:** Soma de todos os lados de uma figura\n- **Área:** Espaço ocupado pela superfície de uma figura\n\n**Fórmulas básicas:**\n- **Quadrado:** Área = lado × lado, Perímetro = 4 × lado\n- **Retângulo:** Área = comprimento × largura, Perímetro = 2 × (comprimento + largura)\n- **Triângulo:** Área = (base × altura) ÷ 2\n- **Círculo:** Área = π × raio², Perímetro = 2 × π × raio\n\n**Dica:** Sempre desenhe a figura e identifique as medidas antes de calcular!",
                    materials: [
                        { title: "Calculadora de Áreas", url: "https://www.example.com/calculadora", icon: "calculator" },
                        { title: "Vídeo: Geometria Básica", url: "https://www.youtube.com/watch?v=ghi789", icon: "play" }
                    ]
                }
            },
            portugues: {
                sujeito_predicado: {
                    keywords: ['sujeito', 'predicado', 'frase', 'oração', 'verbo', 'núcleo', 'sintaxe'],
                    text: "**Sujeito e Predicado** são os elementos principais da oração!\n\n**Sujeito:**\n- Quem pratica ou sofre a ação\n- Para encontrar: pergunte QUEM? ou O QUE? antes do verbo\n\n**Predicado:**\n- O que se diz sobre o sujeito\n- Sempre contém o verbo\n\n**Exemplo:** 'O menino correu no parque.'\n- **Sujeito:** O menino (quem correu?)\n- **Predicado:** correu no parque (o que o menino fez?)\n\n**Tipos de sujeito:**\n- **Simples:** um núcleo (O gato dormiu)\n- **Composto:** dois ou mais núcleos (João e Maria estudam)\n- **Oculto:** não aparece, mas está subentendido (Estudei muito - eu)\n\n**Dica:** Sempre identifique primeiro o verbo, depois pergunte quem pratica a ação!",
                    materials: [
                        { title: "Vídeo: Sujeito e Predicado", url: "https://www.youtube.com/watch?v=jkl012", icon: "play" },
                        { title: "Exercícios Interativos", url: "https://www.example.com/exercicios-sintaxe", icon: "pencil-alt" }
                    ]
                },
                acentuacao: {
                    keywords: ['acentuação', 'acento', 'agudo', 'circunflexo', 'til', 'crase', 'ortografia'],
                    text: "**Acentuação** são as regras que definem quando usar acentos!\n\n**Oxítonas:** Última sílaba tônica\n- Acentuam-se terminadas em A, E, O, EM, ENS\n- Ex: sofá, café, cipó, também, parabéns\n\n**Paroxítonas:** Penúltima sílaba tônica\n- Acentuam-se terminadas em L, N, R, X, Ã, ÃO, UM, UNS, I, IS, US\n- Ex: fácil, hífen, açúcar, tórax\n\n**Proparoxítonas:** Antepenúltima sílaba tônica (todas acentuadas)\n- Ex: médico, lâmpada, prático\n\n**Dica:** Separe as sílabas e identifique a mais forte antes de aplicar a regra!",
                    materials: [
                        { title: "Guia de Acentuação", url: "https://www.example.com/acentuacao", icon: "book" },
                        { title: "Quiz de Acentos", url: "https://www.example.com/quiz-acentos", icon: "question-circle" }
                    ]
                },
                interpretacao: {
                    keywords: ['interpretação', 'texto', 'compreensão', 'leitura', 'entender', 'significado'],
                    text: "**Interpretação de texto** é compreender o que o autor quis dizer!\n\n1. Primeira leitura: visão geral\n2. Segunda leitura: destaque informações importantes\n3. Identifique tema, personagens, tempo, lugar, mensagem\n4. Relacione com conhecimentos prévios\n5. Questione o texto\n\n**Dica:** volte sempre ao texto para confirmar suas respostas.",
                    materials: [
                        { title: "Textos para Praticar", url: "https://www.example.com/textos-interpretacao", icon: "book-reader" },
                        { title: "Técnicas de Leitura", url: "https://www.example.com/tecnicas-leitura", icon: "glasses" }
                    ]
                }
            },
            ciencias: {
                celula: {
                    keywords: ['célula', 'células', 'microscópio', 'organelas', 'núcleo', 'citoplasma', 'membrana'],
                    text: "**Células** são as menores unidades vivas.\n\nEstrutura básica:\n- Membrana plasmática\n- Citoplasma\n- Núcleo\n\nTipos:\n- Procarióticas (sem núcleo)\n- Eucarióticas (com núcleo)\n\nPrincipais organelas:\n- Mitocôndria\n- Ribossomo\n- Retículo endoplasmático\n\nNosso corpo tem cerca de 37 trilhões de células!",
                    materials: [
                        { title: "Vídeo: Viagem pela Célula", url: "https://www.youtube.com/watch?v=mno345", icon: "play" },
                        { title: "Jogo: Monte uma Célula", url: "https://www.example.com/jogo-celula", icon: "gamepad" }
                    ]
                },
                sistema_solar: {
                    keywords: ['sistema solar', 'planetas', 'sol', 'lua', 'terra', 'astronomia', 'universo'],
                    text: "**Sistema Solar**: Sol + corpos celestes orbitando.\n\nOrdem dos planetas:\n1. Mercúrio\n2. Vênus\n3. Terra\n4. Marte\n5. Júpiter\n6. Saturno\n7. Urano\n8. Netuno\n\nMacete: 'Minha Vó Tem Muitas Jóias, Só Usa No Pescoço'.",
                    materials: [
                        { title: "Simulador do Sistema Solar", url: "https://www.example.com/simulador-solar", icon: "globe" },
                        { title: "Vídeo: Viagem pelos Planetas", url: "https://www.youtube.com/watch?v=pqr678", icon: "play" }
                    ]
                },
                agua: {
                    keywords: ['água', 'ciclo da água', 'evaporação', 'condensação', 'precipitação', 'estados físicos'],
                    text: "**Água** é essencial à vida.\n\nEstados: sólido (gelo), líquido, gasoso (vapor).\n\nCiclo: evaporação → condensação → precipitação → infiltração → escoamento.",
                    materials: [
                        { title: "Experimento: Ciclo da Água", url: "https://www.example.com/experimento-agua", icon: "tint" },
                        { title: "Vídeo: Estados da Água", url: "https://www.youtube.com/watch?v=stu901", icon: "play" }
                    ]
                }
            },
            geral: {
                saudacao: {
                    keywords: ['oi', 'olá', 'bom dia', 'boa tarde', 'boa noite', 'tudo bem', 'como vai'],
                    text: "Olá! 👋 Sou o ChatEduca. Pergunte sobre Matemática, Português ou Ciências.",
                    materials: []
                },
                ajuda: {
                    keywords: ['ajuda', 'help', 'não sei', 'dúvida', 'como usar', 'funciona'],
                    text: "Para usar: faça perguntas específicas, escolha a disciplina e aproveite os materiais sugeridos.",
                    materials: []
                }
            }
        };
    }

    findResponse(msg) {
        const lower = msg.toLowerCase();
        for (const cat in this.responses) {
            for (const top in this.responses[cat]) {
                const d = this.responses[cat][top];
                if (d.keywords.some(k => lower.includes(k))) return { text: d.text, materials: d.materials || [] };
            }
        }
        return null;
    }

    addResponse(cat, top, keywords, text, materials = []) {
        if (!this.responses[cat]) this.responses[cat] = {};
        this.responses[cat][top] = { keywords, text, materials };
    }

    getAvailableTopics() {
        const list = [];
        for (const cat in this.responses) {
            for (const top in this.responses[cat]) {
                list.push({ category: cat, topic: top, keywords: this.responses[cat][top].keywords });
            }
        }
        return list;
    }

    searchTopics(key) {
        const q = key.toLowerCase(), out = [];
        for (const cat in this.responses) {
            for (const top in this.responses[cat]) {
                const d = this.responses[cat][top];
                if (d.keywords.some(k => k.includes(q))) out.push({ category: cat, topic: top, keywords: d.keywords });
            }
        }
        return out;
    }
}

window.knowledgeBase = new KnowledgeBase();
if (typeof module !== 'undefined' && module.exports) module.exports = KnowledgeBase;
