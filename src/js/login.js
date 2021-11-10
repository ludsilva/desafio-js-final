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
const formSubmitedValues = () => {
  let user = parseInt(document.getElementById("userAccount").value);
  let password = parseInt(document.getElementById("userPass").value);

  validateLogin(user, password);
}
document.getElementById('buttonIn').addEventListener('click', formSubmitedValues, true);


// Receber os valores e confirmar se a conta existe
const validateLogin = (user, password) => {
  let status;
  let confirmUser;
  let confirmPassword;

  const checkedUsers = dataset.filter((users) => {
    users.userAccount == user ? confirmUser = true : status = "Conta não encontrada!"
  })

  const chekedPasswords = dataset.filter((users) => {
    users.password == password ? confirmPassword = true : status = "Senha inválida!"
  })
  isLoginConfirmed(confirmPassword, confirmUser, status);
} 

//Confirmar o login
const isLoginConfirmed = (confirmPassword, confirmUser, status) => {
  let location;

  if (confirmPassword == true && confirmUser == true){
    status = alert("Login realizado com sucesso!");
    location = window.location = './bank.html';
  } else {
    status = alert("Dados incorretos. Tente novamente");
    location = window.location = './index.html';
  }
  return `${status} ${location}`;
}

//Cadastrar new user
const newUser = () => {
  window.location = "./registration.html";
};
document.getElementById('btnNewUser').addEventListener('click', newUser, true);