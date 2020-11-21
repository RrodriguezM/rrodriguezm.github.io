

const esMayor = (a, b) => (a > b) ? a : b;

console.log(esMayor(20, 15))

const esMiembro = (miembro) => miembro ? '2 Dolares': '10 Dolares';

console.log(esMiembro(false))


const amigo = false
const amigosArr = [
    'rafa',
    'yeral',
    'andre',
    amigo ? 'jhou':'jhos',
    (() => 'nando')()
];

console.log(amigosArr);


// ternary anidades

const nota = 86;

const notaLetras =  nota > 95 ? 'A+' :
                    nota > 90 ? 'A'  :
                    nota > 85 ? 'B+' :
                    nota > 80 ? 'B'  : 'Que Bruto' ;

console.log({notaLetras})

