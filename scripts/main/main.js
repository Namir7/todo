import * as utils from './main.utils.js';
import * as view from './main.view.js';



const btn = document.querySelector('#getTasks');
const tasksList = document.querySelector('#tasksList');

let tasks = [];
let isShown = true;

setTasks();

async function setTasks(event) {
    const tasksFromServer = await utils.fetchTasks();
    const isTasksChanged = utils.compare(tasks, tasksFromServer);

    if (isTasksChanged) {

        tasks = tasksFromServer;
        view.setTasksList(tasks, tasksList);
    }
}