import { defineStore } from "pinia";

export const useDataStore = defineStore({
    id: 'task',

    state: ()=> ({
        tasks: [],
        doneTasks: [],
        unDoneTasks: [],
        red: false
    }),
    getters: {
        getTasks: (state) => state.tasks,
        getDoneTasks: (state) => state.doneTasks,
        getUnDoneTasks: (state) => state.unDoneTasks,
    },

    actions: {
        setTasks(payload) {
            this.tasks = [payload, ...this.tasks]
            this.unDoneTasks = [payload, ...this.unDoneTasks]
        },
        setDoneTasks(payload, id) {
            this.doneTasks = [this.tasks[payload], ...this.doneTasks]
            this.tasks[payload].toggle = true
            this.unDoneTasks = this.unDoneTasks.filter(item => item.id !== id)
        },
        delDoneTasks(id) {
            this.tasks = this.tasks.filter(item => item.id !== id)
            this.unDoneTasks = this.unDoneTasks.filter(item => item.id !== id)
            this.doneTasks = this.doneTasks.filter(item => item.id !== id)
        }
    }
})