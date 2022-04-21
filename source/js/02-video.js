console.log(localStorage);

localStorage.setItem('my-data', JSON.stringify({name: 'mango', age: 2}))

const saveData = localStorage.getItem('my-data')
console.log(saveData);

const parseData = JSON.parse(saveData)
console.log('parseData' , parseData);


