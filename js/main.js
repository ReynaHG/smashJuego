var numeroAlAzar; 
var puntos = 0;
var intentos = 5;

var imagenes = [
 "ana.jpg", "analy.jpg", 
 "areli.jpg"];

 var nombres = [ 
 "anita", "analy", 
 "areli"];

 $("select[name=selectorPais]").change(function(){
        alert("Tu sede es: "+ $("select[name=selectorPais]").val());
        $("input[name=mexico]").val($(this).val());
      nuevaJugada();
      }); // función para mandar alerta al seleccionar sede


function desplegarPuntos(){
  $('#spanPuntos').text(puntos); // cambio de puntaje
};

function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min; //genera un numero al azar y permite que la imagen cambie. 
  var entero = Math.floor(numero);
  return entero;
};

function desplegarNuevaJugada() {
  var tamanoArreglo = nombres.length;
  
  if(tamanoArreglo > 0) {
    numeroAlAzar = enteroRandomEnRango( 0, tamanoArreglo);   //cuando las imagenes se terminaron el juego termina. 
    var imagen ='fotos/'+ imagenes[numeroAlAzar];
    $('#imagenPersona').attr('src',imagen);
  }else{
    alert('!!Triunfaste¡¡');
  }
 
};
  


$(document).ready(function(){
    $('#btnRevisar').click(function(){
      //obtener nombre
      var nombre =$('#inputNombre').val();
      nombre=nombre.toLowerCase();
      console.log("El usuario escribió: "+nombre);

      var nombreAAdivinar = nombres[numeroAlAzar];
      console.log("El nombre correcto es: " + nombreAAdivinar);

      if (nombre === nombreAAdivinar){
         nombres.splice(numeroAlAzar, 1);
         imagenes.splice(numeroAlAzar, 1);
         puntos = puntos + 5;  // suma, cambia el marcador al acertar el nombre. 
         desplegarNuevaJugada(); 
      }else{
        puntos = puntos -1; // resta, cambia el puntaje cuando no se acerta. 
        intentos--;
        alert('Sgue intentando te quedan ' + intentos + ' intentos');
        if (intentos<=1) { // alerta de los intentos que quedan. 
          alert('Los intentos se agotaron. Perdiste :(');

        }
      }
      desplegarNuevaJugada();
      desplegarPuntos();  
    });

    desplegarNuevaJugada();  
});

