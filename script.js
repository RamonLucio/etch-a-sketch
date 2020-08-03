let squaresPerSide = 16;
let squaresSquared = squaresPerSide ** 2;
// parseInt(window.prompt('How many squares per side?', 16))

const container = document.querySelector('#container');
container.style.cssText = `grid-template-columns: repeat(${squaresPerSide}, 1fr); grid-template-rows: repeat(${squaresPerSide}, 1fr)`;

for (let i = 0; i < squaresSquared; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const clearButton = document.getElementById('clear');

const allSquares = document.querySelectorAll('.square');

const blackButton = document.querySelector('#black');

const rainbowButton = document.querySelector('#rainbow');

function addBlackClass(e) {
    e.target.style = '';
    e.target.classList.add('black');
}

function activateBlackMode() {
    allSquares.forEach((square) => {
        square.removeEventListener('mouseover', addRandomColor);
        square.addEventListener('mouseover', addBlackClass)
    })
}

function addRandomColor(e) {
    e.target.style.cssText = `background-color: rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

function activateRandomMode() {
    allSquares.forEach((square) => {
        square.removeEventListener('mouseover', addBlackClass);
        square.addEventListener('mouseover', addRandomColor);
    })
}                                                          

function clearGrid() {
    allSquares.forEach((square) => {
        square.classList.remove('black');
        })
}

blackButton.addEventListener('click', activateBlackMode)

rainbowButton.addEventListener('click', activateRandomMode)

clearButton.addEventListener('click', clearGrid)                                                   