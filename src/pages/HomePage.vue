<template>
    <div v-on:click="openAddChat" class="btn float_bottom">Ajouter</div>
    <div class="page">
        <div class="header">
            <h1>Notes</h1>
            <!--<router-link to="/ichat">iChat</router-link>-->
        </div>
        <div class="list_notes">
            <MemoCard v-for="memo in memoStore.listMemo" :note-data="memo" @onDeleteClick="deleteNote" @onAccessClick="openNote" />
            <p id="empty" v-if="memoStore.isEmpty">Aucune note ...</p>
        </div>
    </div>
</template>
  
<script setup>
import { useMemoStore } from '../stores/memoStore.js'
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import MemoCard from '../components/MemoCard.vue'
import { useDialogStore } from '../stores/dialogStore';

const memoStore = useMemoStore()
const dialogStore = useDialogStore()
const router = useRouter()

const openAddChat = computed(() => {
    router.push({name: 'Add'})
})

function deleteNote(e) {
    dialogStore.openDialog("Confirmation", "Voulez vous supprimer cette note ?", () => {
        memoStore.deleteMemo(e)
    })
}

function openNote(e) {
    router.push({ name: 'Edit', params: { id: e.id }})
}
</script>
  
<style scoped>

.page{
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    margin-right: 12px;
}

.header{
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    gap: 1em;
}

.header h1 {margin: 0;}

.list_notes {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
}

.list_notes #empty {
    margin-top: 32px;
    align-self: center;
}
</style>
  