/* const modaloverlay = document.querySelector('.modal-overlay'); */

const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        
        const recipeId = card.getAttribute('id');
        window.location.href = `/recipes/0`;

        /* const title = card.querySelector('.card_content').innerHTML;
        const author = card.querySelector('.card_info').innerHTML;
                
        modaloverlay.classList.add('active');
        modaloverlay.querySelector('img').src= `/${imageid}.png`;
        modaloverlay.querySelector('.modal-title').innerHTML = `${title}`;
        modaloverlay.querySelector('.modal-author').innerHTML = `${author}`; */
        
    })
}

/* document.querySelector(".close-modal").addEventListener("click", function() {
    modaloverlay.classList.remove('active')

}) */


function showHideIng(){
    let display = document.querySelector('#showHideIng').style.display;
    let showHide = document.querySelector('.showHideIng');

    document
      .querySelector("#showHideIng")
      .classList
      .toggle("hide");
    
    if(display == "none") {
        document.querySelector('#showHideIng').style.display = 'block';
        showHide.innerHTML = "ESCONDER";
    }
    else {
        document.querySelector('#showHideIng').style.display = 'none';
        showHide.innerHTML = "MOSTRAR";
    }
}

function showHidePrep(){
    let display = document.querySelector('#showHidePrep').style.display;
    let showHide = document.querySelector('.showHidePrep');

    document
      .querySelector("#showHidePrep")
      .classList
      .toggle("hide");
    
    if(display == "none") {
        document.querySelector('#showHidePrep').style.display = 'block';
        showHide.innerHTML = "ESCONDER";
    }
    else {
        document.querySelector('#showHidePrep').style.display = 'none';
        showHide.innerHTML = "MOSTRAR";
    }
}

function showHideInfo(){
    let display = document.querySelector('#showHideInfo').style.display;
    let showHide = document.querySelector('.showHideInfo');

    document
      .querySelector("#showHideInfo")
      .classList
      .toggle("hide");
    
    if(display == "none") {
        document.querySelector('#showHideInfo').style.display = 'block';
        showHide.innerHTML = "ESCONDER";
    }
    else {
        document.querySelector('#showHideInfo').style.display = 'none';
        showHide.innerHTML = "MOSTRAR";
    }
}
