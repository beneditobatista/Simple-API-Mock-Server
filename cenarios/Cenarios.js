var {Cenario} = require('../model/Cenario')
var {CenariosRepository} = require('../cenarios/CenariosRepository')
var cenario = new Cenario()
var cenariosRepository = new CenariosRepository()

exports.montacenario = function(strcenario){
    switch (strcenario) {
          case 'github':
            cenario = cenariosRepository.cenarioGitHub()
            break;  
    
        default:
          console.log('Cenário: ' + strcenario + ' não encontrado.');
          console.log('');
          console.log('');
          console.log('Cenários possiveis: ');
          console.log('');
          console.log('github');
          console.log('');
          console.log('');

          process.exit();
            
      }
      return cenario;
}


