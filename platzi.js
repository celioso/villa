var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var colorcito = "red";

dibujarLinea(colorcito, 1,1,1,499, papel);
dibujarLinea(colorcito, 1,499,499,499, papel);
dibujarLinea(colorcito, 2499,1,1,1, papel);
dibujarLinea(colorcito, 499,499,499,1, papel);

var fondo = {
  url:"tile.png",
  cargaOk: false
}

var vaca ={
  url:"vaca.png",
  cargaOk: false
}

var cerdo ={
  url:"cerdo.png",
  cargaOk: false
}

var pollo ={
  url:"pollo.png",
  cargaOk: false
}

var cantidad = aleatorio(0, 20);


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


function cargarFondo()
{
fondo.cargaOk = true;
dibujar();
}

function cargarVacas()
{
vaca.cargaOk = true;
dibujar();
}

function cargarCerdos()
{
cerdo.cargaOk = true;
dibujar();
}

function cargarPollos()
{
pollo.cargaOk = true;
dibujar();
}

function dibujar()
{
  if(fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

    if(vaca.cargaOk)
    {
      //var cantidad = aleatorio(5, 25);
      console.log(cantidad);
      for(v=0; v < cantidad; v++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(vaca.imagen, x, y);
      }
    }

    if(cerdo.cargaOk)
    {
      //var cantidad = aleatorio(5, 25);
      //console.log(cantidad);
      for(c=0; c < cantidad; c++)
      {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(cerdo.imagen, x, y);
      }
    }

    if(pollo.cargaOk)
    {
      //var cantidad = aleatorio(5, 25);
      //console.log(cantidad);
      for(p=0; p < cantidad; p++)
      {
        var x = aleatorio(0, 10);
        var y = aleatorio(0, 10);
        var x = x * 80;
        var y = y * 80;
        papel.drawImage(pollo.imagen, x, y);
      }
    }
}


function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

//-----------------------------------------------------------------------------------

var teclas = {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39
};
console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);   //keyup se utiliza cuanto no quiero que el envento suceda cuando la precione si no cuando se suelte la tecla y keydown e spara cuando se preciona la tecla
var cuadrito = document.getElementById("area_de_dibujo");
//var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red",x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3; //esta liena se usa para el grosor de la linea cada numero son los pixel
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
//if(evento.keyCode == teclas.UP)
//{
  //console.log("vamos pa arriba");
//}
var colorcito = "green";
var movimiento = 5;
 switch(evento.keyCode)
 {
   case teclas.UP:
    dibujarLinea(cerdo, x, y, x, y - movimiento, papel);
    y = y - movimiento;
   break;

   case teclas.DOWN:
   dibujarLinea(cerdo, x, y, x, y + movimiento, papel);
   y = y + movimiento;
   break;

   case teclas.LEFT:
   dibujarLinea(cerdo, x, y, x - movimiento, y, papel);
   x = x - movimiento;
   break;

   case teclas.RIGHT:
   dibujarLinea(cerdo, x, y, x + movimiento, y, papel);
   x = x + movimiento;
   break;

   default:
   alert("Son las flechas");
   console.log("Son las flechas");
   break;
 }
  //console.log(evento.keyCode);
}

dibujarLinea(colorcito, 1,1,1,499, papel);
dibujarLinea(colorcito, 1,499,499,499, papel);
dibujarLinea(colorcito, 2499,1,1,1, papel);
dibujarLinea(colorcito, 499,499,499,1, papel);
