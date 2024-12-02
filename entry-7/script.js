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
      imageElement.src = "https://th.bing.com/th/id/R.d4eb10cb28a5f707695129a546d3c812?rik=7hOCM4WP3cWbqw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26700000%2fJustin-Bieber-2011-justin-bieber-26788277-500-500.jpg&ehk=PQUtle8Odc3RUjCoY9pDt87mKaHpPC%2fLODzkZIJGdeU%3d&risl=&pid=ImgRaw&r=0";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/5c/da/67/5cda676e0c4a313db0715118063b3084.png";
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
      imageElement.src = "https://wallpaperaccess.com/full/56356.jpg";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/5c/da/67/5cda676e0c4a313db0715118063b3084.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      brown();
  }
}
function jonas() {
  let choice = document.getElementById("answer3").value.trim().toLowerCase();
  let imageElement = document.getElementById("teen");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "jonas brothers") {
      imageElement.src = "https://img.nbc.com/mpx-static/image/601/50/190511_3954445_Jonas_Brothers__Cool_Burnin__Up__Live_.jpg";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/5c/da/67/5cda676e0c4a313db0715118063b3084.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      jonas();
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
      imageElement.src = "https://th.bing.com/th/id/OIP.ngxy1gYR5FjwMEZo6KSGDgHaJv?rs=1&pid=ImgDetMain";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/5c/da/67/5cda676e0c4a313db0715118063b3084.png";
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
      imageElement.src = "https://i.pinimg.com/736x/49/43/c2/4943c201af4a0278ade403a5c610466b.jpg";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/5c/da/67/5cda676e0c4a313db0715118063b3084.png";
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