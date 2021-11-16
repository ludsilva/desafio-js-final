/* Sidebar buttons */

const btnTypes = ['statement', 'withdraw', 'deposit', 'transfer'];

const showDivs = btnTypes.filter((btnType) =>{
  document.getElementById(`btn-${btnType}`).addEventListener('click', () =>{
    let btnDisplay = document.getElementById(`div-${btnType}`).style.display
    if (btnDisplay != 'block'){
      document.getElementById(`div-${btnType}`).style.display = 'block';
    } else {
      document.getElementById(`div-${btnType}`).style.display = 'none';
   }
  }) 
});

//Payment and Chat
const btnUnavailable = ['payment', 'chat'];

const showUnavaibleAlert = btnUnavailable.filter((btnType) =>{
  document.getElementById(`btn-${btnType}`).addEventListener('click', () => {
    return alert("Função indisponível no momento!");
  })
});

/* Toggle */
let element = document.getElementById("wrapper");
let toggleBtn = document.getElementById("menu-toggle");

toggleBtn.onclick = () => {element.classList.toggle("toggled");};

/*Clear buttons */
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