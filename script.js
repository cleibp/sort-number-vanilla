let quantidade = document.querySelector('#quantidade')
let min = document.querySelector('#min')
let max = document.querySelector('#max')
let resultado = document.querySelector('#resultado')

function sortear() {
  
  let numeros = [];

    while (numeros.length < quantidade.value) {
        mini = Math.ceil(min.value);
        maxi = Math.ceil(max.value);
      
        let aleatorio =  Math.floor(Math.random() * (maxi - mini)) + mini;

        if (numeros.indexOf(aleatorio) == -1)
            numeros.push(aleatorio);
    }

  resultado.innerHTML = numeros                       
}