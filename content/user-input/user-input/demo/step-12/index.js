const myHeight = document.getElementById('myHeight');
const myBG = document.getElementById('myBG');
const myFG = document.getElementById('myFG');

myHeight.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});

myBG.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--bg-colour', myBG.value);
});
myFG.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--fg-colour', myFG.value);
});
