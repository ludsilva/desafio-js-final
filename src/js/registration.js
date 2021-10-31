// Regristro de usuário

import {dataset} from './dataset.js';

let cadastro = {
  name: '',
  email: '',
  newAccount: '',
  password: '',
};

/*** Validação ***/
//Nome
let validName = document.querySelector("#inName");
validName.addEventListener("keydown", function (e){
  if(e.key >= '0' && e.key <= '9'){
    e.preventDefault();
 }
});

//Password
let validPassword = document.querySelector("#inPassword");
validPassword.addEventListener("keydown", function(e){
  if(e.key >= 'a' && e.key <= 'z'){
     e.preventDefault();
  }
});

validPassword.addEventListener("blur", function(e){
  let passwordValid = this.value;

  if (passwordValid.length < 6 || passwordValid.length > 6){
    return alert("Preencha corretamente a senha de 6 dígitos");
  }
});

//Account
let validAccount = document.querySelector("#inUserCode");
validAccount.addEventListener("keydown", function(e){
  if(e.key >= 'a' && e.key <= 'z'){
     e.preventDefault();
  }
});
validAccount.addEventListener("blur", function(e){
  let accountValidated = this.value;

  if ((accountValidated.length < 6 || accountValidated.length > 6) && validAccount.length != ' '){
    return alert('Preencha corretamente o código de 6 dígitos');
  }
});

/* Funções */
//Registrar usuário
async function registerUser(){
  let name = document.getElementById("inName").value;
  let email = document.getElementById("inEmail").value;
  let password = document.getElementById("inPassword").value;
  let newAccount = document.getElementById("inUserCode").value;

  if(name === '' && email == '' && password == '' && newAccount == ''){
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
  let status = 'Erro! Tente novamente';

  for (let users of dataset){
    if(cadastro.newAccount === users.userAccount){
      status = "Essa conta já existe! Tente novamente!";
      window.location = './index.html';
      return alert(status);
    } else {
      window.location = './bank.html';
    }
  }
};

