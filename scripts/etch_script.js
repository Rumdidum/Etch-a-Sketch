const canvas = document.querySelector('#canvas');
const firstLoop = document.createElement('div');
const secondLoop = document.createElement('div');

firstLoop.style.width = "20px";
firstLoop.style.height = "20px";
// firstLoop.style.backgroundColor = "gray";
canvas.appendChild(firstLoop)
canvas.appendChild(firstLoop)
firstLoop.style.border = "solid 1px blue";
for(let i = 0; i < 16; i++) {
    canvas.appendChild(firstLoop);
}
