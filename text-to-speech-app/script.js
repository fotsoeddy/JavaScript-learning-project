const resultElement = document.getElementById("result");
let recognition;

function startConverting(){
    if('webkitSpeechRecognition' in window){    
        recognition = new webkitSpeechRecognition();
        setupRecognition(recognition);
        recognition.start();
    }


}

function setupRecognition(recognition){
    recognition.continuos = true; // to continous recognition of the speaker
    recognition.interimResults = true; // setup the recognition
    recognition.lang = 'en-US';
    recognition.onresult = function(event){
        //process result function will be call here 
        processResult(event.results);
    }

}

function processResult(result){


}



function stopConverting(){

}