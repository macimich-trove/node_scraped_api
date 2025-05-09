const cheerio = require('cheerio');
const pm2 = require('pm2');
const axios = require('axios');
const htmlparser = require('node-html-parser'); 


class  CrawlerInstance(){
     constructor(endpoint, id="" ,class_=""){
         this.endpoint = endpoint;
         this.id = id;
         this.class_= class_;
}


function ParseBody(body, regex="",flags=""){ 
if(regex!==null && flags!==null){
   console.log("Filtering based on REGEX pattern")
   var RegExp = new RegExp(regex, flags);
}

axios.get(endpoint)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {

};



return // Call endpoint to get Body

};



function renderBinaryTree(endpoint, regex=""){ 

/*TODO: Fetch body via then Chain Call*/


}


}
module.exports{Parser}




