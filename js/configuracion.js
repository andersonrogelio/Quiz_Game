//creacion de variable que usare
var arreglo_preguntas=[];
var arreglo_auxiliar = [];
var auxiliar = {
    P:'',
    C: '',
    I1: '',
    I2: '',
    I3:' '
};
//Hago el boton para pasar a configurar las preguntas del siguiente invisible hasta que se tenga las 5 preguntas necesarias por nivel
document.getElementById("siguiente_nivel").style.visibility = hidden;
//imprimo en pantalla en que nivel estan guardando las preguntas
document.getElementById("nivel_pregunta").innerHTML = "Preguntas de nivel "+ (arreglo_auxiliar.length+1);
//funcion que me limpia los campos de los datos para el juego
function limpiar_campos(){
document.getElementById("pregunta").value;
document.getElementById("res_correcta").value;
document.getElementById("res_incorrecta1").value;
document.getElementById("res_incorrecta2").value;
document.getElementById("res_incorrecta3").value;
};
//funcion que me guarda las preguntas en un arreglo
function guardar_preguntas(){
   let pre = document.getElementById("pregunta").value;
    auxiliar.P = pre;
   let r_c = document.getElementById("res_correcta").value;
    auxiliar.C=r_c;
   let r_i1 = document.getElementById("res_incorrecta1").value;
    auxiliar.I1= r_i1
    let r_i2 = document.getElementById("res_incorrecta2").value;
    auxiliar.I2 = r_i2;
    let r_i3 = document.getElementById("res_incorrecta3").value;
    auxiliar.I2 = r_i3;
    arreglo_auxiliar.push(auxiliar);
    limpiar_campos();
};
//funcion que me permite pasar a crear las preguntas de la siguiente categoria
function siguiente_nivel(){
    if (arreglo_auxiliar.length=4){
        arreglo_preguntas.push(arreglo_auxiliar);
        document.getElementById("siguiente_nivel").style.visibility = visible;
    }
};