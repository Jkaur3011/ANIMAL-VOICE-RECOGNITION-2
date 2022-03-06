function StartASIdentification() { //starting sound identification
    navigator.mediaDevices.getUserMedia({
        audio: true
    }); //allowing to access the microphone of system
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/c5kdbxcFm/model.json", modelReady); //adding teachable machine link and defining new function
}

function modelReady() {
    classifier.classify(gotResults); //comparing trained model with audio captured from the microphone
}

function gotResults(error, results) {
    console.log("GOT RESULTS"); //printing string on console
}