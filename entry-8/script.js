$(window).scroll(function() {
    $(".space").css("opacity", 1 - $(window).scrollTop() / 250);
  });
 
function weezer() {
  let choice = document.getElementById("answer").value.trim().toLowerCase();
  let imageElement = document.getElementById("my-image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "weezer") {
      imageElement.src = "https://res.cloudinary.com/epitaph/image/upload/c_fill,f_auto,h_375,q_auto,w_600/v1/epitaph/artists/Weezer_MegaImage_2DizHun.jpg";
  } else {
      imageElement.src = "https://mystickermania.com/cdn/stickers/noob-pack/sanrio-pochacco-evil-512x512.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      weezer();
  }
}

function beatles() {
  let choice = document.getElementById("answer2").value.trim().toLowerCase();
  let imageElement = document.getElementById("image");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "the beatles") {
      imageElement.src = "https://th.bing.com/th/id/R.0454b83cdfbf2e2426c3f5b023dde04a?rik=gsaDFiOPyJr41Q&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fThe-Beatles-Photo.jpg&ehk=jBVrFawsoafP9GInKWF03p%2bUqGEV%2f%2bF%2fNu%2fPc%2fcGToE%3d&risl=&pid=ImgRaw&r=0";
  } else {
      imageElement.src = "https://mystickermania.com/cdn/stickers/noob-pack/sanrio-pochacco-evil-512x512.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      beatles();
  }
}
function wheatus() {
  let choice = document.getElementById("answer3").value.trim().toLowerCase();
  let imageElement = document.getElementById("teen");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "wheatus") {
      imageElement.src = "https://i1.wp.com/ocmusicnews.com/wp-content/uploads/2021/06/Wheatus-full-band-BW.jpg?resize=1200%2C632&ssl=1";
  } else {
      imageElement.src = "https://mystickermania.com/cdn/stickers/noob-pack/sanrio-pochacco-evil-512x512.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      bts();
  }
}



function michael() {
  let choice = document.getElementById("answer4").value.trim().toLowerCase();
  let imageElement = document.getElementById("beat");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "michael jackson") {
      imageElement.src = "https://th.bing.com/th/id/R.442bc1ff8259cdb3d3b47484c858a1cf?rik=F%2bOnq8Tu9ggBiQ&riu=http%3a%2f%2fblogs.denverpost.com%2flibrary%2ffiles%2f2012%2f06%2fMichael-Jackson-1988-2.jpg&ehk=kdDb90km%2fTapkKmNOOcrjKEdsN5paNhcsfAng%2bxMu4c%3d&risl=&pid=ImgRaw&r=0";
  } else {
      imageElement.src = "https://mystickermania.com/cdn/stickers/noob-pack/sanrio-pochacco-evil-512x512.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      michael();
  }
}

function television() {
  let choice = document.getElementById("answer5").value.trim().toLowerCase();
  let imageElement = document.getElementById("moon");

  
  if (choice === "") {
      alert("Please enter an answer!");
      return; 
  }


  if (choice === "television") {
      imageElement.src = "https://cdn.mos.cms.futurecdn.net/yuyygmw5Q8Jdu3fwp9LPj7-1200-80.jpg";
  } else {
      imageElement.src = "https://mystickermania.com/cdn/stickers/noob-pack/sanrio-pochacco-evil-512x512.png";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
     television();
  }
}


   window.onload = function() {
        var audio = document.getElementById('myAudio');
        audio.play();} 