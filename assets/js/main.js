const app = new Vue({
    el: "#root",
    data: {
        tasks: [
            "Fare la spesa",
            "Andare in palestra",
            "Imparare VueJS"
        ],
        newTask: "",
        error: false
    },
    methods: {
        removeTask(i) {
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
        }
    }
});