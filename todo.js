document.addEventListener('DOMContentLoaded', function(){

    const listElement = document.querySelector('#todoList');
    const formElement = document.querySelector('#todoForm');
    
    formElement.addEventListener('submit', function(e){
            e.preventDefault();
            
            let removeButton = document.createElement('button');
            removeButton.innerText = 'X';
    
            let addButton = document.createElement('li');
            addButton.innerText = document.querySelector('#task').value ;
    
            listElement.appendChild(addButton);
            addButton.appendChild(removeButton);
    
            formElement.reset();
        
        })
    
        ul.addEventListener('click', function(e){
            
            const targetTagToLowerCase = e.target.tagName.toLowerCase();

            if(targetTagToLowerCase === 'li'){
                e.target.style.textDecoration = "line-through";
            } else if (targetTagToLowerCase === 'button'){
                e.target.parentNode.remove();
            }

        })
    

})




