const name1 = document.querySelector('#name');
const note1 = document.querySelector('#note1');
const note2 = document.querySelector('#note2');
const exit = document.querySelector('h3');
const btn = document.querySelector('#btn')

const white = document.querySelector('#white');
const blue = document.querySelector('#blue');
const black = document.querySelector('#black');

const honor = document.querySelector('#honor');
const win = document.querySelector('#win');
const lose = document.querySelector('#lose');
const recover = document.querySelector('#recover');

white.addEventListener("click", hide1);
blue.addEventListener("click", hide1);
black.addEventListener("click", hide1);

honor.addEventListener("click", calculate);
win.addEventListener("click", calculate);
lose.addEventListener("click", calculate);
recover.addEventListener("click", calculate);


function hide1(event) {
    const body = document.querySelector('body');
    const color = event.target.id;
    console.log(color);
    console.log(body);
    if (color === "white") {
        console.log("hola");
        body.classList.remove("black");
        body.classList.remove("blue");
        body.classList.add("white");
    } else if (color === "blue") {
        console.log("hola");
        body.classList.remove("black");
        body.classList.remove("white");
        body.classList.add("blue");
    } else if (color === "black") {
        console.log("hola");
        body.classList.remove("white");
        body.classList.remove("blue");
        body.classList.add("black");
    }
}

function calculate(event) {
    let condition = validate();
    if (condition) {
        nameD = name1.value;
        note1D = parseFloat(note1.value);
        note2D = parseFloat(note2.value);

        const id = event.target.id;

        const value = operation(id);

        exit.classList.remove('colorBlue');
        exit.classList.remove('colorGreen');
        exit.classList.remove('colorRed');

        let result = (3.5 - ((0.3 * note1D) + (0.3 * note2D))) / 0.4;
        result = Math.round((result + Number.EPSILON) * 100) / 100;
        if (result > 5) {
            exit.classList.add('colorRed');
        }

        result = (value[1] - ((0.3 * note1D) + (0.3 * note2D))) / 0.4;
        result = Math.round((result + Number.EPSILON) * 100) / 100;

        if (value[1] == 4 && result <= 5) {
            exit.classList.add('colorBlue');
        } else if (value[1] == 3.5 && result <= 5) {
            exit.classList.add('colorGreen');
        }

        exit.textContent = `${nameD} para ${value[0]} necesita un ${result} ${value[2]}`;


        setTimeout(() => {
            exit.textContent = ``;
        }, 5000);

    }
}

function operation(id) {
    switch (id) {
        case 'honor':
            return ['cuadro de honor', 4, ' '];
        case 'win':
            return ['ganar la materia', 3.5, ' '];
        case 'recover':
            return ['recuperar la materia', 2, ' '];
        case 'lose':
            return ['perder la materia', 1.99, ' o menos'];
    }
}

function validate() {
    let condition = true;

    note1D = note1.value;
    note2D = note2.value;

    if (note1D.length > 0 && note2D.length > 0) {
        note1D = parseFloat(note1D);
        note2D = parseFloat(note2D);
        if (note1D < 1 || note1D > 5 || note2D < 1 || note2D > 5) {
            condition = false;
            exit.textContent = "los valores de las notas no pueden ser menores de 1 o mayores a 5";
            return condition;
        }
    } else {
        exit.textContent = "por favor ingresar los valores de ambos numeros";
        condition = false;
    }


    return condition;
}