<template>
    <div class="background">
        <div class="dialog">
            <h1>{{title}}</h1>
            <p>{{content}}</p>
            <div class="dialog_control">
                <a class="btn-text" v-on:click="$emit('onValidDialog', false)">Non</a>
                <a class="btn-text red" v-on:click="$emit('onValidDialog', true)">Oui</a>
            </div>
        </div>
        <div class="close_click" v-on:click="$emit('onValidDialog', false)" />
    </div>
</template>

<script setup>

defineProps({
    title: String,
    content: String
})

defineEmits(["onValidDialog"])

</script>

<style scoped>
h1{
    margin: 0;
}

.background{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.24);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.close_click{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.dialog{
    max-width: 350px;
    width: 75%;
    background-color: white;
    border-radius: 5px;
    padding: 1.5em;
    z-index: 1;
}

.dialog .dialog_control{
    display: flex;
    color: cornflowerblue;
    justify-content: end;
    text-decoration: underline;
    align-items: center;
    gap: 25px;
}

.btn-text{
    cursor: pointer;
}

.red{
    color: crimson;
}
</style>
