document.querySelector('button').addEventListener('click', onSubmit);

window.onload = function() {
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text')
            inputs[i].setAttribute('value', getCookie(inputs[i].name));
        else {
            if (getCookie(inputs[i].name) === 'true')
                inputs[i].setAttribute('checked', getCookie(inputs[i].name));
        }
    }
};

function onSubmit() {
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text')
            document.cookie = `${inputs[i].name}=${inputs[i].value};`;
        else
            document.cookie = `${inputs[i].name}=${inputs[i].checked};`;
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        // "(?:^|; )" + name.replace(/([a-zA-Z0-9])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : '';
}