import { defineStore } from "pinia";

export const useDialogStore = defineStore('dialog', {
    state: () => ({
        isVisible: false,
        title: "",
        content: "",
        action: null
    }),
    actions: {
        openDialog(title, content, action){
            this.title = title
            this.content = content
            this.action = action
            this.isVisible = true
        },

        closeDialog(valid){
            this.title = ""
            this.content = ""
            this.isVisible = false

            if(valid) this.action()
            this.action = null
        }

    }
})