$(window).scroll(function() {
  $(".space").css("opacity", 1 - $(window).scrollTop() / 250);
});

function boys() {
let choice = document.getElementById("answer").value.trim().toLowerCase();
let imageElement = document.getElementById("my-image");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "suicideboys") {
    imageElement.src = "https://i.pinimg.com/originals/48/01/82/480182f21b83007701708723c866b480.jpg";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    boys();
}
}

function dredd() {
let choice = document.getElementById("answer2").value.trim().toLowerCase();
let imageElement = document.getElementById("image");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "freddie dredd") {
    imageElement.src = "https://th.bing.com/th/id/R.9df9526192ed89e95e2408e04adda026?rik=zWWvM1EX9A8G7A&pid=ImgRaw&r=0";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    dredd();
}
}

function girls() {
let choice = document.getElementById("answer3").value.trim().toLowerCase();
let imageElement = document.getElementById("teen");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "t.a.t.u") {
    imageElement.src = "https://th.bing.com/th/id/OIP.ByIgH7KpNmAL_cmJC-qizQHaFw?rs=1&pid=ImgDetMain";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    girls();
}
}

function peep() {
let choice = document.getElementById("answer4").value.trim().toLowerCase();
let imageElement = document.getElementById("beat");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "lil peep") {
    imageElement.src = "https://i.etsystatic.com/25860301/r/il/e7b7b6/2674514061/il_1588xN.2674514061_sj46.jpg";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    peep();
}
}

function boodang() {
let choice = document.getElementById("answer5").value.trim().toLowerCase();
let imageElement = document.getElementById("moon");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "lil boodang") {
    imageElement.src = "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e5/f8/ef/e5f8ef98-29db-1e03-e933-57f5d7ebfcdd/artwork.jpg/800x800cc.jpg";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    boodang();
}
}


 window.onload = function() {
      var audio = document.getElementById('myAudio');
      audio.play();}  