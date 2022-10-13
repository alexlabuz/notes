<template>
<div class="card">
    <div class="row" style="width: 30px;">
        <div class="color_note" :id="noteData.color"></div>
    </div>
    <div class="row" style="width: 100%;">
        <h1>{{noteData.title}}</h1>
        <p>{{noteData.content}}</p>
        <div class="card_control">
            <div class="color_note" :id="noteData.color"></div>
            <a class="btn-text red" v-on:click="$emit('onDeleteClick', noteData)">Supprimer</a>
            <a class="btn-text" v-on:click="$emit('onAccessClick', noteData)">Accéder</a>
        </div>
    </div>
</div>
</template>

<script setup>
    import { Memo } from '../models/memo'
    
    defineProps({
        noteData: Memo
    })

    defineEmits(["onDeleteClick", "onAccessClick"])
</script>

<style scoped>
.card{
    border: 2px solid grey;
    max-width: 400px;
    width: 100%;
    padding: 1em;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    overflow: auto;
    height: min-content;
}

.card .row{
    display: flex;
    flex-direction: column;
}

@media(max-width: 935px){
    .card{
        max-width: none;
    }
}

.card h1 {
    margin: 0;
}

.card .card_control{
    display: flex;
    color: cornflowerblue;
    justify-content: end;
    text-decoration: underline;
    align-items: center;
    gap: 15px;
}

.card .card_control .color_note{
    display: none;
    margin-right: auto;
    margin-top: 0;
}

.red{
    color: crimson;
}

.color_note{
    width: 15px;
    height: 15px;
    border-radius: 5px;
    margin-top: 10px;
}

@media(width < 490px){
    .card .row:first-of-type{
        display: none;
    }

    .card .card_control .color_note{
        display: block;
    }
}

#red{background-color: var(--red);}
#blue{background-color: var(--blue);}
#green{background-color: var(--green);}
#orange{background-color: var(--orange);}
#purple{background-color: var(--purple);}
</style>

