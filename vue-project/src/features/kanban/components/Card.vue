<script setup lang="ts">
import type { CardData } from "@/features/kanban/types";
interface Props {
  card: CardData;
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <h3>{{ card.title }}</h3>
    <span :class="['priority', card.priority]">
      {{ card.priority }}
    </span>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
