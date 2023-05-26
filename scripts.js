const modal_overlay = document.querySelector('.modal_overlay');//variável que procura e guarda a div class modal overlay
const cards = document.querySelectorAll('.card');//variavel que procura e guarda a div class card

for (let card of cards){
    card.addEventListener("click",function(){
        const videoId= card.getAttribute("id");
        modal_overlay.classList.add("active");
        modal_overlay.querySelector("iframe").src =`https://www.youtube.com/embed/${videoId}`;
    })
}

document.querySelector('.close_modal').addEventListener("click",function(){
    modal_overlay.classList.remove("active")
    modal_overlay.querySelector("iframe").src="";
})