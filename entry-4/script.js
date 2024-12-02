$(window).scroll(function() {
    $(".space").css("opacity", 1 - $(window).scrollTop() / 250);
  });
 
function the() {
  let choice = document.getElementById("answer").value.trim().toLowerCase();
  let imageElement = document.getElementById("my-image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "the neighbourhood") {
      imageElement.src = "https://th.bing.com/th/id/R.7b624adc1c89c4ac0861ac77d6a953c6?rik=SGbpxZtjcVQ49A&riu=http%3a%2f%2fwww.muzoko.ru%2fwp-content%2fuploads%2f2018%2f02%2fthe-nbhg-02.jpg&ehk=Zn3Wz%2b9BPCiMmlltlogBoGua99Ni1tiU1XE3dPbgzEk%3d&risl=&pid=ImgRaw&r=0";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/b9/69/00/b9690026318a5e25aecdd73c5634989a.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      the();
  }
}

function kitty() {
  let choice = document.getElementById("answer2").value.trim().toLowerCase();
  let imageElement = document.getElementById("image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "mr.kitty") {
      imageElement.src = "https://i.ytimg.com/vi/Q2z3LZkKZOQ/maxresdefault.jpg";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/b9/69/00/b9690026318a5e25aecdd73c5634989a.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      kitty();
  }
}
function heap() {
  let choice = document.getElementById("answer3").value.trim().toLowerCase();
  let imageElement = document.getElementById("teen");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "clams casino and imogen heap") {
      imageElement.src = "https://images.genius.com/57429153c8a2fc0ca18efe9847f2bc71.600x600x1.jpg";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/b9/69/00/b9690026318a5e25aecdd73c5634989a.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      heap();
  }
}



function jimin() {
  let choice = document.getElementById("answer4").value.trim().toLowerCase();
  let imageElement = document.getElementById("beat");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "jimin") {
      imageElement.src = "https://i.pinimg.com/originals/31/22/bc/3122bc0701843517268e178931fda0aa.jpg";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/b9/69/00/b9690026318a5e25aecdd73c5634989a.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      jimin();
  }
}

function bazzi() {
  let choice = document.getElementById("answer5").value.trim().toLowerCase();
  let imageElement = document.getElementById("moon");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "bazzi") {
      imageElement.src = "https://www.popelera.net/wp-content/uploads/2022/09/bazzi.jpg";
  } else {
      imageElement.src = "https://i.pinimg.com/originals/b9/69/00/b9690026318a5e25aecdd73c5634989a.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      bazzi();
  }
}


   window.onload = function() {
        var audio = document.getElementById('myAudio');
        audio.play();}  