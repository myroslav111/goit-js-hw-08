const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state'

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSabmit)
refs.form.addEventListener('input', throttle(onInputareaInput, 500) )

populateTextarea()

const formData = {}

function onInputareaInput(event) {
    formData[event.target.name] = event.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onFormSabmit(event) {
    event.preventDefault()
    console.log(formData);
    event.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
    
}

function populateTextarea() {
    const saveMessege = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if(saveMessege){
        refs.textarea.value = saveMessege.message
        refs.input.value = saveMessege.email
    }
}