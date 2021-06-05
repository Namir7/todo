async function setTasks(event) {
    const tasksFromServer = await utils.fetchTasks();
    const isTasksChanged = utils.compare(tasks, tasksFromServer);

    if (isTasksChanged) {

        tasks = tasksFromServer;
        view.setTasksList(tasks, tasksList);
    }
}

export {
    setTasks
}