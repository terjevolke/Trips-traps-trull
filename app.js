const cells = document.querySelectorAll("td");
const gameState = document.getElementById("game-state");

let gameBoard = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
];

let isX = true;
let isOver = false;

cells.forEach(cell => {
    cell.addEventListener('click', e => {

        if ( !isOver ) {
            if ( cell.innerText == '' ) {
                if ( isX ) {
                    cell.innerText = 'X';
                    gameBoard[cell.dataset.row][cell.dataset.col] = 'X';
                } else {
                    cell.innerText = 'O';
                    gameBoard[cell.dataset.row][cell.dataset.col] = 'O';
                }

                isX = !isX;
                cell.classList.remove('active')
                isOver = isGameOver();

                if ( isOver ) {
                    gameState.innerText = 'Mäng läbi';
                }
            }
        }

    });
});

function isGameOver() {
    let ret = false;

    for( i = 0; i < 3; i++ ) {

        if ( gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][1] == gameBoard[i][2] && gameBoard[i][0] != '-' ) {
            ret = true;
        }

        if ( gameBoard[0][i] == gameBoard[1][i] && gameBoard[1][i] == gameBoard[2][i] && gameBoard[0][i] != '-' ) {
            ret = true;
        }
        if ( gameBoard[0][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2] && gameBoard[1][1] != '-' ) {
            ret = true;
        }
        if ( gameBoard[2][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[0][2] && gameBoard[1][1] != '-' ) {
            ret = true;
        }

    }


    return ret;
}
