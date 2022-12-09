let name = ''
let number = Math.floor(Math.random() * 100)
let attempts = 0

const output = document.querySelector('.output')
const prom = document.querySelector('.prompt')
const input = document.querySelector('input')

input.focus()

outputMessage('Введите имя игрока:')

prom.addEventListener('submit', handleSubmit)

function handleSubmit(event) {

    event.preventDefault()
    processInput(input.value)
    input.value = '' 
}

function outputMessage(message) {

    const li = document.createElement('li')
    li.textContent = message
    output.appendChild(li)

}

function clearOutput() {
    for(i=0; i < output.children.length; i++) {
        output.removeChild(output.children[i])
    }
}

function processInput(input) {
    if (!input) return

    if (!name) {
        name = input
        clearOutput()
        outputMessage(`${name}, тебе необходимо отгадать случайное число от 0 до 100 за наименьшее кол-во попыток. После каждой попытки появится сообщение 'мало', 'много' или 'верно'.` )
        return
    }

    outputMessage(input)

    let attempt = Number.parseInt(input)
    if (Number.isNaN(input)) return

    attempts += 1

    if (attempt > number) {
        outputMessage('Много. Попробуй еще!')
    } else if (attempt < number) {
        outputMessage('Мало. Поробуй еще')
    } else {

        outputMessage(`Верно! Это число ${number}.`)
        outputMessage(`Кол-во попыток: ${attempts}`)

        prompt.remove()

    }



}