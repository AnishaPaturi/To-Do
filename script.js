document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const span = document.createElement('span');
        span.textContent = taskText;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'task-buttons';

        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        completeBtn.title = 'Complete task';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.className = 'delete-btn';
        deleteBtn.title = 'Delete task';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        buttonsDiv.appendChild(completeBtn);
        buttonsDiv.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(buttonsDiv);

        return li;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value = '';
        taskInput.focus();
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
