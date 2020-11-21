const returnTrue = () => {
    console.log('return true')
    return true
}

const returnFalse = () => {
    console.log('return false')
    return false
}

console.warn('nagacion')

console.log(!true)
console.log(!false)

console.warn('AND');

console.log(true && false);
console.log(true && true);
console.log(false && false);

console.warn('AND quick eval');
console.log(returnFalse() && returnTrue())
console.log(returnTrue() && returnFalse())

console.warn('OR')

console.log(returnTrue() || returnFalse())
console.log(returnFalse() || returnTrue())
// console.log(object)

console.log('and y or como sleccionadores')


const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

console.log(true && 'hola mundo')
console.log(true && true && 'hola' && 'mundo')

console.log(soyUndefined || soyNull || soyFalse || 'hola nojoda' || false || 'test2')


