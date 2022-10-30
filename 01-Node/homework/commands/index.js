const { doesNotMatch } = require('assert');
var fs = require('fs');

module.exports = {
    date: function(args, done){
        done(Date());  
    },
    pwd: function(args, done){
        done(process.cwd()); 
    },
    echo: function(args, done){
        done(args.join(" "));
    },
    ls: function(args, done){
        fs.readdir('.', function(err, files) {
            if(err) throw err;
            // console.log(files);
            var output = '';
            files.forEach(f => {
                output = output + f + '\n';
            });
            done(output);
        }) 
    },
    cat: function(args, done){
        fs.readFile(args[0], 'utf8', function(err, data){
            if(err) throw err;
            print(data);
        })
    }
};

// module.exports = {
//     date: function(){
//         process.stdout.write(Date());  
//     },
//     pwd: function(){
//         process.stdout.write(process.cwd()); 
//     },
//     ls: function(){
//         process.stdout.write(process.ls())
//     }
// }