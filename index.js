const express = require('express');
const app = express();
const cors = require('cors');
const morganlogs = require('morgan');



//####Nodejs native package is Distinct from new WritableStream### 
//E.G. const StreamObject = new WritableStream ({
//https://nodejs.org/api/stream.html



const Stream = require('stream');

const port = 4000;


//PERF LOGGER 
//LOGGING DONE THE HARD WAY
//I TOOK THE SCENIC ROUTE


const RequestMethodsLog = [];
app.use(express.json()); 
const StreamObject = new Stream.Writable({
    write:function(chunk,encoding, callback) {
try{
   console.log(chunk.toString());
   console.log("Writing Request: #", RequestMethodsLog.push(chunk.toString()));
   console.log("Request Body:",RequestMethodsLog[RequestMethodsLog.length-1]);

if(RequestMethodsLog.includes('error')){ throw new Error('error');}

//if(RequestMethodsLog.length==10){RequestMethodsLog[(RequestMethodsLog.length-RequestM>

callback(); //Successful callback


}catch(err){
callback(err);
}
  }
});

const DevFormat = morganlogs(function (tokens, req, res) {
return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
},{stream:StreamObject});

app.use(DevFormat);



app.get('/', (req, res) => {
res.send(JSON.stringify('Connections Dashboard'));

});

app.get('/stats',(req, res) => {

//Send route stats and JSON payload
//const PageHtml= RequestMethodsLog.map((x)=>x).join(' ');
const PageHtml= RequestMethodsLog.map((Request) => `<li><b>${Request}</b></li>`).join(' ');
console.log("#STATS ROUTE#");

(() => {
res.write(`<h1><b>#STATS ROUTE#</b></h1>`);
})(); 

res.write(PageHtml);

});


app.get('/parser', (req, res) => {
/*TODO:*/
/*Parser UI and core  functionality*/



});



app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

module.exports = { app }

