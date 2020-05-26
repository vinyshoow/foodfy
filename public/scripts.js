/* const modaloverlay = document.querySelector('.modal-overlay'); */

const cards = document.querySelectorAll('.card');

cards.forEach(function(card,index) {
    card.addEventListener("click", function(){
        
        const recipeId = card.getAttribute('id');
        window.location.href = `/admin/recipes/${index}`;        
    });
});

const cardLists = document.querySelectorAll('.visualizar');

cardLists.forEach(function(card,index) {
    card.addEventListener("click", function(){
        
        const recipeId = card.getAttribute('id');
        window.location.href = `/admin/recipes/${index}`;        
    });
});



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
