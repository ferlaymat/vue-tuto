<script setup lang="ts">
import Board from "./features/kanban/components/Board.vue";
import type { BoardData } from "./features/kanban/types";

// Fake data
const fakeBoard: BoardData = {
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
</script>

<template>
  <Board :board="fakeBoard" />
</template>

<style scoped>
body {
  background: #e0e0e0;
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
