document.querySelector('button').addEventListener('click',()=>{
    const inputValue = document.querySelector('.js-input');
    if(inputValue.value.trim() === ''){
        const errorMessage = document.querySelector('.js-error-message');
        inputValue.classList.add('shake');
        errorMessage.style.opacity = "1";
        setTimeout(()=>{
            inputValue.classList.remove('shake');
            errorMessage.style.opacity = "0";
        },700);
    }
    else{
        alert('Valid Input');
    }
});