function setTasksList(tasks, tasksList) {
    tasks.forEach(tasks => {
        tasksList.appendChild(createTaskItem(tasks))
    });
}

function createTaskItem(task) {
    let taskItem = document.createElement('li')
    taskItem.classList.add('tasks-item');
    taskItem.append(`${task.value}`);
    return taskItem
}

export {
    setTasksList
}