let div = document.querySelector('#canvas');
let input = document.querySelector('input');
let output = document.querySelector('output');
let value = input.getAttribute('value');
let newValue;
output.textContent = input.value;
drawRectangles();
input.addEventListener('input', () => {
    //  This one is important to delete old squares
    div.innerHTML = ''
    //   
    output.textContent = input.value;
    newValue = input.value;
    input.setAttribute("value", newValue);
    drawRectangles(newValue);
}, true);

function drawRectangles(newV = value) {
    for (let i = 0; i < newV; i++) {
        let squares = document.createElement('div');
        squares.classList.add('item0');
        //      These should be empty containers
        div.appendChild(squares);
        for (let j = 0; j < newV; j++) {
            let secondLoop = document.createElement('div');
            secondLoop.classList.add('item1');
            squares.appendChild(secondLoop);
        };
    };
}

// TODO erstelle eine einfache Zeichnung mit mehreren divs in einem Container und versuche ihre Größe nach dem Container anzupassen.
// TODO Ich sollte auch eine Zahl mit der Hand eingeben können
// TODO Ich sollte vorherig erstelle DiVs löschen
// TODO Größe der Squares bei einer höheren Zahl kleiner werden lassen
// und an die größe des Containers anpassen. (vieleicht geht das ja auch mit Flexbox)
// Ich denke mit height und width komme ich nicht weiter da sie flexbox aushebeln und ich somit 
