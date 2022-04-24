// добавили библиотеку лодаш тротл
const throttle = require('lodash.throttle');

// ключ локалсторидж
const STORAGE_KEY = 'feedback-form-state'

// линки на елементы форм
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

//добавили слушателя на форму
refs.form.addEventListener('submit', onFormSabmit)
refs.form.addEventListener('input', throttle(onInputareaInput, 500) )

populateTextarea()

// обьект хранилище для данных localStorage
const formData = {}

// фун. записи текущих данных в formData внесенных юзером
function onInputareaInput(event) {
    formData[event.target.name] = event.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

// фун. очистки данных с инпутов и localStorage
function onFormSabmit(event) {
    event.preventDefault()
    console.log(formData);
    event.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
    
}

// фун. востановки данных в полях ввода
function populateTextarea() {
    const saveMessege = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if(saveMessege){
        refs.textarea.value = saveMessege.message
        refs.input.value = saveMessege.email
    }
}