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
    //highScores_list
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

  //functions_for_quiz
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
  //function_for_highscorer
    function highscorer(currentscore){
    if(highScores[0].score<=currentscore){
      log("Your score was "+score+"/8 & it looks like you have achieved high score.  Please send me screenshot of ths and thank you for knowing me this better:) ")
      }else if(highScores[1].score==currentscore){
        log("Your score was "+score+"/8 you are 2nd highest scorer please send me screenshot of this , Thank you!! for taking this quiz");
      }else if(highScores[2].score==currentscore){
        log("Your score was "+score+"/8 you are 3rd highest scorer please send me screenshot of this, Thank you!! for taking this quiz")
      }else{
        log(" Your score was "+score+"/8 looks like you didnt make into top 3 but Thanks for taking this quiz")
      }
      log("Below are current top 3 highest scores. )");
    log("-----------------------")

  //loop_for_highScores
  for(var i =0;i<highScores.length;i++){

    log(highScores[i].name+" ==> "+ highScores[i].score)
  }

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
  //function_calling_1
  for(var i = 0;i<questions.length;i++){
    currentQuestion = questions[i];
    quiz(currentQuestion.question,currentQuestion.answer);
  }
  //function_calling_2

    highscorer(score)
  }

  //(y/n)==n
  else{
    log("Ok! You might want something else this moment see yaa!")
  }
