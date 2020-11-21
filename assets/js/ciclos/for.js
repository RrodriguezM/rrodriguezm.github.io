
const heroes =  ['Tortugas Ninjas', 'acuaman', 'superman', 'batman']

console.warn('for Tradicional')

for (let i = 0 ; i < heroes.length ; i ++ ) {
    console.log(heroes[i])

}

console.warn('for IN')
for (let i in heroes){
    console.log(heroes[i])
}

console.warn('for OF')
for (let hero of heroes){
        console.log(hero)
    }