import { defineStore } from 'pinia'
import { addMemo, getAll, deleteMemo, get, updateMemo } from '../db'

export const useMemoStore = defineStore('memo', {
    state: () =>  ({
        /*listMemo: [
            //new Memo(0, "Hello", "Ceci est une note de bienvenue", MemoColor.red, MemoState.inProgress),
            //new Memo(1, "Ajouter le votre", "Appuyez sur le bouton + pour ajoute votre note", MemoColor.blue, MemoState.inProgress),
        ],*/
        listMemo: [],
        db: null
    }),
    actions: {
        async init(){
            this.listMemo = await getAll()
        },
        loadListMemo(data){
            this.listMemo = []
            this.listMemo = data
        },
        addMemo(title, content, color){
            addMemo(title, content, color)
            this.init()
        },
        deleteMemo(memo){
            deleteMemo(memo)
            this.init()
        },
        updateMemo(title, content, color, memo){
            memo.title = title
            memo.content = content
            memo.color = color
            updateMemo(memo)
            this.init()
        },
        async getById(id) {
            return await get(id)
        },
    },
    getters:{
        isEmpty: (state) => state.listMemo.length == 0,
    },
})