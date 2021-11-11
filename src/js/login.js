/*  
  *** Login do usuário *** 
*/

// Import do dataset
import {dataset} from './dataset.js';

/* *** Funções  *** */

//Validação do input
const validAccount = document.querySelector("#userAccount").addEventListener("keydown", 
  function (event) {
    if(event.key >= 'a' && event.key <= 'z'){
      event.preventDefault();
  }
});

const validPassword = document.querySelector("#userPass").addEventListener("keydown", 
  function (event) {
    if(event.key >= 'a' && event.key <= 'z'){
      event.preventDefault();
    }
});

/* Login */

// Receber os valores do form
document.getElementById('buttonIn').addEventListener('click', function (){
  let user = parseInt(document.getElementById("userAccount").value);
  let password = parseInt(document.getElementById("userPass").value);

  validateLogin(user, password);
}, true);

// Receber os valores e confirmar se a conta existe
const validateLogin = (user, password) => {
  let confirmUser;
  let confirmPassword;

  dataset.filter((users) => {
    users.userAccount == user ? confirmUser = true : false
  })

  dataset.filter((users) => {
    users.password == password ? confirmPassword = true : false
  })
  isLoginConfirmed(confirmPassword, confirmUser);
} 

//Confirmar o login
const isLoginConfirmed = (confirmPassword, confirmUser) => {
  let status;
  let location;

  if (confirmPassword == true && confirmUser == true){
    status = alert("Login realizado com sucesso!");
    location = window.location = './bank.html';
  } else {
    status = alert("Dados incorretos ou insuficientes. Tente novamente");
    location = window.location = './index.html';
  }
  return `${status} ${location}`;
}

//Cadastrar new user
document.getElementById('btnNewUser').addEventListener('click', () => {window.location = "./registration.html"}, true);