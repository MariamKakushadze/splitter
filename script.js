"use strict";

const bill=document.querySelector('#bill');
const tip=Array.from(document.querySelectorAll('.tip-btn'));
const customTip=document.querySelector('.custom-tip');
const personNum=document.querySelector('#people');
const tipAmount=document.querySelector('.final-tip');
const totalAmount=document.querySelector('.final-total');
const resetBtn=document.querySelector('.reset');
const error=document.querySelector('.error-msg');

const reset=function(){
tipAmount.innerHTML=`$0.00`;
totalAmount.innerHTML=`$0.00`;
bill.value='';
customTip.value='';
personNum.value='';
error.style.display="none";
personNum.style.border = "none";
bill.style.border = "none";
customTip.style.border = "none";
}

personNum.addEventListener('input', function(){
  if (personNum.value%1!=0){
    personNum.value=Math.round(personNum.value);
    error.style.display="none";
    personNum.style.border = "none";
  }else if(personNum.value==0){
    personNum.style.border = "2px solid red";
    error.style.display="block";
    error.innerHTML="Can't be zero!"
  }else if(personNum.value<0){
    personNum.style.border = "2px solid red";
    error.style.display="block";
    error.innerHTML="Can't be negative!"
  }else{
    personNum.style.border = "none";
    error.style.display="none";
    calculateTip();
  }
});

bill.addEventListener('input',function(){
   if(bill.value<=0){
    bill.style.border = "2px solid red";
   }else{
    bill.style.border = "none";
    calculateTip();
   }
});

customTip.addEventListener('input', function(){
  if(customTip.value<=0){
    customTip.style.border = "2px solid red";
  }else{
    customTip.style.border = "none";
    calculateTip();
  }
});

 function calculateTip(){
  if(bill.value>0 && personNum.value>0 && customTip.value>0){
  const percent=customTip.value/100*bill.value;
  const total=Number(bill.value)+percent;
  const personTip=(percent/personNum.value).toFixed(2);
  const personTotal=(total/personNum.value).toFixed(2);

  tipAmount.innerHTML=`$${personTip}`;
  totalAmount.innerHTML=`$${personTotal}`;
     fontSize();
  
  }
}

 for(let i=0; i<tip.length; i++){
    tip[i].addEventListener('click',function(){
    if(bill.value>0 && personNum.value>0){
      if( personNum.style.border != "2px solid red" &&
      bill.style.border != "2px solid red" ){
        customTip.style.border = "none";
  const percent= tip[i].value/100*bill.value;
  const total=Number(bill.value)+percent;
  const personTip=(percent/personNum.value).toFixed(2);
  const personTotal=(total/personNum.value).toFixed(2);

  tipAmount.innerHTML=`$${personTip}`;
  totalAmount.innerHTML=`$${personTotal}`;
  fontSize();
    }
  }
 });
}

const fontSize=function(){
  if(innerWidth>=1400){
    if(tipAmount.innerHTML.length>8 || totalAmount.innerHTML.length>8){
      tipAmount.style.fontSize="36px";
      totalAmount.style.fontSize="36px";
   } 
   if(tipAmount.innerHTML.length>11 || totalAmount.innerHTML.length>11){
      tipAmount.style.fontSize="26px";
      totalAmount.style.fontSize="26px";
   } 
   if(tipAmount.innerHTML.length>16 || totalAmount.innerHTML.length>16){
      tipAmount.style.fontSize="16px";
      totalAmount.style.fontSize="16px";
  }
  if (tipAmount.innerHTML.length<9 || totalAmount.innerHTML.length<9){
      tipAmount.style.fontSize="48px";
      totalAmount.style.fontSize="48px";
     }
  }
  if(innerWidth<1400){
    if(tipAmount.innerHTML.length>9 || totalAmount.innerHTML.length>9){
      tipAmount.style.fontSize="26px";
      totalAmount.style.fontSize="26px";
  }
  if(tipAmount.innerHTML.length>11 || totalAmount.innerHTML.length>11){
    tipAmount.style.fontSize="14px";
    totalAmount.style.fontSize="14px";
  }
  if(tipAmount.innerHTML.length<10 || totalAmount.innerHTML.length<10){
    tipAmount.style.fontSize="32px";
    totalAmount.style.fontSize="32px";
   }
 }
}

resetBtn.addEventListener('click',reset);

