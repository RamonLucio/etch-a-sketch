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

const opacityButton = document.querySelector('#opacity');

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

function addOpacity(e) {
    e.target.style = '';
    let newOpacity = ((+e.target.getAttribute('data-opacity') + 0.1)
    .toFixed(1));
    e.target.setAttribute('data-opacity', `${newOpacity}`);
    e.target.style.backgroundColor = `rgba(0,0,0,${newOpacity})`;
}

function activateOpacityMode() {
    allSquares.forEach((square) => {
        square.removeEventListener('mouseover', addBlackClass);
        square.removeEventListener('mouseover', addRandomColor);
        square.addEventListener('mouseover', addOpacity);
    })
}

function clearGrid() {
    allSquares.forEach((square) => {
        square.style = '';
        square.classList.remove('black');
        })
}

blackButton.addEventListener('click', activateBlackMode)

rainbowButton.addEventListener('click', activateRandomMode)

opacityButton.addEventListener('click', activateOpacityMode)

clearButton.addEventListener('click', clearGrid)                                       