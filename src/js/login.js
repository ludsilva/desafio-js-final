// Login do usuário

// Import do dataset
import {dataset} from './dataset.js';

/* Funções */

//Login
const validateLogin = () => {
  let user = document.getElementById("userAccount").value;
  let password = document.getElementById("userPass").value;
  let status;
  let location;

  for (let users of dataset){
    if (user == users.userAccount && password == users.password){
      status = alert("Login realizado com sucesso!");
      location = window.location = './bank.html';
    } else  {
      status = alert("Erro! Tente novamente.");
      location = window.location = './index.html';
    }
    return `${status} ${location}`;
  }
} 
document.getElementById('buttonIn').addEventListener('click', validateLogin, true);

//Cadastrar new user
const newUser = () => {
  window.location = "./registration.html";
};
document.getElementById('btnNewUser').addEventListener('click', newUser, true);