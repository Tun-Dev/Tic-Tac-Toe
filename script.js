//HTNL elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell')

//game constants
const xSymbol = '×';
const oSymbol = '○';

//game variable
let gameIsLive = true;
let xIsNext = true;
let winner = null;

//functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
    gameIsLive = false;
    winner = letter;
    if(winner === 'x'){
        statusDiv.innerHTML = `${letterToSymbol(winner)} has won!`;
    }
    else{
        statusDiv.innerHTML = `<span>${letterToSymbol(winner)} has won!</span>`;
    }
}

const checkGameStatus = () =>{
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];

    //To check if there is a winner
    if(topLeft && topLeft === topMiddle && topLeft === topRight){
        handleWin(topLeft); 
        window.alert(topLeft + ' won. Tap the Reset button to start a new game');     
    }
    else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight){
        handleWin(middleLeft);
        window.alert(middleLeft + ' won. Tap the Reset button to start a new game');
    }
    else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
        handleWin(bottomLeft);
        window.alert(bottomLeft + ' won. Tap the Reset button to start a new game');
    }
    else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft){
        handleWin(topLeft);
        window.alert(topLeft + ' won. Tap the Reset button to start a new game');
    }
    else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle){
        handleWin(topMiddle);
        window.alert(topMiddle + ' won. Tap the Reset button to start a new game');
    }
    else if (topRight && topRight === middleRight && topRight === bottomRight){
        handleWin(topRight);
        window.alert(topRight + ' won. Tap the Reset button to start a new game');
    }
    else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight){
        handleWin(topLeft);
        window.alert(topLeft + ' won. Tap the Reset button to start a new game');
    }
    else if (topRight && topRight === middleMiddle && topRight === bottomLeft){
        handleWin(topRight);
        window.alert(topRight + ' won. Tap the Reset button to start a new game');
    }
    else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight &&
        bottomLeft && bottomMiddle && bottomRight){
            gameIsLive = false;
            window.alert('Game is tied!');
            statusDiv.innerHTML = 'Game is tied!';
        }
    else{
        xIsNext = !xIsNext;
        if (xIsNext){
            statusDiv.innerHTML = `${xSymbol} is next`;
        }
        else{
            statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
        }
    }
    
}

//event handlers
const handleReset = (e) =>{
    xIsNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    winner = null;
    for(const cellDiv of cellDivs){
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
    }
}

const handleCellClick = (e) =>{
    const classList = e.target.classList;
    const location = classList[1];

    if(classList[1] === 'x' || classList[1] === 'o'){
        return;
    }

    if(xIsNext){
        classList.add('x');
        checkGameStatus();
    }
    else{
        classList.add('o');
        checkGameStatus();
    }
}


//event listeners
resetDiv.addEventListener('click', handleReset);

for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click', handleCellClick)
}