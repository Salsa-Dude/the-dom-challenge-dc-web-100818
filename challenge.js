

  document.addEventListener("DOMContentLoaded", function(){
    startGame();
  });

  function startGame() {
    let plusBtn = document.getElementById('+');
    let minusBtn = document.getElementById('-');
    let likeBtn = document.getElementById('3');
    let pauseBtn = document.getElementById('pause');
    let counter = document.getElementById('counter');
    let ulLike = document.querySelector('.likes');
    let form = document.getElementById('comment-form');
    let commentList = document.getElementById('list')
    let commentInput = document.getElementById('comment-input');
    let allBtns = Array.from(document.querySelectorAll('button'));
    let counterObj = {};

    plusBtn.addEventListener('click', incrementCounter);
    minusBtn.addEventListener('click', decrementCounter);
    pauseBtn.addEventListener('click', pauseGame);
    likeBtn.addEventListener('click', giveLike);
    form.addEventListener('submit', (e) => leaveComment(e) );

  
    setInterval(() => {
      counter.innerText = parseInt(counter.innerText) + 1
    }, 1000);

    function incrementCounter() {
      console.log(counterObj)
      counter.innerText = parseInt(counter.innerText) + 1
     }

    function decrementCounter() {
      counter.innerText = parseInt(counter.innerText) - 1
    }

    function giveLike() {
      if(counterObj[counter.innerText]) {
        counterObj[counter.innerText] += 1
        ulLike.innerHTML = `<li>Number liked ${counter.innerText}</li> <br> 
          <li> Likes: ${counterObj[counter.innerText]} </li>
        `;
      
      } else {
        counterObj[counter.innerText] = 1
        ulLike.innerHTML = `<li>Number liked ${counter.innerText}</li> <br> 
        <li> Likes: ${counterObj[counter.innerText]} </li>
      `;
      }
    }

    function pauseGame() {
      if (pauseBtn.innerText === 'pause') {
        allBtns.forEach(btn => {
          if (btn.id !== 'pause') {
            btn.disabled = true;
          }
        });
        pauseBtn.innerText = 'resume' 
      } else if (pauseBtn.innerText === 'resume') {
        allBtns.forEach(btn => {
          if (btn.id !== 'pause') {
            btn.disabled = false;
          } 
        });
        pauseBtn.innerText = 'pause'
      }
    }

    function leaveComment(e) {
      e.preventDefault();
      let comment = commentInput.value

      let pComment = document.createElement('p')
      pComment.innerText = ` - ${comment}`
      commentList.appendChild(pComment);
      form.reset();
    }

  }

 

  

  

  

  

 

 



  



 

  
  

  

  


