const textTask = document.getElementById('text');
const addbtn = document.getElementById('addbutton');
const list = document.getElementById('task-list');

addbtn.addEventListener('click', function(e){
    if(textTask.value === ""){
        return;
    }else{
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = "checkbox";
        input.addEventListener('change', function(e){
            if(input.checked){
                li.classList.add('completed');
            }else{
                li.classList.remove('completed');
            }
            updatecounter();
        })
        const span = document.createElement('span');
        span.innerText = textTask.value;
        li.appendChild(span);

        const deletebutton = document.createElement('button');
        deletebutton.innerText = "DELETE";
        deletebutton.addEventListener('click', function(e){
            li.remove();
            updatecounter();
        })
        li.appendChild(deletebutton);



        li.appendChild(input);

        list.appendChild(li);
        textTask.value = "";
    }
})


//update and complete

function updatecounter(){
    const totalTaskcounter = document.querySelectorAll('#task-list li').length;
    const completedtaskcounter = document.querySelectorAll('#task-list li.completed').length;

    taskCounter.textContent = `Total: ${totalTaskcounter} | Completed: ${completedtaskcounter}`
}

