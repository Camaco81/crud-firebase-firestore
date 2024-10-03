import {saveTask, getTasks, ongetTask, deleteTask, getTask,updateTask} from './firebase.js';

const taskForm= document.getElementById('task-form');
const tasksContainer= document.getElementById("tasks-container");

let editStatus= false;

let id="";

window.addEventListener('DOMContentLoaded', async() => {
  ongetTask((querySnapshot)=>{
    tasksContainer.innerHTML="";

    querySnapshot.forEach((dc)=>{

    const task = dc.data();

      tasksContainer.innerHTML += `
      <div>
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <button class="btn btn-danger btn-delete" data-id="${dc.id}">Eliminar</button>
         <button class="btn btn-secondary btn-edit" data-id="${dc.id}">Editar</button>  
     </div>`;
  });


    const btnsDelete= tasksContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach(btn=>{
      btn.addEventListener('click',({target:{dataset}})=>{
       deleteTask(dataset.id);
      });
    });

    const btnsEdit= tasksContainer.querySelectorAll(".btn-edit");

    btnsEdit.forEach(btn=>{
      btn.addEventListener('click', async({target:{dataset}})=>{
       const doc = await getTask(dataset.id);
       const task= doc.data();
       taskForm["task-title"].value=task.title;
       taskForm["task-description"].value=task.description;
       editStatus=true;
       id=doc.id;
       taskForm['btn-task-save'].innerText="Actualizar";
     });
    });
 });

});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title= taskForm['task-title'];
  const description=taskForm['task-description'];

  if (!editStatus) {
    saveTask(title.value,description.value);
  } else {
    updateTask( id,{
      title:title.value,
      description: description.value,
    });
    editStatus=false;
    taskForm['btn-task-save'].innerText="Guardar";
  }

   taskForm.reset();
});




