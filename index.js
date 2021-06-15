var readLineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
var score = 0;

//welcome_part
var userName = readLineSync.question("Hey! Whats your name?:\t ")
log("Welcome "+userName+ " to the DO YOU KNOW!! Mahesh...");
var userResponse = readLineSync.question("Would you like to take this quiz related to me(y/n): ")
if(userResponse.toUpperCase()=="Y"){
  log("So lets get started...")
  //highScores
var highScores =[
  {
    name:"Gulshan",
    score:7
  }
  ,
  {
    name:"Pankaj",
    score:6
  }
  ,
  {
    name:"Rushi",
    score:5
  }
]

//function
function quiz(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    log(chalk.black.bgGreen("Correct!!"));
    score++;
  }else{
    log(chalk.black.bgRed("Nope!!"));
  }
  log("Current Score: "+score);
}

//question_list
var questions = [
  {
    question:"Whats my birthdate?\n",
    answer:"19"
  }
  ,
  {
    question:"Whats my hobby?\n",
    answer:"reading"
  }
  ,
  {
    question:"Whos my favourite yotuber?\n ",
    answer:"Prakhar"
  }
  ,
  {
    question:"Whats the name of my favourite book?\n",
    answer:"siddhartha"
  }
  ,
  {
    question:"My favourite anime?\n",
    answer:"jojo"
  }
  ,
  {
    question:"What music instrument do I have?\n",
    answer:"ukulele"
  }
  ,
  {
    question:"Whats my 12th score(%)\n",
    answer:"79.23"
  }
  ,
  {
    question:"Which bike do I have?\n",
    answer:"hornet"
  }
]
//questions_for_loop
for(var i = 0;i<questions.length;i++){
  currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}
log("Thanks!! for taking this quiz your score was "+score);
log("Below are some of the highest scores. Send me screenshot if you have broke any record:)");
log("-----------------------")
//highScores_for_loop
for(var i =0;i<highScores.length;i++){

  log(highScores[i].name+" ==> "+ highScores[i].score)
}

}else{
  log("Ok! You might want something else this moment see yaa!")
}
