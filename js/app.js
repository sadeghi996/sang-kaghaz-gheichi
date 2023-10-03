let cpuHand, score = 0;

const cpuImg = document.getElementById("cpu ");

// -------------------------------------------------



generateHand();
check();

function generateHand() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random === 1)
        cpuHand = 'sang';
    else if (random === 2)
        cpuHand = 'kaghaz';
    else if (random === 3)
        cpuHand = 'gheychi';

}

function check(userHand) {
    if (cpuHand === userHand)
        alert('bazi mosavi shod')
    else {

        let isWin = 0;

        isWin = false;
        if (cpuHand === 'kaghaz' && userHand === 'gheychi')

            alert('shoma bazi ro bordid')

        else {
            alert('shoma bakhtid');


        }
    }
}