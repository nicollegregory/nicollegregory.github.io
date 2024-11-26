$(window).scroll(function() {
  $(".space").css("opacity", 1 - $(window).scrollTop() / 250);
});

function justinb() {
let choice = document.getElementById("answer").value.trim().toLowerCase();
let imageElement = document.getElementById("my-image");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "justin bieber") {
    imageElement.src = "https://i.pinimg.com/originals/39/d0/38/39d03876a2aa6b1fdebc154f2486f48a.jpg";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    justinb();
}
}

function brown() {
let choice = document.getElementById("answer2").value.trim().toLowerCase();
let imageElement = document.getElementById("image");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "chris brown") {
    imageElement.src = "https://th.bing.com/th/id/R.6a1c7507b9b4c08b586315198fdde2c7?rik=wM8zIz87Rv7YKw&pid=ImgRaw&r=0";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    brown();
}
}

function gambino() {
let choice = document.getElementById("answer3").value.trim().toLowerCase();
let imageElement = document.getElementById("teen");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "childish gambino") {
    imageElement.src = "https://runthetrap.com/wp-content/uploads/2019/04/childish-gambino-1024x682.jpg";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    gambino();
}
}

function rhianna() {
let choice = document.getElementById("answer4").value.trim().toLowerCase();
let imageElement = document.getElementById("beat");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "rhianna") {
    imageElement.src = "https://th.bing.com/th/id/R.022bed083babd68c00291b97ac11a8d8?rik=9Al0otW5izQuQg&riu=http%3a%2f%2fthatgrapejuice.net%2fwp-content%2fuploads%2f2016%2f04%2frihanna-1-600x397.jpg&ehk=uXX%2fWTUeEDLkFl7V8TKcBAeW4QpUjeg4Zs9wGUeAiMo%3d&risl=&pid=ImgRaw&r=0";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    rhianna();
}
}

function avril() {
let choice = document.getElementById("answer5").value.trim().toLowerCase();
let imageElement = document.getElementById("moon");


if (choice === "") {
    alert("Please enter an answer!");
    return; 
}


if (choice === "avril lavigne") {
    imageElement.src = "https://th.bing.com/th/id/R.e58ec37194e8b319262531e2e15ffe31?rik=ONrwiI%2fe0imDpA&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f4200000%2fAvril-Lavigne-avril-lavigne-4213329-2071-2560.jpg&ehk=D%2fZ4mjxiYNE5MHK%2fs7LEbFXmbEckMa2TfvV1YEY1sbk%3d&risl=&pid=ImgRaw&r=0";
} else {
    imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}


imageElement.style.display = "block";
}

function checkEnter(event) {
if (event.key === "Enter") {
    avril();
}
}


 window.onload = function() {
      var audio = document.getElementById('myAudio');
      audio.play();}  