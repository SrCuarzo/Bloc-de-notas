
const form = document.querySelector("#new-task-form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const description = form.elements["new-task"].value;
    if (description !== "") {
        initialTasks.push(description);
    } else {
        alert("No se puede crear una tarea vacia");
        return;
    }
    form.reset();
    renderTasks();
}
function renderTasks() {
    tasksList.innerHTML= "";
    initialTasks.forEach(task => {
        createTaskElement(task);
    });
}

    // Mostrar una lista de tareas iniciales
    const initialTasks = ["This is my first note", "This is a bigger note with multiple lines", "This is another note", "One more note"];
    const tasksList = document.getElementById('tasks-list');
    
    initialTasks.forEach(task => {
        createTaskElement(task);
    });
    // Crear nuevas tareas usando el formulario
    function createTask() {
        const newTaskInput = document.getElementById('new-task');
        const taskText = newTaskInput.value.trim();

        if (taskText !== "") {
            createTaskElement(taskText);
            newTaskInput.value = "";
        }
    }
    // Eliminar una tarea al hacer clic en el botón "delete"
    function deleteTask(event) {
        const taskItem = event.target.closest('li');
        if (taskItem) {
            taskItem.remove();
        }
    }
    // Función auxiliar para crear elementos de tarea
    function createTaskElement(taskText) {
        const taskItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        taskItem.innerText = taskText;
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', deleteTask);
        taskItem.appendChild(deleteButton);
        tasksList.appendChild(taskItem);
    }
  
