//your JS code here. If required.
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let player1, player2;

document.getElementById('submit').addEventListener('click', function() {
    player1 = document.getElementById('player-1').value;
    player2 = document.getElementById('player-2').value;
    document.querySelector('.message').innerText = `${player1}, you're up!`;
});

document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.addEventListener('click', function() {
        if (board[index] === '') {
            board[index] = currentPlayer;
            cell.innerText = currentPlayer;
            if (checkWin()) {
                document.querySelector('.message').innerText = `${currentPlayer === 'X' ? player1 : player2}, congratulations you won!`;
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                document.querySelector('.message').innerText = `${currentPlayer === 'X' ? player1 : player2}, you're up!`;
            }
        }
    });
});

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    currentPlayer = 'X';
    document.querySelector('.message').innerText = '';
}