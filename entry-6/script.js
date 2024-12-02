$(window).scroll(function() {
    $(".space").css("opacity", 1 - $(window).scrollTop() / 250);
  });
 
function atlantic() {
  let choice = document.getElementById("answer").value.trim().toLowerCase();
  let imageElement = document.getElementById("my-image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "chase atlantic") {
      imageElement.src = "https://chordsbase.com/chords/chase-atlantic/img.jpg";
  } else {
      imageElement.src = "https://custom-progressbar.com/cdn/images/1333/sanrio-badtz-maru-angry-custom-progress-bar-m.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      atlantic();
  }
}

function direction() {
  let choice = document.getElementById("answer2").value.trim().toLowerCase();
  let imageElement = document.getElementById("image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "one direction") {
      imageElement.src = "https://i.pinimg.com/736x/b5/7c/2e/b57c2ec54ee2c0850f8d47404cba8c61.jpg";
  } else {
      imageElement.src = "https://custom-progressbar.com/cdn/images/1333/sanrio-badtz-maru-angry-custom-progress-bar-m.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      direction();
  }
}
function bts() {
  let choice = document.getElementById("answer3").value.trim().toLowerCase();
  let imageElement = document.getElementById("teen");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "bts") {
      imageElement.src = "https://tiermaker.com/images/templates/bts-and-stray-kids-and-ateez-1045749/10457491622388371.jpg";
  } else {
      imageElement.src = "https://custom-progressbar.com/cdn/images/1333/sanrio-badtz-maru-angry-custom-progress-bar-m.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      bts();
  }
}



function sos() {
  let choice = document.getElementById("answer4").value.trim().toLowerCase();
  let imageElement = document.getElementById("beat");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "5 seconds of summer") {
      imageElement.src = "https://gfx.rozrywka.radiozet.pl/var/radiozetsg/storage/images/muzyka/5-seconds-of-summer-w-krakowie-2021-bilety-data-i-miejsce-koncertu/13347980-1-pol-PL/5-Seconds-of-Summer-wystapia-w-Polsce.-Koncert-w-Krakowie-w-2021-roku_full-hd.jpg";
  } else {
      imageElement.src = "https://custom-progressbar.com/cdn/images/1333/sanrio-badtz-maru-angry-custom-progress-bar-m.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      sos();
  }
}

function siren() {
  let choice = document.getElementById("answer5").value.trim().toLowerCase();
  let imageElement = document.getElementById("moon");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "sleeping with sirens") {
      imageElement.src = "https://vandalamagazine.files.wordpress.com/2014/11/sleeping-with-sirens-promo.jpg";
  } else {
      imageElement.src = "https://custom-progressbar.com/cdn/images/1333/sanrio-badtz-maru-angry-custom-progress-bar-m.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      siren();
  }
}


   window.onload = function() {
        var audio = document.getElementById('myAudio');
        audio.play();}  