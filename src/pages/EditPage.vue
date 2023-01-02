<template>
    <div class="page">
        <h1 v-show="!paramId">Ajouter une note</h1>
        <h1 v-show="paramId">{{memo ? memo.title : ""}}</h1>

        <form @submit.prevent="validNote">
            <div class="field">
                <label for="title">Titre</label>
                <input class="input" type="text" name="title" id="title" v-model="title" required />
            </div>
            <div class="field textarea">
                <label for="content">Note</label>
                <textarea class="input" type="text" name="content" id="content" v-model="content" required></textarea>
            </div>
            <div class="footer">
                <div class=" color_select">
                    <p></p>
                    <div :class="{ color_badge: true, color_badge_selected: color == MemoColor.red}" id="note_red" @click="changeColor(MemoColor.red)"></div>
                    <div :class="{ color_badge: true, color_badge_selected: color == MemoColor.blue}" id="note_blue" @click="changeColor(MemoColor.blue)"></div>
                    <div :class="{ color_badge: true, color_badge_selected: color == MemoColor.green}" id="note_green" @click="changeColor(MemoColor.green)"></div>
                    <div :class="{ color_badge: true, color_badge_selected: color == MemoColor.orange}" id="note_orange" @click="changeColor(MemoColor.orange)"></div>
                    <div :class="{ color_badge: true, color_badge_selected: color == MemoColor.purple}" id="note_purple" @click="changeColor(MemoColor.purple)"></div>
                </div>
                <input type="submit" :value="paramId ? 'Modifier' : 'Ajouter'" class="btn"/>
            </div>
        </form>
    </div>
</template>

<style scoped>

.page{
    display: flex;
    flex-direction: column;
    height: 100%;
}

.page > * {
    margin-left: 12px;
    margin-right: 12px;
}

form{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.field{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: min-content;
}

.field label{
    display: block;
    font-weight: bold;
}

.field .input{
    padding: 8px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid gainsboro;
    outline: none;
}

.textarea, .field textarea{
    height: 100%;
}

.footer{
    display: flex;
    padding: 12px;
}

.color_select{
    display: flex;
    flex-direction: row;
    gap: 7px;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.color_badge{
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.color_badge_selected{
    border: 4px solid black;
}

@media (width < 480px) {
    .color_badge{
        width: 30px;
        height: 30px;
    }
    
    .color_badge_selected{
        border: 3px solid black;
    }
}

@media (width < 325px) {
    .footer{
        flex-wrap: wrap;
        justify-content: end;
    }
}

#note_red{background-color: var(--red);}
#note_blue{background-color: var(--blue);}
#note_green{background-color: var(--green);}
#note_orange{background-color: var(--orange);}
#note_purple{background-color: var(--purple);}
</style>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMemoStore } from '../stores/memoStore';
import { MemoColor } from '../models/memo'

const router = useRouter()
const route = useRoute()
const memoStore = useMemoStore()

const paramId = route.params.id

const title = ref()
const content = ref()
const color = ref(MemoColor.red)
const memo = ref();

if(paramId) getNoteData()

async function getNoteData() {
    const memoData = await memoStore.getById(paramId)
    if(memoData !== undefined){
        title.value = memoData.title
        content.value = memoData.content
        color.value = memoData.color
        memo.value = memoData;
    }
}

function validNote() {
    if(!paramId){
        memoStore.addMemo(title.value, content.value, color.value)
    }else{
        memoStore.updateMemo(title.value, content.value, color.value, JSON.parse(JSON.stringify(memo.value)))
    }
    router.push("/")
}

function changeColor(c) {
    color.value = c
}
</script>