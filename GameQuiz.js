
const skipperImg = new Image();
skipperImg.src ="skipper_hero.jpg"
const kowalskiImg = new Image();
kowalskiImg.src ="kowalski_hero.jpg"
const ricoImg = new Image();
ricoImg.src ="rico_hero.jpg"
const privateImg = new Image();
privateImg.src ="private_hero.jpg"


const quiz = document.getElementById("Quiz");
const options = document.getElementById("options").children;
const question= document.getElementById("question")
let quizScore = 0;
const questions =[
  ["Your fear...","fear3.png","fear1.png","fear2.png","cockroach.png"],// sources
  ["Which weapon do you prefer?","QuizWeapon2.jpg","dynamite.png","hammer.png","Quizweapon1.png"],
  ["Your favourite food...","sushi.PNG","tropicalfruits.png","paperclip.png","icecream.png"],
  ["What is your preferable profession?","SPY.png","madscientist.png","psychopath.png","soldier.PNG"],
  ["Your favourite place...","spain.png","norway.png","qajaran.png","kipr.png"]
]
question.innerHTML=questions[0][0];//first question
for(let i =0;i<4;i++)//first img
{
  options[i].src=questions[0][i+1];
  options[i].style.display="inline"
}

let currentQuestion = 0;

for(let i = 0;i<4;i++){
  options[i].addEventListener("click",function(){
    currentQuestion++;
    quizScore+=i+1;
    if(currentQuestion>=5){startTheGame(); return;}
    question.innerHTML=questions[currentQuestion][0];//harcna poxum
    for(let j = 0;j<4;j++)
    {
        options[j].src = questions[currentQuestion][j+1];//optionna poxum
    }

  })
}






const startTheGame= function ()//Taron
{
  let source="";

  if(quizScore<9) {
  source ="skipper_hero.jpg"
  }//shkiper
  else if(quizScore<13){
    source="kowalski_hero.jpg"
  }// kovalski
  else if(quizScore<17){
    source  ="rico_hero.jpg"
  }// rico
  else {
    source  ="private_hero.jpg"
  }// private
  quiz.innerHTML="<img src='"+source+"' width=500 height=500 id='result'>";
  setTimeout(function(){quiz.addEventListener("click",function(e){quiz.innerHTML=""})},100)

}
