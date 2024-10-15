//menu lateral

var menu_visible = false
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
   else{
    menu.style.display = "none";
    menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//creo las barritas de una barra particular identificada pro su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendchild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let word = document.getElementById("word");
crearBarra(word);
let excel = document.getElementById("excel");
crearBarra(excel);

//ahora voy a guardar la cantidad de barritas que se van a ir pintado por cada barar
//para eso utilizo un arreglo, cada posicion pertenece a un elemento
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la vot a utilizar de bandera para saber si ya ejecuto la animacion
let entro = false;

//funcion que aplica las animaciones de la habilidades
function eefctoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distacia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervaljavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervaljavascript);
        },100);
        const intervalword = setInterval(function(){
            pintarBarra(word, 11, 2, intervalword);
        },100);
        const intervalexcel = setInterval(function(){
            pintarBarra(excel, 11, 3, intervalexcel);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementByClassName("e");
        elementos[x].style.backgroundColor = "darkviolet";
    }else{
        clearInterval(interval)
    }
}

//dectecto el scrolling del mouse para aplicar la animacion de la barra
window.onscroll = function(){
    eefctoHabilidades();
}