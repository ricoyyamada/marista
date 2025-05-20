// Compatível com Chrome e Safari
const questions = [
  // ... (mesmo conteúdo das perguntas já fornecidas)
  {
    question: '1. Qual tempo verbal está em destaque? "Eu tinha estudado para a prova, mas esqueci tudo."',
    options: ['Pretérito perfeito', 'Pretérito mais-que-perfeito', 'Futuro do presente'],
    answer: 1
  },
  {
    question: '2. "Livros incríveis" – a classificação morfológica de "incríveis" é:',
    options: ['Advérbio', 'Adjetivo', 'Substantivo'],
    answer: 1
  },
  {
    question: '3. Identifique a oração subordinada adverbial: "Voltei cedo porque estava cansado."',
    options: ['Final', 'Temporal', 'Causal'],
    answer: 2
  },
  {
    question: '4. Reescreva na voz passiva: "O poeta escreveu o soneto."',
    options: [
      'O soneto foi escrito pelo poeta.',
      'O soneto é escrito pelo poeta.',
      'O poeta foi escrito pelo soneto.'
    ],
    answer: 0
  },
  {
    question: '5. Qual pontuação completa a frase? "Ana disse ___ Preciso estudar ___"',
    options: [': —', ', ...', '; —'],
    answer: 0
  },
  {
    question: '6. Quem escreveu "Dom Casmurro"?',
    options: ['Machado de Assis', 'José de Alencar', 'Carlos Drummond de Andrade'],
    answer: 0
  },
  {
    question: '7. O romance "Iracema" pertence a qual movimento literário?',
    options: ['Romantismo', 'Realismo', 'Modernismo'],
    answer: 0
  },
  {
    question: '8. Complete o verso de Carlos Drummond: "No meio do caminho tinha uma pedra / Tinha uma pedra no meio do caminho..." (Quantas vezes "pedra" aparece?)',
    options: ['2', '3', '4'],
    answer: 1
  },
  {
    question: '9. Qual característica define o Realismo?',
    options: ['Idealização do amor', 'Crítica social', 'Fuga da realidade'],
    answer: 1
  },
  {
    question: '10. Quem é o autor de "Vidas Secas"?',
    options: ['Jorge Amado', 'Graciliano Ramos', 'Manuel Bandeira'],
    answer: 1
  },
  {
    question: '11. Qual é o tema central do texto: "O verão em Belém é úmido, mas o cheiro de açaí no Ver-o-Peso traz alívio..."?',
    options: ['Cultura amazônica', 'Política local', 'Economia regional'],
    answer: 0
  },
  {
    question: '12. O que o trecho "herança dos indígenas" sugere?',
    options: ['Influência histórica', 'Mudança climática', 'Festa popular'],
    answer: 0
  },
  {
    question: '13. Identifique uma linguagem figurada no texto ("cheiro de açaí traz alívio").',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '14. Complete: "Ele ____ a mesa com cuidado."',
    options: ['pôs', 'pos', 'pous'],
    answer: 0
  },
  {
    question: '15. Corrija: "A professora deu vários exemplos mas os alunos não prestaram atenção." (Qual palavra precisa de vírgula antes?)',
    options: ['mas', 'deu', 'atenção'],
    answer: 0
  },
  {
    question: '16. Use o acento certo: "Ele bebeu cafeina demais."',
    options: ['cafeina', 'cafeína', 'caféina'],
    answer: 1
  },
  {
    question: '17. O plural de "cidadão" é:',
    options: ['cidadões', 'cidadãos', 'cidadães'],
    answer: 1
  },
  {
    question: '18. Assinale a alternativa em que há erro de concordância:',
    options: ['Os alunos trouxeram seus livros.', 'Fazem dois anos que estudo aqui.', 'Havia muitas pessoas na festa.'],
    answer: 1
  },
  {
    question: '19. Em "A menina correu rapidamente", "rapidamente" é:',
    options: ['Verbo', 'Advérbio', 'Adjetivo'],
    answer: 1
  },
  {
    question: '20. Qual frase está correta?',
    options: ['Fazem três meses que não chove.', 'Faz três meses que não chove.', 'Já se passaram três mêses que não chove.'],
    answer: 1
  }
];

var currentQuestion = 0;
var correctAnswers = 0;
var selectedOption = null;

function showQuestion() {
  var quizDiv = document.getElementById('quiz');
  var nextBtn = document.getElementById('nextBtn');
  var resultDiv = document.getElementById('result');
  resultDiv.textContent = '';
  selectedOption = null;

  if (currentQuestion < questions.length) {
    var q = questions[currentQuestion];
    var html = '<div class="question">' + q.question + '</div><div class="options">';
    for (var idx = 0; idx < q.options.length; idx++) {
      html += '<label data-idx="' + idx + '"><input type="radio" name="option" value="' + idx + '"> ' + q.options[idx] + '</label>';
    }
    html += '</div>';
    quizDiv.innerHTML = html;
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = true;

    // Seleção de opções ao estilo Duolingo
    var labels = document.querySelectorAll('.options label');
    for (var i = 0; i < labels.length; i++) {
      labels[i].onclick = function() {
        for (var j = 0; j < labels.length; j++) {
          labels[j].classList.remove('selected', 'incorrect');
        }
        this.classList.add('selected');
        selectedOption = parseInt(this.getAttribute('data-idx'), 10);
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
    alert('Selecione uma opção!');
    return;
  }
  var correctIdx = questions[currentQuestion].answer;
  var labels = document.querySelectorAll('.options label');
  if (selectedOption === correctIdx) {
    labels[selectedOption].classList.add('selected');
    correctAnswers++;
    setTimeout(function() {
      currentQuestion++;
      showQuestion();
    }, 300);
  } else {
    labels[selectedOption].classList.add('incorrect');
    labels[correctIdx].classList.add('selected');
    setTimeout(function() {
      currentQuestion++;
      showQuestion();
    }, 700);
  }
}

function showResult() {
  var quizDiv = document.getElementById('quiz');
  var nextBtn = document.getElementById('nextBtn');
  var restartBtn = document.getElementById('restartBtn');
  var resultDiv = document.getElementById('result');
  quizDiv.innerHTML = '';
  nextBtn.style.display = 'none';
  if (correctAnswers === questions.length) {
    resultDiv.innerHTML = '🎉 Parabéns! Você escapou da Biblioteca Encantada e acertou todas as questões!';
  } else {
    resultDiv.innerHTML = 'Você acertou ' + correctAnswers + ' de ' + questions.length + '. <br> Tente novamente para escapar!';
  }
  restartBtn.style.display = 'inline-block';
}

function restartGame() {
  currentQuestion = 0;
  correctAnswers = 0;
  document.getElementById('restartBtn').style.display = 'none';
  showQuestion();
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('nextBtn').onclick = checkAnswer;
  document.getElementById('restartBtn').onclick = restartGame;
  showQuestion();
});
