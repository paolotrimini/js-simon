
/*
Un alert() espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
dei numeri da indovinare sono stati individuati.
*/

function simonSays () {

    var myArr = [];
    var myNumbers = [];

    // Creo array di 5 valori

    while(myArr.length < 5) {
        var rndNum = getRnd(1, 100);

        if (!myArr.includes(rndNum)) {
            myArr.push(rndNum);
        }
    }

    console.log('Numeri rnd creati: ' + myArr);
    alert('Numeri rnd creati: ' + myArr);


    // Inserisco 5 numeri tramite Prompt (dopo 30 secondi)

    setTimeout(function() {

        for (var i = 0; i < 5; i++) {
            var myNum = parseInt(prompt('Inserisci un numero: '));

            for (var x = 0; x < myArr.length; x++) {
                if (myNum == myArr[x]) {
                    myNumbers.push(myNum); // pusho nei "numeri corretti"
                }
            }
        }
        alert('Hai indovinato ' + myNumbers.length  + ' numeri! Numeri corretti: ' + myNumbers);
        console.log('Numeri indovinati: ' + myNumbers);
    }, 2000);



} // fine funzione simonSays

simonSays();

// FUNZIONI

function getRnd(min, max) {
    var minRnd = min;
    var maxRnd= max - minRnd + 1;
    var rnd = Math.floor(Math.random() * maxRnd) +minRnd;
    return rnd;
}