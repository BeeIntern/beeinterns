function validate(data) {
    const { login, password, confirmPassword, license, firstName, secondName, lastName, gender } = data;

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (login === 'beeline' || login === 'beeinterns' || login === 'bee') { 
        alert('логины заняты');
    }
    else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!license) {
        alert('Необходимо согласие');
    } else if (!firstName || !lastName || !secondName) {
        alert('поле с ФИО пустое');
    } else {
        if (gender === "male") {
            let text =  `Уважаемый ${firstName} , заявка создана`;
            alert(text);
        }
        else {
            let text =  `Уважаемая ${firstName} , заявка создана`;
            alert(text);
        }
    }
}

