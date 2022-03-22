class Clicker{
    constructor(clockElement, clickElement){
        this.timer = 0
        this.clicks = 0
        this.now = Date.now()
        this.started = false
        this.clockElement = clockElement
        this.clickElement = clickElement
        this.clockElement.innerText = "00"
        this.clickElement.innerText = "0"
        this.updateInterval = flase
    }
    start(){
        this.now = Date.now()
        this.updateInterval = setInterval(() => this.update(), 10)
        this.started = true
    }
    update(){
        if(this.clicks >= 100){
            clearInterval(this.updateInterval)
            this.win()
            return 0
        }
        this.timer += Date.now() - this.now
        this.now = Date.now()
        this.clockElement.innerText = String((this.timer/1000).toFixed(2)).padStart(2, '0')
        this.clickElement.innerText = this.clicks
    }
    click(){
        this.clicks += 1
    }
    isRunning(){
        return this.started
    }
    win(){
        alert("yay")
    }
}

let clockElement = document.getElementById('time')
let clickElement = document.getElementById('clicks')
let currentTest = new Clicker(clockElement, clickElement)
currentTest.update()

document.addEventListener('keydown', () => {
    if(currentTest.isRunning()){
        currentTest = new Clicker(clockElement, clickElement)
    }
})
document.addEventListener('click', () => {
    if(!currentTest.isRunning()){
        currentTest.start()
    }
    currentTest.click()
})

