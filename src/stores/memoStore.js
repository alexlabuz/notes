import {defineStore} from 'pinia'
import { Memo, MemoColor, MemoState } from '../models/memo'

export const useMemoStore = defineStore('memo', {
    state: () => ({
        listMemo: [
            new Memo(0, "Hello", "Ceci est une note de bienvenue", MemoColor.red, MemoState.inProgress),
            new Memo(1, "Ajouter le votre", "Appuyez sur le bouton + pour ajoute votre note", MemoColor.blue, MemoState.inProgress),
        ],
    }),
    actions: {
        addMemo(title, content, color){
            console.log(title, content, color)
            const id = this.listMemo.length
            const memo = new Memo(id, title, content, color, MemoState.inProgress)
            this.listMemo.push(memo)
        },
        deleteMemo(memo){
            const i = this.listMemo.indexOf(memo)
            this.listMemo.splice(i, 1)
        },
        updateMemo(title, content, color, id){
            var n = this.listMemo.find(n => n.id == id)
            n.title = title
            n.content = content
            n.color = color
        },
        getById(noteId) {
            return this.listMemo.find(n => n.id == noteId)
        },
    },
    getters:{
        isEmpty: (state) => state.listMemo.length == 0,
    },
})