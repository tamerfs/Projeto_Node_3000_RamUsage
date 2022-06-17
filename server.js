//import (stats) from './pcRamUsage';
const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage.js');

http.createServer((req, res) => {
    let url= req.url;

    if (url === "/stats") {
        res.end(JSON.stringify(stats, null, 2))
    } else[
        res.end('<h1>WELLCOME</h1>')
    ]

    
}).listen(3000, ()=> console.log(`server is runnig in ${host}:${port}`));

    // res.end ja mata o requisição, o res.write ele manda mas fica aguardando




