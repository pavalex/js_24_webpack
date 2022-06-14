import {maskPhone, validateData} from "./helpers";


export const sendForm = (formId) => {
    const form = document.getElementById(formId);
    const formElements = form.querySelectorAll('input');
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    validateData();
    maskPhone('input[type="tel"]', '+7 (___) ___ __ __');

    const validate = (list) => {
        let success = false;

        list.forEach(input => {
            if (input.type === "tel") {
                if (input.value.length > 17) {
                    input.classList.remove('error');
                    success = true;
                }
            }
        })

        return success;
    };

    const sendData = (data) => {
        console.log(data);
        const dataLoad = {
            "user_name": data[name="user_name"],
            "user_email": data[name="user_email"],
            "user_phone": data[name="user_phone"]
        };

        if (data[name="user_message"] !== undefined && data[name="user_message"].length > 0) {
            dataLoad.user_message = data[name="user_message"];
        }

        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(dataLoad),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        statusBlock.style.color = '#fff';
        form.append(statusBlock);

        setTimeout(() => {
            statusBlock.remove();
        }, 5000);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;

                    formElements.forEach(input => {
                        input.value = ''
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });
        } else {
            alert('Данные не валидны!!!');
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место');
        }

        form.addEventListener('invalid', (event)=>{
            event.preventDefault();

            formElements.forEach(input => {
                if(input.hasAttribute('required') && !input.value) {
                    input.classList.add('error');
                }
            })

        },true);

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            submitForm();

        });
    } catch (error) {
        console.log(error.message);
    }
};
