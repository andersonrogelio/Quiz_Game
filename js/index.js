var nombre_jugador; //declaracion de mi variable global que contendra el nombre del jugador 
function verificacion_nombre(){ //funcion que verifica que se ingrese un nombre 
    console.log(nombre_jugador);
    if  (nombre_jugador === ""){
        alert("Debe ingresar su nombre para poder comenzar el juego");
    }else{
        localStorage.setItem("jugador",nombre_jugador);
        window.location.href = "pantalla_inicial.html";
    }
};
//evento que me permite guardar nombre del jugador y verificar si se ingreso uno para luego iniciar la pantalla principal del juego
document.getElementById("entrar_juego").addEventListener("click",function(e){ 
     nombre_jugador = document.getElementById("jugador").value;
     verificacion_nombre();
});

