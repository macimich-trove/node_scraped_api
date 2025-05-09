import React, {useState} from 'react';
import "Header.css"; 

function Header(){
const [result, setResult] = useState("");

 
function HandleSubmission (e){
 e.preventDefault()
 setResult("Value inputted value was"+result)


}



function handleChange(e) {
        setValue(e.target.value);
        setResult(e);
    }

return(

<div id="Header">

<div id="Link">About</div>
<div id="Link">Stats </div>


<form onsubmit="{handleSubmission}">

 Enter Crawl Target: <input type="submit" onInput={handleChange} value={result}/>

</form>

<b>{result}</b>

</div>


);



}








export default Header;
