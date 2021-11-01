// Login do usuário

// Import do dataset
import {dataset} from './dataset.js';

/* Funções */

//Validação do input
let validAccount = document.querySelector("#userAccount");
let validPassword = document.querySelector("#userPass");

validAccount.addEventListener("keydown", function (e) {
  if(e.key >= 'a' && e.key <= 'z'){
    e.preventDefault();
 }
});

validPassword.addEventListener("keydown", function (e) {
  if(e.key >= 'a' && e.key <= 'z'){
    e.preventDefault();
  }
});

//Login
const validateLogin = () => {
  let user = document.getElementById("userAccount").value;
  let password = document.getElementById("userPass").value;
  let status;
  let location;
  let confirmUser;
  let confirmPass;

  for (let users of dataset){
    if (parseInt(user) == users.userAccount){
      confirmUser = true;
    } else {
     status = "Conta não encontrada!";
    }
    if (parseInt(password) == users.password){
      confirmPass = true;     
    } else {
      status = "Senha inválida!";
    }
  }
  if (confirmPass == true && confirmUser == true){
    status = alert("Login realizado com sucesso!");
    location = window.location = './bank.html';
  } else {
    status = alert("Dados incorretos. Tente novamente");
    location = window.location = './index.html';
  }
  return `${status} ${location}`;
} 
document.getElementById('buttonIn').addEventListener('click', validateLogin, true);

//Cadastrar new user
const newUser = () => {
  window.location = "./registration.html";
};
document.getElementById('btnNewUser').addEventListener('click', newUser, true);