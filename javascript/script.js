console.log("Hello, World!"); // ¡Corregido!

function getComputerChoice() {
    const choices = ['pidra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getHumanChoice(){
    const choices = ['piedra', 'papel', 'tijera'];
    let UserInput = prompt("Elige Piedra, Papel o Tijera ");
    UserInput = UserInput.toLowerCase();
    if (choices.includes(UserInput)) {
        return UserInput;
    } else {
        alert("Elección inválida. Por favor, elige Piedra, Papel o Tijera.");
        return getHumanChoice();
    }

}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Empate!";
    } else if (
        (playerSelection === 'piedra' && computerSelection === 'tijera') ||
        (playerSelection === 'papel' && computerSelection === 'piedra') ||
        (playerSelection === 'tijera' && computerSelection === 'papel')
    ) {
        return `¡Ganaste! ${playerSelection} vence a ${computerSelection}`;
    } else {
        return `Perdiste! ${computerSelection} vence a ${playerSelection}`;
    }}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Ronda ${round}: ${result}`);
        if (result.startsWith("¡Ganaste!")) {
            playerScore++;
        } else if (result.startsWith("Perdiste!")) {
            computerScore++;
        }
        console.log(`Puntuación - Tú: ${playerScore}, Computadora: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("¡Felicidades! ¡Ganaste el juego!");
    } else if (computerScore > playerScore) {
        console.log("Lo siento, perdiste el juego.");
    } else {
        console.log("El juego terminó en empate.");
    }
}
