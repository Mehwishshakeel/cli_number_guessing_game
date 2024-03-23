#!/usr/bin/env node
import inquirer from "inquirer";
import error from "inquirer";
// computer will generate a random number Done
// user input for guessing number         Done
// compare user input for computer generated number and show result   Done
const randomNumber = Math.floor(Math.random() * 10+1) ;

const answers =await inquirer.prompt([
    {
    name:"userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-10:",

    },
])
if(answers.userGuessedNumber === randomNumber){
    console.log("congretulations!! you guessed a right number");
} else{
    console.log("You guessed a wrong number");
}

    

