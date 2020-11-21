let personaje = {
    nombre:'Tony Stark',
    edad:40,
    vivo:false,
    coods:{
        lat:34.034,
        lng:-108.76,
    },
    trajes:['mark1', 'markV', 'clasico'],
    direccion:{
        zip:'10880, 90265',
        ubicacion:'Malibu, California'
    },
    'ultima-pelicula':'Infinity War' // se coloca el key entre comillas para que pueda tomar el caracter especial '-'
};

console.log(personaje.edad)
console.log(personaje.coods.lat)
console.log('suits amount:', personaje['trajes'].length)
console.log(personaje['ultima-pelicula']) // Para colocar espacio o caracteres especiales solo se puede llamar de esta forma 

//  More details
personaje.edadMuerte = 75
delete personaje.edadMuerte
const entriesPairs = Object.entries(personaje)
console.log(entriesPairs)

Object.freeze(personaje)

personaje.edad = 100

const keys = Object.getOwnPropertyNames(personaje)
const values = Object.values(personaje)
const keys2 = Object.keys(personaje)

console.log(keys)
console.log(keys2)
console.log(values)


// console.log(personaje)