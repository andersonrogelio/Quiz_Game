var preguntas_cat_actual;
var pregunta_actual;
var index_pregunta;
//Esta funcion me generara un numero aleatorio entre un rango dado
function numero_aleatorio(inicio,final){
    return inicio + Math.floor(Math.random()*final);
};
console.log(numero_aleatorio(1,5));
//guardo las preguntas guardadas en mi variable arreglo_preguntas
arreglo_preguntas = localStorage.getItem("preguntas");
//funcion que carga mis respuestas a los botones
function cargar_pregunta(){
    preguntas_cat_actual = arreglo_preguntas[0];
    index_pregunta = numero_aleatorio(1,5);
    pregunta_actual = preguntas_cat_actual[index_pregunta];
    document.getElementById("mostrar_pregunta").innerHTML = pregunta_actual.P;
    for (i=1;i<=4;i++){
        if (i === index_pregunta){
            document.getElementById("b_"+i +"").innerHTML = pregunta_actual.C;
            document.getElementById("b_"+i +"").value = pregunta_actual.C;
        }else{
            document.getElementById("b_"+i +"").innerHTML = pregunta_actual.I+`"`+i +`"`;
            document.getElementById("b_"+i +"").value = pregunta_actual.I+`"`+i +`"`;
        };
    };

};
function verificar_respuesta(){
};