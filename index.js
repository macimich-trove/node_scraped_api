const express = require('express');
const app = express();
const cors = require('cors');
const morganlogs = require('morgan');


//const logger = require('./middleware');




var corsOptions = [{origin: 'localhost:3000', methods: ['GET', 'POST', 'PUT', 'DELETE']},{}]


app.use(cors(...corsOptions));



const port = 4001;
const Stream = require('stream');

const RequestMethodsLog = [];
app.use(express.json()); 
app.use(morganlogs('dev'));

const router = app.router
router.get('/hello', (req, res) => {
  res.send('hello world')
})

router.get('/hello1', (req, res) => {
  res.send('hello world')
})


let routeList = app._router;

console.log(...corsOptions)
app.get('/', (req, res) => {

res.send(JSON.stringify(app));

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




app.listen(port, (req ,res) => {
     console.log(`Server listening on ${port}`);
    });



module.exports = {router, app, port}

