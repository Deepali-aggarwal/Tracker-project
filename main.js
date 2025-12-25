const textTask = document.getElementById('text');
const addbtn = document.getElementById('addbutton');
const list = document.getElementById('task-list');

addbtn.addEventListener('click', function(e){
    if(textTask.value === ""){
        return;
    }else{
        const li = document.createElement('li');
        li.classList.add('task-link');

        //checkbox
        const input = document.createElement('input');
        input.classList.add('check');
        input.type = "checkbox";
        input.addEventListener('change', function(e){
            if(input.checked){
                li.classList.add('completed');
            }else{
                li.classList.remove('completed');
            }
            updateCounter();
        })

        //text
        const span = document.createElement('span');
        span.classList.add('task-text')
        span.innerText = textTask.value;


        //delete
        const deletebutton = document.createElement('button');
        deletebutton.classList.add('dltbtn')
        deletebutton.innerText = "DELETE";
        deletebutton.addEventListener('click', function(e){
            li.remove();
            updateCounter();
        })
        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(deletebutton);

        list.appendChild(li);
        textTask.value = "";

        updateCounter();
    }
})

//enter key to add task

const addTask = document.querySelector('#text');
addTask.addEventListener('keydown', function(e){
    if(e.key === "Enter"){
        addbtn.click();
    }
})




//update and complete

function updateCounter(){
    const totalTaskcounter = document.querySelectorAll('.task-link').length;
    const completedtaskcounter = document.querySelectorAll('.task-link.completed').length;

    taskCounter.textContent = `Total: ${totalTaskcounter} | Completed: ${completedtaskcounter}`

}

//clear all completed at once 

const clearCompleted = document.querySelector('#clear-completed-btn');
clearCompleted.addEventListener('click', function(e){
    const completedTask = document.querySelectorAll('input[type="checkbox"]:checked');
    completedTask.forEach(function(checked){
        checked.parentElement.remove();
    })
    updateCounter();
})



function store(){
    const all = [];
    const taskstore = document.querySelectorAll('.task-link');
}


