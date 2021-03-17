
/*
Un alert() espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
dei numeri da indovinare sono stati individuati.
*/


var myArr = [];


// array di 5 numeri rnd

while (myArr.length < 5) {

    var rndNum = getRnd(1, 100);

    if (myArr.includes(rndNum)) {
        console.log('Numero già inserito');
    } else {
        myArr.push(rndNum);
    }
}
//console.log('Numeri casuali: ' + myArr);
alert('Numeri casuali: ' + myArr);


// timer di 30 sec
    // chiedi 5 numeri

        for(var i=0; i<myArr.length; i++) {

            function insertNumbers() {
                var myNumbers = parseInt(prompt('inserisci i numeri: ')); // x 5
            }

            function init() {
                setTimeout(insertNumbers, 3 * 1000); // 3 sec ( poi mettere 30 secondi)
            }
            init();
        }







// FUNZIONI

function getRnd(min, max) {
    var minRnd = min;
    var maxRnd= max - minRnd + 1;
    var rnd = Math.floor(Math.random() * maxRnd) +minRnd;
    return rnd;
}


