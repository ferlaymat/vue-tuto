<script setup lang="ts">
import { onMounted } from "vue";
import Board from "./Board.vue";
import type { BoardData } from "../types";
import { useKanbanStore } from "@/stores/kanbanStore";

const store = useKanbanStore();

// Fake data
const initialBoard: BoardData = {
  id: "1",
  title: "My Kanban project",
  columns: [
    {
      id: "col-1",
      title: "To-do",
      cards: [
        { id: "card-1", title: "Fix bug login", priority: "high" },
        { id: "card-2", title: "Add feature", priority: "medium" },
      ],
    },
    {
      id: "col-2",
      title: "In progress",
      cards: [{ id: "card-3", title: "Review PR", priority: "low" }],
    },
    {
      id: "col-3",
      title: "Done",
      cards: [],
    },
  ],
};

onMounted(() => {
  store.initializeBoard(initialBoard);
});
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
