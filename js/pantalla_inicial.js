document.getElementById("crear_juego").addEventListener("click",function(e){
    window.location.href= "configuracion.html";
});
document.getElementById("comenzar_juego").addEventListener("click",function(e){
    window.location.href = "juego.html";
});
var niveles = 0;
var auxiliar = {
    "CAT":"",
    "P":"",
    "C": "",
    "I1": "",
    "I2": "",
    "I3":""
};
// var arreglo_preguntas=[auxiliar,auxiliar];
// console.log(arreglo_preguntas);
// console.log(JSON.stringify(arreglo_preguntas));
// let cadena = JSON.stringify(arreglo_preguntas);
// console.log(cadena[0]);
// console.log(JSON.parse(JSON.stringify(arreglo_preguntas)));
// let obj = JSON.parse(cadena);
// console.log(obj);
// console.log(obj[0]);