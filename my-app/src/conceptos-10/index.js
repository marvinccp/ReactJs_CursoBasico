//1.INMUTABILIDAD
//Objeto creado, Objeto NO modificado

//2.Funciones puras

// const sumar = (a, b) =>{
// return a + Math.random(b)
// }
// console.log(sumar(4, 8));

//'Que hace lo que esperamos que haga!!!!


//3. Mutable, string

// const city = 'CALIFORNIA'
// const cityLower = city.toLowerCase()
// console.log(cityLower);

//const

//4. example object

// const player = Object.freeze({name: 'Messi', gb: 7})
// const cristiano = player
// cristiano.country = 'Port'

// console.log(player);


//5. copiar objetos en JS, actulizando objetos

// shallow copy

//a. Object.assign()

// const player = {
//   name: "Messi",
//   gb: 7,
//   country: "Arg",
//   teams: {
//       a: 'Barcelona',
//       b: 'Rosario C'
//   }
//   }

//   const playerCopy = Object.assign({}, player, {gb:8})

//   const compa = player === playerCopy

//   console.log(compa);


//b. Spread operator ...object

//deepCopy

// const player = {
//   name: "Messi",
//   gb: 7,
//   country: "Arg",
//   teams: {
//       a: 'Barcelona',
//       b: 'Rosario C'
//   }

// };

// const playerCopy = {
//     ...player,
//     teams:{
//         ...player.teams,
//         c:'PSG'
//     }
// }

// console.log(playerCopy);


//6. copiar Arrays en JS + Actulizando Arrays

// const numbers = [ 1, 2, 3]
// const numbersAdd = [...numbers, 4, 5 ,6]
// console.log(numbersAdd);


const players = [

    {id:1, name:'Messi', isActive:true},
    {id:2, name:'Cris', isActive:true},
    {id:3, name:'Neymar', isActive:true},
]

const isActive = (id) =>{
    return players.map(player => player.id === id ? {...player, isActive:false}: player)
}

const outNeymar = (id) =>{
   return  players.filter(player => player.id !== id)
}
console.log(outNeymar(3));

console.log(isActive(1));
