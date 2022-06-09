let div = document.querySelector('#canvas');
let input = document.querySelector('input');
let output = document.querySelector('#output');
let value = input.getAttribute('value');
let newValue;
let drawItem = document.querySelectorAll('.item1');

// drawItem1.style.backgroundColor = "black";
/* drawItem.addEventListener("click", () => {
    console.log(drawItem.className);});


drawItem.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.className);
    })
}) */
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
    //  This one is important to delete old squares
    div.innerHTML = ''
    //   

    // updates output value
    output.value = input.value;
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
            secondLoop.textContent = `${j}`
            // secondLoop.style.backgroundColor = "white";
            secondLoop.addEventListener('mousemove', (e) => {
                secondLoop.style.backgroundColor = "black";
                e.preventDefault();
                console.log(e);

            })
            squares.appendChild(secondLoop);
            
        };

    };
}


// squaresInMemory.style.backgroundColor = "black";
drawRectangles();
// TODO erstelle eine einfache Zeichnung mit mehreren divs in einem Container und versuche ihre Größe nach dem Container anzupassen.
// TODO Ich sollte auch eine Zahl mit der Hand eingeben können
// TODO Ich sollte vorherig erstelle DiVs löschen
// TODO Größe der Squares bei einer höheren Zahl kleiner werden lassen
// und an die größe des Containers anpassen. (vieleicht geht das ja auch mit Flexbox)
// Ich denke mit height und width komme ich nicht weiter da sie flexbox aushebeln und ich somit 
