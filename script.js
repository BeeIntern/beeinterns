const getb = document.querySelector('.button__class .get-class');
const desc = document.querySelector(".description");
getb.addEventListener("click", serviceAvailable);

function serviceAvailable() {
    fetch('/serviceavailable/')
        .then(resp => {
            if (!resp.ok)
                throw Error(res.statusText);
            return resp.json();
        })
        .then(res => {
            if (res.isSucceeded === false)
                desc.innerHTML = "Произошла ошибка";
            else {
                Promise.allSettled([
                    fetch('/getinfo/').then(resp => {
                        let result;
                        if (!resp.ok) {
                            return { isSucceeded: false }
                        } else
                            result = resp.json();
                        return result;
                    }),
                    fetch('/getdescription/').then(resp => {
                        let result;
                        if (!resp.ok) {
                            return { isSucceeded: false }
                        } else
                            result = resp.json();
                        return result;
                    })
                ]).then((results) => {
                    if (results.every((item) => item.status !== 'fulfilled' || item.value.isSucceeded === false)) {
                        throw Error('Server Error');
                    }
                    results.forEach((item) => {
                        if (item.value.isSucceeded === true)
                            desc.innerHTML = desc.innerHTML + item.value.text + ' ';
                    });
                })
            }
        })
        .catch(() => {
            desc.innerHTML = "Произошла ошибка";
        });
}