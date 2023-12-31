var c = document.getElementById("rectangulos");
var cxt = c.getContext("2d");

cxt.fillStyle = "#123456"; // Definimos el color para rellenar el rectangulo
cxt.fillRect(30, 10, 50, 100); // Dibuja un rectangulo relleno - fillRect(x,y,width,height)

cxt.strokeStyle = "yellow"; // Definimos el color para pintar el borde
cxt.strokeRect(22, 11, 333, 55); // Dibuja el borde del rectangulo - strokeRect(x,y,width,height)

cxt.fillRect(145, 25, 70, 70); // Dibuja un rectangulo relleno del ultimo color definido con fillStyle

cxt.fillStyle = "rgba(220,220,10,0.7)"; // Definimos otro color para rellenar el rectangulo
cxt.fillRect(180, 10, 100, 100); // Dibuja un rectangulo relleno

cxt.clearRect(56, 15, 200, 2); // Borra el contenido que hubiese en el area del rectangulo definido

cxt.strokeRect(10, 20, 80, 80); // Dibuja el borde del rectangulo de definido por ultima vez con strokeStyle.