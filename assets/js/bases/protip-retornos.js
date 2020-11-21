const crearPersona = (nombre , apellido ) => ({nombre, apellido});

console.log(crearPersona('rafael', 'rodriguez'))

const imprimeArgumentos = (hogar, ...args) => {
    return  args
}

const [carro, casado, plata] =  imprimeArgumentos('casa', 'carro', true, 450)

console.log(carro)
console.log(casado)
console.log(plata)

const {apellido:nuevoApellido} = crearPersona('rafael', 'rodriguez')
console.log(nuevoApellido)

