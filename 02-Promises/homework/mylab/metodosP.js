var primerMetodo1 = function(){
    // me devuelve una promesa
    var promise = new Promise (function(resolve, reject){
        setTimeout(function(){
            console.log('Termino el primer metodo 1');
            resolve({num: '1'});
        }, 1000);
    });
    return promise
};

var segundoMetodo2 = function(){
    var promise = new Promise (function(resolve,reject){
        setTimeout(function(){
            //console.log('Termino el primer metodo 2');
            resolve({num: '2'});
        }, 2000);
    });
    return promise
};

var tercerMetodo3 = function(){
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            //console.log('Termino el tercer metodo 3');
            resolve({num: '3'});
        }, 4000);
    });
    return promise;
}

// Nota: por ahora solo estamos creando la promeas no la estamos ejecutando y eso se hace con .then

var p1 = primerMetodo1();   //promesa...
var p2 = segundoMetodo2();  //promesa
var p3 = tercerMetodo3();   //promesa

// con esto solo ejecutamos el metodo con la promesa que queremos ejecutar
// p1.then(data => {
//     console.log(data);
// })

Promise.all([p1,p2,p3])
.then(values => {
    console.log(values)
})
// .catch();
