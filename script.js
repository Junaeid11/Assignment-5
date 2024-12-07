// let balance = 100;

document.getElementById("donation").addEventListener('click', ()=> addOrHideSection("donation"));
document.getElementById("history").addEventListener('click', ()=>addOrHideSection('history'));

// {i used ternary operator}
addOrHideSection = (section) => {
    const donationSection = document.getElementById('donationSection');
    const historySection = document.getElementById('historySection');
  
    section === 'donation'
      ? (donationSection.classList.remove('hidden'), historySection.classList.add('hidden'))
      : (historySection.classList.remove('hidden'), donationSection.classList.add('hidden'));
  };
 

// function addTask(button) {
//     const model = document.getElementById("my_modal_1");
//     const taskBox = document.getElementById("historySection");
//     const parentDiv = button.closest(".flex");
//     const title = parentDiv.querySelector(".content").innerHTML;
//     const input = parentDiv.querySelector(".donation");
//     const data = input.value.trim();
//     if (data === '' || isNaN(data)) {
//         model.close();
//         return;
//     }
//     const now = new Date();
//     const date = now.toUTCString();
//     const time = now.toLocaleTimeString();
//     const li = document.createElement('p');
//     li.className = 'p-7 my-5 text-black bg-gray-200 rounded-xl shadow';
//     li.innerHTML = `<span class="text-2xl font-bold">${data} taka Donated ${title}</span> 
//                     <p>Date: ${date} at Time: ${time}</p>`;
    
//     taskBox.appendChild(li);
//     input.value = ''; 
//     model.open();
// }

document.getElementById('btn-add-money').addEventListener('click', (event)=>{
     event.preventDefault();
    const addMoney = parseFloat(document.getElementById('input-add-money').value);
    if(!isNaN(addMoney)){
        const credit = parseFloat(document.getElementById('total-balance').innerText);
        const ultimateCredit = credit + addMoney;
        document.getElementById('total-balance').innerText = ultimateCredit;
         const debitBal = parseFloat(document.getElementById('balance').innerText);
         const ultimateDeb =  debitBal - addMoney;
        document.getElementById('balance').innerText = ultimateDeb;

    }
    else{
        return alert('Please enter a valid number');
    }
})




