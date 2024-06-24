const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const computer_choice = document.getElementById('computer-choice');
const player_choice = document.getElementById('player-choice');
const player_scores = document.getElementById('player-scores');
const computer_scores = document.getElementById('computer-scores');
const winner_display = document.getElementById('winner-display');
const list_of_choices = ['rock', 'paper', 'scissors'];
let player_points = 0;
let computer_points = 0;


function computer_choice_fun() {
    let random_choice = Math.floor((Math.random() * 3));
    return  list_of_choices[random_choice];
}

rock.addEventListener('click', (event) => {

    let computer_choices = computer_choice_fun();

    if (computer_choices ===  'rock') {
        winner_display.textContent = 'It a tie 🪢!';
        player_choice.textContent = `player choose : rock 👊`;
        computer_choice.textContent = `computer choose : ${computer_choices} 👊`;
    }
    else if (computer_choices === 'paper') {
        computer_points++;
        player_choice.textContent = `player choose : rock 👊`;
        computer_choice.textContent = `computer choose : ${computer_choices} 🖐️`;
        winner_display.textContent = 'Computer won 🥳!';
        computer_scores.textContent = `computer points : ${computer_points}`;
    }
    else if (computer_choices === 'scissors') {
        player_points++;
        winner_display.textContent = 'You won 🥳!';
        player_choice.textContent = `player choose : rock 👊`;
        computer_choice.textContent = `computer choose : ${computer_choices} ✌️`;
        player_scores.textContent = `computer points : ${player_points}`;
    }
    
})

paper.addEventListener('click', (event) => {

    let computer_choices = computer_choice_fun();

    if (computer_choices ===  'paper') {
        winner_display.textContent = 'It a tie 🪢!';
        player_choice.textContent = `player choose : paper 🖐️`;
        computer_choice.textContent = `computer choose : ${computer_choices} 👊`;
    }
    else if (computer_choices === 'scissors') {
        computer_points++;
        player_choice.textContent = `player choose : paper 🖐️`;
        computer_choice.textContent = `computer choose : ${computer_choices} 🖐️`;
        winner_display.textContent = 'Computer won 🥳!';
        computer_scores.textContent = `computer points : ${computer_points}`;
    }
    else if (computer_choices === 'rock') {
        player_points++;
        winner_display.textContent = 'You won 🥳!';
        player_choice.textContent = `player choose : paper 🖐️`;
        computer_choice.textContent = `computer choose : ${computer_choices} ✌️`;
        player_scores.textContent = `computer points : ${player_points}`;
    }
    
})

scissors.addEventListener('click', (event) => {

    let computer_choices = computer_choice_fun();

    if (computer_choices ===  'scissors') {
        winner_display.textContent = 'It a tie 🪢!';
        player_choice.textContent = `player choose : scissors ✌️`;
        computer_choice.textContent = `computer choose : ${computer_choices} 👊`;
    }
    else if (computer_choices === 'rock') {
        computer_points++;
        player_choice.textContent = `player choose : scissors ✌️`;
        computer_choice.textContent = `computer choose : ${computer_choices} 🖐️`;
        winner_display.textContent = 'Computer won 🥳!';
        computer_scores.textContent = `computer points : ${computer_points}`;
    }
    else if (computer_choices === 'paper') {
        player_points++;
        winner_display.textContent = 'You won 🥳!';
        player_choice.textContent = `player choose : scissors ✌️`;
        computer_choice.textContent = `computer choose : ${computer_choices} ✌️`;
        player_scores.textContent = `computer points : ${player_points}`;
    }
    
})