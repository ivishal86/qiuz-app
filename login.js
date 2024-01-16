const wrapper = document.querySelector('.wrapper');

const loginLink = document.querySelector('.login-link');

const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose = document.querySelector('.icon-close');

const form=document.querySelector('.form');

// const btn1=document.querySelector('.btn');

// btn1.addEventListener('click',login());

registerLink.addEventListener('click', ()=> { wrapper.classList.add('active'); });

loginLink.addEventListener('click', ()=> { wrapper.classList.remove('active'); });

btnPopup.addEventListener('click', ()=> { wrapper.classList.add('active-popup'); });

iconClose.addEventListener('click', ()=> { wrapper.classList.remove('active-popup'); });

// console.log(localStorage)
function login() {
    var email = document.getElementById('email').value;
    // var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var storedEmail = localStorage.getItem('email');
    // var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    let success=email === storedEmail && password === storedPassword;

    if (success) {
        alert('Login successful!');
        // form.action="quiz.html"
    } else {
        alert('Incorrect eamil or password. Please try again.');
    }

    if (success) {
        // alert('Login successful!');
        form.action="quiz.html"
    } else {
        // alert('Incorrect eamil or password. Please try again.');
    }
}

function register() {
    var newUsername = document.getElementById('newUsername').value;
    var newEmail = document.getElementById('newEmail').value;
    var newPassword = document.getElementById('newPassword').value;

    localStorage.setItem('email', newEmail);
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Registration successful! You can now login.');
}
