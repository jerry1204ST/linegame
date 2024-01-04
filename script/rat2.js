    var score = 0;
    var timer = 39;
    var holenumber=0;
    var countdown;
    var count=0;
    var audio = document.getElementById("myAudio");
    var audio2 = document.getElementById("myAudio2");
    var audio3 = document.getElementById("myAudio3");
    var start = document.getElementById('start');
    var message = document.getElementById('message');

    function startGame() 
    {    
      document.getElementById("start").setAttribute("disabled", "disabled");  
      clearInterval(countdown);   
      document.getElementById("myAudio2").play();
      score = 0;
      timer = 39;
      count=0;
      updateScore(0);
      updateTimer(timer);
      countdown;
      var holes = document.getElementsByClassName('hole');
      var bool=document.getElementsByClassName('hole');
      var img = document.getElementsByClassName('image');
      for (var i = 0; i < holes.length; i++) {
      holes[i].onclick = function() {
        var clickedHole = this;
        var clickedImage = clickedHole.querySelector('.image');      
        if (clickedImage.src.indexOf("image/rat2/rat1.png") !== -1) {
        // 是指定的圖片
        score++;        
        document.getElementById("myAudio").play();
        updateScore(score);
        clickedImage.src = "image/rat2/rat2.png";
     setTimeout(function() {
        clickedImage.src = "image/rat2/rat3.png";
      }, 2000);
        count++; 
        } else {
        // 不是指定的圖片
        document.getElementById("myAudio3").play(); 
        console.log("Clicked image source:", clickedImage.src);
        }
      }
      }
     
      countdown = setInterval(function() {
      timer--;
       if( timer==30)
      {
        showRandomHole();
        holenumber++;
        count++;
      }
      if( timer==15)
      {
        showRandomHole();
        holenumber++;
        count++;
      }
        updateTimer(timer);
        if (timer == 0) {
          clearInterval(countdown);
          document.getElementById('message').innerHTML="Game over! Your score is "+ score ;
          document.getElementById("myAudio2").pause();
          document.getElementById("myAudio2").currentTime = 0;
          
          redirectToFinalScore(score);
          // Redirect to the final score page
        }
      }, 1000);

      if(holenumber==0)
      {
      showRandomHole();
      holenumber++;
      }
    }
   
    function redirectToFinalScore(score) {
      const url = `ratScore2.html?score=${score}`;
      window.location.href = url;
    }

    function showRandomHole() {
    if (timer != 0) {
    var holes = document.getElementsByClassName('hole');
    var randomIndex = Math.floor(Math.random() * holes.length);
    var hole = holes[randomIndex];
    var images = document.getElementsByClassName('image');

    var image = images[randomIndex];
    image.src = "image/rat2/rat1.png";
    holenumber++;

    setTimeout(function() {
      image.src = "image/rat2/rat3.png";
      holenumber--;
      showRandomHole();
    }, Math.random() * 1000 + 1000);
    }
  }
   
    function updateScore(score) {
      document.getElementById('score').textContent = 'Score:' + score;
    }

    function updateTimer(timer) {
      document.getElementById('timer').textContent = 'Time:' + timer;
    }
    function showPopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "flex";
    }

    function hidePopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "none";
    }
