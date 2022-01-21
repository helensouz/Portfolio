const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach((element) => {
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    })
}

animeScroll()

window.addEventListener("scroll", () => {
    animeScroll();
})


// function typeWrite(elemento){
//     const textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = ' ';
//     textoArray.forEach(function(letra, i){
//         setTimeout(function(){
//         elemento.innerHTML += letra;
//         }, 200 * i)
//     });
// }


// typeWrite(titulo);
