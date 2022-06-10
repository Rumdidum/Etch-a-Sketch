let div = document.querySelector('#drawArea');
let input = document.querySelector('input');
let output = document.querySelector('#output');
let myValue = input.getAttribute('value');
let newValue;

let clearBtn = document.querySelector('.clear');
let eraseBtn = document.querySelector('.erase');
let colorBtn = document.querySelector('.colorBtn');
let selColor = document.querySelector("#colorpicker");
let selectRainbow = document.querySelector(".rainbow");

drawRectangles();
// This Variable should be under "DrawRectangles" because it gets items under runtime
let drawItem = document.querySelectorAll('.item1'); 

function checkTextInput() {
    output.addEventListener('keypress', logKey);
    function logKey(e) {
        if (e.key === "Enter") {

            newValue = output.value;
            input.setAttribute("value", newValue);
            div.innerHTML = ''
            if (parseInt(newValue) <= 64 && typeof parseInt(newValue) === 'number' && parseInt(newValue) >= 16) {
                drawRectangles(newValue);
                console.log(typeof parseInt(newValue));
            } else if (parseInt(newValue) >= 64) {
                alert("Number is to high!")
                drawRectangles();
            } else if (parseInt(newValue) <= 16) {
                alert("Number is to low!")
                drawRectangles();
            }

        } else {
            return
        }
    }
}
checkTextInput();
input.addEventListener('input', () => {
    //  This one is important to delete old firstLoop
    div.innerHTML = '';
    //   

    // updates output value
    output.value = input.value;
    newValue = input.value;
    input.setAttribute("value", newValue);
    drawRectangles(newValue);
});


function drawRectangles(newV = myValue) {
    for (let i = 0; i < newV; i++) {
        let firstLoop = document.createElement('div');
        firstLoop.classList.add('item0');
        //      These should be empty containers
        div.appendChild(firstLoop);
        for (let j = 0; j < newV; j++) {
            let secondLoop = document.createElement('div');
            secondLoop.classList.add('item1');
            firstLoop.appendChild(secondLoop);            
        };
    };
}

function randomNum() {
    let min = 80;
    let max = 255;
    return Math.floor(Math.random() * (max -min)) + min;
}
function clearGrid(input = drawItem) {
    makeWhite(input);
    removeListener(input);
}
function eraseSquare(input) {
    input.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = "white";
        })
    })
}

function removeListener(input) {
    input.forEach((item) => {
        item.removeEventListener('mouseenter', () => {
            eraseSquare(drawItem);
            makeRainbow(drawItem);
        });
    })
    
}
function makeWhite(input) {
    // Nodelist needs an iteration 
    input.forEach((square) => {
        square.style.backgroundColor = "white";
    })
}


// 
function makeBlack(input) {
    input.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = "black";
        })   
    })
} 
function makeRainbow(input) {
    input.forEach((element) => {
        // generates a new random number every mouseover
        element.addEventListener('mouseenter', () => { randomNum() }) 
        // modifyes backgroundcolor 
        element.addEventListener('mouseenter', (e) => {
            element.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${255})`;
        })
    })
}
clearBtn.addEventListener('click', () => {clearGrid(drawItem)});
eraseBtn.addEventListener('click', () => {eraseSquare(drawItem)});
selectRainbow.addEventListener('click', () => { makeRainbow(drawItem) });
clearBtn.removeEventListener('click', () => {makeRainbow()});

// TODO erstelle eine einfache Zeichnung mit mehreren divs in einem Container und versuche ihre Größe nach dem Container anzupassen.
// TODO Ich sollte auch eine Zahl mit der Hand eingeben können
// TODO Ich sollte vorherig erstelle DiVs löschen
// TODO Größe der firstLoop bei einer höheren Zahl kleiner werden lassen
// und an die größe des Containers anpassen. (vieleicht geht das ja auch mit Flexbox)
// Ich denke mit height und width komme ich nicht weiter da sie flexbox aushebeln und ich somit 
