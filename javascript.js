function getComputerChoice() {
    let pc = (Math.round(Math.random() * 100));
    if (pc >= 0 && pc <= 32) {
        pc = 'Rock';
    } else if (pc >= 33 && pc <= 66) {
        pc = 'Paper';
    } else {
        pc = 'Scissors';
    }
    console.log(pc);

}
getComputerChoice();