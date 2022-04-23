var nombre_jugador;
function verificacion_nombre(){
    console.log(nombre_jugador);
    if  (nombre_jugador === ""){
        alert("Debe ingresar su nombre para poder comenzar el juego");
    }else{
        window.location.href = "pantalla_inicial.html";
    }
}
console.log(document.getElementById("jugador").value);
document.getElementById("entrar_juego").addEventListener("click",function(e){
     nombre_jugador = document.getElementById("jugador").value;
     verificacion_nombre();
});