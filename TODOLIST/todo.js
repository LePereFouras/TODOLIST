let taskList = [];

function addTask() {
	let newTask = document.getElementById("newTask").value;
	if (newTask !== "") {
		taskList.push(newTask);
		document.getElementById("newTask").value = "";
		showTasks();
	}
}

function deleteTask(index) {
	taskList.splice(index, 1);
	showTasks();
}

function editTask(index) {
	let task = taskList[index];
	document.getElementById("task" + index).innerHTML = "<input type='text' id='editTask" + index + "' value='" + task + "'><button onclick='saveTask(" + index + ")'>Save</button>";
}

function saveTask(index) {
	let task = document.getElementById("editTask" + index).value;
	taskList[index] = task;
	showTasks();
}

function showTasks() {
	let taskListHtml = "";
	for (let i = 0; i < taskList.length; i++) {
		taskListHtml += "<li id='task" + i + "'>" + taskList[i] + " <button onclick='deleteTask(" + i + ")'>Delete</button> <button onclick='editTask(" + i + ")'>Edit</button></li>";
	}
	document.getElementById("taskList").innerHTML = taskListHtml;
}
