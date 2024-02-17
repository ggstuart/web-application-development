const myHeight = document.getElementById('myHeight');
const myBG = document.getElementById('myBG');
const myFG = document.getElementById('myFG');
const myPassword = document.getElementById('myPassword');
const myConfirmation = document.getElementById('myConfirmation');
const login = document.getElementById('login');

myHeight.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});

myBG.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--bg-colour', myBG.value);
});
myFG.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--fg-colour', myFG.value);
});

const checkConfirmation = (ev) => {
    if (myPassword.value != myConfirmation.value) {
        myConfirmation.setCustomValidity("Wait. What? This doesn't match the password field!");
    } else {
        myConfirmation.setCustomValidity('');
    }
};

myConfirmation.addEventListener('input', checkConfirmation);
myPassword.addEventListener('input', checkConfirmation);

login.addEventListener('submit', ev => {
    ev.preventDefault();
    const data = new FormData(login);
    for (const key of data.keys()) {
        console.log(`${key}: ${data.get(key)}`);
    }
    login.reset();
});