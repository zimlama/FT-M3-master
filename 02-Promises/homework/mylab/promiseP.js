var fs = require('fs');

function promiseFunction (){
	var promise = new Promise (function(resolve, reject) {
		// Hacer cosas aca adentro, probablemente asicronicas.
		fs.readFile('./archivo.txt', 'utf8', function(err,data){
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
})

console.log('HOLIII');
