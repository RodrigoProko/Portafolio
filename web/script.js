function seleccionar(link){
    var opciones = document.querySelectorAll('#links a')
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    link.className = "seleccionado";
}
var x = document.getElementById("nav");
x.className = "";


function responsiveMenu(){
    var x = document.getElementById("nav")
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

window.onscroll = function() {
    efectoHabilidades()
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        document.getElementById("html").classList.add("barraProgreso1");
        document.getElementById("js").classList.add("barraProgreso2");
        document.getElementById("bd").classList.add("barraProgreso3");
        document.getElementById("react").classList.add("barraProgreso4");
    }
}