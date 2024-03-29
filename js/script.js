//cargo en un arreglo de las imagenes de los logos de tecnologia. 
//Este sera el orden que se mostrarán
let logos = ["1delfin.svg","2python.svg", "3basedatos.svg", "4logo-javascript.svg", "5angular-icon-1.svg", "6django.svg" ];

//arreglo que guardara la opcion correcta
let correcta = [0,2,2,1,0,1];

//ARREGLO PREGUNTAS
let preguntas= [];
preguntas.push(["¿A cuál de los siguientes identifica el Delfin?"]);
preguntas.push(["¿Que lenguaje de programación es?"]);
preguntas.push(["El siguiente icono representa a:"]);
preguntas.push(["¿La abreviatura siguiente significa?"]);
preguntas.push(["¿Cúal es el nombre de dicho FrameWork?"]);
preguntas.push(["Es un framework de desarrollo para Python"]);

//arreglo que guardara las tecnologias a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["MySQL", "MariaDB", "SQLServer"]);
opciones.push(["PHP", "C++","PYTHON"]);
opciones.push(["CRIPTOMONEDAS", "PAYPAL","BASE DE DATOS"]);
opciones.push(["JASON", "JAVASCRIPT", "JALA SOFT"]);
opciones.push(["ANGULAR", "ANGULO", "AGUDO"]);
opciones.push(["DJAVIER", "DJANGO", "DJEASY"]);

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarLogos();
}

//funcion que carga los siguientes logos  y sus opciones
function cargarLogos(){
    //controlo si se acabaron las logos
    if(logos.length <= posActual){
        terminarJuego();
    }else{
        //cargo las opciones y limpiamos las clases(CSS) que se asignaron
        limpiarOpciones();

        let ul = document.getElementById("preg");//PREGUNTAS
        ul.innerHTML = preguntas[posActual];//PREGUNTAS
        document.getElementById("imgLogos").src = "img/" + logos[posActual];//IMAGEN
        
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar el siguiente logo y sus opciones
    setTimeout(cargarLogos,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = logos.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}