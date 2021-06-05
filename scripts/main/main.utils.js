async function fetchTasks() {
    console.log('fetching tasks...');
    const url = 'http://localhost:3050/api/tasks'

    const response = await fetch(url, {
        method: 'GET',
    });

    const tasks = await response.json();
    return tasks;
}


function compare(array) {
    //  Compares arrays with objects
    return array.every(compareObjects.bind(null, array[0]));

    function compareObjects(x, y) {
        var objectsAreSame = true;
        for (var propertyName in x) {
            if (x[propertyName] !== y[propertyName]) {
                objectsAreSame = false;
                break;
            }
        }
        return objectsAreSame;
    }
}

export {
    fetchTasks,
    compare
}