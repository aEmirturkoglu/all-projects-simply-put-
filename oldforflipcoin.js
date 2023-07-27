let result;
    let scoreall = JSON.parse(localStorage.getItem("myObj")) || {
      wins:0,
      losses:0
    };
    const p11 = document.querySelector('.dap')
    const dadiv1 = document.getElementById('daDiv');
    const dadiv3 = document.getElementById('dadiv3')
    //renderit();

    const but1 = document.getElementById('b1');
    const but2 = document.getElementById('b2');

    //let guest = '';

    but1.addEventListener('click',() => runner('heads'));
    but2.addEventListener('click',() => runner('tails'));

    /*let*/ /* guest */ //= //prompt('heads or tails?');

    function animate() {
  // Declare a variable to store the interval ID
  let intervalID;
  // Define a function to clear the interval after 3000 ms
  function stopAnimation() {
    clearInterval(intervalID);
    dadiv1.innerHTML = "";
    }
    // Set the interval to update the HTML every 1000 ms and assign it to the variable
    intervalID = setInterval(() => {
      dadiv1.innerHTML = `<!-- HTML -->
  <div class="coin-container">
    <div class="coin">
      <img src="headandtailsimg/theHead.jpg" alt="Heads" class="heads"> <!-- The image for the heads side -->
      <img src="headandtailsimg/theTail.jpg" alt="Tails" class="tails"> <!-- The image for the tails side -->
    </div>
  </div>
  `;
    }, 900);
    // Set a timeout to call the stopAnimation function after 3000 ms
    setTimeout(stopAnimation, 4000);
  }
  

    function animateres(result) {
        setTimeout((result) => {
      if (result == 'heads') {
        dadiv3.innerHTML = '<img src="headandtailsimg/theHead.jpg" alt="Heads" class="heads>';
      } else if (result == 'tails') {
        dadiv3.innerHTML = '<img src="headandtailsimg/theTail.jpg" alt="Tails" class="tails">';
      }}, 3000);
    }


  
  
    function runner(guest) {
      animate()
     /*const*/   let randomizer = Math.random();
      randomizer >= 0.5 ? result ='heads': result = 'tails';
      randomizer; //= Math.random();
      guest === result? win()  : lose() 
      animateres(result)
      renderit(guest )
    }
    
    function renderit(guest, result) {//////////////////////
      setTimeout((result) => {
        dadiv2.innerHTML = `wins: ${scoreall.wins}, losses ${scoreall.losses}`; 
        
      },4000)
      
      localStorage.setItem("myObj", JSON.stringify(scoreall));
      p11.innerHTML = `you have chosen ${guest || 'nothing yet'}`;

    }

    // Save it to localStorage
    // bura yada aşağı araştır localStorage.setItem("myObj", JSON.stringify(scoreall));

    // Retrieve it from localStorage
    // let scoreall = JSON.parse(localStorage.getItem("myObj"));
    

    function win(result) {
      animateres(result)
      scoreall.wins++;
      respfunc()
      renderit();
      
    }

    function lose(result) {
      animateres(result)
      scoreall.losses++;
      respfunc()
      renderit();
      
    }

    function respfunc(guest, result) {
      guest === result? p11.textContent='u won'  :p11.textContent= 'u lost'
    }