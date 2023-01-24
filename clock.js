// let date = new Date()// 1) При создании объекта из класса Date, если не указываем никого параметра классу, то получим сегодняшнюю дату и время
// console.log(date)
// let date2 = new Date(2023,0,15)// 2) Классу Date мы можем параметры даты и времени: new Date(year, month, day, hour, minute, second, millisecond)
// console.log(date2)
// console.log(date2.toLocaleString())// 3) .toLocaleString() - метод, показывающий дату и время по местной локали
// console.log(date2.toLocaleDateString())
// console.log(date.toGMTString())
// console.dir(date2)
// console.log(date.getDate())// .getDate() - дает день в месяце (от 1 до 28+)
// console.log(date2.getDay())// .getDay() - дает номер дня в неделе,Если дала 0 - воскресенье, 1 - понедельник и тд
// console.log(date2.getFullYear())// .getFullYear() - дает нам полный год
// console.log(date2.getYear())
// console.log(date.getHours())
let clock = document.querySelector("#clock")
let button = document.querySelector(".controls")
let id = null
let isTicking = true
button.addEventListener("click", () => {
    if(isTicking == true){
        isTicking = false
        clearInterval(id)
        button.innerHTML = "Вкл"
    }else{
        isTicking = true
        tick()
        id = setInterval(tick,1000)
        button.innerHTML = "Выкл"
    }
})
function tick () {  
    let date = new Date()
    let hours = leadZero (date.getHours())
    let minutes = leadZero (date.getMinutes())
    let seconds = leadZero (date.getSeconds())
    clock.innerHTML = `${hours}:${minutes}:${seconds}` 
    hours = parseInt(hours) + getRandomNumber(0, 200)
    minutes = parseInt(minutes) + getRandomNumber(0, 180)
    seconds = parseInt(seconds) + getRandomNumber(0, 180)
    document.body.style.background = `linear-gradient(rgb(${hours},${minutes},${seconds}),rgb(${minutes},${hours},${seconds}))`
}
tick()
id = setInterval(tick,1000)
function leadZero (number) {
    if(number<10){
        return "0" + number
    }else{
        return number
    }
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
