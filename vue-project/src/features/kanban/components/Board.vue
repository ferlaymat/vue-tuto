<script setup lang="ts">
import type { BoardData } from "@/features/kanban/types";
import Column from "./Column.vue";
interface Props {
  board: BoardData;
}

defineProps<Props>();
</script>

<template>
  <div class="board">
    <h1>{{ board.title }}</h1>
    <div class="columns">
      <Column
        v-for="column in board.columns"
        :key="column.id"
        :column="column"
      />
    </div>
  </div>
</template>

<style scoped>
.board {
  padding: 24px;
}

.columns {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
