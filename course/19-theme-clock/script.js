const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
let dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerText = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerText = 'Light mode'
    }
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours() % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    const hoursDeg = scale(hours, 0, 11, 0, 360)
    hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursDeg}deg)`

    const minutesDeg = scale(minutes, 0, 11, 0, 60)
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutesDeg}deg)`

    const secondsDeg = scale(seconds, 0, 11, 0, 60)
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondsDeg}deg)`

    const ampm = (time.getHours() >= 12) ? 'PM' : 'AM'

    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setTime()

setInterval(setTime, 1000)