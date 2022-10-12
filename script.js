"use strict";

const bill=document.querySelector('#bill');
const tip=Array.from(document.querySelectorAll('.tip-btn'));
const customTip=document.querySelector('.custom-tip');
const personNum=document.querySelector('#people');
const tipAmount=document.querySelector('.final-tip');
const totalAmount=document.querySelector('.final-total');
const resetBtn=document.querySelector('.reset');


const reset=function(){
tipAmount.innerHTML=`$0.00`;
totalAmount.innerHTML=`$0.00`;
bill.value='';
customTip.value='';
personNum.value='';
}

function personVal(){
    let format = /^[1-9]+[0-9]*$/;   
        if(!personNum.value.match(format)){
          personNum.style.border = "2px solid red";
          return false;
        }else{
          personNum.style.border = "none"; 
          return true;
   }
 }

 function decimalVal(){
    let format=/^(?!0*[.,]0*$|[.,]0*$|0*$)\d+[,.]?\d{0,2}$/;
    if(!bill.value.match(format)){
        bill.style.border = "2px solid red";
        return false;
    }else{
        bill.style.border = "none";
        return true;
    }
 }
 function tipVal(){
    let format=/^(?!0*[.,]0*$|[.,]0*$|0*$)\d+[,.]?\d{0,2}$/;
    if(!customTip.value.match(format)){
        customTip.style.border = "2px solid red";
        return false;
    }else{
        customTip.style.border = "none";
        return true;
    }
 }


 function calculateTip(){
    if(bill.value>0 && personNum.value>0 && customTip.value>0){
  const percent=customTip.value/100*bill.value;
  const total=Number(bill.value)+percent;
  const personTip=(percent/personNum.value).toFixed(2);
  const personTotal=(total/personNum.value).toFixed(2);

  tipAmount.innerHTML=`$${personTip}`;
  totalAmount.innerHTML=`$${personTotal}`;
 }
 personVal();
 decimalVal();
 tipVal();
}


 for(let i=0; i<tip.length; i++){
    tip[i].addEventListener('click',function(){
    if(bill.value>0 && personNum.value>0){
        customTip.style.border = "none";
  const percent= tip[i].value/100*bill.value;
  const total=Number(bill.value)+percent;
  const personTip=(percent/personNum.value).toFixed(2);
  const personTotal=(total/personNum.value).toFixed(2);

  tipAmount.innerHTML=`$${personTip}`;
  totalAmount.innerHTML=`$${personTotal}`;
    }
 });
 
}


customTip.addEventListener('input',calculateTip);
bill.addEventListener('input',calculateTip);
personNum.addEventListener('input',calculateTip);


resetBtn.addEventListener('click',reset);

