//add money form;
function getNumberInputById2(id){
    const number=document.getElementById(id);
    const numbertype=parseFloat(number.value);
    number.value='';
    return numbertype;
    
}
let history=document.getElementById('transactionhistory');
let Cureent_balance=document.getElementById('Cureent_balance');

const addmoneybutton=document.getElementById('addmoney');
addmoneybutton.addEventListener('click',function(event){
    event.preventDefault();
  const AddAmount=getNumberInputById2('AddAmount');
  const addpin=getNumberInputById2('addpin');
if(addpin==1111){
   let newbalance=parseFloat(Cureent_balance.innerText)+AddAmount;
   Cureent_balance.innerText=newbalance;

   let div=document.createElement('div');
div.innerHTML=`
  <div class="felx justify-between flex-row bg-slate-400 rounded-xl">
    <div class="flex gap-3 "><img src="payoo.png" alt="" width="50" height="50"><p class="text-xl font-bold">Add Money ${AddAmount}  <br><span class="font-thin">time:1.20pm</span></p></div>
 
  </div>
  
  `
  history.appendChild(div);

}
})
//cash out 


const outmoneybutton=document.getElementById('outmoney');
outmoneybutton.addEventListener('click',function(event){
    event.preventDefault();
  const outAmount=getNumberInputById2('outAmount');
  const outpin=getNumberInputById2('outpin');
if(outpin==1111){
   let newoutbalance=parseFloat(Cureent_balance.innerText)-outAmount;
  
   if(newoutbalance>0){
    Cureent_balance.innerText=newoutbalance;
    let div=document.createElement('div');
    div.innerHTML=`
      <div class="felx justify-between flex-row bg-red-300 rounded-xl">
        <div class="flex gap-3 "><img src="payoo.png" alt="" width="50" height="50"><p class="text-xl font-bold">Cash out ${outAmount}  <br><span class="font-thin">time:1.20pm</span></p></div>
     
      </div>
      
      `
      history.appendChild(div);
   }
   else{
    alert('not enought balance')
   }

}
else{
    event.preventDefault();
    alert('wrong password');
    return;
}
})
//transfer 


const transmoneybutton=document.getElementById('transmoney');
transmoneybutton.addEventListener('click',function(event){
    event.preventDefault();
  const transAmount=getNumberInputById2('transAmount');
  const transpin=getNumberInputById2('transpin');
if(transpin==1111){
   let newtransbalance=parseFloat(Cureent_balance.innerText)-transAmount;
  
   if(newtransbalance>0){
    Cureent_balance.innerText=newtransbalance;
    let div=document.createElement('div');
    div.innerHTML=`
      <div class="felx justify-between flex-row bg-yellow-200 rounded-xl">
        <div class="flex gap-3 "><img src="payoo.png" alt="" width="50" height="50"><p class="text-xl font-bold">Transfer Money ${transAmount}  <br><span class="font-thin">time:1.20pm</span></p></div>
     
      </div>
      
      `
      history.appendChild(div);
   }
   else{
    alert('not enought balance')
   }

}
else{
    event.preventDefault();
    alert('wrong password');
    return;
}
})
//Get Bonus


const Bonusmoneybutton=document.getElementById('Bonusmoney');
Bonusmoneybutton.addEventListener('click',function(event){
    event.preventDefault();
  const Bonuspin=getNumberInputById2('Bonuspin');
if(Bonuspin==2222){
   let newtransbalance=parseFloat(Cureent_balance.innerText)+100;

    Cureent_balance.innerText=newtransbalance;
    let div=document.createElement('div');
    div.innerHTML=`
      <div class="felx justify-between flex-row bg-green-200 rounded-xl">
        <div class="flex gap-3 "><img src="payoo.png" alt="" width="50" height="50"><p class="text-xl font-bold">Get Bonus 1000  <br><span class="font-thin">time:1.20pm</span></p></div>
     
      </div>
      
      `
      history.appendChild(div);

}
else{
    event.preventDefault();
    alert('wrong coupon');
    return;
}
})
//pay bill 


const paymoneybutton=document.getElementById('paymoney');
paymoneybutton.addEventListener('click',function(event){
    event.preventDefault();
  const payAmount=getNumberInputById2('payAmount');
  const paypin=getNumberInputById2('paypin');
if(paypin==1111){
   let newpaybalance=parseFloat(Cureent_balance.innerText)-payAmount;
  
   if(newpaybalance>0){
    Cureent_balance.innerText=newpaybalance;
    let div=document.createElement('div');
    div.innerHTML=`
      <div class="felx justify-between flex-row bg-red-300 rounded-xl">
        <div class="flex gap-3 "><img src="payoo.png" alt="" width="50" height="50"><p class="text-xl font-bold">Pay bill ${payAmount}  <br><span class="font-thin">time:1.20pm</span></p></div>
     
      </div>
      
      `
      history.appendChild(div);
   }
   else{
    alert('not enought balance')
   }

}
else{
    event.preventDefault();
    alert('wrong password');
    return;
}
})

//history
function clickbuttonByid(id){
    const classname=document.getElementById(id);
    document.getElementById('add').classList.add('hidden');
    document.getElementById('out').classList.add('hidden');
    document.getElementById('trans').classList.add('hidden');
    document.getElementById('bonus').classList.add('hidden');
    document.getElementById('bill').classList.add('hidden');
    document.getElementById('his').classList.add('hidden');
    classname.classList.remove('hidden')
}
document.getElementById('card1').addEventListener('click',function(){
    clickbuttonByid('add')
})
document.getElementById('card2').addEventListener('click',function(){
    clickbuttonByid('out')
})
document.getElementById('card3').addEventListener('click',function(){
    clickbuttonByid('trans')
})
document.getElementById('card4').addEventListener('click',function(){
    clickbuttonByid('bonus')
})
document.getElementById('card5').addEventListener('click',function(){
    clickbuttonByid('bill')
})
document.getElementById('card6').addEventListener('click',function(){
    clickbuttonByid('his')
})

///log out 
const logout=document.getElementById('logout');
logout.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href="index.html";

})