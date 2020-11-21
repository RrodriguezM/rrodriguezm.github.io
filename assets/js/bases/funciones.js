
function saludar(nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);
}

const saludar2 = function (nombre) {
    console.log('Hola Saludar2 ' + nombre)
}

const saludarFlecha = (nombre) => {
    console.log('Hola Flecha : ' + nombre)
}

// saludar('rafael', 40 , true, 'costa rica');
// saludar2('rafael')
// saludarFlecha('rafa')

function sumar (a,b){
    return a + b; 
}

console.log(sumar(1,2))

const sumar2 = (a, b) => a + b;

console.log(sumar2(2,2))

function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio())

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2())