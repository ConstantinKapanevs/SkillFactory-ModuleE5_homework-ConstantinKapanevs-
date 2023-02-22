let currentImage = document.querySelector('main').firstElementChild

const previousPicture = function () {
    if (currentImage.previousElementSibling) {
        currentImage.hidden = true
        currentImage = currentImage.previousElementSibling
        currentImage.hidden = false
    } else {
        currentImage.hidden = true
        currentImage = document.querySelector('main').lastElementChild
        currentImage.hidden = false
    }

}
const nextPicture = function () {
    if (currentImage.nextElementSibling) {
        currentImage.hidden = true;

        currentImage = currentImage.nextElementSibling
        currentImage.hidden = false
    } else {
        currentImage.hidden = true
        currentImage = document.querySelector('main').firstElementChild
        currentImage.hidden = false
    }

}



back.addEventListener('click', previousPicture)
forward.addEventListener('click', nextPicture)
