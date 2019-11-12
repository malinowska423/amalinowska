function displayEntrance(...indexes) {
    const content = document.getElementById('gallery');
    let divHTML = '';
    for (let i = 0; i < indexes.length; i++) {
        divHTML = divHTML +
            '<a href="album/photo_'
            + indexes[i] +
            '.jpg" data-lightbox="album"><img class="thumb" src="album/thumbs/thumb_photo_'
            + indexes[i] + '.jpg" alt=""/></a>';
    }
    content.innerHTML = divHTML;

}

function displayGallery(amount) {
    hide('show');
    const content = document.getElementById('gallery');
    let divHTML = '';
    for (let i = amount; i >= 1; i--) {
        divHTML = divHTML +
            '<a href="album/photo_'
            + i +
            '.jpg" data-lightbox="album"><img class="thumb" src="album/thumbs/thumb_photo_'
            + i + '.jpg" alt=""/></a>';
    }
    content.innerHTML = divHTML;
}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}
