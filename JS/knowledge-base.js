// Knowledge Base for ChatEduca
class KnowledgeBase {
    constructor() {
        this.responses = {
            // Matemática
            matematica: {
                fracoes: {
                    keywords: ['fração', 'frações', 'numerador', 'denominador', 'dividir', 'parte', 'inteiro', 'decimal'],
                    student: {
                        text: "**Frações** representam partes de um todo!\n\n**Estrutura:**\n- **Numerador** (número de cima): quantas partes temos\n- **Denominador** (número de baixo): em quantas partes o todo foi dividido\n\n**Exemplo:** 3/4 significa que temos 3 partes de um todo que foi dividido em 4 partes.\n\n**Operações básicas:**\n- **Soma/Subtração:** Use denominadores iguais\n- **Multiplicação:** Multiplique numerador por numerador e denominador por denominador\n- **Divisão:** Multiplique pela fração invertida\n\n**Frações e decimais:** 1/2 = 0,5 | 1/4 = 0,25 | 3/4 = 0,75\n\n**Dica:** Sempre simplifique o resultado dividindo numerador e denominador pelo mesmo número!",
                        materials: [
                            {
                                title: "Vídeo: Frações e Decimais",
                                url: "https://www.youtube.com/watch?v=def456",
                                icon: "play"
                            },
                            {
                                title: "Jogos com Frações",
                                url: "https://www.example.com/jogos-fracao",
                                icon: "gamepad"
                            }
                        ]
                    },
                    parent: {
                        text: "**Como ensinar frações para seu filho:**\n\n**1. Use objetos concretos:** Pizza, chocolate, frutas - coisas que podem ser divididas fisicamente.\n\n**2. Desenhe círculos e retângulos:** Divida e pinte as partes para visualizar.\n\n**3. Cozinhem juntos:** Receitas usam muito frações (1/2 xícara, 1/4 de açúcar).\n\n**4. Compare tamanhos:** Mostre que 1/2 é maior que 1/4 usando exemplos visuais.\n\n**5. Pratique no dia a dia:** 'Comemos 2/8 da pizza, quantos pedaços sobraram?'\n\n**6. Conecte com decimais:** Mostre como 1/2 = 0,5 na calculadora.",
                        materials: [
                            {
                                title: "Atividades com Frações em Casa",
                                url: "https://www.example.com/fracao-casa",
                                icon: "home"
                            },
                            {
                                title: "Receitas Educativas",
                                url: "https://www.example.com/receitas",
                                icon: "utensils"
                            }
                        ]
                    }
                },
                porcentagem: {
                    keywords: ['porcentagem', 'percentual', '%', 'desconto', 'aumento', 'proporção'],
                    student: {
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
                    parent: {
                        text: "**Como ensinar porcentagem:**\n\n**1. Use exemplos práticos:** Descontos em lojas, notas da escola, estatísticas de jogos.\n\n**2. Conecte com frações:** 50% = 1/2, 25% = 1/4.\n\n**3. Use gráficos:** Desenhe barras ou pizzas divididas em 100 partes.\n\n**4. Situações reais:** 'Se você acertou 8 de 10 questões, que porcentagem acertou?'\n\n**5. Jogos e desafios:** 'Qual desconto é melhor: 30% ou 1/3?'",
                        materials: [
                            {
                                title: "Atividades de Porcentagem",
                                url: "https://www.example.com/atividades-porcentagem",
                                icon: "chart-pie"
                            },
                            {
                                title: "Exemplos do Cotidiano",
                                url: "https://www.example.com/porcentagem-cotidiano",
                                icon: "shopping-cart"
                            }
                        ]
                    }
                },
                geometria: {
                    keywords: ['geometria', 'área', 'perímetro', 'triângulo', 'quadrado', 'retângulo', 'círculo', 'formas'],
                    student: {
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
                    },
                    parent: {
                        text: "**Como ajudar com geometria:**\n\n**1. Explore a casa:** Identifiquem formas geométricas em objetos do dia a dia.\n\n**2. Meçam juntos:** Use régua e fita métrica para medir móveis, cômodos.\n\n**3. Atividades práticas:** Calcule a área do quarto, o perímetro do quintal.\n\n**4. Desenho e construção:** Façam figuras geométricas com papel, palitos.\n\n**5. Jogos educativos:** Tangram, quebra-cabeças geométricos.",
                        materials: [
                            {
                                title: "Atividades Geométricas",
                                url: "https://www.example.com/geometria-pratica",
                                icon: "ruler"
                            },
                            {
                                title: "Jogos Geométricos",
                                url: "https://www.example.com/jogos-geometria",
                                icon: "shapes"
                            }
                        ]
                    }
                }
            },
            
            // Português
            portugues: {
                sujeito_predicado: {
                    keywords: ['sujeito', 'predicado', 'frase', 'oração', 'verbo', 'núcleo', 'sintaxe'],
                    student: {
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
                    parent: {
                        text: "**Como ajudar seu filho com sujeito e predicado:**\n\n**1. Use frases do dia a dia:** Analisem frases simples durante conversas.\n\n**2. Técnica da pergunta:** Ensine a perguntar 'quem?' para encontrar o sujeito.\n\n**3. Destaque o verbo:** Primeiro encontrem a ação, depois o resto fica mais fácil.\n\n**4. Pratique com histórias:** Leiam juntos e identifiquem sujeito e predicado.\n\n**5. Crie frases:** Inventem frases e analisem juntos.\n\n**Exemplo prático:** 'Você arrumou o quarto' - Quem arrumou? Você (sujeito). O que você fez? Arrumou o quarto (predicado).",
                        materials: [
                            {
                                title: "Atividades de Sintaxe",
                                url: "https://www.example.com/sintaxe-familia",
                                icon: "book-open"
                            },
                            {
                                title: "Jogos de Português",
                                url: "https://www.example.com/jogos-portugues",
                                icon: "gamepad"
                            }
                        ]
                    }
                },
                acentuacao: {
                    keywords: ['acentuação', 'acento', 'agudo', 'circunflexo', 'til', 'crase', 'ortografia'],
                    student: {
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
                    parent: {
                        text: "**Como ajudar com acentuação:**\n\n**1. Leitura em voz alta:** Pronunciem palavras enfatizando a sílaba tônica.\n\n**2. Batam palmas:** Para cada sílaba, batam mais forte na tônica.\n\n**3. Agrupem palavras:** Façam listas de oxítonas, paroxítonas e proparoxítonas.\n\n**4. Use músicas:** Cantem palavras identificando onde 'bate' mais forte.\n\n**5. Pratique com textos:** Durante a leitura, identifiquem palavras acentuadas.\n\n**Dica:** Comece com palavras simples e conhecidas. A prática constante é fundamental!",
                        materials: [
                            {
                                title: "Atividades de Acentuação",
                                url: "https://www.example.com/acentuacao-casa",
                                icon: "home"
                            },
                            {
                                title: "Jogos de Ortografia",
                                url: "https://www.example.com/ortografia-jogos",
                                icon: "spell-check"
                            }
                        ]
                    }
                },
                interpretacao: {
                    keywords: ['interpretação', 'texto', 'compreensão', 'leitura', 'entender', 'significado'],
                    student: {
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
                    },
                    parent: {
                        text: "**Como ajudar na interpretação de textos:**\n\n**1. Leiam juntos:** Façam leituras compartilhadas e discutam o texto.\n\n**2. Façam perguntas:** 'O que você achou?', 'Por que isso aconteceu?'\n\n**3. Conectem com a vida:** Relacionem o texto com experiências reais.\n\n**4. Resumam juntos:** Peça para seu filho contar o que entendeu.\n\n**5. Vocabulário:** Esclareçam palavras desconhecidas.\n\n**6. Sejam pacientes:** Interpretação é uma habilidade que se desenvolve com prática.\n\n**Dica:** Estimule a curiosidade e o prazer pela leitura!",
                        materials: [
                            {
                                title: "Guia de Leitura Familiar",
                                url: "https://www.example.com/leitura-familia",
                                icon: "users"
                            },
                            {
                                title: "Lista de Livros Recomendados",
                                url: "https://www.example.com/livros-recomendados",
                                icon: "list"
                            }
                        ]
                    }
                }
            },
            
            // Ciências
            ciencias: {
                celula: {
                    keywords: ['célula', 'células', 'microscópio', 'organelas', 'núcleo', 'citoplasma', 'membrana'],
                    student: {
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
                    parent: {
                        text: "**Como ajudar no estudo das células:**\n\n**1. Analogias simples:** Compare a célula com uma casa - núcleo é o escritório, mitocôndria é a usina de energia.\n\n**2. Desenhos juntos:** Façam esquemas coloridos das células.\n\n**3. Microscópio caseiro:** Use lupa para observar folhas, tecidos.\n\n**4. Vídeos educativos:** Assistam documentários sobre o corpo humano.\n\n**5. Experimentos:** Observem células da cebola com microscópio simples.\n\n**6. Conectem com saúde:** Expliquem como cuidar das células do corpo.\n\n**Dica:** Use comparações com coisas familiares para facilitar o entendimento!",
                        materials: [
                            {
                                title: "Experimentos Caseiros",
                                url: "https://www.example.com/experimentos-celula",
                                icon: "flask"
                            },
                            {
                                title: "Atividades Práticas",
                                url: "https://www.example.com/atividades-ciencias",
                                icon: "microscope"
                            }
                        ]
                    }
                },
                sistema_solar: {
                    keywords: ['sistema solar', 'planetas', 'sol', 'lua', 'terra', 'astronomia', 'universo'],
                    student: {
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
                    parent: {
                        text: "**Como ensinar sobre o Sistema Solar:**\n\n**1. Observem o céu:** Mostrem a Lua, planetas visíveis, constelações.\n\n**2. Maquete do Sistema Solar:** Construam com bolas de isopor.\n\n**3. Aplicativos de astronomia:** Usem apps para identificar planetas.\n\n**4. Documentários:** Assistam programas sobre o espaço.\n\n**5. Visitas a planetários:** Se possível, visitem museus de ciências.\n\n**6. Proporções:** Expliquem os tamanhos comparativos com objetos do dia a dia.\n\n**Dica:** A curiosidade natural das crianças sobre o espaço torna este tema muito interessante!",
                        materials: [
                            {
                                title: "Guia de Observação do Céu",
                                url: "https://www.example.com/observacao-ceu",
                                icon: "telescope"
                            },
                            {
                                title: "Projetos de Astronomia",
                                url: "https://www.example.com/projetos-astronomia",
                                icon: "rocket"
                            }
                        ]
                    }
                },
                agua: {
                    keywords: ['água', 'ciclo da água', 'evaporação', 'condensação', 'precipitação', 'estados físicos'],
                    student: {
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
                    },
                    parent: {
                        text: "**Como ensinar sobre a água:**\n\n**1. Experimentos simples:** Congelem água, fervam, mostrem vapor.\n\n**2. Observem a natureza:** Chuva, orvalho, gelo nos freezer.\n\n**3. Ciclo da água caseiro:** Façam um terrário fechado.\n\n**4. Conscientização:** Ensinem sobre economia de água.\n\n**5. Atividades práticas:** Meçam quantidade de chuva, observem evaporação.\n\n**6. Conectem com o dia a dia:** Expliquem por que suamos, por que chove.\n\n**Dica:** Use exemplos do cotidiano para mostrar os diferentes estados da água!",
                        materials: [
                            {
                                title: "Experimentos com Água",
                                url: "https://www.example.com/experimentos-agua",
                                icon: "flask"
                            },
                            {
                                title: "Projeto: Economizando Água",
                                url: "https://www.example.com/economia-agua",
                                icon: "leaf"
                            }
                        ]
                    }
                }
            },
            
            // Respostas gerais
            geral: {
                saudacao: {
                    keywords: ['oi', 'olá', 'bom dia', 'boa tarde', 'boa noite', 'tudo bem', 'como vai'],
                    student: {
                        text: "Olá! 👋 Que bom te ver aqui!\n\nEu sou o ChatEduca, seu assistente educacional para o **Ensino Fundamental II**. Estou aqui para ajudar você com suas dúvidas de **Matemática**, **Português** e **Ciências**.\n\nPosso explicar frações, porcentagens, gramática, células, sistema solar e muito mais!\n\nO que você gostaria de aprender hoje?",
                        materials: []
                    },
                    parent: {
                        text: "Olá! 👋 É um prazer recebê-lo(a) aqui!\n\nEu sou o ChatEduca, e estou aqui para ajudar você a apoiar o aprendizado do seu filho no **Ensino Fundamental II**. Posso dar orientações sobre como explicar conteúdos de **Matemática**, **Português** e **Ciências**, além de sugerir atividades para fazer em casa.\n\nTodos os conteúdos seguem a **BNCC** e são adequados para alunos de 6º ao 9º ano.\n\nComo posso ajudar você hoje?",
                        materials: []
                    }
                },
                ajuda: {
                    keywords: ['ajuda', 'help', 'não sei', 'dúvida', 'como usar', 'funciona'],
                    student: {
                        text: "Claro! Estou aqui para ajudar! 🤗\n\n**Como usar o ChatEduca:**\n\n1. **Faça perguntas específicas:** 'Como resolver equações?' ao invés de só 'matemática'\n\n2. **Use as matérias que eu conheço:** Matemática, Português e Ciências\n\n3. **Clique nos botões rápidos:** Use as sugestões de perguntas abaixo\n\n4. **Seja claro:** Quanto mais específica sua pergunta, melhor posso ajudar\n\n**Exemplos de perguntas:**\n- 'Como identificar o sujeito da frase?'\n- 'O que são frações?'\n- 'Como funciona o ciclo da água?'\n\nO que você gostaria de aprender?",
                        materials: []
                    },
                    parent: {
                        text: "Fico feliz em ajudar! 😊\n\n**Como usar o ChatEduca para apoiar seu filho:**\n\n1. **Peça orientações:** 'Como explicar frações para meu filho?'\n\n2. **Solicite atividades:** 'Que exercícios posso fazer com ele?'\n\n3. **Tire dúvidas:** 'Não lembro como resolver isso, pode me ensinar?'\n\n4. **Peça materiais:** Vou sugerir vídeos e recursos complementares\n\n**Exemplos de como perguntar:**\n- 'Como posso ajudar meu filho com matemática?'\n- 'Que atividades posso fazer para ensinar português?'\n- 'Como explicar ciências de forma simples?'\n\nQual matéria você gostaria de abordar primeiro?",
                        materials: []
                    }
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
                    const response = topicData[userType] || topicData.student;
                    return {
                        text: response.text,
                        materials: response.materials || []
                    };
                }
            }
        }
        
        // No specific match found
        return null;
    }
    
    // Method to add new responses dynamically
    addResponse(category, topic, keywords, studentResponse, parentResponse) {
        if (!this.responses[category]) {
            this.responses[category] = {};
        }
        
        this.responses[category][topic] = {
            keywords: keywords,
            student: studentResponse,
            parent: parentResponse
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
