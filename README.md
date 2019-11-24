# Curso gratuito JavaScrip da Rocketseat

# Introdução Java Script


- [x] O que é o JavaScript?
- É uma linguagem que permite agente execultar script, interpretalo, apartir  do cliente da nossa aplicação.

- [x] Onde é aplicado?
- em todos os sites, e aplicados na web.

- [x] O que vai ver no curso!

- Configuração de ambientes
- Variáveis e dados
- Operações matemáticas
- Funções
- Condicionais
- Operadores lógicos
- Condição ternária
- Estrutura de repetição
- Intervalo e timeout
- Manipulação de DOM
- Requisições assícronas
- Construindo um app do zero 

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
  // M, F
  // Masculino, Feminino

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


