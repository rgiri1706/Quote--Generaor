const quoteContainer=document.getElementById("quote-container");
const quoteComment=document.getElementById("quote-comments");
const quoteAuthor=document.getElementById("quote-authors");
const quoteButton=document.getElementById("new-button");

async function getQuote(){
    const proxyAPI='https://cors-anywhere.herokuapp.com/';
    const apiURL= 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response=await fetch(proxyAPI+apiURL);
        const data = await response.json();
        quoteComment.innerText=data.quoteText;
        if(data.quoteAuthor===""){
            quoteAuthor.innerText="None"
        }else{
            quoteAuthor.innerText=data.quoteAuthor;
        }
    }catch(error){
        getQuote();
        console.log(error);
    }
}

function handleClick(){
    getQuote();
}

getQuote();