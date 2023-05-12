const modal_overlay = document.querySelector('.modal_overlay');//variável que procura e guarda a div class modal overlay
const cards = document.querySelectorAll('.card');//variavel que procura e guarda a div class card

for (let card of cards){
    card.addEventListener("click",function(){
        modal_overlay.classList.remove("active")
    })
}

document.querySelector('.close_modal').addEventListener("click",function(){
    modal_overlay.classList.remove("active")
})