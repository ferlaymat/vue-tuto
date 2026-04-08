import { ref, onMounted } from "vue";                                                              
  import { defineStore } from "pinia";
  import { BoardData, Priority } from "@/features/kanban-api/types";
  import { fetchBoard, addCardApi, deleteCardApi, moveCardApi } from "@/services/kanbanApi.services";

  interface KanbanState {
    board: BoardData | null;
  }

  export const useKanbanStore = defineStore("kanban-api", () => {
    const board = ref<BoardData | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);

 
    async function loadBoard() {
      loading.value = true;
      error.value = null;
      try {
        board.value = await fetchBoard();
      } catch (e) {
        error.value = "Error during board loading";
        console.error(e);
      } finally {
        loading.value = false;
      }
    }

  
    async function addCard(title: string, priority: Priority) {
      if (!board.value) return;

      try {
        const newCard = await addCardApi(title, priority);

   
        const firstColumn = board.value.columns[0];
        if (firstColumn) {
          firstColumn.cards.push(newCard);
        }
      } catch (e) {
        error.value = "Error during the add";
        console.error(e);
      }
    }


    async function deleteCard(cardId: number) {
      if (!board.value) return;

      try {
        await deleteCardApi(cardId);


        for (const column of board.value.columns) {
          column.cards = column.cards.filter(card => card.id !== cardId);
        }
      } catch (e) {
        error.value = "Error during the deletion";
        console.error(e);
      }
    }

   
    async function moveCard(cardId: number, fromColumnId: string, toColumnId: string) {
      if (!board.value) return;

      try {
        await moveCardApi({ cardId, fromColumnId, toColumnId });

   
        const fromColumn = board.value.columns.find(col => col.id === fromColumnId);
        const toColumn = board.value.columns.find(col => col.id === toColumnId);

        if (!fromColumn || !toColumn) return;

        const cardIndex = fromColumn.cards.findIndex(card => card.id === cardId);
        if (cardIndex === -1) return;

        const [card] = fromColumn.cards.splice(cardIndex, 1);
        toColumn.cards.push(card);
      } catch (e) {
        error.value = "Error during the move";
        console.error(e);
      }
    }


    onMounted(() => {
      loadBoard();
    });

    return {
      board,
      loading,
      error,
      loadBoard,
      addCard,
      deleteCard,
      moveCard
    };
  });