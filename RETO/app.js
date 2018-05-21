var userName = prompt('¿Ingresa tu nombre?');
console.log(userName);

if(userName.length > 0 ){
  var userNameP = document.getElementsById('userName');
  userNameP.texContent = userName;
}
else {
      alert('Por favor ingresar nombre')
}
