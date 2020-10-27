/**
 GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
 */

 //define q & a
 const questions = [
    {
        questionNum: 'What do we use to style our webpage?',
        a: 'css' ,
        b: 'html',
        c: 'javascript',
        d: 'python',
        answer: 'css'
    },
    {
        questionNum: 'What is a variable that can store multiple other variables known as?',
        a: 'function' ,
        b: 'nested loop',
        c: 'array',
        d: 'boolean',
        answer: 'array'
    },
    {
        questionNum: 'What do we call a variable whos scope is the entire program ?',
        a: 'universal' ,
        b: 'global',
        c: 'local',
        d: 'boolean',
        answer: 'global'
    },
    {
        questionNum: 'Bundling behavior that is associated with data and assigned to a class is called?',
        a: 'abstraction' ,
        b: 'inheritance',
        c: 'polymorphism',
        d: 'encapsulation',
        answer: 'encapsulation'
    },
    {
        questionNum: 'The greatest basketball team of all time is',
        a: 'thunder' ,
        b: 'kings',
        c: 'bulls',
        d: 'celtics',
        answer: 'kings'
    },
]


 //game logic
 //globals
 let index = 0;
 let timer;
 let time = 100
 let score = 0


 var currentQ = questions[index].questionNum
 var correctAns = questions[index].answer
 console.log(currentQ)
 questions[index].a = document.querySelector('#A')

 //when start button is clicked start the game
 function inGame(){
     //function globals
        runTimer(100)
        loadNextQ(index)  
     }
     

 
 //when game starts start timer and question 1
 function runTimer(time){
     console.log('timer started')
     console.log(time)
     timer = setInterval(function(){
         if (time > 0){
            time--
            document.querySelector('#timer').innerHTML = time
         }else{
             clearInterval(time)
         }
     }, 1000)
        return time;
 }
 //when answer is chosen check answer against question[i]
 function checkAnswer(){
     if (currentQ , questions.length && time > 0){
        currentQ++
        loadNextQ(currentQ)

     }
     

 }
 //when correct answer add 1 
 
 // when incorrect subtract time
 //load next question
 function loadNextQ(currentQIndex){
     console.log(questions[currentQIndex])

     checkAnswer()

 }
 //when all questions are answered, get initals and save and present score and initials
 function scoreData(){

 }

 //ui logic
 
 //button for inGame
 document.querySelector('#start').addEventListener('click', inGame)

 //document.querySelector('#quiz').addEventListener('click', function(e){
   // if (e.target.classlist.contains('option')) {
     //   return
    //}
    //add to score

 //})
 //button for subit answer

  var answerA = document.querySelector('#A').addEventListener('click', window.onload = function(){
    index++
    loadNextQ(index)
})