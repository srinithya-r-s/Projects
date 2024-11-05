// Get references to the DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add an event listener to the "Add Task" button
addTaskButton.addEventListener('click', function() {
    // Get the value of the input field
    const taskText = taskInput.value.trim();

    // If the input field is not empty
    if (taskText) {
        // Create a new list item (li) element
        const li = document.createElement('li');
        
        // Create a span element for the task text
        const span = document.createElement('span');
        span.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';

        // Append the span and delete button to the list item
        li.appendChild(span);
        li.appendChild(deleteButton);

        // Add the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Add event listener to the delete button
        deleteButton.addEventListener('click', function() {
            // Remove the list item from the task list
            taskList.removeChild(li);
        });

        // Add an event listener to toggle the completed state of the task
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
    }
});