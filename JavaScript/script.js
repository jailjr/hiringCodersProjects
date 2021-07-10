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


function reverseAString(str){
    let newStr ='';
    //tried to use two pointers but in javascript string are immutable :/
    for(let i = str.length - 1 ; i>=0 ; i--)
    {
        newStr += str[i];
    }
    
     console.log(newStr);
}
let resultado = reverseAString("Hello");
