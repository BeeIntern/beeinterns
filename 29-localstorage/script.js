let btn = document.querySelector('button');

let name = document.querySelector('.name');
let age = document.querySelector('.age');
let city = document.querySelector('.city');
let v1 = document.querySelector('.v1');
let v2 = document.querySelector('.v2');
let v3 = document.querySelector('.v3');
let form = {}


if (localStorage.getItem('form') != null) {
    form = JSON.parse(localStorage.getItem('form'));
    fillForm();
}

function fillForm() {
    name.value = form.name;
    age.value = form.age;
    city.value = form.city;
    v1.checked = form.v1;
    v2.checked = form.v2;
    v3.checked = form.v3;
}

btn.addEventListener('click', (event) => {
    saveStorege()
});

function saveStorege() {
    localStorage.form = JSON.stringify({
        name: name.value,
        age: age.value,
        city: city.value,
        v1: v1.checked,
        v2: v2.checked,
        v3: v3.checked,
    })
}