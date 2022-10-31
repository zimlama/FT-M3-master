var fs = require('fs');

function promiseFunction (){
	var promise = new Promise (function(resolve, reject) {
		// Hacer cosas aca adentro, probablemente asicronicas.
		fs.readFile('./archivosss.txt', 'utf8', function(err,data){
			if (err) {
				return reject(Error("Algo se rompio"));
			}
			console.log('2: ', data);
			resolve(data);
		});
	});
	return promise;
}

var promiseOne = promiseFunction()

console.log('1', promiseOne);

promiseOne.then(data => {
    console.log('3: ', data);
}, error => { /* con ete caso en la ultima segunda promesa manejamos el error */
	console.log(error);
})

console.log('HOLIII');
