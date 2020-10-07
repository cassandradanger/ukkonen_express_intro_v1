console.log("hello from JS");

$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery');
    // perform GET request
    getRandomQuote();
}

function getRandomQuote(){
    console.log("get the quote");
    $.ajax({
        method: 'GET',
        url: '/randomQuote'
    }).then(function(response){
        console.log('response', response);
        appendToDom(response);
    });
}

function appendToDom(dataToAppend){
    // take the response from the server
    // append it to #output so it shows up on the DOM
    $('#output').append(`
        <p>${dataToAppend.quote}</p>
        <i>from: ${dataToAppend.author}</i>
    `)
}