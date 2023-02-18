
// Devuelve la primera coincidencia que busques
const barralateral = document.querySelector(".barralateral"); 
const boton = document.querySelector(".boton");

const body = document.querySelector(".bodye");

// Funcion event Listener, escuchando continuamente
boton.addEventListener("click", function(){
    // habilitamos la clase
    if ( barralateral.classList.contains('esconder') ){
        barralateral.classList.remove("esconder");
        body.classList.add("parar");
        barralateral.classList.add("show");
        boton.innerHTML = "Cerrar barra lateral";
    } else {
        barralateral.classList.remove("show");
        body.classList.remove("parar");
        barralateral.classList.add("esconder");
        boton.innerHTML = "Abrir barra lateral";
    }
    
});