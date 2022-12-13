<template>
  <RouterView />
  <ConfirmDialog :title="dialogStore.title" :content="dialogStore.content" @onValidDialog="dialogStore.closeDialog" v-if="dialogStore.isVisible"/>
</template>

<script setup>
import ConfirmDialog from './components/ConfirmDialog.vue';
import { useDialogStore } from './stores/dialogStore.js'

const dialogStore = useDialogStore()
</script>
