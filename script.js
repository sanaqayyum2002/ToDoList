let taskList = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== '') {
        taskList.push({ text: task, done: false });
        displayTasks();
        taskInput.value = '';
    }
}

function displayTasks() {
    const taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = '';

    taskList.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="${task.done ? 'done' : ''}">${task.text}</span>
            <span class="actions">
                <i class="material-icons" onclick="toggleDone(${index})">${task.done ? 'done' : 'check_circle_outline'}</i>
                <i class="material-icons" onclick="editTask(${index})">edit</i>
                <i class="material-icons" onclick="deleteTask(${index})">delete</i>
            </span>
        `;
        taskListContainer.appendChild(listItem);
    });

    const taskBox = document.querySelector('.task-box');
    const deleteAllButton = document.querySelector('.delete-all');

    if (taskList.length > 0) {
        taskBox.style.display = 'block';
        deleteAllButton.style.display = 'block';
    } else {
        taskBox.style.display = 'none';
        deleteAllButton.style.display = 'none';
    }
}

function toggleDone(index) {
    taskList[index].done = !taskList[index].done;
    displayTasks();
}

function editTask(index) {
    const newTask = prompt('Edit task:', taskList[index].text);
    if (newTask !== null) {
        taskList[index].text = newTask.trim();
        displayTasks();
    }
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

function deleteAllTasks() {
    taskList = [];
    displayTasks();
}

// Initial display
displayTasks();
