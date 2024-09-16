document.querySelectorAll('.game-btn').forEach(button => {
    button.addEventListener('click', function () {
        const randomNumber = Math.random();
        const playerMove = this.value;
        let computerMove = '';


        if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
        }

        let result = '';

        if (playerMove === computerMove) {
            result = 'Tie!';
        } else if (
            (playerMove === 'scissors' && computerMove === 'paper') ||
            (playerMove === 'paper' && computerMove === 'rock') ||
            (playerMove === 'rock' && computerMove === 'scissors')
        ){
            result = 'You Win!'
        } else {
            result = 'You Loose!'
        }
        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
    })
})