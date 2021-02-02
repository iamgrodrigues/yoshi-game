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

document.addEventListener('keyup', handleKeyup);