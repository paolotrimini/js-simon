
/*
Un alert() espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
dei numeri da indovinare sono stati individuati.
*/



    var myArr = [];

    // array di 5 numeri rnd

    while(myArr.length < 5) {

        var rndNum = getRnd(1, 100);
        if (!myArr.includes(rndNum)) { // se rnd non si ripete
            myArr.push(rndNum);        // lo pusho nell'array
        }
    }
    console.log('Numeri casuali iniziali: ' + myArr);
    alert('Numeri casuali: ' + myArr);
    // fin qui OK!


    // inserisco 5 numeri (dopo timer di 30 sec)

    function insertNumbers() {
        var myNumbers = [];

        while (myNumbers.length < 5) {
            var myNum = parseInt(prompt('inserisci un numero: '));

            if(!myNumbers.includes(myNum)){
                myNumbers.push(myNum);
            } else {
                alert('numero già inserito!');
            }

        }
        console.log('Numeri inseriti: ' + myNumbers);
    }

    // Timer 30 secondi
    function init() {
        setTimeout(insertNumbers, 1000); // 1 sec ( poi mettere 30 secondi)
    }
    init();






    // FUNZIONI

    function getRnd(min, max) {
        var minRnd = min;
        var maxRnd= max - minRnd + 1;
        var rnd = Math.floor(Math.random() * maxRnd) +minRnd;
        return rnd;
    }

