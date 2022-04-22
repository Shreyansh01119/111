prediction1 = "";

Webcam.set({
    width : 350,
    height : 350,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="cap" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version :',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EIZ8ITeLg/model.json',modelloaded);
function modelloaded(){
    console.log('modelloaded');
}

function speak(){
    var synth = window.speechSynthesis;
    speak1 = "The Hand Gesture Is "+prediction1;
    var utterthis = new SpeechSynthesisUtterance(speak1);
    synth.speak(utterthis);
}