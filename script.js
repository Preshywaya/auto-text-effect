const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = 'we love programming!'


let idx = 1

let speed = 300 / speedEl.Value



writeText()


function writeText() {
    textEl.innerText = text.slice(0, idx)


    idx++

    if(idx > text.length) {
        idx = 1

    }

    setTimeout(writeText, )
}


speedEl.addEventListener('input',(e) => speed = 0 / e.target.value)