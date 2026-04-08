<script setup lang="ts">
import type { CardData } from "@/features/kanban-api/types";
import {useKanbanStore} from "@/stores/kanbanStoreApi";
interface Props {
  card: CardData;
  columnId: string;
}
const store = useKanbanStore();
const props = defineProps<Props>();
function onDragStart(e:DragEvent){
  //set in the dataTransfert needed info for the move function
  e.dataTransfer?.setData("cardId", String(props.card.id));
  e.dataTransfer?.setData("fromColumnId", props.columnId);
}


</script>

<template>
  <div class="card" draggable="true" @dragstart="onDragStart">
    <div>
    <h3>{{ card.title }}</h3>
    <span :class="['priority', card.priority]">
      {{ card.priority }}
    </span>
    </div>
    <button class="delete-btn" v-on:click="store.deleteCard(card.id)">x</button>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

  .delete-btn {
    font-size: 20px;
    cursor: pointer;
    color: #999;
  }

  .delete-btn:hover {
    color: red;
  }

.priority.high {
  color: red;
}
.priority.medium {
  color: orange;
}
.priority.low {
  color: green;
}
</style>
