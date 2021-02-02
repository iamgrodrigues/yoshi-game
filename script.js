const yoshi = document.querySelector('.yoshi');
const background = document.querySelector('.background')
let isJumping = false;
let position = 0;

function handleKeyup(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;
          yoshi.style.bottom = position + 'px';
        }
      }, 20);
    } else {
      position += 20
      yoshi.style.bottom = position + 'px';
    }
  }, 20);
}

function createBowser() {
  const bowser = document.createElement('div');
  let bowserPosition = 1000;
  let randomTime = Math.random() * 6000;

  bowser.classList.add('bowser');
  bowser.style.left = 1000 + 'px';
  background.appendChild(bowser);

  let leftInteval = setInterval(() => {
    if (bowserPosition < -60) {
      clearInterval(leftInteval);
      background.removeChild(bowser);
    } else if (bowserPosition > 0 && bowserPosition < 60 && position < 60) {
      clearInterval(leftInteval);
      document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';
    } else {
      bowserPosition -= 10;
      bowser.style.left = bowserPosition + 'px';
    }
  }, 20);

  setTimeout(createBowser, randomTime);
}

createBowser();
document.addEventListener('keyup', handleKeyup);