/* 
*** Cadastro de usuário ***
*/

//import do dataset
import {dataset} from './dataset.js';

/*** Validação ***/
//Nome
document.querySelector("#inName").addEventListener("keydown", function (event){
  if(event.key >= '0' && event.key <= '9'){event.preventDefault();}
});

//Account
document.querySelector("#inUserCode").addEventListener("keydown", function(event){
  if(event.key >= 'a' && event.key <= 'z'){event.preventDefault();}
});
document.querySelector("#inUserCode").addEventListener("blur", function(){
  let accountValidated = this.value;

  if ((accountValidated.length < 6 || accountValidated.length > 6) || validAccount.length != ' '){
    return alert('Preencha corretamente o código de 6 dígitos');
  }
});

//Password
document.querySelector("#inPassword").addEventListener("keydown", function(event){
  if(event.key >= 'a' && event.key <= 'z'){event.preventDefault();}
});

document.querySelector("#inPassword").addEventListener("blur", function(){
  let passwordValid = this.value;
  if (passwordValid.length < 6 || passwordValid.length > 6){
    return alert("Preencha corretamente a senha de 6 dígitos");
  }
});

/* Funções */
let cadastro = {
  name: '',
  email: '',
  newAccount: '',
  password: '',
};

//Registrar usuário
async function registerUser(){
  let name = document.getElementById("inName").value;
  let email = document.getElementById("inEmail").value;
  let password = document.getElementById("inPassword").value;
  let newAccount = document.getElementById("inUserCode").value;

  if(name === '' || email == '' || password == '' || newAccount == ''){
    return alert("Prencha os dados corretamente!")
  }

  cadastro.name = name;
  cadastro.email = email;
  cadastro.password = password;
  cadastro.newAccount = parseInt(newAccount);
  
  await verifyUser(cadastro, dataset);
};
document.getElementById("buttonIn").addEventListener('click', registerUser, true);


//Verificar se o usuário já existe
async function verifyUser(){
  let status;

  dataset.filter((users) => {
    users.userAccount === cadastro.newAccount ? status = true :  false;
  });

  status === true ? (
    alert("Essa conta já existe!"), window.location = './index.html') 
    : (window.location = './bank.html');
};