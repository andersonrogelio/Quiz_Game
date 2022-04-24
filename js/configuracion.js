//creacion de variable que usare
var categorias = ["Paises","Ciudades","Deportes","Famosos","Curiosidades"]
var categoria_selecionada;
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
document.getElementById("siguiente_nivel").style.visibility = "hidden";
//hago que el form se vuelva invisible 
document.getElementById("preguntas").style.visibility = "hidden";
//imprimo en pantalla en que categoria estan guardando las preguntas
function mostrar_categoria(){
    document.getElementById("nivel_pregunta").innerHTML = `Preguntas de categoria `+ categorias[categoria_selecionada] ;

}

//cargando las ategorias en la web
function cargar_categorias(){
    let html = "";
for (let i=0;i<(categorias.length); i++){//cargo en una variable las categorias que tengo posibles para mis preguntas
    html = html + `<option value=` + i +` id="`+i+`"   >`+ categorias[i] +`</option>`;    
};
document.getElementById("categoria").innerHTML = html;//aca la muestro en la pagina web   
}
cargar_categorias();

//funcion que me limpia los campos de los datos para el juego
function limpiar_campos(){
document.getElementById("pregunta").value="";
document.getElementById("res_correcta").value="";
document.getElementById("res_incorrecta1").value="";
document.getElementById("res_incorrecta2").value="";
document.getElementById("res_incorrecta3").value="";
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
    auxiliar.I3 = r_i3;
    arreglo_auxiliar.push(JSON.stringify(auxiliar));
    console.log(arreglo_auxiliar);
    limpiar_campos();
    auxiliar.P = "";
    auxiliar.C="";
    auxiliar.I1= "";
    auxiliar.I2 = "";
    auxiliar.I3 = "";
};
//funcion que me permite pasar a crear las preguntas de la siguiente categoria
function siguiente_nivel(){
    // if (arreglo_auxiliar.length < 5){
    //     // arreglo_preguntas.push(JSON.stringify(arreglo_auxiliar));
    //     arreglo_preguntas.push(arreglo_auxiliar);
    // }else
     if (arreglo_auxiliar.length === 5){
        arreglo_preguntas.push(arreglo_auxiliar);
        document.getElementById("siguiente_nivel").style.visibility = "visible";
        arreglo_auxiliar = [];
    };
};

document.getElementById("guardar").addEventListener("click",function(e){

    guardar_preguntas();
    siguiente_nivel();
    //Me falta controlar que los campos de introduccion de informacion no esten vacios
});

document.getElementById("agregar_preguntas").addEventListener("click",function(e){
    categoria_selecionada = document.getElementById("categoria").value;
     console.log(categoria_selecionada);
    mostrar_categoria();
arreglo_auxiliar.push(categorias[document.getElementById("categoria").value]);
// console.log(arreglo_auxiliar);
document.getElementById("sele_categorias").style.visibility = "hidden";
document.getElementById("preguntas").style.visibility = "visible";

});
document.getElementById("siguiente_nivel").addEventListener("click",function(e){
    let indice = document.getElementById("categoria").value;
    document.getElementById(indice).setAttribute("disabled", "");
    document.getElementById("sele_categorias").style.visibility = "visible";
    document.getElementById("preguntas").style.visibility = "hidden";
    document.getElementById("siguiente_nivel").style.visibility = "hidden";

});