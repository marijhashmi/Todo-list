import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([{
            type: 'input',
            name: 'todo',
            message: 'Enter the todo list: '
        },
        {
            type: 'confirm',
            name: 'retry',
            message: 'Again Enter todo list : ',
            default: false
        }
    ]);
    const { todo, retry } = answer;
    loop = retry;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log(chalk.redBright("Enter Invalid Input!"));
    }
}
for (let i = 0; i < todos.length; i++) {
    console.log(chalk.blueBright("Your Todo list: \n"));
    console.log(`${i + 1}. ${todos[i]}\n`);
    if (todos.length < 0) {
        console.log(chalk.red(`You have no tasks in your to do list!`));
    }
}
