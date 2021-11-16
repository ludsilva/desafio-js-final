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
  cadastro.name = document.getElementById("inName").value;
  cadastro.email = document.getElementById("inEmail").value;
  cadastro.password = document.getElementById("inPassword").value;
  cadastro.newAccount = parseInt(document.getElementById("inUserCode").value);

  if(cadastro.name === '' || cadastro.email === '' || cadastro.password === '' || isNaN(cadastro.newAccount)){
    return alert("Prencha os dados corretamente!")
  }
  
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