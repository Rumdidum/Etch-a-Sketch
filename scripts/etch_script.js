let div = document.querySelector('#drawArea');
let input = document.querySelector('input');
let output = document.querySelector('#output');
let value = input.getAttribute('value');
let newValue;
let drawItem = document.querySelectorAll('.item1');
let clearBtn = document.querySelector('.clear');
let eraseBtn = document.querySelector('.erase');


function makeWhite(input) {
    return input.style.backgroundColor = "white";
}
// drawItem1.style.backgroundColor = "black";
/* drawItem.addEventListener("click", () => {
    console.log(drawItem.className);});


drawItem.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.className);
    })
}) */
function makeClear(event) {
    clearBtn.addEventListener('click', () => { makeWhite(event) });
}
function checkTextInput() {
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
checkTextInput()


input.addEventListener('input', () => {
    //  This one is important to delete old firstLoop
    div.innerHTML = ''
    //   

    // updates output value
    output.value = input.value;
    newValue = input.value;
    input.setAttribute("value", newValue);
    drawRectangles(newValue);
});

function drawRectangles(newV = value) {
    for (let i = 0; i < newV; i++) {
        let firstLoop = document.createElement('div');
        firstLoop.classList.add('item0');
        //      These should be empty containers
        div.appendChild(firstLoop);
        for (let j = 0; j < newV; j++) {
            let secondLoop = document.createElement('div');
            secondLoop.classList.add('item1');
            firstLoop.appendChild(secondLoop);

            // 
            secondLoop.addEventListener('mousemove', (e) => {
                secondLoop.style.backgroundColor = "black";
            })
            makeClear(secondLoop);
        };
    };
}

drawRectangles();
// TODO erstelle eine einfache Zeichnung mit mehreren divs in einem Container und versuche ihre Größe nach dem Container anzupassen.
// TODO Ich sollte auch eine Zahl mit der Hand eingeben können
// TODO Ich sollte vorherig erstelle DiVs löschen
// TODO Größe der firstLoop bei einer höheren Zahl kleiner werden lassen
// und an die größe des Containers anpassen. (vieleicht geht das ja auch mit Flexbox)
// Ich denke mit height und width komme ich nicht weiter da sie flexbox aushebeln und ich somit 
