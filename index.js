let currentImage = document.querySelector('main').firstElementChild

const nextPicture = function () {
    if (currentImage.nextElementSibling) {
        currentImage.nextElementSibling.hidden = false
        currentImage.hidden = true       
        currentImage = currentImage.nextElementSibling
    } else {
        currentImage.hidden = true
        currentImage = document.querySelector('main').firstElementChild
        currentImage.hidden = false
    }

}


const previousPicture = function () {
    if (currentImage.previousElementSibling) {
        currentImage.previousElementSibling.hidden = false
        currentImage.hidden = true       
        currentImage = currentImage.previousElementSibling
    } else {
        currentImage.hidden = true
        currentImage = document.querySelector('main').lastElementChild
        currentImage.hidden = false
    }

}
forward.addEventListener('click', nextPicture)
back.addEventListener('click', previousPicture)
