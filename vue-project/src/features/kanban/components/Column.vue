<script setup lang="ts">
import type { ColumnData } from "@/features/kanban/types";
import {useKanbanStore} from "@/stores/kanbanStore";
import Card from "./Card.vue";

interface Props {
  column: ColumnData;
}

const store = useKanbanStore();
const props = defineProps<Props>();

function onDragOver(e:DragEvent){
e.preventDefault();
}

function onDrop(e:DragEvent){
  e.preventDefault();
  //fetch from dataTransfer needed info
  const cardId = e.dataTransfer?.getData("cardId");
  const fromColumnId = e.dataTransfer?.getData("fromColumnId");
  if(cardId && fromColumnId){
    //apply move function
    store.moveCard(cardId,fromColumnId,props.column.id);
  }
}
</script>

<template>
  <div class="column" @dragover="onDragOver" @drop="onDrop">
    <h2>{{ column.title }}</h2>
    <div class="cards">
      <Card v-for="card in column.cards" :key="card.id" :card="card" :columnId="column.id"/>
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
