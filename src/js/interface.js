/* Sidebar buttons */

//Bank Statement
document.getElementById("btn-statement").addEventListener('click', () => {
  let displayStatement = document.getElementById("statement").style.display;
  if (displayStatement != 'block'){
      document.getElementById("statement").style.display = 'block';
  } else {
      document.getElementById("statement").style.display = 'none';
  }
});

//Withdraw
document.getElementById("btn-withdraw").addEventListener('click', () => {
  let displayWithdraw = document.getElementById("withdraw").style.display;
  if (displayWithdraw != 'block'){
      document.getElementById("withdraw").style.display = 'block';
  } else {
      document.getElementById("withdraw").style.display = 'none';
  }
});

//Deposit
document.getElementById("btn-deposit").addEventListener('click', () => {
  let displayDeposit = document.getElementById("deposit").style.display;
  if (displayDeposit != 'block'){
      document.getElementById("deposit").style.display = 'block';
  } else {
      document.getElementById("deposit").style.display = 'none';
  }
});

//Payment
document.getElementById("btn-payment").addEventListener('click', () => {
  return alert("Função indisponível no momento!");
});

//Transfer
document.getElementById("btn-transfer").addEventListener('click', () => {
  let displayTransfer = document.getElementById("transfer").style.display;
  if (displayTransfer != 'block'){
      document.getElementById("transfer").style.display = 'block';
  } else {
      document.getElementById("transfer").style.display = 'none';
  }
});

//Chat
document.getElementById("btn-chat").addEventListener('click', () => {
  return alert("Função indisponível no momento!");
});

/* Toggle */
let element = document.getElementById("wrapper");
let toggleBtn = document.getElementById("menu-toggle");

toggleBtn.onclick = () => {element.classList.toggle("toggled");};

/* */
let clearWithdraw = document.getElementById("inputWithdraw");
document.getElementById("clear").addEventListener('click', () => {
  clearWithdraw.value = '';
});

let clearTransferValue = document.getElementById("transferValue");
let clearTransferAccoount = document.getElementById("accountNumber");
document.getElementById("clearTransfer").addEventListener('click', () => {
  clearTransferValue.value = '';
  clearTransferAccoount.value = '';
});

let clearDeposit = document.getElementById("depositValue");
document.getElementById("clearDeposit").addEventListener('click', () => {
  clearDeposit.value = '';
})