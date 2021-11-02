const app = new Vue({
    el: "#root",
    data: {
        tasks: [
            "Fare la spesa",
            "Andare in palestra",
            "Imparare VueJS"
        ],
        newTask: "",
        error: false,
        saves: [],
        deletes: [],
        empty: ""
    },
    methods: {
        removeTask(i) {
            this.deletes.push(this.tasks[i])
            this.tasks.splice(i, 1)
        },
        addTask() {
            if (this.newTask != "" && this.newTask.length > 5) {
                this.tasks.push(this.newTask)
                this.error = false
            } else {
                this.error = true
            }
            this.newTask = ""
        },
        completeTask(i) {
            this.saves.push(this.tasks[i])
            this.tasks.splice(i, 1)
        },
        reundoTask(i) {
            this.tasks.push(this.saves[i])
            this.saves.splice(i, 1)
        },
        deleteTask() {
            const del = prompt("Sei sicuro di voler eliminare tutto? [Y/N]")
            if (del === "Y") {
                this.deletes = []
            }
        },
        returnTask(i) {
            this.tasks.push(this.deletes[i])
            this.deletes.splice(i, 1)
        }
    }
});