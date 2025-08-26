// console.log('hello');
// Нужна функция, которая возвращает случайное число от 0 до 1
// Это значение нужно умножить на 100
// И округлить это значение до ближайшего целого
// Ввести условие, которое состоит из:
// Если значение от 0 до 32, тогда камень
// Если значение от 33 до 66, тогда бумага
// Если значение от 67 до 99, тогда ножницы

function getComputerChoice() {
    let pc = (Math.round(Math.random() * 100));
    if (pc >= 0 && pc <= 32) {
        pc = 'Rock';
    } else if (pc >= 33 && pc <= 66) {
        pc = 'Paper';
    }
    console.log(pc);

}
// console.log(getComputerChoice());
getComputerChoice();