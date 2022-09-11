window.addEventListener("load", () => {
  
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (!audio) return; // stop the function from running all together, otherwise 'null' is returned everytime

    audio.currentTime = 0; // rewind to the start, otherwise if multiple clicks, the sound has to finish before starting again
    audio.play();
    key.classList.add('playing'); // jquery : key.addClass('playing')
  }
  
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if it's not a transform
    
    // once the transition is done, we want to reverse to the original state
    e.target.classList.remove('playing'); // or this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // can't use addEventListener alone because keys is an array and we need to loop
  window.addEventListener('keydown', playSound);

})