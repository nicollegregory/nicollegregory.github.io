$(window).scroll(function() {
    $(".space").css("opacity", 1 - $(window).scrollTop() / 250);
  });
 
function xcx() {
  let choice = document.getElementById("answer").value.trim().toLowerCase();
  let imageElement = document.getElementById("my-image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "charli xcx") {
      imageElement.src = "https://jenesaispop.com/wp-content/uploads/2024/06/Captura-de-pantalla-2024-06-21-195255.png";
  } else {
      imageElement.src = "https://th.bing.com/th/id/OIP.OH8xtUjQwnJBeCero53anQAAAA?rs=1&pid=ImgDetMain";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      xcx();
  }
}

function martinez() {
  let choice = document.getElementById("answer2").value.trim().toLowerCase();
  let imageElement = document.getElementById("image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "melanie martinez") {
      imageElement.src = "https://images6.fanpop.com/image/photos/38800000/melanie-martinez-melanie-martinez-38849836-540-304.png";
  } else {
      imageElement.src = "https://th.bing.com/th/id/OIP.OH8xtUjQwnJBeCero53anQAAAA?rs=1&pid=ImgDetMain";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      martinez();
  }
}
function shakira() {
  let choice = document.getElementById("answer3").value.trim().toLowerCase();
  let imageElement = document.getElementById("teen");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "beyonce and shakira") {
      imageElement.src = "https://3.bp.blogspot.com/-4lN1cdzcQYA/UO1mmrHmvHI/AAAAAAAAIMg/Zd6LCxJOnWs/s1600/Shakira-Beyonce.jpg";
  } else {
      imageElement.src = "https://th.bing.com/th/id/OIP.OH8xtUjQwnJBeCero53anQAAAA?rs=1&pid=ImgDetMain";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      shakira();
  }
}



function laufey() {
  let choice = document.getElementById("answer4").value.trim().toLowerCase();
  let imageElement = document.getElementById("beat");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "laufey and beabadoobee") {
      imageElement.src = "https://atwoodmagazine.com/wp-content/uploads/2023/11/beabadoobee-and-Laufey-768x546.jpeg";
  } else {
      imageElement.src = "https://th.bing.com/th/id/OIP.OH8xtUjQwnJBeCero53anQAAAA?rs=1&pid=ImgDetMain";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      laufey();
  }
}

function marina() {
  let choice = document.getElementById("answer5").value.trim().toLowerCase();
  let imageElement = document.getElementById("moon");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "marina and the diamonds") {
      imageElement.src = "https://th.bing.com/th/id/R.a03cc3b8316464b53ba4fb3672f198a6?rik=k%2bGLHLfAncBqzg&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fpolls%2f1349000%2f1349449_1393897237158_full.jpg%3fv%3d1393897240&ehk=t%2bdTxyU3eEK3ZjSGaOFvgf78FDEVfOaox2V%2f56MKjcc%3d&risl=&pid=ImgRaw&r=0";
  } else {
      imageElement.src = "https://th.bing.com/th/id/OIP.OH8xtUjQwnJBeCero53anQAAAA?rs=1&pid=ImgDetMain";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      marina();
  }
}


   window.onload = function() {
        var audio = document.getElementById('myAudio');
        audio.play();}  