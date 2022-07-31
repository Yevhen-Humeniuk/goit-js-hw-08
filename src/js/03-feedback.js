import throttle from 'lodash.throttle';

const STORAGE_FORM_DATA = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('.feedback-form input[type="email"]'),
    message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

restoreFormValues();

function onFormSubmit(evt) {
    evt.preventDefault();

    if (!(refs.mail.value && refs.message.value))
        return alert('Fill all fields');

    console.log('formData:', formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_FORM_DATA);

    formData.email = '';
    formData.message = '';
};

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_FORM_DATA, JSON.stringify(formData));
};

function restoreFormValues() {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_FORM_DATA));

    if (savedFormData) {
        refs.mail.value = savedFormData['email'] ? savedFormData['email'] : '';
        refs.message.value = savedFormData['message'] ? savedFormData['message'] : '';

        formData.email = refs.mail.value;
        formData.message = refs.message.value;
    }
}