const btn = document.querySelector('button')
const inputName = document.querySelector('#firstname')
const inputLastName = document.querySelector('#lastname')
const inputNumber = document.querySelector('#number')

const nameText = document.querySelector('#name')
const surNameText = document.querySelector('#surname')
const numberText = document.querySelector('#phone')



function test() {
    nameText.textContent = `${inputName.value}`
    inputName.value = ''
    surNameText.textContent = `${inputLastName.value}`
    inputLastName.value = ''
    numberText.textContent = `${inputNumber.value}`
    inputNumber.value = ''
}


btn.addEventListener('click',test)

console.log(inputNumber);