var preguntas_cat_actual;
var arreglo_preguntas;
var index_pregunta;
var posicion_res = [1,2,3,4];
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
//funcion que carga mis respuestas a los botones
function cargar_botones(pregunta_actual) {
    index_pregunta = numero_aleatorio(1,5);
    document.getElementById("mostrar_pregunta").innerHTML = pregunta_actual.P;
    let html = "";
    console.log(posicion_res);
    posicion_res.sort(() => (Math.random()-0.5));
    console.log(posicion_res);
    html = html + `
    <button id="b_`+ posicion_res[0] +`" value = "`+ pregunta_actual.C +`">`+ pregunta_actual.C +`</button>
    <button id="b_`+ posicion_res[1] +`" value = "`+ pregunta_actual.I1 +`">`+ pregunta_actual.I1 +`</button>
    <button id="b_`+ posicion_res[2] +`" value = "`+ pregunta_actual.I2 +`">`+ pregunta_actual.I2 +`</button>
    <button id="b_`+ posicion_res[3] +`" value = "`+ pregunta_actual.I3 +`">`+ pregunta_actual.I3 +`</button>
    `
    document.getElementById("botones").innerHTML = html;  
    
};
function cargar_pregunta(nivel){
    if (nivel === 1) {
            index_pregunta = numero_aleatorio(0,4);
            console.log(index_pregunta);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[index_pregunta][0]);
            cargar_botones(preguntas_cat_actual);
    }
    if (nivel === 2) {
            index_pregunta = numero_aleatorio(5,9);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[index_pregunta][0]);
            cargar_botones(preguntas_cat_actual);
    }
    if (nivel === 3) {
          index_pregunta = numero_aleatorio(10,14);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[index_pregunta][0]);
            cargar_botones(preguntas_cat_actual);
    }
    if (nivel === 4) {
                index_pregunta = numero_aleatorio(15,19);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[index_pregunta][0]);
            cargar_botones(preguntas_cat_actual);
    }
    if (nivel === 5) {
                    index_pregunta = numero_aleatorio(20,24);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[index_pregunta][0]);
            cargar_botones(preguntas_cat_actual);
    }

}
function verificar_respuesta(identificador){
    if ((document.getElementById(identificador).value === preguntas_cat_actual.C)){
        if (nivel_juego === 1) {
            puntos =+ 10;
            premio.puntos = puntos;
        }
        if (nivel_juego === 2) {
            puntos =+ 15;
            premio.puntos = puntos;
        }
        if (nivel_juego === 3) {
            puntos =+ 20;
            premio.puntos = puntos;
        }
        if (nivel_juego === 4) {
            puntos =+ 25;
            premio.puntos = puntos;
        }
        if (nivel_juego === 5) {
            puntos =+ 30;
            premio.puntos = puntos;
        }
        nivel_juego = nivel_juego + 1;
        cargar_pregunta(nivel_juego);
    }else{
        console.log(premio);
        localStorage.setItem("puntaje",JSON.stringify(premio));
        window.location.href = "pantalla_inicial.html";
    };
};
cargar_pregunta(nivel_juego);
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