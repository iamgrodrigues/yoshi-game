const yoshi = document.querySelector('.yoshi');
const background = document.querySelector('.background')
let isJumping = false;

function handleKeyup(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  let position = 0;

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
    bowserPosition -= 10;
    bowser.style.left = bowserPosition + 'px';

    if (bowserPosition < -60) {
      clearInterval(leftInteval);
      background.removeChild(bowser);
    } else {
      bowserPosition -= 10;
      bowser.style.left = bowserPosition + 'px';
    }
  }, 20);

  setTimeout(createBowser, randomTime);
}

createBowser();
document.addEventListener('keyup', handleKeyup);