// const commands = require('./commands');
const commands = require('./commands/index');

const done = function(args){
  process.stdout.write(args);
  process.stdout.write('prompt > ');
}

process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  let args = data.toString().trim().split(" "); // remueve la nueva línea
  let cmd = args.shift();
  if(commands.hasOwnProperty(cmd)){
    commands[cmd](args, done);
  }
});

// // Output un prompt
// process.stdout.write('prompt > ');
// // El evento stdin 'data' se dispara cuando el user escribe una línea
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remueve la nueva línea
//   if(cmd === 'date') {
//     // process.stdout.write(Date());  
//     commands[cmd](); 
//   }
//   if(cmd === 'pwd') {
//     // process.stdout.write(process.cwd());
//     commands[cmd]();
//   }
//   else{
//     let args = data.toString().trim().split(" ");
//     let cmd = args.shift();
//     process.stdout.write('Not found: ' + data);
//   }
//   process.stdout.write('\nprompt > ');
// });
