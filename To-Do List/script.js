// Task list array to store the tasks
let tasks = [];

// Function to render the tasks
function renderTasks() {
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            toggleTaskCompletion(index);
        });

        const span = document.createElement('span');
        span.textContent = task.description;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(deleteButton);

        if (task.completed) {
            listItem.classList.add('completed');
        }

        taskList.appendChild(listItem);
    });
}

// Function to add a new task
function addTask(event) {
    event.preventDefault();

    const taskInput = document.getElementById('taskInput');
    const description = taskInput.value.trim();

    if (description !== '') {
        const newTask = {
            description: description,
            completed: false
        };

        tasks.push(newTask);
        renderTasks();

        taskInput.value = '';
    }
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Initial render
renderTasks();