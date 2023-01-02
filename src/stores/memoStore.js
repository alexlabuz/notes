import { defineStore } from 'pinia'
import { addMemo, getAll, deleteMemo, get, updateMemo } from '../db'
import { Memo, MemoState } from '../models/memo'

export const useMemoStore = defineStore('memo', {
    state: () =>  ({
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
        changeStateMemo(memo){
            if(memo.progress == MemoState.finished) memo.progress = MemoState.inProgress
            else memo.progress = MemoState.finished
            updateMemo(memo)
        },
        async getById(id) {
            return await get(id)
        },
    },
    getters:{
        isEmpty: (state) => state.listMemo.length == 0,
    },
})