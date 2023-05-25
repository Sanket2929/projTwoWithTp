const readlineSync = require(`readline-sync`);

//welcome user
let userName = readlineSync.question(`what is your name ?\n`)

console.log(`welcome ${userName} to the game HERA FERI FANDOM `);
console.log(`lets start the quiz game`);

//for space
console.log("\n")

let score = 0;

function playTheGame(question,answer){
  let userAnswer = readlineSync.question(question)
  if(userAnswer === answer){
    console.log(`your answer is right`)
    score = ++score
  }else{
    console.log(`your answer is wrong`)
  }
  console.log(`your score is :- ${score}`)
  console.log(`-------------------------`)
}
//array of objects 
let questions = [{
     question:`what is the full  name of babu bhaiya ?\n a) baburao ganpatrao apte \n b) baburao ganpat patil\n c) baburao ganpatrao waghmare \n`, 
     answer :`a`
  },
  {
    question : `which degree do raju has ?\n a) MBA \n b) ITUS\n c) Dr\n`,
    answer :`b`
  },
  {
    question : `which song sham hears when he sign the form ?\n a) natu natu \n b) sunraha hai na tu\n c) golmal hai bhai sab golmal hai\n`,
    answer : `c`
  },
  {
    question : `what is the name of bhangarwala in movie ? \n a) kabira \n b) kachra seth\n c) peter\n`,
    answer :`b`
  },
  {
    question :`which is the hometown of babu bhaiya ? \n a) kolhapur \n b) nagar\n c) pune\n`,
    answer :`a`
  },
  {
    question : `how much time do totla tiwari gives to raju sham and babu bhaiya to return his money ?\n a) 3 din \n b) 30 saal\n c) 3 mahine\n`,
    answer :`a`
  },
 {    
    question : `which animal attacks munna bhai in movie ?\n a) dog \n b) tiger \n c) gorilla\n`,
      answer :`c`
 
 },
 {
    question : `name of the circus where raju calls tiwari to give his money back ? \n a) jumbo circus \n b) royal circus \n c) african circus \n`,
     answer :`b`
 },
 {
    question : `in which costume raju sham and babu bhaiya go's to loot munnas room ? \n a) police uniform \n b) cricket uniform \n c) joker's costume \n`,
     answer :`c`
 },
 {
     question : `what is the name of orchestra in the ending of the movie ? \n a) dhum dhadaka orchestra \n b) surile orchestra \n c) nacho orchestra \n`,
     answer :`a`

  }]


for (let i = 0; i < questions.length; ++i){
  let currentQuestion = questions[i]
  playTheGame(currentQuestion.question,currentQuestion.answer)
}

//high score chart
let highScoreChart = [
  {
    name : `sanket : `,
    highScore : 10
  }
  ,
  {
    name : `abhishek : `,
    highScore : 10
  },{
    name : `Omkar : `,
    highScore : 10
  }
]

console.log(score > 7 ? `${userName} you know every little thing about this movie. `:`you need to see this movie one more time.`)

console.log(`quiz game is over now your score is ${score} till now.`)


                                  
//to show the high Score Chart

    function showHighScoreBoard(){
        let giveMeHighScore = readlineSync.question(`do you want to see the score board ? \n a) yes \n b) no \n`)
        if(giveMeHighScore === `a`){
            for(let i = 0; i < highScoreChart.length; ++i){
                let currentScore = highScoreChart[i]
                console.log(currentScore.name,currentScore.highScore)
            }
        }else{
            console.log(`ok bye then.`)
        }
    }
    
showHighScoreBoard()
    


    
