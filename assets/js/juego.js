

let deck = [];
const tipos = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']

const btnPedir = document.querySelector('#btnPedir')
const btnDetener = document.querySelector('#btnDetener')
const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')
const [marcadorJugador, marcadorComputadora] = document.querySelectorAll('small')

let puntosJugador = 0,
    puntosComputadora = 0;

//  Esta funcion crea una baraja
const crearDeck = () => {
    for (let i = 2; i <=10; i++){
        for(let tipo of tipos){
            deck.push( i + tipo);
        }
    }
    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo)
        }
    }
    console.log(deck)
    deck = _.shuffle(deck)
    // console.log(deck)
    return deck
}

crearDeck();

//  Esta funcion permite pedir una baraja
const pedirCarta = () => {

    if (deck.length === 0){
        throw 'No hay mas cartas en el deck';
    }

    const carta = deck.pop();
    console.log(carta);
    // console.log(deck);
    return carta
}


// pedirCarta();

//  Valor de la Carta
const valorCarta = (carta) =>{
    const valor = carta.substring(0, carta.length -1)

    return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10  
        : valor *1;


}

//  Turno Computadora
const turnoComputadora = (puntosMinimos) => {
    do{
    const carta = pedirCarta()
    
    puntosComputadora = puntosComputadora + valorCarta(carta)
    // console.log(puntosJugador)
    marcadorComputadora.innerText = puntosComputadora
    // marcadorComputadora.innerText = puntosJugador
    const imgCarta =  document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);
    if (puntosMinimos > 21){
        break;
    }

    }while(puntosComputadora < puntosMinimos && (puntosMinimos <= 21))

    setTimeout(() => {
        
        if(puntosComputadora === puntosMinimos){
            alert('Nadie Gana')
        }else{
            (puntosComputadora > 21) ? alert('Jugador Gana') : alert('Computadora Gana')
        }
    }, 100);



}



// console.log(valorCarta(pedirCarta()))
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta()
    
    puntosJugador = puntosJugador + valorCarta(carta)
    // console.log(puntosJugador)
    marcadorJugador.innerText = puntosJugador
    // marcadorComputadora.innerText = puntosJugador
    const imgCarta =  document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
        console.warn('Perdiste')
    }

    if (puntosJugador === 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
        console.warn('21, en Buena Hora Tio')
    }
})

btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true;
    btnPedir.disabled = true;
    turnoComputadora(puntosJugador);
})

btnNuevo.addEventListener('click', () => {
    
    deck = [];
    crearDeck();
    btnDetener.disabled = false;
    btnPedir.disabled = false;
    puntosJugador = 0;
    puntosComputadora = 0;
    marcadorComputadora.innerText = puntosComputadora;
    marcadorJugador.innerText = puntosJugador;
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    // turnoComputadora(puntosJugador);
})