var taskOperation = {
    taskList:[],
    addTask:function(name,desc){
        var task = new Task(name,desc);
        this.taskList.push(task);
    }
}