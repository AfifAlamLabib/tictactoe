let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");

function placeSymbol(index) {
    if (cells[index].innerHTML === "") {
        cells[index].innerHTML = currentPlayer;
        cells[index].classList.add(currentPlayer);

        if (checkWin(currentPlayer)) {
            alert(currentPlayer + " wins!");
            resetBoard();
            return;
        }

        if (checkDraw()) {
            alert("It's a draw!");
            resetBoard();
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin(player) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => cells[index].classList.contains(player));
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.innerHTML !== "");
}

function resetBoard() {
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.classList.remove("X", "O");
    });
    currentPlayer = "X";
}
