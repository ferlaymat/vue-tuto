  import { ref, watch } from "vue";
  import { defineStore } from "pinia";                                                               
  import { BoardData, Priority } from "@/features/kanban/types";
 
   interface KanbanState {
    board: BoardData | null;
  }

  export const useKanbanStore = defineStore("kanban", () =>{
    const board = ref<BoardData | null>(null);

    //get value from local storage
    const stored = localStorage.getItem("kanban-board");
    if (stored) {
      board.value = JSON.parse(stored);  // Restore data
    } 

    //save changes in board into localstorage
    watch(board, (newBoard) => {
    if (newBoard) {
      localStorage.setItem("kanban-board", JSON.stringify(newBoard));
    }
    }, { deep: true });

    function initializeBoard(data: BoardData) {
      //check if board is already fed. If not(first load), load init data
      if (board.value) return;
      board.value = data;
    };

      function addCard(columnId: string, title: string, priority: Priority) {
      //if no board, exit
      if (!board.value) return;

      //find the destination column in board by id
      const column = board.value.columns.find(col => col.id === columnId);
      if (!column) return;
 
      //add card in list
      column.cards.push({
        id: crypto.randomUUID(),
        title,
        priority
      });
    }

      function deleteCard(cardId: string) {
        //if no board, exit
      if (!board.value) return;

      //iterate on columns to find all cards which will be returned
      for (const column of board.value.columns) {
        column.cards = column.cards.filter(card => card.id !== cardId);
      }
    }

    function moveCard(cardId: string, fromColumnId: string, toColumnId: string) {
       //if no board, exit
      if (!board.value) return;

      const fromColumn = board.value.columns.find(col => col.id === fromColumnId);
      const toColumn = board.value.columns.find(col => col.id === toColumnId);

       //if origin or destination column is missing, exit
      if (!fromColumn || !toColumn) return;

      const cardIndex = fromColumn.cards.findIndex(card => card.id === cardId);

      //if card is not found in orgin column, exit
      if (cardIndex === -1) return;

      //remove card from origin column
      const [card] = fromColumn.cards.splice(cardIndex, 1);
      //add card to destination column
      toColumn.cards.push(card);
    }

    // return all what need to be exposed
    return {
      board,
      initializeBoard,
      addCard,
      deleteCard,
      moveCard
    };
  });
