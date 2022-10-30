const http=require('http')
const server= http.createServer((req,res)=>{
     if(req.url=='/home'){
          print( "Welcome home")
     }
     else if(req.url=='/about'){
          print( "Welcome to About Us ")
     }
     else if(req.url=='/node'){
          print( "Welcome to my Node Js")
     
     }
     else{
          print('you did not enter anything')
     }
     function print(str){
          res.setHeader('Content-Type','text/html');
          res.write('<html>')
          res.write('<head><title>my first web</title></head>')
          res.write(`<body><h1>${str}</h1></body>`)
          res.write('</html>')
          res.end()

     }

})
server.listen(8000);