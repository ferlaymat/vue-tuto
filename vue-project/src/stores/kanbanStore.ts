  import { ref } from "vue";
  import { defineStore } from "pinia";                                                               
  import { BoardData, Priority } from "@/features/kanban/types";
 
   interface KanbanState {
    board: BoardData | null;
  }

  export const useKanbanStore = defineStore("kanban", () =>{
    const board = ref<BoardData | null>(null);

    function initializeBoard(data: BoardData) {
      board.value = data;
    };

      function addCard(columnId: string, title: string, priority: Priority) {
      if (!board.value) return;

      const column = board.value.columns.find(col => col.id === columnId);
      if (!column) return;

      column.cards.push({
        id: crypto.randomUUID(),
        title,
        priority
      });
    }

      function deleteCard(cardId: string) {
      if (!board.value) return;

      for (const column of board.value.columns) {
        column.cards = column.cards.filter(card => card.id !== cardId);
      }
    }

    function moveCard(cardId: string, fromColumnId: string, toColumnId: string) {
      if (!board.value) return;

      const fromColumn = board.value.columns.find(col => col.id === fromColumnId);
      const toColumn = board.value.columns.find(col => col.id === toColumnId);

      if (!fromColumn || !toColumn) return;

      const cardIndex = fromColumn.cards.findIndex(card => card.id === cardId);
      if (cardIndex === -1) return;

      const [card] = fromColumn.cards.splice(cardIndex, 1);
      toColumn.cards.push(card);
    }

    // Retourne ce qui doit être exposé
    return {
      board,
      initializeBoard,
      addCard,
      deleteCard,
      moveCard
    };
  });
