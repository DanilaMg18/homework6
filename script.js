
// Создайте поле ввода INPUT и кнопку SAVE.
// При нажатии на SAVE функция возьмет значение из INPUT и запишет его в localStorage c ключём “input”.
// При загрузке страницы напишите скрипт который будет присваивать нашему полю ввода INPUT значение из localStorage по ключу “input”.

// PS: чтобы получить текущее значение поля ввода INPUT Вам надо:
//     * Получить сам INPUT
//     * Получить его значение из поля value. Например:
//         let input = document.querySelector('.input')
//         let inputText = input.value

// Дмитрий ЕвгеньевичЪ, [10/14/2022 4:19 PM]
// Задание Нумер 2 !!!!

// Напишите таймер, или просто отсчётчик, который будет прибавлять +1 каждую секунду. 
// Если Вы закроете вкладку, но потом вернётесь снова - он продолжит счётчик дальше.

let input = document.querySelector('.input')
let save = document.querySelector('.knopa')
let inputText = input.value
let key = 'input'

save.addEventListener('click', function(){
    localStorage.setItem('input', input.value)
})
        