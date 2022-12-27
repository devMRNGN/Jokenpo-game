class Jokenpo {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    chooseWinner() {
        const draw = this.player1 === this.player2;
        if(draw) {
            return "There was a draw!";
        } else {
            const P1_AND_P2 = this.player1 + "-" + this.player2;
            switch(P1_AND_P2){
                case "Rock-Scissors":
                    return "Player 1 is the winner";
                break;
                case "Scissors-Rock":
                    return "Player 2 is the winner";
                break;
                case "Paper-Scissors":
                    return "Player 2 is the winner";
                break;
                case "Scissors-Paper":
                    return "Player 1 is the winner";
                break;
                case "Rock-Paper":
                    return "Player 2 is the winner";
                break;
                case "Paper-Rock":
                    return "Player 1 is the winner";
                break;
            }
        }
    }
}

const play = document.getElementById('play');
play.addEventListener('click', () => {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const jokenpo = new Jokenpo(player1, player2);
    const result = jokenpo.chooseWinner();
    const showResult = document.getElementById("showResult").innerText = result;
})