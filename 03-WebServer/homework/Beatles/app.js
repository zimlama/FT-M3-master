var http = require('http');
var fs   = require('fs');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]

http.createServer(function(req, res){
  if(req.url === '/api'){
    res.writeHead(200, { 'Content-Type':'application/json' })
    return res.end( JSON.stringify(beatles) )
  }

  if(req.url.substring(0, 5 ) === '/api/'){
    const beatle = req.url.split('/').pop();
    const found = beatles.find(b => encodeURI(b.name) === beatle);

    console.log('esto es: ', beatle);
    if(found){
      res.writeHead(200, {'Content-Type':'application/json'})
      return res.end(JSON.stringify(found))
    }
    res.writeHead(404, { 'Content-Type':'text/plain' })
    return res.end(`${beatle} no es un beatle`)
  }
}).listen(1337, '127.0.0.1')