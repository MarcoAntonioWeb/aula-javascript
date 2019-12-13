# Curso gratuito JavaScrip da Rocketseat

# Introdução Java Script


- [x] O que é o JavaScript?
- É uma linguagem que permite agente execultar script, interpretalo, apartir  do cliente da nossa aplicação.

- [x] Onde é aplicado?
- em todos os sites, e aplicados na web.

- [x] O que vai ver no curso!

1 Configuração de ambientes
2 Variáveis e dados
3 Operações matemáticas
4 Funções
5 Condicionais
6 Operadores lógicos
7 Condição ternária
8 Estrutura de repetição
9 Intervalo e timeout
10 Manipulação de DOM
11 Requisições assícronas
12 Construindo um app do zero 

### Configuração do Ambiente
- Vai ser usado um editor de texto ( Visual Studio Code).
- E na aula index.html vai ser a primeira aula na pratica.

### Variáveis e dados
- var `nome` = "Marco"; // String
- var `idade` = 23; // Inteiro
- var `peso` = 80.5; // Float
- var `humano`= true; // Boolean

- var `alunos` = ['Diego', 'Gabriel', 'Lucas']; // Vetor
- var `aluno` = {
        nome: 'Diego',
        idade: 23,
        peso: 80.5,
        humano: true,
    }; // e este é um Objetos.

### Operações Matemáticas
- var x = 10, y = 5; // todas duas variavel são validas

### Funções 
- function soma (numero1, numero2){
    var resultado = numero1 + numero2;

    return resultado;
    }

  var resultado = soma(1, 2)
  console.log(resultado);  

### Condicionais
- // Ultilizando if, else
- function retornaSexo (sexo){
- // M, F
- // Masculino, Feminino

  if(sexo === 'M') {
      return 'Masculino';
  } else if (sexo === 'F') {
      return 'Feminino';
  } else {
      return 'Outro';
  }
}

  var resultado = retornaSexo('F')
  console.log(resultado);

- // Ultilizando switch, case, default.
- function retornaSexo(sexo){
      switch (sexo) {
          case 'M':
              return 'Masculino';
          case 'F':
              return 'Feminino';
          default:
              return 'Outro';        
      }
  }

  var resultado2 = retornaSexo('M')
  console.log(resultado2);

### Operadore Lógicos
- // AND, OR NOT
- // AND é representado por, &&;
- // OR é representado por ||;
- // NOT é representado por != !==;


- var sexo = 'M', idade = 23;

    if (sexo === 'M' && idade >= 23) {
        console.log ('OK'); // Este é feito com AND. Que vai retornar, verdadeiro ou falso.
    }

    if (sexo === 'M' || idade >= 23) {
        console.log ('OK'); // Este é feito com OR. Que vai retornar, verdadeiro ou falso
    }

    if (sexo !== 'F') { // É usado um simbolo de negação. Que vai retornar, verdadeiro ou falso.
        console.log ('OK'); // Este é feito com NOT.
    }

- // Armazena valores das condisões Variaveis.
- // Primeira forma de digitar o codigo.
- var masculino;

    if (sexo === 'M') {
        masculino = true;
    } else {
        masculino = false;
    }
    console.log (masculino);// O resultado vai retornar, true ou false.


- // Segunda forma de digitar o codigo.

- var masculino = sexo === 'M';

    console.log(masculino);

### Condição Ternária
- // As condições ternária só é usada quando temos apenas duas verificações dento do "if".

- var sexo = 'M';

var retorno = (sexo === 'M') ? 'Masculino' : 'Feminino';

console.log(retorno)

### Estrutura de Repetição
- // FOR , WHILE

for (var i = 0; i <= 100; i++) {
    console.log(i);
}

- // O WHILE é usado quando a gente não sabe o tamanho das interações que vão ser usados.
- var j = 219345872;

while (j > 50 ) {
    console.log (j);

        j /= 5;
}

### Intervalo Timeout
- function exibeAlgo () {
    console.log('Hello World!');
}

    setInterval(exibeAlgo, 1000);// ele vai ser execultado varias vezes... "infinito".

    setTimeout(exibeAlgo, 1000);// ele só vai ser execultado ápos do tempo for determinado. 


# Manipulação de DOM

- [x] O que iremos aprender com a Manipulação de DOM?

- Evento inline 
- Trabalhando com DOM
- Lidando com elementos
- Alterando estilos

### Evento Inline
- div id="app"
        <button onclick="mostraAlerta()">Me pressione</button>
  div

    <script>
        function mostraAlerta() {
            alert ('Botão foi clicado');
        }
    </script>

### Trabalhando com DOM 
- div id="app"
        <input type="text" name="nome" id="nome">
        <button class="botao">Adicionar</button>
    /div

    <script>
        var inputElement = document.querySelector('input[name=nome]')
        var btnElement = document.querySelector('button.botao')// É o mais utilizado hoje.

         btnElement.onclick = function() {
            var text = inputElement.value;

            alert(text)
        }  
    </script>

    ### Lidando com Elementos
    div id="app" 
        <input id="nome">
    /div

    <script>
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', 'http://rocketseat.com.br');
        linkElement.setAttribute('target' , 'blank')

        var textElement = document.createTextNode('Acessar site da Rocketseat');
        linkElement.appendChild(textElement);

        var containerElement = document.querySelector('#app');
        containerElement.appendChild(linkElement); // o comando fica todo aqui.

        var inputElement = document.querySelector('#nome');
        containerElement.removeChild(inputElement); // ele remove a imagem no navegador.
    
    </script>