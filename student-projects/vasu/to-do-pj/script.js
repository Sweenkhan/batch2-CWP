document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');
    
    let tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
    renderAllTasks();
    
  
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTask();
    });
    
    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) return;
        
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        
        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        taskInput.value = '';
        taskInput.focus();
    }
    
    function renderAllTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => renderTask(task));
    }
    
    function renderTask(task) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.dataset.id = task.id;
        
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        if (task.completed) taskText.classList.add('completed');
        taskText.textContent = task.text;
        
        const actions = document.createElement('div');
        actions.className = 'task-actions';
        
        const completeBtn = document.createElement('button');
        completeBtn.className = 'task-btn complete-btn';
        completeBtn.innerHTML = '<i class="fas fa-check"></i>';
        completeBtn.addEventListener('click', () => toggleComplete(task.id));
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'task-btn delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', () => deleteTask(task.id));
        
        actions.append(completeBtn, deleteBtn);
        taskItem.append(taskText, actions);
        taskList.appendChild(taskItem);
    }
    
    function toggleComplete(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            saveTasks();
            renderAllTasks();
        }
    }
    
    function deleteTask(taskId) {
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks();
        renderAllTasks();
    }
    
    function saveTasks() {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }
});