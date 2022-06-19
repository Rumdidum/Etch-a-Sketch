let drawArea = document.querySelector('#drawArea');
let input = document.querySelector('input');
let output = document.querySelector('#output');
let myValue = input.getAttribute('value');
let newValue;

let clearBtn = document.querySelector('.clear');
let eraseBtn = document.querySelector('.erase');
let colorBtn = document.querySelector('.colorBtn');
let selColor = document.querySelector("#colorpicker");
let selectRainbow = document.querySelector(".rainbow");
let drawItem = document.querySelectorAll('.item1'); 



function checkTextInput() {
    // 
    output.addEventListener('keypress', inputTextNum);
    function inputTextNum(e) {
        if (e.key === "Enter") {

            newValue = output.value;
            input.setAttribute("value", newValue);
            drawArea.innerHTML = ''
            if (parseInt(newValue) <= 64 && typeof parseInt(newValue) === 'number' && parseInt(newValue) >= 16) {
                generateRect(newValue);
                console.log(typeof parseInt(newValue));
            } else if (parseInt(newValue) >= 64) {
                alert("Number is to high!")
                generateRect();
            } else if (parseInt(newValue) <= 16) {
                alert("Number is to low!")
                generateRect();
            }

        } else {
            return
        }
    }
}
checkTextInput();
function inputRect() {
    
    input.addEventListener('input', () => {
        //  This one is important to delete old firstLoop
        drawArea.innerHTML = '';
        //   
    
        // updates output value
        output.value = input.value;
        newValue = input.value;
        input.setAttribute("value", newValue);
        generateRect(newValue);
    });
}


function generateRect(newV = myValue) {
    for (let i = 0; i < newV; i++) {
        let firstLoop = document.createElement('div');
        firstLoop.classList.add('item0');
        //      These should be empty containers
        drawArea.appendChild(firstLoop);
        for (let j = 0; j < newV; j++) {
            let secondLoop = document.createElement('div');
            secondLoop.classList.add('item1');
            firstLoop.appendChild(secondLoop);            
        };
    };
    drawItem = document.querySelectorAll('.item1');
}

function randomNum(min, max) {
    num = Math.floor(Math.random() * (max - min)) + min;
    return num
}
function clearGrid(input = drawItem) {
    makeWhite(input);
}
function eraseSquare(input) {
    input.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            // two different ways
            item.style.setProperty('background-color', 'white'); /* first */
            //item.style.backgroundColor = "white";  /* second */
        })
    })
}

function removeListener(input) {
    input.forEach((item) => {
        item.removeEventListener('mouseenter', () => {
            // eraseSquare(drawItem);
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


// This function is for testing with black squares
function makeBlack(input) {
    input.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = "black";
        })   
    })
}
function randomColors(element) {
    return element.style.backgroundColor = `rgb(${randomNum(80, 255)}, ${randomNum(40, 255)}, ${randomNum(100, 255)})`
}

function makeRainbow(input) {
    input.forEach((element) => {
        // generates a new random number every mouseover
        element.addEventListener('mouseenter', () => { randomNum() }) 
        // modifyes backgroundcolor 
        element.addEventListener('mouseenter', () => { randomColors(element) })
    })  
}

eraseBtn.addEventListener('click', () => {eraseSquare(drawItem)});
selectRainbow.addEventListener('click', () => { makeRainbow(drawItem) });
clearBtn.addEventListener('click', () => {
    drawItem.forEach((square) => {
        square.removeEventListener('mouseenter', randomColors);
    })
    clearGrid(drawItem);

})
inputRect();
generateRect();
