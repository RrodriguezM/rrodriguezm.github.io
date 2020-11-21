let a = 10;
let b = a;
b = 20;

console.log(a, b)

const persona = {nombre: 'rafael'};

const persona2 = {...persona};
persona2.nombre = 'carlos';

// console.log({persona, persona2})

const cambiaNombre = ({...person}) => {
    person.nombre = 'jose';
    return person
}

const jose = cambiaNombre(persona);
console.log({persona, jose});

const frutas = ['manzana', 'pina', 'mora'];




console.time('slice')
const otrasFrutas2 = frutas.slice()
console.timeEnd('slice')

console.time('spread')
const otrasFrutas = [...frutas];
console.timeEnd('spread')


otrasFrutas.push('mango');
console.table({frutas, otrasFrutas});