var x, y;

var btnNoElement = document.getElementById('btnNo'),
    btnYesElement = document.getElementById('btnYes');
btnNoElement.onmouseover = function () {
    x = Math.floor(((Math.random() - 0.5) * 2) * (window.innerWidth / 2));
    y = Math.floor(((Math.random() - 0.5) * 2) * (window.innerHeight / 5));
    btnNoElement.style.right = x + 'px';
    btnNoElement.style.top = y + 'px';
}

btnYesElement.onclick = function () {
    alert('Chúc mừng mày nhận ra sự thật 😉');
}

