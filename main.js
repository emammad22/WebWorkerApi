// This Worker is used for Long running process

const worker = new Worker('worker.js');
const sumButton = document.getElementById('sum');
const changeBack = document.getElementById('back');

sumButton.addEventListener('click', (event) => {
    worker.postMessage({type : 'GENERATE', action :'calculateSum'});
})

worker.onmessage = function (message) {
    console.log(`The result is  ${message.data}`)
}

changeBack.addEventListener('click', (event) => {
    if (document.body.style.background !== 'green') {
        document.body.style.background = 'green';
    } else {
        document.body.style.background = 'blue';
    }
})

// The second Worker is available for getting data from API(GET request)

const getBtn = document.getElementById('getData');

getBtn.addEventListener('click', () => {
    worker.postMessage({ type: 'GET', action: 'https://dummyjson.com/comments/1' });
})

worker.onmessage = function (msg) {
    console.log(msg.data)
}