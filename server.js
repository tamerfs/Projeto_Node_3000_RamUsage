//import (stats) from './pcRamUsage';
const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage.js');
// const cpus = require('./pcRamUsage.js');

http.createServer((req, res) => {
    let url= req.url;

    if (url === "/stats") {
        res.end(JSON.stringify(stats, null, 2))
    // }else if(url === "/cpus"){
    //     res.end(JSON.stringify(cpus, null, 2))
    } else [
        res.end(`<h1>SEJA BEM VINDO!!</h1>,\n acesse o endpoint ${host}:${port}/stats`)
    ]

    
}).listen(port, ()=> console.log(`server is runnig in ${host}:${port}`));

    // res.end ja mata o requisição, o res.write ele manda mas fica aguardando




