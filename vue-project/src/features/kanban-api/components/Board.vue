<script setup lang="ts">
import type { BoardData, Priority } from "@/features/kanban-api/types";
import {useKanbanStore} from "@/stores/kanbanStoreApi";
import Column from "./Column.vue";
import { ref } from "vue";
interface Props {
  board: BoardData;
}
const store = useKanbanStore();
const newCardTitle = ref("");
const newCardPriority = ref<Priority>("medium");
defineProps<Props>();

function handleAddCard(){
  store.addCard(newCardTitle.value, newCardPriority.value);
  newCardTitle.value = "";
  newCardPriority.value = "medium";
}
</script>

<template>
  <div class="board">
    <h1>{{ board.title }}</h1>
     <div class="add-card-form">
        <input v-model="newCardTitle" placeholder="New Task..." />
        <select v-model="newCardPriority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button @click="handleAddCard">Add task</button>
      </div>

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
