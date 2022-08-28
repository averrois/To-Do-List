// Select Variables
let theInput= document.querySelector('.add-task input'),
    theAddBtn = document.querySelector('.add-task .plus'),
    tasksContainer = document.querySelector('.tasks-content'),
    tasksCount = document.querySelector('.tasks-count span'),
    tasksCompleted = document.querySelector('.tasks-completed span');

// Foucus On input Field
window.onload = function (){

    'use strict';
    
    theInput.focus();
};

// Adding the task
theAddBtn.onclick = function (){

    // If input is empty
    if(theInput.value === ''){
        // TODO Sweet Alert ( You will learn how to use it)
    } else {

        let noTasksMsg = document.querySelector('.no-tasks-message');

        //Check if span with no tasks message is exist
        if(document.body.contains(document.querySelector('.no-tasks-message'))){

            /// Remove the Taksk message
            noTasksMsg.remove();
        }

        // Create Span Element (DOM (use what we already learn ))
        let mainSpan = document.createElement('span');

        // Creat Delete Btn
        let deleteElement = document.createElement('span'); 

        // creat main span text
        let text = document.createTextNode(theInput.value);

        // creat Delete btn text
        let deleteText = document.createTextNode('Delete');

        // Add Text to the main span
        mainSpan.appendChild(text);

         // Add class to the main span 
        // mainSpan.className = 'task-box';
        mainSpan.classList.add('task-box');


        //# Add text to delete Btn
        deleteElement.appendChild(deleteText);

        // # Add class to delete btn
        // deleteElement.className= 'delete'; // ! I don't knw why this is not working is the same with the first one in mainSpan 
        deleteElement.classList.add('delete');

        // Add Delete Btn to main span
        mainSpan.appendChild(deleteElement);

        // Add the task to the container
        tasksContainer.appendChild(mainSpan);

        // Empty the input after done
        theInput.value= '';

        // Focus on field after puting the info 
        theInput.focus();

        // Calc tasks
        calcTasks();
    }
};
document.addEventListener('click', e =>{

    //Delete Task (// Add click event to it) 
    if(e.target.className == 'delete'){

        // Remove current tasks
        e.target.parentNode.remove();

        // Check umber of tasks inside of the container
        if(tasksContainer.childElementCount == 0){

            createNoTasks();

        }
    }

    //Finish Task
    if(e.target.classList.contains('task-box')){

        // Toggle class 'finished'
        e.target.classList.toggle('finished'); //! I still didn't fixed it I don't knw what is the problem here ? 
        // e.target.style.backgroundColor = '#222222';
        if(e.target.classList.contains('finished')){

            e.target.style.backgroundColor = '#ccc';
            e.target.style.borderRadius = '4px';
        } else{
            e.target.style.backgroundColor = '#fff';
        }
    }
    // Calc tasks
    calcTasks();
});

// Func to create no tasks message
function createNoTasks(){

    //Create messge span element
    let msgSpan = document.createElement('span');

    //Create the text msg
    let msgText = document.createTextNode('No Tasks To Show');

    // Add text to span message (msgSpan) element
    msgSpan.appendChild(msgText);

    // ADD class to message span
    msgSpan.className = 'no-tasks-message';

    //Append the msg span 
    tasksContainer.appendChild(msgSpan);
}

// Func to calculate tasks
function calcTasks(){

    //calc All tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Calc Completed tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}