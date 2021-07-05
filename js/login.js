
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting')

const HIDDEN = 'hidden';
const KEY_TYPEDINPUTVALUE = 'Key_typedInputValue'

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


    loginForm.classList.add(HIDDEN);
    const typedInputValue = loginInput.value;

    localStorage.setItem(KEY_TYPEDINPUTVALUE, typedInputValue);


    greeting.classList.remove(HIDDEN);
    greeting.innerText = `hello ${typedInputValue}`



}

function paintGreeting() {

}



const checkStored_Key = localStorage.getItem(KEY_TYPEDINPUTVALUE);

if (checkStored_Key === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener('submit', handleLoginSubmit);

} else {
    greeting.classList.remove(HIDDEN);
    greeting.innerText = `hello ${checkStored_Key}`
}





