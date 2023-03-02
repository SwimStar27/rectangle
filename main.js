x = 0;
y = 0;
rectangle = "";
dcircle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="Say Circle Or Rectangle !!    ";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    cookie = event.results[0][0].transcript;

    document.getElementById("status").innerHTML="Did You Say:    "+cookie;
    if(cookie == "circle"|| cookie=="Circle"){
        x=Math.floor(Math.random()*350);
        y=Math.floor(Math.random()*350);
        document.getElementById("status").innerHTML="Drawing A Circle Now !!    ";
        dcircle="dessert";
    }
    if(cookie == "rectangle"|| cookie=="Rectangle"){
        x=Math.floor(Math.random()*350);
        y=Math.floor(Math.random()*350);
        document.getElementById("status").innerHTML="Drawing A Rectangle Now !!    ";
        rectangle="dessert";
    }
}


function setup(){
    canvas = createCanvas(400,400)
}

function draw(){
     if(dcircle == "dessert"){
        radius=Math.floor(Math.random()*120);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Masterpiece !!   ";
     }
     if(rectangle == "dessert"){
        rect(x,y,80,60);
        document.getElementById("status").innerHTML="Masterpiece !!   ";
     }
}
