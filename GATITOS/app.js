var userAge = parseInt(prompt('Por favor ingresa tu edad'));
console.log(userAge);

var userName = prompt('Por favor ingresa el nombre de tu gato');
console.log(userName);

if(userAge >= 18){
 var tituloID = document.getElementById('titulo');
  tituloID.textContent = 'Hola gatito miau grande' + userAge;
 var userNameP = document.getElementById('userName');
   userNameP.textContent =  userName;
}
