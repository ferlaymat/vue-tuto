<script setup lang="ts">
import Board from "./Board.vue";
import { useKanbanStore } from "@/stores/kanbanStoreApi";

const store = useKanbanStore();

</script>

<template>
  <Board v-if="store.board" :board="store.board" />
  <p v-else>Chargement...</p>
</template>

<style scoped>
body {
  background: #e0e0e0;
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
