const container = document.getElementsByClassName('logos')[0];
const images = Array.from(container.querySelectorAll("img"));

function moveRight() {
    for (let i = 0; i < images.length; i++) {
        if (images[i] < window.innerHeight - 2) {
            
        }
    }
}

window.onload = moveRight;