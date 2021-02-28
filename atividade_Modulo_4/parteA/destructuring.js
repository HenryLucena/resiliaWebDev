//Parte A - Aquecimento Arrow Function

//Transforme as funções declarativas abaixo em Arrow Functions

const upperName = (name) => {
    return name.toUpperCase();
};

const myFunction = (p1, p2) => {
    return p1 * p2;
}

const toCelsius = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32);
}

//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
const handleMouseMove = (event) => {
    const action = { clientX: event.clientX, clientY: event.clientY }
    const { x, y } = action

    console.log(x, y);
}

//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: 'Jane', last: 'Doe' };

const { first } = obj


//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors ************
company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
        shirts: {
            colors: ['red', 'green', 'blue'],
        },
        socks: {
            colors: ['cyan', 'magenta', 'yellow'],
        },
    },
};

