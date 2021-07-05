
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');




// function handleLoginBtnClick() {
//     const typedInputValue = loginInput.value;
//     // if (typedInputValue === '') {
//     //     alert('이름을 입력하세요');
//     // } else if (typedInputValue.length > 15) {
//     //     alert('이름이 너무 길어요! 다시 입력하세요.')
//     // }
//     console.log(typedInputValue);
// }

// loginButton.addEventListener('click', handleLoginBtnClick);

function handleLoginSubmit(e) {
    e.preventDefault();
    const typedInputValue = loginInput.value;
    console.log(typedInputValue);
    // loginForm.classList.add('hidden');

}

loginForm.addEventListener('submit', handleLoginSubmit);