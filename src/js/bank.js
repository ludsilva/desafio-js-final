// Bank

// Import do dataset
import {dataset} from './dataset.js';

/*** Funções ***/
let balance = document.getElementById("balanceDisplay");
let balanceTotal = 25;
let statementTotal = {
    descricao: '',
    valor: '',
}

//Deposito
const deposit = () =>{
    let inputDeposit = document.getElementById("depositValue").value;

    if (inputDeposit == '' || isNaN(inputDeposit)){
        alert("Valor inválido, tente novamente!");
    } else {
       balanceTotal += (Number(inputDeposit));
       alert("Operação executada com sucesso!");
       statement("Depósito", inputDeposit);
    }
    
    balance.innerHTML = balanceTotal.toFixed(2);
}
document.getElementById("depositConfirm").addEventListener('click', deposit, true);
document.getElementById("balanceDisplay").innerHTML = balanceTotal.toFixed(2);


//Saque
const withdraw = () =>{
    let inputWithdraw = document.getElementById("inputWithdraw").value;

    if (inputWithdraw == '' || isNaN(inputWithdraw)){
        alert("Valor inválido, tente novamente!");
    } else if (inputWithdraw > balanceTotal){
        alert("Saldo insuficiente!");
    }
    else {
        balanceTotal -= (Number(inputWithdraw));
        alert("Operação executada com sucesso!");
        statement("Saque", inputWithdraw);
    }
    balance.innerHTML = balanceTotal.toFixed(2);
    
}
document.getElementById("confirmWithdraw").addEventListener('click', withdraw, true);
document.getElementById("balanceDisplay").innerHTML = balanceTotal.toFixed(2);


//Sair
const exit = () =>{
    return window.location = './index.html';
}
document.getElementById("btn-exit").addEventListener('click', exit, true);


//Transferência
const transfer = () =>{
    let transferAccount = document.getElementById("accountNumber").value;
    let transferValue = document.getElementById("transferValue").value;
    let status = '';

    if (transferAccount == '' || transferValue == ''){
        status = 'Insira os valores corretamente!';
    } else if (balanceTotal < transferValue){
        status = 'Saldo insuficiente!';
    } else {
        let transferConfirmation;
        for (let users of dataset){
            if (Number(transferAccount) === users.userAccount){
                users.balance = users.balance + Number(transferValue);
                balanceTotal -= (Number(transferValue));
                status = `Transação confirmada! \n Seu saldo: R$ ${balanceTotal}.00. \n Saldo conta destino: R$ ${users.balance}.00`;
                transferConfirmation = true;
                statement("Transferência", transferValue);
            } else if (transferConfirmation != true) {
               status = 'Conta inexistente';
            }
        }
    }
    alert(status);

    balance.innerHTML = balanceTotal.toFixed(2);
}
document.getElementById("confirm").addEventListener('click', transfer, true);
document.getElementById("balanceDisplay").innerHTML = balanceTotal.toFixed(2);

//Historico
const statement = (type, value) => {
    let categoria = type;
    let descricao = "Valor: " + value;
    let saldo = balanceTotal;

    statementTotal.descricao = type;
    statementTotal.valor = value;
    
    addRow(categoria, descricao, saldo);
}

const addRow = (categoria, descricao, saldo) => {
    let tbody = document.getElementById("tbody");

        let tr = tbody.insertRow();
        let td_categoria = tr.insertCell();
        let td_descricao = tr.insertCell();
        let td_saldo = tr.insertCell();

        td_categoria.innerText = categoria;
        td_descricao.innerText = descricao;
        td_saldo.innerText = "R$ " + saldo.toFixed(2);
};