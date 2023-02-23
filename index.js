let position = 0;
let myPosition = document.getElementById('main');


const pictures = ['Chess1.jpg', 'Chess2.jpg', 'Chess3.jpg',
    'Chess4.jpg', 'Chess5.jpg', 'Chess6.jpg', 'Chess7.jpg',
    'Chess8.jpg', 'Chess9.jpg', 'Chess10.jpg'];

function pictureInserting() {
    let myElement = document.createElement('img');
    myElement.setAttribute('class', 'images');
    myElement.src = `assets/${pictures[position]}`;
    myPosition.insertAdjacentElement('afterbegin', myElement);
}
const previousPicture = function () {
    if (myPosition.hasChildNodes()) {
        myPosition.removeChild(myPosition.firstChild)
    }
    if (position > 0) {
        position -= 1
    } else { position = pictures.length - 1 }

    console.log(position)
    pictureInserting();
}

const nextPicture = function () {
    if (myPosition.hasChildNodes()) {
        myPosition.removeChild(myPosition.firstChild)
    }
    if (position < pictures.length - 1) {
        position += 1
    } else { position = 0 }

    console.log(position)
    pictureInserting();
}

nextPicture();
let back = document.getElementById('back')
let forward = document.getElementById('forward')

back.addEventListener('click', previousPicture)
forward.addEventListener('click', nextPicture)
