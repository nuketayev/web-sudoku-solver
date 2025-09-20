const button = document.getElementById("solve")

function readBoardFromInput() {
    
};

function ClickedOnSolve() {
    const board = readBoardFromInput();
    console.log("Parsed board:", board)
};

document.addElementListener("DOMContentLoaded", ()=> {
    button.addEventListener("click", ClickedOnSolve);
});