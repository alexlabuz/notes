<template>
<p>Thread :</p>
<div v-if="dataThread" v-for="data in dataThread">
    <p>{{data}}</p>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { getFirebaseApp } from '../firebase'
import { collection, query, getDocs, getFirestore, where } from 'firebase/firestore'

const db = getFirestore(getFirebaseApp())

const dataThread = ref(["ss"])

async function getData()  {
    const q = query(collection(db, 'thread'), where("group", "==", true))
    const documents = await getDocs(q);
    dataThread.value = documents.docs.map(e => e.data().name)
    dataThread.value.forEach((doc) => {
        console.log(doc)
    })
}

getData()

</script>

<style scoped>

</style>