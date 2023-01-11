import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks:[
            { id:1, title: "buy some milk", isFav: false },
            { id:2, title: "play football", isFav: false },
            { id:3, title: "fix my phone", isFav: true },
            { id:4, title: "buy new software", isFav: true },
            { id:5, title: "have lunch", isFav: false },
            { id:6, title: "build settlers", isFav: true },
            { id:7, title: "buy new bag", isFav: false }
        ],
        name: 'Morris'
    })
})