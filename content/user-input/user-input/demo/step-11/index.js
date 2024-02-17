const myHeight = document.getElementById('myHeight');

myHeight.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});