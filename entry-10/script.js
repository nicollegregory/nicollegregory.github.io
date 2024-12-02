$(window).scroll(function() {
    $(".space").css("opacity", 1 - $(window).scrollTop() / 250);
  });
 
function carey() {
  let choice = document.getElementById("answer").value.trim().toLowerCase();
  let imageElement = document.getElementById("my-image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "mariah carey") {
      imageElement.src = "https://th.bing.com/th/id/R.c12843597ae4b28f182b6ea355188a88?rik=RSLjZ75%2bS5k3vQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fpolls%2f1122000%2f1122077_1348630581090_full.jpg&ehk=qn%2fj5Vs8%2fjzN14S7mlK1Yx%2f3S1WSESbpSiQqz6DpXwc%3d&risl=&pid=ImgRaw&r=0";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/91/04/d5/9104d5e78b1dd52da3fdd641db3689e6.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      carey();
  }
}

function buble() {
  let choice = document.getElementById("answer2").value.trim().toLowerCase();
  let imageElement = document.getElementById("image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "michael buble") {
      imageElement.src = "https://th.bing.com/th/id/R.41e3dbade8131b53de503f1118a75d18?rik=SLLhWHuDBQ25Vw&riu=http%3a%2f%2fimg.karaoke-lyrics.net%2fimg%2fartists%2f13278%2fmichael-buble-69709.jpg&ehk=mE5dpQ2ZDrYE%2bmNVny46nCfwLAWKYkfaV7IsfMsH9jQ%3d&risl=&pid=ImgRaw&r=0";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/91/04/d5/9104d5e78b1dd52da3fdd641db3689e6.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      buble();
  }
}
function kalin() {
  let choice = document.getElementById("answer3").value.trim().toLowerCase();
  let imageElement = document.getElementById("teen");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "kalin and myles") {
      imageElement.src = "https://i.pinimg.com/originals/6a/c5/e1/6ac5e177c9f1ef7339346e3150014ef4.jpg";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/91/04/d5/9104d5e78b1dd52da3fdd641db3689e6.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      kalin();
  }
}



function pastor() {
  let choice = document.getElementById("answer4").value.trim().toLowerCase();
  let imageElement = document.getElementById("beat");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "marco pastor estelles") {
      imageElement.src = "https://www.pngall.com/wp-content/uploads/15/Hello-Kitty-Christmas-PNG-HD-Image.png";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/91/04/d5/9104d5e78b1dd52da3fdd641db3689e6.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      pastor();
  }
}

function grande() {
  let choice = document.getElementById("answer5").value.trim().toLowerCase();
  let imageElement = document.getElementById("moon");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "ariana grande") {
      imageElement.src = "https://i.pinimg.com/originals/9f/8d/b8/9f8db8e19e564e58c8bc784d380bc8b2.jpg";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/91/04/d5/9104d5e78b1dd52da3fdd641db3689e6.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
     grande();
  }
}


   window.onload = function() {
        var audio = document.getElementById('myAudio');
        audio.play();} 