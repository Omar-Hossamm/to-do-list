let mainForm = document.querySelector(".form")
// Top Part Selection
let addField = document.querySelector(".addField")
let addTask = document.querySelector(".addTask")
let add = document.querySelector(".add")
let clear = document.querySelector(".clear")
// Bottom Part Selection
let taskField = document.querySelector(".taskField")
let delTask = document.querySelectorAll("delTask")

        // let task = document.createElement("div")
        // let delTask = document.createElement("button")
        // task.classList.add("task")
        // delTask.classList.add("delTask")
        // task.innerHTML = `<p>${addTask.value}</p>`
        // delTask.innerText = "Delete";

const app = () => {
    function addStored() {
        if (localStorage.Task) {
            for (i = 0; i < JSON.parse(window.localStorage.Task).length; i++) {
                let task = document.createElement("div")
                let taskParag = document.createElement("p")
                let delTask = document.createElement("button")
                task.classList.add("task")
                delTask.classList.add("delTask")
                taskParag.id = JSON.parse(localStorage.Task)[i].id
                taskParag.append(JSON.parse(localStorage.Task)[i].title)
                delTask.innerText = "Delete"
                delTask.id = `${taskParag.id}`
                taskField.appendChild(task)
                task.appendChild(taskParag)
                task.appendChild(delTask)
            }
        } else {
            return
        }
    }
    addStored()
    function checker() {
        add.addEventListener("click", function () {
            if (addTask.value === "") {
                return
            } else {
                function getValue() {
                    let value = addTask.value
                    let task = document.createElement("div")
                    let taskParag = document.createElement("p")
                    let delTask = document.createElement("button")
                    task.classList.add("task")
                    delTask.classList.add("delTask")
                    taskParag.id = `${Date.now()}`
                    delTask.id = `${taskParag.id}`
                    taskParag.append(value)
                    delTask.innerText = "Delete"
                    taskField.appendChild(task)
                    task.appendChild(taskParag)
                    task.appendChild(delTask)
                    addTask.value = ""
                }
                getValue()

            }
        });
    }
    checker()
    function store() {
        let result = []
        document.querySelectorAll(".task p").forEach((element) => {
            result.push({ id: element.id, title: element.innerText })
        })
        window.localStorage.setItem("Task", JSON.stringify(result))
    }
    store()

    document.addEventListener("click", (ele) => {
        if (ele.target.matches(".delTask")) {
            ele.target.parentElement.remove();
        };
        store();
        if(JSON.parse(localStorage.Task).length == 0) {
            window.localStorage.removeItem("Task")
        };
    });

    clear.addEventListener("click", function () {
        window.localStorage.clear()
        taskField.innerHTML = ""
    })
}

app()
