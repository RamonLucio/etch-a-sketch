let squaresPerSide = parseInt(window.prompt('How many squares per side?', 16));
let squaresSquared = squaresPerSide ** 2;

const container = document.querySelector('#container');
container.style.cssText = `grid-template-columns: repeat(${squaresPerSide}, 1fr); grid-template-rows: repeat(${squaresPerSide}, 1fr)`;

for (let i = 0; i < squaresSquared; i++) {
    let square = document.createElement('div');
    container.appendChild(square)
}

container.addEventListener('mouseover', e => {
    e.target.classList.add('black')
})

document.getElementById('reset').onclick = function(){
    location.reload();
};