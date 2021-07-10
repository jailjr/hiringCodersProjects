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


function celciusToFahrenheit(temperature){
    return (temperature*(9/5) + 32);
}


const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []
/*[{
    id: 1,
    name: 'js'
}, {
    id:2,
    name:'html'
},{
    id:3,
    name:'css'}]
*/
function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

function render(){
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}

function createList(name){
    return {id: Date.now().toString(), name: name}
}


newListForm.addEventListener('submit',  function(e) {
    e.preventDefault()
    const listName = newListInput.value
    if(listName === null || listName === '') return

    const list = createList(listName)
    newListInput.value = null
    lists.push(list)

    render()
})



