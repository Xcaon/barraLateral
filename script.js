

const barralateral = document.querySelector(".barralateral"); 
const boton = document.querySelector(".boton");

// Funcion event Listener, escuchando continuamente
boton.addEventListener("click", function(){
    // habilitamos la clase
    if ( barralateral.classList.contains('esconder') ){
        barralateral.classList.remove("esconder");
        barralateral.classList.add("show");
        boton.innerHTML = "Cerrar barra lateral";
    } else {
        barralateral.classList.remove("show");
        barralateral.classList.add("esconder");
        boton.innerHTML = "Abrir barra lateral";
    }
    
});