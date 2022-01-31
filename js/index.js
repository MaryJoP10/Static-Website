
var nombre;
var edad;
function redireccionar(){
    window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=6s";
} 
nombre=prompt('Ingrese su nombre:','');
edad=prompt('Ingrese su edad:','');
alert('Hola '+ nombre);
if (edad<18){
    alert("Eres menor de edad, seras redireccionado, disculpe")
    setTimeout (redireccionar(), 5000);
}else{
    alert("Bien pueda, siga adelante nene")
}