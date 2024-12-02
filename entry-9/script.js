$(window).scroll(function() {
    $(".space").css("opacity", 1 - $(window).scrollTop() / 250);
  });
 
function boy() {
  let choice = document.getElementById("answer").value.trim().toLowerCase();
  let imageElement = document.getElementById("my-image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "suicideboys") {
      imageElement.src = "https://www.morecore.de/wp-content/uploads/suicideboys-01-2022-official-press-1110x625.jpg";
  } else {
      imageElement.src = "https://i.pinimg.com/736x/6e/97/30/6e9730900251bfef9f58f9ba4d2840ae.jpg";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      boy();
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
      imageElement.src = "https://th.bing.com/th/id/OIP.nXmcz4_kUx_CB-1EHgxOYgHaE8?rs=1&pid=ImgDetMain";
  } else {
      imageElement.src = "https://i.pinimg.com/736x/6e/97/30/6e9730900251bfef9f58f9ba4d2840ae.jpg";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      dredd();
  }
}
function tatu() {
  let choice = document.getElementById("answer3").value.trim().toLowerCase();
  let imageElement = document.getElementById("teen");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "t.a.t.u") {
      imageElement.src = "https://lastfm.freetls.fastly.net/i/u/ar0/ad4726b3890feec99f425072e1219f5e.jpg";
  } else {
      imageElement.src = "https://i.pinimg.com/736x/6e/97/30/6e9730900251bfef9f58f9ba4d2840ae.jpg";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      tatu();
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
      imageElement.src = "https://th.bing.com/th/id/OIP.5nKT-QdAFzP42Qi1RFIXNgHaHa?rs=1&pid=ImgDetMain";
  } else {
      imageElement.src = "https://i.pinimg.com/736x/6e/97/30/6e9730900251bfef9f58f9ba4d2840ae.jpg";
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
      imageElement.src = "https://i.scdn.co/image/ab6761610000e5eb451968bcd997c501054d1b2b";
  } else {
      imageElement.src = "https://i.pinimg.com/736x/6e/97/30/6e9730900251bfef9f58f9ba4d2840ae.jpg";
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