const icon = `--`;
let todoItems = [
    
];
function updateUI(){
  const container = document.querySelector('.list-group');
  container.innerHTML = '';
  todoItems.forEach( (task, i) => {
    paintTask(task, i);
  })
}
function paintTask(task, i){
	const container = document.querySelector('.list-group');
  const checked = task.isSelected ? 'checked' : '';
  container.insertAdjacentHTML ('beforeend', `
      <li class="list-item list-group-item ${checked}"> 
       <input type="checkbox" ${checked} onchange="changeTask(event,${i})"/>
        <span>${task.name}</span>
        <div class="left">
           <button class="btn btn-sm" onclick="deleteTask(${i})">${icon}</button>
        </div>
      </li>
   `);
}
function changeTask(event, i){
  todoItems[i].isSelected = event.target.checked; 
  updateUI();
}
function deleteTask(index){
		todoItems.splice(index, 1);
    updateUI();
}
function addTask(){
	const input = document.querySelector('#input-task');
  if(input.value == ''){
  	return;
  }
  const task = {
     name : input.value,
     isSelected: false
  };
  todoItems.push(task);
  input.value = '';
  updateUI();
}


