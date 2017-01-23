window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) {
        return
    } else {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
});

function removeTransition(event) {
    if (event.propertyName != 'transform') {
        return
    } else {
        this.classList.remove('playing');
    }
};

const keys = document.querySelectorAll('.key');
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('transitionend', removeTransition);
};
