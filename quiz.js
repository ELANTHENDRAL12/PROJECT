const questions=[
    {
    question:"What is HTML?",
    answers:[
        {text:"A programming language",correct:false},
        {text:"A markup language",correct:true},
        {text:"A database",correct:false},
        {text:"An operating system",correct:false}
    ]
},
 {
    question:"What is CSS?",
    answers:[
        {text:"A programming language",correct:false},
        {text:"A markup language",correct:false},
        {text:"A styling language",correct:true},
        {text:"An operating system",correct:false}
    ]
},
{
    question:"What is JAVASCRIPT?",
    answers:[
        {text:"A programming language",correct:true},
        {text:"A markup language",correct:false},
        {text:"A database",correct:false},
        {text:"An operating system",correct:false}
    ]
},
{
    question:"What is REACT.JS?",
    answers:[
        {text:"A programming language",correct:false},
        {text:"A library",correct:true},
        {text:"A database",correct:false},
        {text:"An operating system",correct:false}
    ]
},

{
    question:"What is NODE.JS?",
    answers:[
        {text:"A programming language",correct:false},
        {text:"A library",correct:false},
        {text:"A runtime environment",correct:true},
        {text:"An operating system",correct:false}
    ]
},
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
});
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
        }
}
function selectAnswer(e){
  const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}


function handleNextButton(){
     currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}



nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
       handleNextButton();
    }
    else{
        startQuiz();
        
    }
});
startQuiz();

