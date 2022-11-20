const output=document.querySelector('.output');
const buttons=document.querySelectorAll('.btn');
const clear=document.querySelector('.clear');
const equal=document.querySelector('.equal');

buttons.forEach(button => {
    
    button.addEventListener('click',(e)=>{
      const value=e.target.dataset.value;
      output.innerText+=value;
    });
    
});

equal.addEventListener('click',()=>{
    if(output.innerText===""){
        output.innerText="";
    }else{
        output.innerText=eval(output.innerText);
    }
});

clear.addEventListener('click',()=>{
    output.innerText="";
});

