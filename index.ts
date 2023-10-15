#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
import showBanner from 'node-banner';
import choices from 'inquirer/lib/objects/choices.js';


    

console.log(chalk.blue("try a number between 1 to 10")); 
let actualNumber:number=9;
let NumTries:number = 3


while (NumTries>0) {
    const answers = await inquirer.prompt([

    {
        name:"YourGuess",
        type:"number",
        message:"Enter a number",
    },
])


    console.log(answers);
    if(answers.YourGuess==actualNumber ){
        console.log(chalk.blue("hurray,You guessed the right number"));
        NumTries==0;
    }
    else
    {
        console.log(chalk.blue("sorry,You guessed the wrong number"));
    }
    if (actualNumber>answers.YourGuess) {
        console.log(chalk.blue("Think about a Higher number"));
    }
     else{
        console.log(chalk.blue("Think about a Lower number"));
        }
        console.log(chalk.blue(`You have ${NumTries-1} left`));

NumTries--;
    }





    
    
