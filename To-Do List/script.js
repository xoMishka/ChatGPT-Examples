    // Task list array to store the tasks
    let tasks = [];

    // Function to render the tasks
    function renderTasks() {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = ''; // Clear the task list before rendering

        // Loop through each task and create the corresponding list item
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li'); // Create a new list item element
            const checkbox = document.createElement('input'); // Create a new checkbox element
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed; // Set the checkbox's checked state based on the task's completion status
            checkbox.addEventListener('change', () => {
                toggleTaskCompletion(index); // Add an event listener to toggle the task's completion status when the checkbox is changed
            });

            const span = document.createElement('span'); // Create a new span element to display the task description
            span.textContent = task.description;

            const deleteButton = document.createElement('button'); // Create a new button element for deleting the task
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                deleteTask(index); // Add an event listener to delete the task when the delete button is clicked
            });

            // Append the checkbox, span, and delete button to the list item
            listItem.appendChild(checkbox);
            listItem.appendChild(span);
            listItem.appendChild(deleteButton);

            if (task.completed) {
                listItem.classList.add('completed'); // Add a 'completed' class to the list item if the task is completed
            }

            taskList.appendChild(listItem); // Append the list item to the task list
        });
    }

    // Function to add a new task
    function addTask(event) {
        event.preventDefault(); // Prevent form submission from refreshing the page

        const taskInput = document.getElementById('taskInput');
        const description = taskInput.value.trim(); // Get the task description from the input field and remove leading/trailing whitespace

        if (description !== '') { // Only add the task if the description is not empty
            const newTask = {
                description: description,
                completed: false
            };

            tasks.push(newTask); // Add the new task to the tasks array
            renderTasks(); // Render the updated task list

            taskInput.value = ''; // Clear the input field after adding the task
        }
    }

    // Function to toggle task completion
    function toggleTaskCompletion(index) {
        tasks[index].completed = !tasks[index].completed; // Toggle the completion status of the task at the given index
        renderTasks(); // Render the updated task list
    }

    // Function to delete a task
    function deleteTask(index) {
        tasks.splice(index, 1); // Remove the task at the given index from the tasks array
        renderTasks(); // Render the updated task list
    }

    // Initial render
    renderTasks(); // Render the initial task list