async function checkPass() {
  let inputPswd = document.getElementById("validate")
                          .value;
  let correctPswd = "1525";
  if (inputPswd === correctPswd) {
    showLetter();
  } else {
    alert("Incorrect password!");
  }
}

async function showLetter() {
  document.getElementById("container")
    .style.display = "flex";
  document.getElementById("prompt")
    .style.display = "none";
  document.querySelectorAll('.stoo').forEach((stoo) => {
    stoo.classList.add('toggle');
  });
}

async function showVideo() {
  document.getElementById("wait-audio").volume = 0.03;
  let video = document.getElementById("hamster-video");
  video.style.display = "flex";
  video.play();
  video.scrollIntoView();
}

function main() {
  var audio = document.getElementById("wait-audio");
  // if (audio.paused) {
  //   audio.play();
  // }
  audio.volume = 0.4;

  let input = document.getElementById("validate");
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      checkPass();
      event.preventDefault();
    }
    if (audio.paused) {
      audio.play();
    }
  });

  document.addEventListener('mouseover', () => {
    if (audio.paused) {
      audio.play();
    }
  });

  document.addEventListener('mouse', () => {
    if (audio.paused) {
      audio.play();
    }
  });

  document.addEventListener('mouseout', () => {
    if (audio.paused) {
      audio.play();
    }
  });
  
  // Click event
  document.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    }
  });

  document.addEventListener('touchstart', () => {
    if (audio.paused) {
      audio.play();
    }
  });
  
  document.addEventListener('touchmove', () => {
    if (audio.paused) {
      audio.play();
    }
  });
  
  document.addEventListener('touchend', () => {
    if (audio.paused) {
      audio.play();
    }
  });
  
}

window.onload = main();