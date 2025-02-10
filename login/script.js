const inputBoxes = document.querySelectorAll('.input-box');
const inputFields = document.querySelectorAll('.input-field');
const inputFieldNames = document.querySelectorAll('.input-field-name');

const passwordField = document.getElementById('password-input');
const eyeIcon = document.getElementById('eye');

const submitBtn = document.getElementById('submit-btn');
const loginField = document.getElementById('login-input');

inputBoxes.forEach((inputBox, index) => {
    const inputField = inputFields[index];
    const inputFieldName = inputFieldNames[index];

    inputBox.addEventListener('click', () => {
        if (inputField.value.trim() === '') {
            inputField.style.border = '1px solid #C3CDDF';
            inputField.style.paddingTop = '24px'
            inputFieldName.classList.add('input-field-name-small')
        }
    });

    inputField.addEventListener('input', () => {
        if (inputField.value.trim() !== '') {
            inputField.style.border = '1px solid #202328';
            inputField.style.paddingTop = '24px'
            inputFieldName.classList.add('input-field-name-small')
        }
    });
    inputField.addEventListener('mouseenter', () => {
        if (inputField.style.border !== '1px solid rgb(246, 1, 49)') { // Check if the border is not red
            inputField.style.border = '1px solid #202328';
        }
    });
    inputField.addEventListener('mouseout', () => {
        if (inputField.style.border !== '1px solid rgb(246, 1, 49)') { // Check if the border is not red
            inputField.style.border = '1px solid #C3CDDF';
        }
    })

    document.addEventListener('click', (e) => {
        if (!inputBox.contains(e.target) && inputField.value.trim() === '') {
            inputFieldName.classList.remove('input-field-name-small');
        }
    });
});

eyeIcon.addEventListener('click', () => {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let isValid = true;

    if (loginField.value.trim() === '') {
        loginField.style.border = '1px solid #F60131';
        isValid = false;
    } else {
        loginField.style.border = '1px solid #C3CDDF';
    }
    
    if (passwordField.value.trim() === '') {
        passwordField.style.border = '1px solid #F60131';
        isValid = false;
    } else {
        passwordField.style.border = '1px solid #C3CDDF';
    }

    if (isValid) {
        window.location.href = '../user-page/user.html';
    }
});