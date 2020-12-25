
/**
 * Tittle : To do  Application 
 * Description : This is file has all js function necessary to control the Application
 * Author : Rashidul Hasan
 * Date:26-12-2020
 */

//  Select all and assign to variable

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');

let completeUl = document.querySelector('.complete-list ul');


// Get Value from Add new Task

let createTask = function (task){

    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');

    let label = document.createElement('label');

    label.innerText=task;
    checkBox.type ='checkbox';
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;

}

// add Task

let addTask = function (event){
event.preventDefault();
let listItem = createTask(newTask.value);
todoUl.appendChild(listItem);
newTask.value = "";

// Bind the new list item to imcomplete list

bindIncompleteItems(listItem,completeTask)


}

let completeTask = function (){
 
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);
    let checkBox = listItem.querySelector('input[type="checkbox"]');

    checkBox.remove();
    completeUl.appendChild(listItem);
// Bind Complete Item 

    bindCompleteItems(listItem,deleteTask);

    }

    // Delete Taks fn 

    let deleteTask = function (){
        let listItem = this.parentNode;
        let ul = listItem.parentNode;
        ul.removeChild(listItem);
    }



let bindIncompleteItems = function(taskitem,checkboxClick){

    let checkBox = taskitem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}
// Complete Item

let bindCompleteItems = function(taskitem,deleteButtonClick){

    let deleteButton = taskitem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}
 for(let i=0;i<todoUl.children.length;i++){
     bindIncompleteItems(todoUl.children[i],completeTask);
 }

 for(let i=0;i<completeUl.children.length;i++){
    bindCompleteItems(completeUl.children[i],deleteTask);
}

form.addEventListener('submit',addTask);

