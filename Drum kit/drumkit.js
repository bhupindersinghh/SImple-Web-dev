function playSound(e){
   
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        //console.log(key);
        if(!audio){
            return;
        }
        audio.currentTime=0; 
        audio.play();
        key.classList.add('playing');
    
}
function removetransition(e){
    // console.log(e.propertyName);
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removetransition));
window.addEventListener('keydown', playSound);
