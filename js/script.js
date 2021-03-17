
/*
Un alert() espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
dei numeri da indovinare sono stati individuati.
*/



var myArr = [];

while(myArr.length < 5) {

    var rndNum = getRnd(1, 100);
    if (!myArr.includes(rndNum)) { // se rnd non si ripete
        myArr.push(rndNum);        // lo pusho nell'array
    }
}
alert('Numeri rnd creati: ' + myArr);

// richiedo input utente


setTimeout (function() {
    var myNumbers = [];
    var rightNumbers = [];
    while(myNumbers.length < 5) {

        var insertNumber = prompt('Inserisci un numero: ');
        if(!myNumbers.includes(insertNumber)){
            myNumbers.push(insertNumber);

            if (!myArr.includes(insertNumber)){

                rightNumbers.push(insertNumber);
            }
        }
    }
    console.log(myNumbers, rightNumbers);
}, 3000); // cambiare: 30 secondi

console.log(myArr);






// FUNZIONI

function getRnd(min, max) {
    var minRnd = min;
    var maxRnd= max - minRnd + 1;
    var rnd = Math.floor(Math.random() * maxRnd) +minRnd;
    return rnd;
}
//console.log(getRnd(1, 10));

