window.addEventListener("load",init);
function init(){
    loadTasks();
    document.getElementById("add").addEventListener("click",addTask);
    document.getElementById("taskName").addEventListener("keyup",checkEmpty);
    document.getElementById("save").addEventListener("click",saveTask);
    document.getElementById("delete").addEventListener("click",deleteTask);
    document.getElementById("search").addEventListener("click",searchTask);

    document.getElementById("load").addEventListener("click",loadTask);

}

function toggleTask(event){
    event.srcElement.classList.toggle("completed");
}

function checkEmpty(){
    var taskName = document.getElementById(this.id).value;
    if(taskName){
        document.getElementById("taskNameError").innerHTML="";
    }
}
function addTask(){
    var taskName = document.getElementById("taskName");
    var desc = document.getElementById("desc");
    if(taskName && desc){
        taskName = taskName.value;
        desc =desc.value;
        if(!taskName){
            document.getElementById("taskNameError").innerHTML="TaskName Can't Be Empty";
            return ;
        }
        if(!desc){
            document.getElementById("taskDescError").innerHTML="Desc Can't Be Empty";
            return ;
        }
        // Call Model
        taskOperation.addTask(taskName,desc);
        var ul = document.getElementsByTagName("div")[1].children[0].children[1];
        var li = document.createElement("li");
        li.addEventListener("click",toggleTask);
        li.innerHTML = taskName + " "+desc;
        ul.appendChild(li);


    }
    else{
        alert("Invalid TaskName Id or Desc Id so Can't Add");
    }
}
/*

 */
function saveTask(){
    if(taskOperation.taskList){
        if(taskOperation.taskList.length>0){
            if(localStorage){
                localStorage.taskjson = JSON.stringify(taskOperation.taskList);
                alert("Data Save...");
            }
            else{
                alert("UR Browser Doesn't Support Local Storage...");
            }
        }
    }
}

function loadTasks(){
    if(localStorage){
        if(localStorage.taskjson){
            var taskList = JSON.parse(localStorage.taskjson);
            taskList.forEach(function(taskObject,index){
                var ul = document.getElementsByTagName("div")[1].children[0].children[1];
                var li = document.createElement("li");
                li.innerHTML = taskObject.name + " "+taskObject.desc;
                ul.appendChild(li);
            });
        }

    }

}
