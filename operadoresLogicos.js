// AND, OR NOT
// AND é representado por, &&;
// OR é representado por ||;
// NOT é representado por  != !==;


var sexo = 'M', idade = 23;

    if (sexo === 'M' && idade >= 23) {
        console.log ('OK'); // Este é feito com AND. Que vai retornar, verdadeiro ou falso.
    }

    if (sexo === 'M' || idade >= 23) {
        console.log ('OK'); // Este é feito com OR. Que vai retornar, verdadeiro ou falso
    }

    if (sexo !== 'F') { // É usado um simbolo de negação. Que vai retornar, verdadeiro ou falso.
        console.log ('OK'); // Este é feito com NOT.
    }

// Armazena valores das condisões Variaveis.
// Primeira forma de digitar o codigo.
var masculino;

    if (sexo === 'M') {
        masculino = true;
    } else {
        masculino = false;
    }
    console.log (masculino);// O resultado vai retornar, true ou false.

// Segunda forma de digitar o codigo.

var masculino = sexo === 'M';

    console.log(masculino);