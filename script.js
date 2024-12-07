
document.getElementById('history').addEventListener('click',()=>{
  showSectionByID('historySection');

});
document.getElementById('donation').addEventListener('click',()=>{
  showSectionByID('donationSection');
});

function showSectionByID(id){
  document.getElementById('donationSection').classList.add('hidden');
  document.getElementById('historySection').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}

document.getElementById("btn-add-money").addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.getElementById("input-add-money")
  const addMoney = parseFloat(input.value);

  const debitBal = parseFloat(document.getElementById("balance").innerText);
  if (!isNaN(addMoney) && addMoney > 0) {
    const ultimateDeb = debitBal - addMoney;
    if (ultimateDeb < 0) {
      return alert("You don't have enough balance to donate");
    } else {
      const model = document.getElementById("model-pop");
      model.showModal();
      const credit = parseFloat(
        document.getElementById("total-balance").innerText
      );
      const ultimateCredit = credit + addMoney;
      document.getElementById("total-balance").innerText = ultimateCredit;
      document.getElementById("balance").innerText = ultimateDeb;
      const div = document.createElement("div");
      const date = new Date();
      const time = date.toLocaleTimeString();
      const title = document.getElementsByClassName("content")[0].innerHTML;
      div.className = " justify-between p-2 bg-slate-100 rounded-xl my-2";
      div.innerHTML = `<span class="text-2xl text-black font-bold">${addMoney} taka is Donated for ${title}</span>
                    <p class='text-gray-400'>Date: ${date} at Time: ${time}</p>`;
      document.getElementById("historySection").appendChild(div);
      input.value = ''
      return;
    }
  } else {
    return alert("Please enter a valid number");
  }
});
document.getElementById("btn-add-money2").addEventListener("click", (event) => {
  event.preventDefault();
  const input =
  document.getElementById("input-add-money2")
  const addMoney = parseFloat(input.value
  );
  const debitBal = parseFloat(document.getElementById("balance").innerText);
  if (!isNaN(addMoney) && addMoney > 0) {
    const ultimateDeb = debitBal - addMoney;
    if (ultimateDeb < 0) {
      return alert("You don't have enough balance to donate");
    }
    const model = document.getElementById("model-pop");
    model.showModal();
    const credit = parseFloat(
      document.getElementById("total-balance2").innerText
    );
    const ultimateCredit = credit + addMoney;
    document.getElementById("total-balance2").innerText = ultimateCredit;
    document.getElementById("balance").innerText = ultimateDeb;
    const div = document.createElement("div");
    const date = new Date();
    const time = date.toLocaleTimeString();
    const title = document.getElementsByClassName("content2")[0].innerHTML;
    div.className = " justify-between p-2 bg-slate-100 rounded-xl my-2";
    div.innerHTML = `<span class="text-2xl text-black font-bold">${addMoney} taka is Donated for ${title}</span>
                    <p class='text-gray-400'>Date: ${date} at Time: ${time}</p>`;
    document.getElementById("historySection").appendChild(div);
     input.value = ''
    return;
  } else {
    return alert("Please enter a valid number");
  }
});
document.getElementById("btn-add-money3").addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.getElementById("input-add-money3");
  const addMoney = parseFloat(input.value
  );
  const debitBal = parseFloat(document.getElementById("balance").innerText);
  if (!isNaN(addMoney) && addMoney > 0) {
    const ultimateDeb = debitBal - addMoney;
    if (ultimateDeb < 0) {
      return alert("You don't have enough balance to donate");
    }
    const model = document.getElementById("model-pop");
    model.showModal();
    const credit = parseFloat(
      document.getElementById("total-balance3").innerText
    );
    const ultimateCredit = credit + addMoney;
    document.getElementById("total-balance3").innerText = ultimateCredit;

    document.getElementById("balance").innerText = ultimateDeb;
    const div = document.createElement("div");
    const date = new Date();
    const time = date.toLocaleTimeString();
    const title = document.getElementsByClassName("content3")[0].innerHTML;
    div.className = " justify-between p-2 bg-slate-100 rounded-xl my-2";
    div.innerHTML = `<span class="text-2xl text-black font-bold">${addMoney} taka is Donated for ${title}</span>
                    <p class='text-gray-400'>Date: ${date} at Time: ${time}</p>`;
    document.getElementById("historySection").appendChild(div);
    input.value = ''
    return;
  } else {
    return alert("Please enter a valid number");
  }
});
