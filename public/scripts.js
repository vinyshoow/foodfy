const modaloverlay = document.querySelector('.modal-overlay');

const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        
        const imageid = card.getAttribute('id');
        const title = card.querySelector('.card_content').innerHTML;
        const author = card.querySelector('.card_info').innerHTML;
                
        modaloverlay.classList.add('active');
        modaloverlay.querySelector('img').src= `/${imageid}.png`;
        modaloverlay.querySelector('.modal-title').innerHTML = `${title}`;
        modaloverlay.querySelector('.modal-author').innerHTML = `${author}`;
        
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modaloverlay.classList.remove('active')

})