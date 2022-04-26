var his_jugadores;
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

//funcion que carga el historial de jgadores 
function historial() {
    let html = ""
    if(localStorage.getItem("historial") === null){
        // his_jugadores.push(JSON.parse(localStorage.getItem("puntaje")));
        his_jugadores =JSON.parse(localStorage.getItem("puntaje"));
        localStorage.setItem("historial",JSON.stringify(his_jugadores));
        html = `<p><strong>`+ his_jugadores.jugador +`</strong>  puntos: `+ his_jugadores.puntos +`</p>`
        document.getElementById("historial").innerHTML = html;
    }
   // if (localStorage.getItem("puntaje")===null){
    //}
    else  {//if(localStorage.getItem("historial")!==null)
        his_jugadores = [];
        his_jugadores.push(JSON.parse(localStorage.getItem("historial")));
        console.log(his_jugadores);
        if (localStorage.getItem("puntaje") !== null) {
            his_jugadores.push(JSON.parse(localStorage.getItem("puntaje")));
        }
        // if ((his_jugadores.length)>1) {
            // his_jugadores.push(JSON.parse(localStorage.getItem("puntaje")));
            
            for (let i = 0; i < his_jugadores.length; i++) {
                html = html+ `<p><strong>`+ his_jugadores[i].jugador +`</strong>  puntos: `+ his_jugadores[i].puntos +`</p>`;
            }
            document.getElementById("historial").innerHTML = html;
        // }else{
            // his_jugadores =JSON.parse(localStorage.getItem("puntaje"));
            // html = `<p><strong>`+ his_jugadores.jugador +`</strong>  puntos: `+ his_jugadores.puntos +`</p>`
            // if (localStorage.getItem("puntaje") !== null) {
            //     his_jugadores.push(JSON.parse(localStorage.getItem("puntaje")));
            // }
            // document.getElementById("historial").innerHTML = html;
        // }
       
    }


};
historial();
document.getElementById("salir_juegos").addEventListener("click",function(e){
    window.location.href="index.html";
    localStorage.removeItem("jugador");


});
// var arreglo_preguntas=[auxiliar,auxiliar];
// console.log(arreglo_preguntas);
// console.log(JSON.stringify(arreglo_preguntas));
// let cadena = JSON.stringify(arreglo_preguntas);
// console.log(cadena[0]);
// console.log(JSON.parse(JSON.stringify(arreglo_preguntas)));
// let obj = JSON.parse(cadena);
// console.log(obj);
// console.log(obj[0]);