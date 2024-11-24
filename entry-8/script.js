$(window).scroll(function() {
  $(".space").css("opacity", 1 - $(window).scrollTop() / 250);
});

function weezer() {
let choice = document.getElementById("answer").value.trim().toLowerCase();
let imageElement = document.getElementById("my-image");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "weezer") {
    imageElement.src = "https://i.redd.it/59a086j8yz971.jpg";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    weezer();
}
}

function beatles() {
let choice = document.getElementById("answer2").value.trim().toLowerCase();
let imageElement = document.getElementById("image");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "the beatles") {
    imageElement.src = "https://preview.redd.it/john-lemon-v0-13lgm085bs591.jpg?width=640&crop=smart&auto=webp&s=7574e303acb9876652fb040e7d04bf78317df9c5";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    beatles();
}
}

function wheatus() {
let choice = document.getElementById("answer3").value.trim().toLowerCase();
let imageElement = document.getElementById("teen");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "wheatus") {
    imageElement.src = "https://cdn4.whatculture.com/images/2023/06/71649696086e5dc2-1200x675.jpg";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    wheatus();
}
}

function michael() {
let choice = document.getElementById("answer4").value.trim().toLowerCase();
let imageElement = document.getElementById("beat");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "michael jackson") {
    imageElement.src = "https://i.pinimg.com/originals/78/db/61/78db61a46989954df4bbdf9097280521.jpg";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    michael();
}
}

function television() {
let choice = document.getElementById("answer5").value.trim().toLowerCase();
let imageElement = document.getElementById("moon");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "television") {
    imageElement.src = "https://cdn.dribbble.com/users/206784/screenshots/2558004/tele.jpg";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    television();
}
}


 window.onload = function() {
      var audio = document.getElementById('myAudio');
      audio.play();}  