$(window).scroll(function() {
  $(".space").css("opacity", 1 - $(window).scrollTop() / 250);
});

function weezer() {

let choice = document.getElementById("answer").value.trim().toLowerCase();


let imageElement = document.getElementById("my-image");


if (choice === "weezer") {
   imageElement.src = "https://i.redd.it/59a086j8yz971.jpg";
}

else {
   imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
}

imageElement.style.display = "block";
}
////
function beatles() {
 
  let choice = document.getElementById("answer2").value.trim().toLowerCase();

  let imageElement = document.getElementById("image");

  if (choice === "the beatles") {
      imageElement.src = "https://preview.redd.it/john-lemon-v0-13lgm085bs591.jpg?auto=webp&s=01d8a311f3dd3b36481599315908703cefa41312"; 
  } else {
      imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain"; // 
  }

  imageElement.style.display = "block";
}
////
function wheatus() {
 
  let choice = document.getElementById("answer3").value.trim().toLowerCase();

  let imageElement = document.getElementById("teen");

  if (choice === "wheatus") {
      imageElement.src = "https://static.spin.com/files/2017/11/Screen-Shot-2017-11-03-at-4.25.58-PM-1509743654.png"; 
  } else {
      imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain"; // 
  }

  imageElement.style.display = "block";
}

////
function michael() {
 
  let choice = document.getElementById("answer4").value.trim().toLowerCase();

  let imageElement = document.getElementById("beat");

  if (choice === "michael jackson") {
      imageElement.src = "https://i.pinimg.com/originals/78/db/61/78db61a46989954df4bbdf9097280521.jpg"; 
  } else {
      imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain"; // 
  }

  imageElement.style.display = "block";
}

////
function television() {
 
  let choice = document.getElementById("answer5").value.trim().toLowerCase();

  let imageElement = document.getElementById("moon");

  if (choice === "television") {
      imageElement.src = "https://cdn.dribbble.com/users/206784/screenshots/2558004/media/5d6bea89977e20484819200b17ae0175.jpg?resize=400x300&vertical=center"; 
  } else {
      imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain"; // 
  }

  imageElement.style.display = "block";
}
///

window.onload = function() {
  var audio = document.getElementById('myAudio');
  audio.play(); } 