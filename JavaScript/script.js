//FizzBuzz Function
function fizzBuzz(entrada){
    
    if(typeof(entrada) != "number")
        return 'Não é um número';

    if(entrada%5 === 0 && entrada%3 === 0){
        return 'FizzBuzz';
    }
    
    else if(entrada%5 === 0)
    {
        return 'Buzz';
    }

    else if (entrada%3 === 0)
    {
        return 'Fizz';
    }

    return entrada;
}

let resultado = fizzBuzz(7);
console.log(resultado);

