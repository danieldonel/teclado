

document.addEventListener('keydown', function(event) {
    var keyPressed = event.key.toLowerCase();
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent.toLowerCase() === keyPressed) {
            buttons[i].classList.add('pressed');
            break;
        }
    }
});

document.addEventListener('keyup', function(event) {
    var keyPressed = event.key.toLowerCase();
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent.toLowerCase() === keyPressed) {
            buttons[i].classList.remove('pressed');
            break;
        }
    }
});
