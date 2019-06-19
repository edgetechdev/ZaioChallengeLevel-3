const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
//Event Listeners
signUpButton.addEventListener('click', ()=>{
container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', ()=>{
    container.classList.remove('right-panel-active');
});