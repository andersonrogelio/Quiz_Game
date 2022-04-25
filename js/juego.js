var preguntas_cat_actual;
var arreglo_preguntas;
var index_pregunta;
var puntaje = 0;
var nivel_juego = 0;
var arreglo = [];
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
    let pos = 0;
    for (i=1;i<=4;i++){
        if (i === index_pregunta){
            html = html + `<button id="b_`+ i +`" value = "`+ pregunta_actual.C +`">`+ pregunta_actual.C +`</button>
            `
        }else{
            pos = pos + 1;            
            switch (pos) {
                case 1:
                    html = html + `<button id="b_`+ i +`" value = "`+ pregunta_actual.I1 +`">`+ pregunta_actual.I1 +`</button>
                    `
                    break;
               case 2:
                html = html + `<button id="b_`+ i +`" value = "`+ pregunta_actual.I2 +`">`+ pregunta_actual.I2 +`</button>
                `
                   break;
               case 3:
                html = html + `<button id="b_`+ i +`" value = "`+ pregunta_actual.I3 +`">`+ pregunta_actual.I3 +`</button>
                `
                   break;
            
                default:
                    break;
            };
        };
    };
    document.getElementById("botones").innerHTML = html;
    
};
function cargar_pregunta(nivel){
    switch (nivel) {
        case 1:
            index_pregunta = numero_aleatorio(1,5);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[index_pregunta][0]);
            cargar_botones(preguntas_cat_actual);
            break;
        case 2:
            index_pregunta = numero_aleatorio(6,10);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[index_pregunta][0]);
            cargar_botones(preguntas_cat_actual);
            break;
        case 3:
            index_pregunta = numero_aleatorio(11,15);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[index_pregunta][0]);
            cargar_botones(preguntas_cat_actual);
            break;
        case 4:
            index_pregunta = numero_aleatorio(15,20);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[index_pregunta][0]);
            cargar_botones(preguntas_cat_actual);
            break;
          case 5:
            index_pregunta = numero_aleatorio(20,25);
            preguntas_cat_actual = JSON.parse(arreglo_preguntas[index_pregunta][0]);
            cargar_botones(preguntas_cat_actual);
            break;
    
        default:
            break;
    }
    // preguntas_cat_actual = arreglo_preguntas[nivel];
    // console.log(arreglo_preguntas[nivel]);
    // console.log("esta es la preguntas categoria actual");
    // console.log(preguntas_cat_actual);
    // preguntas_cat_actual = preguntas[nivel];
    // nivel_juego = nivel_juego + 1;
    // pregunta_actual = preguntas_cat_actual[index_pregunta];
    // pregunta_actual = JSON.parse(preguntas[nivel]);
    // console.log(pregunta_actual);
}
function verificar_respuesta(identificador){
    if ((document.getElementById(identificador).value === pregunta_actual.C)){
        cargar_pregunta(nivel_juego +1);
        switch (nivel_juego) {
            case 1:
                puntaje = puntaje + 10
                break;
             case 2:
                puntaje = puntaje + 15;
                break;
             case 3:
                puntaje = puntaje + 20;
                 break;
             case 4:
                 puntaje = puntaje + 25;
                 break;
             case 5:
                 puntaje = puntaje + 30;
                 break;
            default:
                break;
        };
    }else{
        localStorage.setItem("puntos",toString(puntaje));
    };
};
cargar_pregunta(1);