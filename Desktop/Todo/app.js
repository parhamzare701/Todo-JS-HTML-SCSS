document.querySelector(".newtask__add").onclick = function () {
    if (document.querySelector(".newtask__input").value.length == 0) {
        alert("please add a task")
    }
    else {
        var tasksElement = document.querySelector(".tasks");
        let tasksHTML = `
            <div class="task">
                 <span class="task__name">
                    ${document.querySelector(".newtask__input").value}
                </span>
                <input type="text" class="task__input">
                    <button class="task__movedown">
                        <i class="fa-solid fa-arrow-down"></i>                    
                     </button>
                    <button class="task__moveup">
                       <i class="fa-solid fa-up-long"></i>                    
                    </button>
                    <button class="task__edit">
                        <li class="las la-edit"><li>
                    </button>
                    <button class="task__tik">
                        <li class="fa-regular fa-circle-check"><li>
                    </button>
                    <button class="task__cross">
                         <li class="fa-regular fa-circle-xmark"><li>
                    </button>
                    <button class="task__delete">
                        <li class="las la-trash"><li>
                    </button>
            </div>`;
        tasksElement.insertAdjacentHTML("beforeend", tasksHTML)
        let taskElement = document.querySelector(".tasks").lastElementChild;
        taskElement.querySelector(".task__delete").onclick = function () {
            taskElement.remove();
        }
        taskElement.querySelector(".task__edit").onclick = function () {
            taskElement.classList.add("task--edit");
            taskElement.querySelector(".task__input").value = taskElement.querySelector(".task__name").textContent.replace(/^\s+|\s+$/gm, '');
        }
        taskElement.querySelector(".task__tik").onclick = function () {
            taskElement.classList.remove("task--edit");
            taskElement.querySelector(".task__name").textContent = taskElement.querySelector(".task__input").value;
        }
        taskElement.querySelector(".task__cross").onclick = function () {
            taskElement.classList.remove("task--edit");
        }
        let moveupElement = taskElement.querySelector(".task__moveup");
        moveupElement.onclick = function () {
            let previousElement = taskElement.previousElementSibling;
            if (previousElement) {
                previousElement.insertAdjacentElement("beforebegin", taskElement);
            }
        }
        let movedownElement = taskElement.querySelector(".task__movedown");
        movedownElement.onclick = function () {
            let nextElement = taskElement.nextElementSibling;
            if (nextElement) {
                nextElement.insertAdjacentElement("afterend", taskElement);
            }
        }
        document.querySelector(".newtask__input").value = null;
    }
}