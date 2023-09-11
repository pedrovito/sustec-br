const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "1- O que significa a sigla IoT?",
    answers: [
      { text: "IoT significa “Internet para Coisas", correct: false },
      { text: "IoT significa “Internet sobre as Coisas", correct: false },
      { text: "IoT significa Internet das Coisas", correct: true },
      
    ]
  },
  {
    question: "2- Qual das seguintes fontes de energia é considerada a mais sustentável?",
    answers: [
      { text: "Energia solar", correct: true },
      { text: "Carvão", correct: false },
      { text: "Petróleo", correct: false },
      
    ]
  },
  {
    question: '3- O que é Sustentabilidade?',
    answers: [
      { text: 'Atender necessidades atuais sem comprometer as futuras.', correct: true },
      { text: 'Atender necessidades passadas sem comprometer as futuras', correct: false },
      { text: 'Atender necessidades futuras sem comprometer as atuais.', correct: false },
      
    ]
  },
  {
    question: '4- Qual é o objetivo principal da reciclagem de eletrônicos?',
    answers: [
      { text: "Reduzir a produção de eletrônicos", correct: false },
      { text: "Reaproveitar componentes e materiais valiosos", correct: true },
      { text: "Aumentar o consumo de recursos naturais", correct: false }
    ]
  },
  {
    question: '5- Quais desses NÃO é um impacto ambiental?',
    answers: [
      { text: 'Desmatamento', correct: false },
      { text: 'Tempestades', correct: true },
      { text: 'Elevada emissão de CO2', correct: false },
      
    ]
  },
  {
    question: '6- Qual das seguintes alternativas é um exemplo de edifício sustentável?',
    answers: [
      { text: 'Um edifício sem isolamento térmico', correct: false },
      { text: 'Um edifício com painéis solares e sistemas de reciclagem de água', correct: true },
      { text: 'Um edifício com todas as luzes acesas o tempo todo', correct: false },
      
    ]
  },
  {
    question: '7- O que significa a sigla "IA" no contexto da tecnologia?',
    answers: [
      { text: 'Aprendizado Interativo', correct: false },
      { text: 'Aplicação Inteligente', correct: false },
      { text: 'Inteligência Artificial', correct: true },
    ]
  },
]