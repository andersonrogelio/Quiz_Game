var preguntas_cat_actual;
var categoria_actual;
var arreglo_preguntas;
var index_pregunta;
var puntos = 0;
var premio = {
    "jugador":"",
    "puntos":0
};
premio.jugador = localStorage.getItem("jugador");
var nivel_juego = 1;
//Esta funcion me generara un numero aleatorio entre un rango dado
function numero_aleatorio(inicio,final){
    return inicio + Math.floor(Math.random()*final);
};
console.log(numero_aleatorio(1,5));
//guardo las preguntas guardadas en mi variable arreglo_preguntas
arreglo_preguntas = JSON.parse(localStorage.getItem("preguntas"));
console.log(arreglo_preguntas);
console.log(arreglo_preguntas[0]);
console.log(JSON.parse(arreglo_preguntas[0][0]));
//muestra info del jugador 
function info_jugador() {
    document.getElementById("datos_usuario").innerHTML = "Jugador " + premio.jugador + " puntos acumulados " +premio.puntos;
    categoria_actual = JSON.parse(arreglo_preguntas[nivel_juego-1][0])
    document.getElementById("cat_pregunta").innerHTML  = "Pregunta de " +  categoria_actual.CAT;
    //   arreglo_preguntas[nivel-1][index_pregunta]
}
info_jugador();
//funcion que carga mis respuestas a los botones
function cargar_botones(pregunta_actual) {
    index_pregunta = numero_aleatorio(1,5);
    document.getElementById("mostrar_pregunta").innerHTML = pregunta_actual.P;
    let html = "";
    let datos = [pregunta_actual.C,pregunta_actual.I1,pregunta_actual.I2,pregunta_actual.I3];
    console.log(datos);
    datos.sort(() => (Math.random()-0.5));
    console.log(datos);

    html = html + `
    <button id="b_1" value = "`+ datos[0] +`">`+ datos[0] +`</button>
    <button id="b_2" value = "`+ datos[1] +`">`+ datos[1] +`</button>
    <button id="b_3" value = "`+ datos[2] +`">`+ datos[2] +`</button>
    <button id="b_4" value = "`+ datos[3] +`">`+ datos[3] +`</button>
    `
    document.getElementById("botones").innerHTML = html;  
    
    
};
function cargar_pregunta(nivel){
    if (nivel === 1) {
            index_pregunta = numero_aleatorio(0,4);
            console.log(index_pregunta);

            preguntas_cat_actual = JSON.parse(arreglo_preguntas[nivel-1][index_pregunta]);
            console.log(preguntas_cat_actual);
            cargar_botones(preguntas_cat_actual);
    }
    if (nivel === 2) {
            index_pregunta = numero_aleatorio(0,4);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[nivel-1][index_pregunta]);
            cargar_botones(preguntas_cat_actual);
    }
    if (nivel === 3) {
        index_pregunta = numero_aleatorio(0,4);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[nivel-1][index_pregunta]);
            cargar_botones(preguntas_cat_actual);
    }
    if (nivel === 4) {
                index_pregunta = numero_aleatorio(0,4);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[nivel-1][index_pregunta]);
            cargar_botones(preguntas_cat_actual);
    }
    if (nivel === 5) {
                    index_pregunta = numero_aleatorio(0,4);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[nivel-1][index_pregunta]);
            cargar_botones(preguntas_cat_actual);
    }

}
function verificar_respuesta(identificador){
    if ((document.getElementById(identificador).value === preguntas_cat_actual.C)){
        if (nivel_juego === 1) {
            puntos =+ 10;
            premio.puntos = puntos;
            alert("Felicitaciones pasaste al siguiente nivel ");
        }
        if (nivel_juego === 2) {
            puntos =+ 15;
            premio.puntos = puntos;
            alert("Felicitaciones pasaste al siguiente nivel ");
        }
        if (nivel_juego === 3) {
            puntos =+ 20;
            premio.puntos = puntos;
            alert("Felicitaciones pasaste al siguiente nivel ");
        }
        if (nivel_juego === 4) {
            puntos =+ 25;
            premio.puntos = puntos;
            alert("Felicitaciones pasaste al siguiente nivel ");
        }
        if (nivel_juego === 5) {
            puntos =+ 30;
            premio.puntos = puntos;
            alert("Felicitaciones has ganado ")
            window.location.href = "pantalla_inicial.html";
        }
        nivel_juego = nivel_juego + 1;
        cargar_pregunta(nivel_juego);
        info_jugador();
    }else{
        console.log(premio);
        localStorage.setItem("puntaje",JSON.stringify(premio));
        alert("Has perdido");
        window.location.href = "pantalla_inicial.html";
    };
};
if (puntos === 0){
    cargar_pregunta(nivel_juego);
} 
document.getElementById("b_1").addEventListener("click",function(e){
    verificar_respuesta("b_1");
});
document.getElementById("b_2").addEventListener("click",function(e){
    verificar_respuesta("b_2");
});
document.getElementById("b_3").addEventListener("click",function(e){
    verificar_respuesta("b_3");
});
document.getElementById("b_4").addEventListener("click",function(e){
    verificar_respuesta("b_4");
});
document.getElementById("terminar_juego").addEventListener("click",function(e){
    localStorage.setItem("puntaje",JSON.stringify(premio));
    window.location.href = "pantalla_inicial.html";
});