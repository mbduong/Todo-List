//create button, list, and input elements
const inputButton = document.getElementById("task-button");
const taskContainer = document.getElementById("task-list");
const inputTask = document.getElementById("task-input");

//when user clicks "+"
inputButton.addEventListener("click", () => {
    const userInput = inputTask.value;

    if(userInput.length == 0) {
        alert("Please enter a valid task.");
    }
    else {
        addTask(userInput);
    }
})

//allow user to click "Enter" as well
document.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        inputButton.click();
    }
})

function addTask(userTask) {
    //create list item element
    const task = document.createElement("li");
    task.innerText = userTask;
    task.classList.add("inline");

    //create checkbox element
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("inline");

    checkbox.addEventListener("click", () => {
        if(checkbox.checked) {
            task.classList.add("strikethrough");
        }
        else {
            task.classList.remove("strikethrough");
        }
    })
    
    //create remove button element
    const remove = document.createElement("button");
    remove.innerText = "X";
    remove.classList.add("inline");

    remove.addEventListener("click", () => {
        taskContainer.removeChild(checkbox);
        taskContainer.removeChild(task);
        taskContainer.removeChild(remove);
        taskContainer.removeChild(linebreak);
    })

    //add line break between list items
    const linebreak = document.createElement("br");

    //append everything onto list item
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(task);
    taskContainer.appendChild(remove);
    taskContainer.appendChild(linebreak);
    inputTask.value = "";
}

