(function(){
    
    const generatePinBtn=document.querySelector('.generate-btn');
    
    
    generatePinBtn.addEventListener('click',()=>{
        const randomNumber=generateRandomNumber(9999,1000);
        setInputValue('.pin-generator .form-control',randomNumber);
    });

    const digits=document.querySelectorAll('.digit');

    digits.forEach(digit => {
        digit.addEventListener('click',()=>{
            const numberValue=digit.dataset.value;
            document.querySelector('.input-section .form-control').value+=numberValue;
        });
    });

    const submitBtn=document.querySelector('.submit-btn');

    submitBtn.addEventListener('click',()=>{
        const userInput=getInputValue('.input-section .form-control');
        matchingPin(userInput);
    });

    const clearBtn=document.querySelector('.clear');
    clearBtn.addEventListener('click',()=>{
        document.querySelector('.input-section .form-control').value="";
    });

    function generateRandomNumber(minValue,maxValue){

        const min = Math.ceil(minValue);
        const max = Math.floor(maxValue);

        return Math.floor(Math.random()*(maxValue-minValue)+minValue);
    }
    function matchingPin(userInputValue){

        const generateValue=getInputValue('.pin-generator .form-control');

        if(userInputValue==generateValue){

            document.querySelector('.notify-section .error').style.display="none";

            document.querySelector('.notify-section .success').style.display="block";
        }else{
            document.querySelector('.notify-section .success').style.display="none";

            document.querySelector('.notify-section .error').style.display="block";
        }
    }
    function getInputValue(selector){
        const value=document.querySelector(selector).value
        return value;
    }
    function setInputValue(selector,setValue){
        document.querySelector(selector).value=setValue
    }
})();