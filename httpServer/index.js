var http = require('http');

//create a server object:
http.createServer(function (req, res) {

    if(req.url == "/"){
        res.write('Home page!');
        res.end(); 
    }
    else if(req.url == "/about"){
        res.write('About page!');
        res.end(); 
    }
    else if(req.url == "/contact"){
        res.write('Contact page!');
        res.end(); 
    }
    else if(req.url == "/media"){
        res.write('media page!');
        res.end(); 
    }
    else{
        res.write('page does not exist');
        res.end(); 
    }

}).listen(8080); 