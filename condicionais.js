

// Ultilizando if, else
function retornaSexo (sexo){
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

  // Ultilizando switch, case, default.
  function retornaSexo(sexo){
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
