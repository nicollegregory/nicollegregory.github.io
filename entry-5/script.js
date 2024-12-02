$(window).scroll(function() {
    $(".space").css("opacity", 1 - $(window).scrollTop() / 250);
  });
 
function diosa() {
  let choice = document.getElementById("answer").value.trim().toLowerCase();
  let imageElement = document.getElementById("my-image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "kali uchis") {
      imageElement.src = "https://th.bing.com/th/id/OIP.h2ahp3Wth-pCXZlhaIpfBAHaFj?rs=1&pid=ImgDetMain";
  } else {
      imageElement.src = "https://th.bing.com/th/id/R.7732c2bc106e6adba5574155c20da338?rik=mwHiWrouWk1tsQ&pid=ImgRaw&r=0&sres=1&sresct=1";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      diosa();
  }
}

function rauw() {
  let choice = document.getElementById("answer2").value.trim().toLowerCase();
  let imageElement = document.getElementById("image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "rauw alejandro") {
      imageElement.src = "https://eyboricua.com/wp-content/uploads/2021/12/Rauw-Alejandro-3.jpeg";
  } else {
      imageElement.src = "https://th.bing.com/th/id/R.7732c2bc106e6adba5574155c20da338?rik=mwHiWrouWk1tsQ&pid=ImgRaw&r=0&sres=1&sresct=1";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      rauw();
  }
}
function maluma() {
  let choice = document.getElementById("answer3").value.trim().toLowerCase();
  let imageElement = document.getElementById("teen");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "maluma") {
      imageElement.src = "https://iv1.lisimg.com/image/16859740/574full-maluma.jpg";
  } else {
      imageElement.src = "https://th.bing.com/th/id/R.7732c2bc106e6adba5574155c20da338?rik=mwHiWrouWk1tsQ&pid=ImgRaw&r=0&sres=1&sresct=1";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      maluma();
  }
}



function karol() {
  let choice = document.getElementById("answer4").value.trim().toLowerCase();
  let imageElement = document.getElementById("beat");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "karol g") {
      imageElement.src = "https://yt3.ggpht.com/a-/AAuE7mBOZk5ad-3MiTTwpfbaIZ6dIKToSUBkmPeF8w=s900-mo-c-c0xffffffff-rj-k-no";
  } else {
      imageElement.src = "https://th.bing.com/th/id/R.7732c2bc106e6adba5574155c20da338?rik=mwHiWrouWk1tsQ&pid=ImgRaw&r=0&sres=1&sresct=1";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      karol();
  }
}

function lunay() {
  let choice = document.getElementById("answer5").value.trim().toLowerCase();
  let imageElement = document.getElementById("moon");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "lunay") {
      imageElement.src = "https://i.pinimg.com/originals/e6/9c/e6/e69ce6cc50b418eda187deb1967d8a42.jpg";
  } else {
      imageElement.src = "https://th.bing.com/th/id/R.7732c2bc106e6adba5574155c20da338?rik=mwHiWrouWk1tsQ&pid=ImgRaw&r=0&sres=1&sresct=1";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      lunay();
  }
}


   window.onload = function() {
        var audio = document.getElementById('myAudio');
        audio.play();}  