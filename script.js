// Frases de elogio para acertos
var frasesAcerto = [
  "Muito bem!",
  "Ótimo trabalho!",
  "Parabéns, você acertou!",
  "Resposta correta, continue assim!",
  "Arrasou!",
  "Excelente escolha!",
  "Você está mandando bem!",
  "Acertou em cheio!",
  "Show de bola!",
  "Mandou ver!"
];

// Frases de excelência para acertos consecutivos
var frasesExcelencia = [
  "Sensacional! Você acertou várias seguidas!",
  "Incrível! Uma sequência de acertos!",
  "Você está em uma ótima fase!",
  "Que desempenho brilhante!",
  "Continue assim, campeão(ã)!"
];

// Frases motivacionais para respostas erradas
var frasesErro = [
  "Não desanime, tente a próxima!",
  "Errou, mas não desista!",
  "Continue tentando, você consegue!",
  "Força! A próxima você acerta!",
  "Errar faz parte do aprendizado.",
  "Levante a cabeça e siga em frente!",
  "Você está quase lá!",
  "Continue focado!",
  "Não se preocupe, tente de novo!",
  "O importante é continuar tentando!"
];

// Função para frase aleatória
function fraseAleatoria(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Função para sortear 20 questões aleatórias do banco de 100
function getRandomQuestions(allQuestions, n) {
  let shuffled = allQuestions.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

// Banco de 100 questões (exemplo: as 100 do seu projeto, aqui só as 1-20 e 43-100 para exemplo)
var allQuestions = [
  {
    question: '"O tempo voa." Qual figura de linguagem está presente?',
    options: ['Personificação', 'Antítese', 'Hipérbole', 'Metáfora', 'Eufemismo'],
    answer: 0
  },
  {
    question: '"Ela tem um coração de ouro." Qual figura de linguagem foi utilizada?',
    options: ['Sinestesia', 'Metáfora', 'Catacrese', 'Metonímia', 'Ironia'],
    answer: 1
  },
  {
    question: '"Estou entre a cruz e a espada." Qual figura de linguagem foi empregada?',
    options: ['Metáfora', 'Antítese', 'Paradoxo', 'Personificação', 'Comparação'],
    answer: 2
  },
  {
    question: '"O Brasil inteiro chorou a perda do ídolo." Qual figura de linguagem está presente?',
    options: ['Catacrese', 'Metonímia', 'Hipérbole', 'Eufemismo', 'Antítese'],
    answer: 3
  },
  {
    question: '"Ele é um poço de paciência." Qual figura de linguagem foi usada?',
    options: ['Sinestesia', 'Metáfora', 'Antítese', 'Metonímia', 'Hipérbole'],
    answer: 4
  },
  {
    question: '"O mar estava um espelho." Qual figura de linguagem aparece?',
    options: ['Metáfora', 'Ironia', 'Personificação', 'Comparação', 'Catacrese'],
    answer: 0
  },
  {
    question: '"A multidão rugia no estádio." Qual figura de linguagem foi utilizada?',
    options: ['Antítese', 'Personificação', 'Metáfora', 'Metonímia', 'Hipérbole'],
    answer: 1
  },
  {
    question: '"Ela é uma estrela na empresa." Qual figura de linguagem está presente?',
    options: ['Eufemismo', 'Sinestesia', 'Metáfora', 'Catacrese', 'Paradoxo'],
    answer: 2
  },
  {
    question: '"O relógio corre depressa." Qual figura de linguagem foi empregada?',
    options: ['Comparação', 'Catacrese', 'Antítese', 'Personificação', 'Metonímia'],
    answer: 3
  },
  {
    question: '"Ela explodiu de alegria." Qual figura de linguagem foi utilizada?',
    options: ['Antítese', 'Metáfora', 'Sinestesia', 'Ironia', 'Hipérbole'],
    answer: 4
  },
  {
    question: '"O vento sussurrava segredos nas árvores." Qual figura de linguagem está presente?',
    options: ['Personificação', 'Metáfora', 'Hipérbole', 'Eufemismo', 'Antítese'],
    answer: 0
  },
  {
    question: '"Ele chorou um mar de lágrimas." Qual figura de linguagem foi utilizada?',
    options: ['Antítese', 'Hipérbole', 'Metonímia', 'Catacrese', 'Ironia'],
    answer: 1
  },
  {
    question: '"Ela é uma leoa quando defende seus filhos." Identifique a figura de linguagem.',
    options: ['Sinestesia', 'Eufemismo', 'Metáfora', 'Comparação', 'Paradoxo'],
    answer: 2
  },
  {
    question: '"Estou morrendo de fome." Qual é a figura de linguagem?',
    options: ['Catacrese', 'Ironia', 'Metáfora', 'Hipérbole', 'Metonímia'],
    answer: 3
  },
  {
    question: '"A esperança é a última que morre." Qual figura de linguagem aparece?',
    options: ['Antítese', 'Metáfora', 'Sinestesia', 'Eufemismo', 'Personificação'],
    answer: 4
  },
  {
    question: '"Ele tem um coração de pedra." Qual figura de linguagem foi usada?',
    options: ['Metáfora', 'Sinestesia', 'Metonímia', 'Hipérbole', 'Antítese'],
    answer: 0
  },
  {
    question: '"O Brasil leu Machado de Assis." Identifique a figura de linguagem.',
    options: ['Eufemismo', 'Metonímia', 'Hipérbole', 'Metáfora', 'Ironia'],
    answer: 1
  },
  {
    question: '"Ela tem um olhar de águia." Qual figura de linguagem está presente?',
    options: ['Comparação', 'Paradoxo', 'Metáfora', 'Catacrese', 'Sinestesia'],
    answer: 2
  },
  {
    question: '"Ele é fogo e gelo ao mesmo tempo." Qual figura de linguagem predomina?',
    options: ['Antítese', 'Prosopopeia', 'Metáfora', 'Paradoxo', 'Hipérbole'],
    answer: 3
  },
  {
    question: '"O perfume doce da música embalava o ambiente." Qual figura de linguagem foi empregada?',
    options: ['Metáfora', 'Hipérbole', 'Personificação', 'Catacrese', 'Sinestesia'],
    answer: 4
  },
  {
    question: '"O silêncio gritava naquela sala." Qual figura de linguagem está presente?',
    options: ['Personificação', 'Hipérbole', 'Metáfora', 'Antítese', 'Eufemismo'],
    answer: 0
  },
  {
    question: '"Ela tem olhos de águia." Qual figura de linguagem foi utilizada?',
    options: ['Sinestesia', 'Metáfora', 'Antítese', 'Metonímia', 'Comparação'],
    answer: 1
  },
  {
    question: '"Chove canivetes." Qual figura de linguagem foi empregada?',
    options: ['Eufemismo', 'Antítese', 'Metáfora', 'Catacrese', 'Personificação'],
    answer: 2
  },
  {
    question: '"A noite vestiu seu manto negro." Qual figura de linguagem está presente?',
    options: ['Hipérbole', 'Sinestesia', 'Antítese', 'Metáfora', 'Ironia'],
    answer: 3
  },
  {
    question: '"O povo pediu pão." Qual figura de linguagem foi usada?',
    options: ['Sinestesia', 'Metáfora', 'Ironia', 'Personificação', 'Metonímia'],
    answer: 4
  },
  {
    question: '"O perfume doce da flor." Qual figura de linguagem aparece?',
    options: ['Sinestesia', 'Metáfora', 'Catacrese', 'Hipérbole', 'Eufemismo'],
    answer: 0
  },
  {
    question: '"Ele é o braço direito do chefe." Qual figura de linguagem foi utilizada?',
    options: ['Comparação', 'Metonímia', 'Metáfora', 'Antítese', 'Personificação'],
    answer: 1
  },
  {
    question: '"Minha cabeça está fervendo de ideias." Qual figura de linguagem foi empregada?',
    options: ['Hipérbole', 'Sinestesia', 'Metáfora', 'Eufemismo', 'Catacrese'],
    answer: 2
  },
  {
    question: '"O tempo cura todas as feridas." Qual figura de linguagem está presente?',
    options: ['Antítese', 'Catacrese', 'Ironia', 'Personificação', 'Metáfora'],
    answer: 3
  },
  {
    question: '"Ele tem uma força de elefante." Qual figura de linguagem foi usada?',
    options: ['Sinestesia', 'Metáfora', 'Catacrese', 'Eufemismo', 'Comparação'],
    answer: 4
  },
  {
    question: '"O sol já sorri para nós." Qual figura de linguagem aparece?',
    options: ['Personificação', 'Hipérbole', 'Metáfora', 'Antítese', 'Sinestesia'],
    answer: 0
  },
  {
    question: '"Ele é uma enciclopédia ambulante." Qual figura de linguagem foi utilizada?',
    options: ['Metonímia', 'Metáfora', 'Catacrese', 'Ironia', 'Eufemismo'],
    answer: 1
  },
  {
    question: '"O Brasil chorou a morte do ídolo." Qual figura de linguagem foi empregada?',
    options: ['Sinestesia', 'Catacrese', 'Hipérbole', 'Metonímia', 'Antítese'],
    answer: 3
  },
  {
    question: '"Ela tem mãos de fada." Qual figura de linguagem está presente?',
    options: ['Antítese', 'Sinestesia', 'Metáfora', 'Eufemismo', 'Personificação'],
    answer: 2
  },
  {
    question: '"O relógio cansou de esperar." Qual figura de linguagem foi usada?',
    options: ['Metáfora', 'Ironia', 'Eufemismo', 'Personificação', 'Catacrese'],
    answer: 3
  },
  {
    question: '"Ele é um rato de biblioteca." Qual figura de linguagem aparece?',
    options: ['Sinestesia', 'Catacrese', 'Personificação', 'Metáfora', 'Metonímia'],
    answer: 4
  },
  {
    question: '"A esperança floresceu em seu peito." Qual figura de linguagem foi utilizada?',
    options: ['Metáfora', 'Antítese', 'Sinestesia', 'Hipérbole', 'Catacrese'],
    answer: 0
  },
  {
    question: '"O tempo é dinheiro." Qual figura de linguagem foi empregada?',
    options: ['Antítese', 'Metonímia', 'Metáfora', 'Personificação', 'Eufemismo'],
    answer: 2
  },
  {
    question: '"O vento beijava suavemente o rosto da menina." Qual figura de linguagem está presente?',
    options: ['Catacrese', 'Hipérbole', 'Ironia', 'Personificação', 'Metáfora'],
    answer: 3
  },
  {
    question: '"Ele tem um apetite de leão." Qual figura de linguagem foi usada?',
    options: ['Metáfora', 'Hipérbole', 'Antítese', 'Sinestesia', 'Comparação'],
    answer: 4
  },
  {
    question: '"O mar estava bravo." Qual figura de linguagem aparece?',
    options: ['Personificação', 'Metáfora', 'Antítese', 'Sinestesia', 'Eufemismo'],
    answer: 0
  },
  {
    question: '"A multidão explodiu em aplausos." Qual figura de linguagem foi utilizada?',
    options: ['Metáfora', 'Hipérbole', 'Catacrese', 'Antítese', 'Personificação'],
    answer: 1
  },
  {
    question: '"O tempo devora tudo." Qual figura de linguagem foi empregada?',
    options: ['Antítese', 'Sinestesia', 'Catacrese', 'Personificação', 'Metáfora'],
    answer: 3
  },
  {
    question: '"Ela tem uma pele de seda." Qual figura de linguagem está presente?',
    options: ['Catacrese', 'Metonímia', 'Metáfora', 'Sinestesia', 'Comparação'],
    answer: 2
  },
  {
    question: '"O relógio gritou a hora." Qual figura de linguagem foi usada?',
    options: ['Metáfora', 'Hipérbole', 'Sinestesia', 'Antítese', 'Personificação'],
    answer: 4
  },
  {
    question: '"O mundo desabou sobre mim." Qual figura de linguagem aparece?',
    options: ['Hipérbole', 'Antítese', 'Metáfora', 'Personificação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '"Ele é um poço de bondade." Qual figura de linguagem foi utilizada?',
    options: ['Antítese', 'Metáfora', 'Sinestesia', 'Personificação', 'Catacrese'],
    answer: 1
  },
  {
    question: '"O Brasil liberou verbas para a saúde." Qual figura de linguagem foi empregada?',
    options: ['Comparação', 'Metonímia', 'Metáfora', 'Hipérbole', 'Ironia'],
    answer: 1
  },
  {
    question: '"Ela é fria como o gelo." Qual figura de linguagem está presente?',
    options: ['Sinestesia', 'Antítese', 'Comparação', 'Metáfora', 'Personificação'],
    answer: 2
  },
  {
    question: '"O vento cantava entre as árvores." Qual figura de linguagem foi usada?',
    options: ['Metáfora', 'Catacrese', 'Antítese', 'Sinestesia', 'Personificação'],
    answer: 4
  },
  {
    question: '"Ele é um rato de laboratório." Qual figura de linguagem aparece?',
    options: ['Metáfora', 'Hipérbole', 'Metonímia', 'Catacrese', 'Sinestesia'],
    answer: 0
  },
  {
    question: '"A saudade apertou o peito." Qual figura de linguagem foi utilizada?',
    options: ['Metáfora', 'Personificação', 'Catacrese', 'Antítese', 'Sinestesia'],
    answer: 1
  },
  {
    question: '"O tempo é um rio que corre sem parar." Qual figura de linguagem foi empregada?',
    options: ['Antítese', 'Hipérbole', 'Metáfora', 'Personificação', 'Catacrese'],
    answer: 2
  },
  {
    question: '"O relógio corre depressa." Qual figura de linguagem está presente?',
    options: ['Ironia', 'Sinestesia', 'Personificação', 'Metáfora', 'Antítese'],
    answer: 2
  },
  {
    question: '"O perfume suave da música embalava o ambiente." Qual figura de linguagem foi usada?',
    options: ['Catacrese', 'Sinestesia', 'Metáfora', 'Antítese', 'Personificação'],
    answer: 1
  },
  {
    question: '"Ele tem um olhar de fogo." Qual figura de linguagem aparece?',
    options: ['Metáfora', 'Catacrese', 'Personificação', 'Hipérbole', 'Sinestesia'],
    answer: 0
  },
  {
    question: '"O tempo voa." Qual figura de linguagem foi utilizada?',
    options: ['Hipérbole', 'Personificação', 'Metáfora', 'Sinestesia', 'Antítese'],
    answer: 1
  },
  {
    question: '"Ela tem uma força de gigante." Qual figura de linguagem foi empregada?',
    options: ['Sinestesia', 'Antítese', 'Comparação', 'Metáfora', 'Personificação'],
    answer: 2
  },
  {
    question: '"O relógio cansou de esperar." Qual figura de linguagem está presente?',
    options: ['Hipérbole', 'Antítese', 'Metáfora', 'Personificação', 'Sinestesia'],
    answer: 3
  },
  {
    question: '"Ela explodiu de alegria." Qual figura de linguagem foi usada?',
    options: ['Antítese', 'Metáfora', 'Sinestesia', 'Ironia', 'Hipérbole'],
    answer: 4
  },
  {
    question: '"O céu chorava aquela noite." Qual figura de linguagem está presente?',
    options: ['Personificação', 'Metáfora', 'Catacrese', 'Hipérbole', 'Antítese'],
    answer: 0
  },
  {
    question: '"Ele é uma muralha de resistência." Qual figura de linguagem foi utilizada?',
    options: ['Sinestesia', 'Metáfora', 'Catacrese', 'Personificação', 'Eufemismo'],
    answer: 1
  },
  {
    question: '"O tempo é um rio que corre sem parar." Qual figura de linguagem foi empregada?',
    options: ['Antítese', 'Hipérbole', 'Metáfora', 'Personificação', 'Catacrese'],
    answer: 2
  },
  {
    question: '"Ele é fogo e gelo ao mesmo tempo." Qual figura de linguagem predomina?',
    options: ['Antítese', 'Metáfora', 'Sinestesia', 'Paradoxo', 'Personificação'],
    answer: 3
  },
  {
    question: '"O menino é um anjo." Qual figura de linguagem está presente?',
    options: ['Sinestesia', 'Eufemismo', 'Metonímia', 'Catacrese', 'Metáfora'],
    answer: 4
  },
  {
    question: '"O tempo devora tudo." Qual figura de linguagem foi usada?',
    options: ['Personificação', 'Metáfora', 'Catacrese', 'Hipérbole', 'Antítese'],
    answer: 0
  },
  {
    question: '"Ela tem uma voz doce." Qual figura de linguagem aparece?',
    options: ['Antítese', 'Sinestesia', 'Metáfora', 'Catacrese', 'Personificação'],
    answer: 1
  },
  {
    question: '"Ele é um camaleão, muda de opinião a todo instante." Qual figura de linguagem foi empregada?',
    options: ['Sinestesia', 'Metáfora', 'Catacrese', 'Personificação', 'Hipérbole'],
    answer: 1
  },
  {
    question: '"O governo anunciou novas medidas." Qual figura de linguagem está presente?',
    options: ['Catacrese', 'Sinestesia', 'Metonímia', 'Antítese', 'Metáfora'],
    answer: 2
  },
  {
    question: '"Ela tem um sorriso radiante." Qual figura de linguagem foi utilizada?',
    options: ['Hipérbole', 'Catacrese', 'Metáfora', 'Personificação', 'Sinestesia'],
    answer: 2
  },
  {
    question: '"A noite vestiu seu manto negro." Qual figura de linguagem foi empregada?',
    options: ['Antítese', 'Hipérbole', 'Personificação', 'Metáfora', 'Catacrese'],
    answer: 3
  },
  {
    question: '"O tempo voa." Qual figura de linguagem está presente?',
    options: ['Sinestesia', 'Catacrese', 'Metáfora', 'Antítese', 'Personificação'],
    answer: 4
  },
  {
    question: '"O relógio corre depressa." Qual figura de linguagem foi usada?',
    options: ['Personificação', 'Metáfora', 'Antítese', 'Hipérbole', 'Sinestesia'],
    answer: 0
  },
  {
    question: '"Ela tem um olhar de fogo." Qual figura de linguagem aparece?',
    options: ['Antítese', 'Metáfora', 'Hipérbole', 'Catacrese', 'Personificação'],
    answer: 1
  },
  {
    question: '"O mar estava um espelho." Qual figura de linguagem foi empregada?',
    options: ['Sinestesia', 'Metáfora', 'Personificação', 'Catacrese', 'Eufemismo'],
    answer: 1
  },
  {
    question: '"O vento beijava suavemente o rosto da menina." Qual figura de linguagem está presente?',
    options: ['Catacrese', 'Hipérbole', 'Ironia', 'Personificação', 'Metáfora'],
    answer: 3
  },
  {
    question: '"Ela tem um olhar de águia." Qual figura de linguagem foi usada?',
    options: ['Metáfora', 'Catacrese', 'Sinestesia', 'Antítese', 'Personificação'],
    answer: 0
  },
  {
    question: '"O Brasil leu Machado de Assis." Qual figura de linguagem aparece?',
    options: ['Sinestesia', 'Metonímia', 'Metáfora', 'Catacrese', 'Personificação'],
    answer: 1
  },
  {
    question: '"Ele tem um coração de pedra." Qual figura de linguagem foi empregada?',
    options: ['Antítese', 'Metáfora', 'Catacrese', 'Sinestesia', 'Hipérbole'],
    answer: 1
  },
  {
    question: '"O perfume doce da música embalava o ambiente." Qual figura de linguagem está presente?',
    options: ['Ironia', 'Catacrese', 'Sinestesia', 'Metáfora', 'Personificação'],
    answer: 2
  },
  {
    question: '"Ela chorou um mar de lágrimas." Qual figura de linguagem foi utilizada?',
    options: ['Antítese', 'Hipérbole', 'Metonímia', 'Catacrese', 'Ironia'],
    answer: 1
  },
  {
    question: '"Estou morrendo de fome." Qual é a figura de linguagem?',
    options: ['Catacrese', 'Ironia', 'Metáfora', 'Hipérbole', 'Metonímia'],
    answer: 3
  },
  {
    question: '"A esperança é a última que morre." Qual figura de linguagem aparece?',
    options: ['Antítese', 'Metáfora', 'Sinestesia', 'Eufemismo', 'Personificação'],
    answer: 4
  },
  {
    question: '"Ele é uma leoa quando defende seus filhos." Identifique a figura de linguagem.',
    options: ['Sinestesia', 'Eufemismo', 'Metáfora', 'Comparação', 'Paradoxo'],
    answer: 2
  },
  {
    question: '"O silêncio gritava naquela sala." Qual figura de linguagem está presente?',
    options: ['Personificação', 'Hipérbole', 'Metáfora', 'Antítese', 'Eufemismo'],
    answer: 0
  },
  {
    question: '"Chove canivetes." Qual figura de linguagem foi empregada?',
    options: ['Eufemismo', 'Antítese', 'Metáfora', 'Catacrese', 'Personificação'],
    answer: 2
  },
  {
    question: '"O povo pediu pão." Qual figura de linguagem foi usada?',
    options: ['Sinestesia', 'Metáfora', 'Ironia', 'Personificação', 'Metonímia'],
    answer: 4
  },
  {
    question: '"Minha cabeça está fervendo de ideias." Qual figura de linguagem foi empregada?',
    options: ['Hipérbole', 'Sinestesia', 'Metáfora', 'Eufemismo', 'Catacrese'],
    answer: 2
  },
  {
    question: '"O tempo cura todas as feridas." Qual figura de linguagem está presente?',
    options: ['Antítese', 'Catacrese', 'Ironia', 'Personificação', 'Metáfora'],
    answer: 3
  },
  {
    question: '"Ele tem uma força de elefante." Qual figura de linguagem foi usada?',
    options: ['Sinestesia', 'Metáfora', 'Catacrese', 'Eufemismo', 'Comparação'],
    answer: 4
  },
  {
    question: '"O sol já sorri para nós." Qual figura de linguagem aparece?',
    options: ['Personificação', 'Hipérbole', 'Metáfora', 'Antítese', 'Sinestesia'],
    answer: 0
  },
  {
    question: '"Ele é uma enciclopédia ambulante." Qual figura de linguagem foi utilizada?',
    options: ['Metonímia', 'Metáfora', 'Catacrese', 'Ironia', 'Eufemismo'],
    answer: 1
  },
  {
    question: '"O Brasil chorou a morte do ídolo." Qual figura de linguagem foi empregada?',
    options: ['Sinestesia', 'Catacrese', 'Hipérbole', 'Metonímia', 'Antítese'],
    answer: 3
  },
  {
    question: '"Ela tem mãos de fada." Qual figura de linguagem está presente?',
    options: ['Antítese', 'Sinestesia', 'Metáfora', 'Eufemismo', 'Personificação'],
    answer: 2
  },
  {
    question: '"O relógio cansou de esperar." Qual figura de linguagem foi usada?',
    options: ['Metáfora', 'Ironia', 'Eufemismo', 'Personificação', 'Catacrese'],
    answer: 3
  },
  {
    question: '"Ele é um rato de biblioteca." Qual figura de linguagem aparece?',
    options: ['Sinestesia', 'Catacrese', 'Personificação', 'Metáfora', 'Metonímia'],
    answer: 4
  },
  {
    question: '"A esperança floresceu em seu peito." Qual figura de linguagem foi utilizada?',
    options: ['Metáfora', 'Antítese', 'Sinestesia', 'Hipérbole', 'Catacrese'],
    answer: 0
  },
  {
    question: '"O tempo é dinheiro." Qual figura de linguagem foi empregada?',
    options: ['Antítese', 'Metonímia', 'Metáfora', 'Personificação', 'Eufemismo'],
    answer: 2
  },
  {
    question: '"O vento beijava suavemente o rosto da menina." Qual figura de linguagem está presente?',
    options: ['Catacrese', 'Hipérbole', 'Ironia', 'Personificação', 'Metáfora'],
    answer: 3
  },
  {
    question: '"Ele tem um apetite de leão." Qual figura de linguagem foi usada?',
    options: ['Metáfora', 'Hipérbole', 'Antítese', 'Sinestesia', 'Comparação'],
    answer: 4
  }
];

var questions = []; // será preenchido ao iniciar o quiz

var currentQuestion = 0;
var correctAnswers = 0;
var selectedOption = null;
var timerInterval = null;
var elapsedSeconds = 0;
var acertosSeguidos = 0;

// Barra de progresso
function updateProgressBar() {
  var fill = document.getElementById("progress-bar-fill");
  var text = document.getElementById("progress-text");
  var total = questions.length;
  var atual = currentQuestion;
  if (atual > total) atual = total;
  var percent = Math.round((atual / total) * 100);
  fill.style.width = percent + "%";
  text.textContent = "Pergunta " + (atual + 1 > total ? total : atual + 1) + " de " + total;
}

function showProgressBar() {
  document.getElementById("progress-bar-container").style.display = "block";
  updateProgressBar();
}

function hideProgressBar() {
  document.getElementById("progress-bar-container").style.display = "none";
}

// Cronômetro
function formatTime(sec) {
  var min = Math.floor(sec / 60);
  var s = sec % 60;
  return (min < 10 ? "0" : "") + min + ":" + (s < 10 ? "0" : "") + s;
}

function startTimer() {
  elapsedSeconds = 0;
  document.getElementById("timer").style.display = "block";
  document.getElementById("time").textContent = "00:00";
  timerInterval = setInterval(function () {
    elapsedSeconds++;
    document.getElementById("time").textContent = formatTime(elapsedSeconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// Telas principais
function showStartScreen() {
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("quitBtn").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("result").innerHTML = "";
  hideProgressBar();
  var feedbackDiv = document.getElementById("feedback");
  feedbackDiv.textContent = "";
  feedbackDiv.className = "";
}

function startQuiz() {
  questions = getRandomQuestions(allQuestions, 20);
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("quitBtn").style.display = "inline-block";
  currentQuestion = 0;
  correctAnswers = 0;
  acertosSeguidos = 0;
  startTimer();
  showProgressBar();
  showQuestion();
}

function showQuestion() {
  var quizDiv = document.getElementById("quiz");
  var nextBtn = document.getElementById("nextBtn");
  var resultDiv = document.getElementById("result");
  var feedbackDiv = document.getElementById("feedback");
  resultDiv.textContent = "";
  feedbackDiv.textContent = "";
  feedbackDiv.className = "";
  selectedOption = null;
  document.getElementById("quitBtn").style.display = "inline-block";
  updateProgressBar();

  if (currentQuestion < questions.length) {
    var q = questions[currentQuestion];
    var html = '<div class="question">' + q.question + "</div><div class='options'>";
    for (var idx = 0; idx < q.options.length; idx++) {
      html +=
        '<label data-idx="' +
        idx +
        '"><input type="radio" name="option" value="' +
        idx +
        '"> ' +
        q.options[idx] +
        "</label>";
    }
    html += "</div>";
    quizDiv.innerHTML = html;
    nextBtn.style.display = "inline-block";
    nextBtn.disabled = true;
    quizDiv.style.display = "block";

    var labels = document.querySelectorAll(".options label");
    for (var i = 0; i < labels.length; i++) {
      labels[i].onclick = function () {
        for (var j = 0; j < labels.length; j++) {
          labels[j].classList.remove("selected", "incorrect");
        }
        this.classList.add("selected");
        selectedOption = parseInt(this.getAttribute("data-idx"), 10);
        nextBtn.disabled = false;
      };
    }
    window.scrollTo(0, 0);
  } else {
    showResult();
  }
}

function checkAnswer() {
  if (selectedOption === null) {
    alert("Selecione uma opção!");
    return;
  }
  var correctIdx = questions[currentQuestion].answer;
  var labels = document.querySelectorAll(".options label");
  var feedbackDiv = document.getElementById("feedback");

  if (selectedOption === correctIdx) {
    labels[selectedOption].classList.add("selected");
    correctAnswers++;
    acertosSeguidos++;
    if (acertosSeguidos >= 3) {
      feedbackDiv.className = "feedback-excelencia";
      feedbackDiv.textContent = fraseAleatoria(frasesExcelencia);
    } else {
      feedbackDiv.className = "feedback-acerto";
      feedbackDiv.textContent = fraseAleatoria(frasesAcerto);
    }
    setTimeout(function () {
      currentQuestion++;
      showQuestion();
    }, 900);
  } else {
    labels[selectedOption].classList.add("incorrect");
    labels[correctIdx].classList.add("selected");
    feedbackDiv.className = "feedback-erro";
    feedbackDiv.textContent = fraseAleatoria(frasesErro);
    acertosSeguidos = 0;
    setTimeout(function () {
      currentQuestion++;
      showQuestion();
    }, 1400);
  }
}

function showResult() {
  var quizDiv = document.getElementById("quiz");
  var nextBtn = document.getElementById("nextBtn");
  var restartBtn = document.getElementById("restartBtn");
  var quitBtn = document.getElementById("quitBtn");
  var resultDiv = document.getElementById("result");
  var feedbackDiv = document.getElementById("feedback");
  quizDiv.innerHTML = "";
  quizDiv.style.display = "none";
  nextBtn.style.display = "none";
  quitBtn.style.display = "none";
  feedbackDiv.textContent = "";
  feedbackDiv.className = "";
  stopTimer();
  hideProgressBar();
  var tempo = formatTime(elapsedSeconds);
  if (correctAnswers === questions.length) {
    resultDiv.innerHTML =
      '🎉 Parabéns! Você escapou da Biblioteca Encantada e acertou todas as questões!<br><span style="color:#1cb0f6;">⏱️ Seu tempo: ' +
      tempo +
      "</span>";
  } else {
    resultDiv.innerHTML =
      "Você acertou " +
      correctAnswers +
      " de " +
      questions.length +
      '.<br>⏱️ Seu tempo: ' +
      tempo +
      "<br>Tente novamente para escapar!";
  }
  restartBtn.style.display = "inline-block";
}

// Mostra resultado parcial ao desistir
function quitQuiz() {
  stopTimer();
  var resultDiv = document.getElementById("result");
  var quizDiv = document.getElementById("quiz");
  var nextBtn = document.getElementById("nextBtn");
  var restartBtn = document.getElementById("restartBtn");
  var quitBtn = document.getElementById("quitBtn");
  var feedbackDiv = document.getElementById("feedback");
  var tempo = formatTime(elapsedSeconds);
  var erros = currentQuestion - correctAnswers;
  quizDiv.innerHTML = "";
  quizDiv.style.display = "none";
  nextBtn.style.display = "none";
  quitBtn.style.display = "none";
  feedbackDiv.textContent = "";
  feedbackDiv.className = "";
  hideProgressBar();

  resultDiv.innerHTML =
    "<span style='color:#ff4b4b;'>Você desistiu do desafio.</span><br>" +
    "Acertos: <b>" + correctAnswers + "</b><br>" +
    "Erros: <b>" + erros + "</b><br>" +
    "Perguntas respondidas: <b>" + currentQuestion + "</b> de <b>" + questions.length + "</b><br>" +
    "⏱️ Seu tempo: " + tempo +
    "<br><br>Clique em <b>Reiniciar</b> para tentar novamente!";
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  showStartScreen();
}

// Inicialização dos eventos
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("startBtn").onclick = startQuiz;
  document.getElementById("nextBtn").onclick = checkAnswer;
  document.getElementById("restartBtn").onclick = restartGame;
  document.getElementById("quitBtn").onclick = quitQuiz;
  showStartScreen();
});
