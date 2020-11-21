
let horaApertura;
let mensaje;

const horaActual = 8;
const dia = 6;

horaApertura = ([0,6].includes(dia)) ? 9 :11;
mensaje = ( horaActual >= horaApertura) ? 'Esta Abierto' : `Esta Cerrado, Abrimos a las ${horaApertura} ` 

console.log({horaApertura, mensaje})

