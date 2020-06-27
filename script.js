const butn = document.querySelector('button');
const sum = document.querySelector('.numb');

butn.addEventListener('click', (e) => {
    const rep = window.frames[0].document.querySelector('.reply')
    let number = prompt("Enter digits", );
    if (!number) {
        alert('Enter any number');
    } else if (number.match(/\D/)) {
        alert('Enter digits!');
    } else {
        rep.innerText = number;
        sum.innerText = (+rep.innerText + 1);
    };

})

window.onbeforeunload = function() {
    return "Действительно ли хотите покинуть страницу?";
}