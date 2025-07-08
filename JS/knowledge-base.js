// Knowledge Base for ChatEduca
class KnowledgeBase {
    constructor() {
        this.responses = {
            // Matemática
            matematica: {
                fracoes: {
                    keywords: ['fração', 'frações', 'numerador', 'denominador', 'dividir', 'parte', 'inteiro', 'decimal'],
                    text: "**Frações** representam partes de um todo!\n\n**Estrutura:**\n- **Numerador** (número de cima): quantas partes temos\n- **Denominador** (número de baixo): em quantas partes o todo foi dividido\n\n**Exemplo:** 3/4 significa que temos 3 partes de um todo que foi dividido em 4 partes.\n\n**Operações básicas:**\n- **Soma/Subtração:** Use denominadores iguais\n- **Multiplicação:** Multiplique numerador por numerador e denominador por denominador\n- **Divisão:** Multiplique pela fração invertida\n\n**Frações e decimais:** 1/2 = 0,5 | 1/4 = 0,25 | 3/4 = 0,75\n\n**Dica:** Sempre simplifique o resultado dividindo numerador e denominador pelo mesmo número!",
                    materials: [
                        {
                            title: "Vídeo: Frações e Decimais",
                            url: "https://www.youtube.com/watch?v=def456",
                            icon: "play"
                        },
                        {
                            title: "Atividades com Frações",
                            url: "https://www.example.com/jogos-fracao",
                            icon: "question-circle"
                        }
                    ]
                },
                porcentagem: {
                    keywords: ['porcentagem', 'percentual', '%', 'desconto', 'aumento', 'proporção'],
                    text: "**Porcentagem** é uma forma de expressar uma parte de 100!\n\n**Conceito básico:**\n- **%** significa 'por cento' ou 'de cada 100'\n- **50%** = 50 de cada 100 = 1/2 = 0,5\n\n**Principais porcentagens:**\n- **25%** = 1/4 = 0,25\n- **50%** = 1/2 = 0,5\n- **75%** = 3/4 = 0,75\n- **100%** = 1 inteiro\n\n**Cálculos simples:**\n- **10% de 100** = 10\n- **20% de 50** = 10\n- **50% de 80** = 40\n\n**Dica:** Para calcular 10%, divida por 10. Para 50%, divida por 2!",
                    materials: [
                        {
                            title: "Calculadora de Porcentagem",
                            url: "https://www.example.com/calc-porcentagem",
                            icon: "calculator"
                        },
                        {
                            title: "Vídeo: Porcentagem no Dia a Dia",
                            url: "https://www.youtube.com/watch?v=pqr123",
                            icon: "play"
                        }
                    ]
                },
                geometria: {
                    keywords: ['geometria', 'área', 'perímetro', 'triângulo', 'quadrado', 'retângulo', 'círculo', 'formas'],
                    text: "**Geometria** é o estudo das formas, tamanhos e posições!\n\n**Principais conceitos:**\n- **Perímetro:** Soma de todos os lados de uma figura\n- **Área:** Espaço ocupado pela superfície de uma figura\n\n**Fórmulas básicas:**\n- **Quadrado:** Área = lado × lado, Perímetro = 4 × lado\n- **Retângulo:** Área = comprimento × largura, Perímetro = 2 × (comprimento + largura)\n- **Triângulo:** Área = (base × altura) ÷ 2\n- **Círculo:** Área = π × raio², Perímetro = 2 × π × raio\n\n**Dica:** Sempre desenhe a figura e identifique as medidas antes de calcular!",
                    materials: [
                        {
                            title: "Calculadora de Áreas",
                            url: "https://www.example.com/calculadora",
                            icon: "calculator"
                        },
                        {
                            title: "Vídeo: Geometria Básica",
                            url: "https://www.youtube.com/watch?v=ghi789",
                            icon: "play"
                        }
                    ]
                }
            },
            
            // Português
            portugues: {
                sujeito_predicado: {
                    keywords: ['sujeito', 'predicado', 'frase', 'oração', 'verbo', 'núcleo', 'sintaxe'],
                    text: "**Sujeito e Predicado** são os elementos principais da oração!\n\n**Sujeito:**\n- Quem pratica ou sofre a ação\n- Para encontrar: pergunte QUEM? ou O QUE? antes do verbo\n\n**Predicado:**\n- O que se diz sobre o sujeito\n- Sempre contém o verbo\n\n**Exemplo:** 'O menino correu no parque.'\n- **Sujeito:** O menino (quem correu?)\n- **Predicado:** correu no parque (o que o menino fez?)\n\n**Tipos de sujeito:**\n- **Simples:** um núcleo (O gato dormiu)\n- **Composto:** dois ou mais núcleos (João e Maria estudam)\n- **Oculto:** não aparece, mas está subentendido (Estudei muito - eu)\n\n**Dica:** Sempre identifique primeiro o verbo, depois pergunte quem pratica a ação!",
                    materials: [
                        {
                            title: "Vídeo: Sujeito e Predicado",
                            url: "https://www.youtube.com/watch?v=jkl012",
                            icon: "play"
                        },
                        {
                            title: "Exercícios Interativos",
                            url: "https://www.example.com/exercicios-sintaxe",
                            icon: "pencil-alt"
                        }
                    ]
                },
                acentuacao: {
                    keywords: ['acentuação', 'acento', 'agudo', 'circunflexo', 'til', 'crase', 'ortografia'],
                    text: "**Acentuação** são as regras que definem quando usar acentos!\n\n**Principais regras:**\n\n**Oxítonas:** Última sílaba tônica\n- Acentuam-se terminadas em A, E, O, EM, ENS\n- Ex: sofá, café, cipó, também, parabéns\n\n**Paroxítonas:** Penúltima sílaba tônica\n- Acentuam-se terminadas em L, N, R, X, Ã, ÃO, UM, UNS, I, IS, US\n- Ex: fácil, hífen, açúcar, tórax\n\n**Proparoxítonas:** Antepenúltima sílaba tônica\n- **TODAS** são acentuadas\n- Ex: médico, lâmpada, prático\n\n**Dica:** Separe as sílabas e identifique qual é a mais forte. Depois aplique a regra!",
                    materials: [
                        {
                            title: "Guia de Acentuação",
                            url: "https://www.example.com/acentuacao",
                            icon: "book"
                        },
                        {
                            title: "Quiz de Acentos",
                            url: "https://www.example.com/quiz-acentos",
                            icon: "question-circle"
                        }
                    ]
                },
                interpretacao: {
                    keywords: ['interpretação', 'texto', 'compreensão', 'leitura', 'entender', 'significado'],
                    text: "**Interpretação de texto** é compreender o que o autor quis dizer!\n\n**Estratégias para interpretar:**\n\n**1. Primeira leitura:** Leia para ter uma ideia geral\n\n**2. Segunda leitura:** Leia com atenção, destacando informações importantes\n\n**3. Identifique:**\n- **Tema principal:** Do que o texto fala?\n- **Personagens:** Quem participa?\n- **Tempo e lugar:** Quando e onde acontece?\n- **Mensagem:** O que o autor quer ensinar?\n\n**4. Relacione:** Conecte as informações do texto com seus conhecimentos\n\n**5. Questione:** Faça perguntas sobre o texto\n\n**Dica:** Sempre volte ao texto para confirmar suas respostas. A resposta está sempre lá!",
                    materials: [
                        {
                            title: "Textos para Praticar",
                            url: "https://www.example.com/textos-interpretacao",
                            icon: "book-reader"
                        },
                        {
                            title: "Técnicas de Leitura",
                            url: "https://www.example.com/tecnicas-leitura",
                            icon: "glasses"
                        }
                    ]
                }
            },
            
            // Ciências
            ciencias: {
                celula: {
                    keywords: ['célula', 'células', 'microscópio', 'organelas', 'núcleo', 'citoplasma', 'membrana'],
                    text: "**Células** são as menores unidades vivas dos seres vivos!\n\n**Estrutura básica:**\n- **Membrana plasmática:** Controla entrada e saída de substâncias\n- **Citoplasma:** Gel onde ocorrem as reações químicas\n- **Núcleo:** Contém o DNA (informações genéticas)\n\n**Tipos de células:**\n- **Procarióticas:** Sem núcleo definido (bactérias)\n- **Eucarióticas:** Com núcleo definido (plantas, animais)\n\n**Principais organelas:**\n- **Mitocôndria:** Produz energia\n- **Ribossomo:** Produz proteínas\n- **Retículo endoplasmático:** Transporte interno\n\n**Curiosidade:** Nosso corpo tem cerca de 37 trilhões de células!\n\n**Dica:** Pense na célula como uma cidade em miniatura, onde cada organela tem sua função específica!",
                    materials: [
                        {
                            title: "Vídeo: Viagem pela Célula",
                            url: "https://www.youtube.com/watch?v=mno345",
                            icon: "play"
                        },
                        {
                            title: "Jogo: Monte uma Célula",
                            url: "https://www.example.com/jogo-celula",
                            icon: "gamepad"
                        }
                    ]
                },
                sistema_solar: {
                    keywords: ['sistema solar', 'planetas', 'sol', 'lua', 'terra', 'astronomia', 'universo'],
                    text: "**Sistema Solar** é formado pelo Sol e todos os corpos celestes que orbitam ao seu redor!\n\n**Ordem dos planetas:**\n1. **Mercúrio** - Mais próximo do Sol, muito quente\n2. **Vênus** - Mais quente que Mercúrio (efeito estufa)\n3. **Terra** - Nosso planeta, tem vida\n4. **Marte** - Planeta vermelho\n5. **Júpiter** - Maior planeta, gigante gasoso\n6. **Saturno** - Tem anéis visíveis\n7. **Urano** - Rota de lado\n8. **Netuno** - Mais distante, muito frio\n\n**Macete:** 'Minha Vó Tem Muitas Jóias, Só Usa No Pescoço'\n\n**Curiosidades:**\n- O Sol contém 99,8% da massa do Sistema Solar\n- Júpiter é maior que todos os outros planetas juntos\n- Um dia em Vênus dura mais que um ano!\n\n**Dica:** Use o macete para decorar a ordem dos planetas!",
                    materials: [
                        {
                            title: "Simulador do Sistema Solar",
                            url: "https://www.example.com/simulador-solar",
                            icon: "globe"
                        },
                        {
                            title: "Vídeo: Viagem pelos Planetas",
                            url: "https://www.youtube.com/watch?v=pqr678",
                            icon: "play"
                        }
                    ]
                },
                agua: {
                    keywords: ['água', 'ciclo da água', 'evaporação', 'condensação', 'precipitação', 'estados físicos'],
                    text: "**Água** é fundamental para a vida e está sempre em movimento!\n\n**Estados físicos da água:**\n- **Sólido:** Gelo (abaixo de 0°C)\n- **Líquido:** Água comum (0°C a 100°C)\n- **Gasoso:** Vapor d'água (acima de 100°C)\n\n**Ciclo da água:**\n1. **Evaporação:** Água vira vapor (calor do Sol)\n2. **Condensação:** Vapor vira gotinhas (nuvens)\n3. **Precipitação:** Gotinhas caem (chuva, neve)\n4. **Infiltração:** Água entra no solo\n5. **Escoamento:** Água volta aos rios e mares\n\n**Importância:**\n- 70% do corpo humano é água\n- Fundamental para todos os seres vivos\n- Regula temperatura do planeta\n\n**Dica:** A água que você bebe hoje pode ter sido bebida pelos dinossauros - ela está sempre reciclando!",
                    materials: [
                        {
                            title: "Experimento: Ciclo da Água",
                            url: "https://www.example.com/experimento-agua",
                            icon: "tint"
                        },
                        {
                            title: "Vídeo: Estados da Água",
                            url: "https://www.youtube.com/watch?v=stu901",
                            icon: "play"
                        }
                    ]
                }
            },
            
            // Respostas gerais
            geral: {
                saudacao: {
                    keywords: ['oi', 'olá', 'bom dia', 'boa tarde', 'boa noite', 'tudo bem', 'como vai'],
                    text: "Olá! 👋 Que bom te ver aqui!\n\nEu sou o ChatEduca, seu assistente educacional para o **Ensino Fundamental II**. Estou aqui para ajudar você com suas dúvidas de **Matemática**, **Português** e **Ciências**.\n\nPosso explicar frações, porcentagens, gramática, células, sistema solar e muito mais!\n\nO que você gostaria de aprender hoje?",
                    materials: []
                },
                ajuda: {
                    keywords: ['ajuda', 'help', 'não sei', 'dúvida', 'como usar', 'funciona'],
                    text: "Claro! Estou aqui para ajudar! 🤗\n\n**Como usar o ChatEduca:**\n\n1. **Faça perguntas específicas:** 'Como resolver equações?' ao invés de só 'matemática'\n\n2. **Use as matérias que eu conheço:** Matemática, Português e Ciências\n\n3. **Clique nos botões rápidos:** Use as sugestões de perguntas abaixo\n\n4. **Seja claro:** Quanto mais específica sua pergunta, melhor posso ajudar\n\n**Exemplos de perguntas:**\n- 'Como identificar o sujeito da frase?'\n- 'O que são frações?'\n- 'Como funciona o ciclo da água?'\n\nO que você gostaria de aprender?",
                    materials: []
                }
            }
        };
        
        this.initializeMaterialLinks();
    }
    
    initializeMaterialLinks() {
        // In a real application, these would be actual educational resources
        // For now, we'll use placeholder links
        console.log('Knowledge base initialized with educational materials');
    }
    
    findResponse(message, userType) {
        const lowerMessage = message.toLowerCase();
        
        // Check all categories and topics
        for (const category in this.responses) {
            for (const topic in this.responses[category]) {
                const topicData = this.responses[category][topic];
                
                // Check if any keywords match
                if (topicData.keywords.some(keyword => lowerMessage.includes(keyword))) {
                    return {
                        text: topicData.text,
                        materials: topicData.materials || []
                    };
                }
            }
        }
        
        // No specific match found
        return null;
    }
    
    // Method to add new responses dynamically
    addResponse(category, topic, keywords, responseText, materials = []) {
        if (!this.responses[category]) {
            this.responses[category] = {};
        }
        
        this.responses[category][topic] = {
            keywords: keywords,
            text: responseText,
            materials: materials
        };
    }
    
    // Method to get all available topics
    getAvailableTopics() {
        const topics = [];
        for (const category in this.responses) {
            for (const topic in this.responses[category]) {
                topics.push({
                    category: category,
                    topic: topic,
                    keywords: this.responses[category][topic].keywords
                });
            }
        }
        return topics;
    }
    
    // Method to search for topics by keyword
    searchTopics(keyword) {
        const matches = [];
        const lowerKeyword = keyword.toLowerCase();
        
        for (const category in this.responses) {
            for (const topic in this.responses[category]) {
                const topicData = this.responses[category][topic];
                if (topicData.keywords.some(k => k.includes(lowerKeyword))) {
                    matches.push({
                        category: category,
                        topic: topic,
                        keywords: topicData.keywords
                    });
                }
            }
        }
        
        return matches;
    }
}

// Initialize knowledge base
window.knowledgeBase = new KnowledgeBase();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KnowledgeBase;
}
