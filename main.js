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
                updateCounter();
                store();
            }else{
                li.classList.remove('completed');
                updateCounter();
                store();
            }
           
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
            store();
        })
        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(deletebutton);

        list.appendChild(li);
        textTask.value = "";

        updateCounter();
        store();
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
    store();
})

function store(){
    const all = [];
    const taskstore = document.querySelectorAll('.task-link');
    taskstore.forEach(function(element){
        const text = element.querySelector('.task-text').textContent;
        const completed = element.classList.contains('completed');
        const id = element.dataset.id;
        all.push({text, completed , id});
    });
    localStorage.setItem("all", JSON.stringify(all));
}


function loadTask(){
    const savedTasks = JSON.parse(localStorage.getItem("all")) || [];

    savedTasks.forEach(function(task){
        const li = document.createElement('li');
        li.classList.add('task-link');

        if (task.completed) {
            li.classList.add("completed");
        }

        const input = document.createElement('input');
        input.classList.add('check');
        input.type = "checkbox";
        input.checked = task.completed;

        input.addEventListener('change', function(e){
            if(input.checked){
                li.classList.add('completed');
                updateCounter();
                store();
            }else{
                li.classList.remove('completed');
                updateCounter();
                store();
            }

        })    
        const span = document.createElement('span');
        span.classList.add('task-text');
        span.textContent = task.text;

        const deletebutton = document.createElement('button');
        deletebutton.classList.add('dltbtn')
        deletebutton.textContent = "DELETE";

        deletebutton.addEventListener('click', function(e){
            li.remove();
            updateCounter();
            store();
        })

        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(deletebutton);

        list.appendChild(li);

 
    })
    updateCounter();
}
loadTask();


