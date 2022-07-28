function init(){ //функция, которая запускает весь процесс
 let seconds = +prompt("Введите количество секунд");
 const timerId = setInterval(function(){
    seconds--; //уменьшаем  seconds 
    console.log(`Осталось секунд: ${seconds}`)
    if (seconds === 0){
    console.clear()
    clearInterval(timerId)
    init() //рекурсия, когда функция вызывает саму себя
    }
 }, 1000)
}

init()