function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  let oH1 = document.querySelector('#countdown');
let nSec = 5;

function fCountdown() {
  oH1.textContent = (nSec < 5 ? '0' + nSec : nSec);
  if (!nSec) {
    clearInterval(tCountdown);
    setTimeout(() => {
      nSec = 5;
      tCountdown = setInterval(fCountdown, 1000);
    }, 5000);
  }
  nSec--;
}

let tCountdown = setInterval(fCountdown, 1000);
