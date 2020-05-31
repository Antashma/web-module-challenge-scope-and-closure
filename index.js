// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
myVillagers = [
  'Rex', 'Agnes', 'Billy', 'Truffles', 'Phil', 'Chops', 'Tiffany', 'Harry', 'Gonzo', 'Kiki'
];
console.log('#### EXAMPLE CHALLENGE ####');
console.log(
  processFirstItem(myVillagers, (str) => str + str)
)
// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 counter1 has a nested function within another function and its variables are within the function scope.
 counter2 has no nested function and is using a varible that is declared outside of it's scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 Both codes use closure. I can tell because the functions in both are able to access the data they need carry out their purpose without an error.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 counter1 code would be preferrable if you needed to have the certain data contained within a block of code. For example, you might not want other functions to have access to the count variable since it could be easily manipulated if it was global. counter2 would be better if the count varaible was needed by other functions in the code. 
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(min, max){
const points = Math.floor(Math.random() *  (max - min + 1)) + min;
return points;
}
// retreived from: https://www.w3schools.com/js/js_random.asp

console.log('#### TASK 2 ####');
console.log(inning(0, 2));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, num){
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < num; i++) {
    let pointsScoredHome = callback(0,2);
    let pointsScoredAway = callback(0,2);
    homeScore += pointsScoredHome;
    awayScore += pointsScoredAway;
    //console.log( [homeScore, awayScore])     
    };
  const endGameScore = {
    'Home': homeScore,
    'Away': awayScore
  }
  return endGameScore;
}

console.log('#### TASK 3 ####');
console.log(
  finalScore(inning, 9)
  );

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(callback, num) {
  let homeScore = 0;
  let awayScore = 0;
  let scoresArr = [];
  const gameResults = {};
  //generate ea inning score
  for (let i = 0; i < num; i++) {
    let pointsScoredHome = callback(0,2);
    let pointsScoredAway = callback(0,2);
    homeScore += pointsScoredHome;
    awayScore += pointsScoredAway;
    //adds to array: [inning number, home scored, away scored]
    scoresArr.push([(i + 1), homeScore, awayScore]); 
    };
    for (let i = 0; i < scoresArr.length; i++) {
      let place = () => {
        if (i + 1 === 1 ) {
          return 'st';
        } else if (i + 1 === 2) {
          return 'nd';
        } else if (i + 1 === 3 ) {
          return 'rd';
        } else  {
          return 'th';	
        }
      }
        gameResults['inn' + (i + 1)] = `${i + 1}${place()} Inning: ${scoresArr[i][1]} - ${scoresArr[i][2]}`;
      };
        gameResults.final = `Final Score: ${homeScore} - ${awayScore}`;
    return Object.values(gameResults); 
}

console.log('#### TASK 4 ####')
console.log(
  scoreboard(inning, 9)
);


