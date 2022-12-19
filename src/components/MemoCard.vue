<template>
<div class="card">
    <div class="row" >
        <div class="color_note" :id="noteData.color"></div>
    </div>
    <div class="row" style="width: 100%;">
        <h1>{{noteData.title}}</h1>
        <p>{{noteData.content}}</p>
        <div class="card_control">
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
    box-shadow: 0px 0px 0px 2px gray;
    max-width: 400px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    overflow: auto;
    height: min-content;
}

.card .row{
    display: flex;
    flex-direction: column;
}

.card .row:last-child{
    padding: 1em;
}

@media(max-width: 935px){
    .card{
        max-width: none;
    }
}

.card h1 {margin: 0;}

.card .card_control{
    display: flex;
    color: cornflowerblue;
    justify-content: end;
    text-decoration: underline;
    align-items: center;
    gap: 15px;
}

.red{color: crimson;}

.color_note{
    margin: 0;
    width: 15px;
    height: 100%;
}

@media(width < 490px){

}

#red{background-color: var(--red);}
#blue{background-color: var(--blue);}
#green{background-color: var(--green);}
#orange{background-color: var(--orange);}
#purple{background-color: var(--purple);}
</style>

