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
      imageElement.src = "https://i.redd.it/59a086j8yz971.jpg";
  } else {
      imageElement.src = "https://th.bing.com/th/id/OIP.tn2Fc5Wr7gKDt9rkIE-a4AAAAA?rs=1&pid=ImgDetMain";
  }


  imageElement.style.display = "block";
}

function checkEnter(event) {
  if (event.key === "Enter") {
      weezer();
  }
}