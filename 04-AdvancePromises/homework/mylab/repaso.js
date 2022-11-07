// repaso
// const pA = new Promise(function(resolve, reject){
// 	setTimeout(() => {
// 		//resolve('Se resolvio A');
// 		reject('Se rechazo A');
// 	}, 1000)
// });

// console.log('1: ',pA);

// pA.then(data => {
// 	console.log('2: ', data);
// }, err => {
//     console.log('3: ', err);
// } )

// flowchart
const pA = new Promise(function(resolve, reject){
	setTimeout(() => {
		resolve('Se resolvio A');
		//reject('Se rechazo A');
	}, 1000)
});

// const pB = pA.then();

// console.log('1: ', pB);

// pB.then(data =>{
// 	console.log('2: ', data)
// })

	// ejemplo cuando una promesa se resulve y se encapsula en otra en la que esta nueva se resuelve en ella

// pA
// .then() //promesa B se resuelve A
// .then() //promesa C se resuelve A
// .then() //promesa C se resuelve A
// .then( data => {
// 	console.log('Y esto?? ', data) //se resolvio A
// })

// pA
// .then(data => {
// 	console.log('1: ', data) // promesa B --> Se rechazo A (no encontro error)
// })
// .then(data => {
// 	console.log('2: ', data) // promesa C  --> Se rechazo A (no encontro error)
// })
// .then(null, err =>{
// 	console.log('3: ', err) // esto es un .catch() maquillado
// })

// pA
// .then(data =>{
// 	console.log('1: ', data) // se resolvio A
// 	return new Promise(function(resolve, reject){ //promesa Z
// 		setTimeout(() =>{
// 			resolve('SE RESOLVIO ESTA OTRA');
// 			//reject('Se rechazo esta otra');
// 		}, 1000)
// 		})
// })
// .then(data => { //promesa B
// 	console.log('2: ', data);
// 	return data.toLowerCase();
// })
// .then(data =>{
// 	console.log('3: ', data)
// })
// .then(null, err => {
// 	console.log('3: ', err)
// })

// pA
// .then(data => {
// 	console.log('1: ', data)
// 	throw new Error('ROMPIOOOOO');
// })
// .then(data =>{
// 	console.log('2: ', data)
// })
// .then(data =>{
// 	console.log('3: ', err)
// })

//--- Si arroja un error?? ---

pA
.then(data => {
	console.log('1: ', data) // se resolvio A 
	throw new TypeError('ROMPIOOOOO')
})
.then(data => {
	console.log('2: ', data)
})
.then(null, err =>{
	console.log('3: ', err)
})