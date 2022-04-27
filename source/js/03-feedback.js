// добавили библиотеку лодаш тротл
// const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle'


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
refs.form.addEventListener('input', throttle(onInputareaInput, 250) )

// обьект хранилище для данных localStorage
const formData = {} 

// фун. записи текущих данных в formData внесенных юзером
function onInputareaInput(event) {
    formData.email = event.currentTarget.email.value
    formData.message = event.currentTarget.message.value
    // formData[event.target.name] = event.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

// фун. очистки данных с инпутов и localStorage
function onFormSabmit(event) {
    event.preventDefault()

    if(refs.input.value === '' || refs.textarea.value === ''){
        return alert('all text fields must be filled')
    }

    console.log(formData);
    event.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
    
}

// фун. востановки данных в полях ввода
populateTextarea()
function populateTextarea() {
    const saveMessege = JSON.parse(localStorage.getItem(STORAGE_KEY))

    refs.textarea.value = saveMessege.message
    refs.input.value = saveMessege.email
}