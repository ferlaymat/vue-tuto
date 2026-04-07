<script setup lang="ts">
import type { ColumnData } from "@/features/kanban/types";
import Card from "./Card.vue";

interface Props {
  column: ColumnData;
}

defineProps<Props>();
</script>

<template>
  <div class="column">
    <h2>{{ column.title }}</h2>
    <div class="cards">
      <Card v-for="card in column.cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<style scoped>
.column {
  width: 300px;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.column h2 {
  margin: 0;
  font-size: 18px;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 100px;
}
</style>
