const hoy = new Date()

console.log(hoy)

let dia = hoy.getDay();

console.log({dia})



if (dia === 0){
    console.log('es domingo')
} else if (dia === 1){
    console.log('es lunes')
}else if (dia === 6 ){
    console.log(' es Sabado')
}else {
    console.log('a joder al coño')
}

dia=5;

dialetras = {
    0: () => 'domingo- 0',
    1:() => 'lunes - funct',
    2:() => 'martes - funct',
    3:() => 'miercoles - funct',
    4:() => 'jueves - funct',
    5:() => 'viernes - funct',
    6:() => 'sabado - funct',
}
console.log(dialetras[dia]())
// dialetras