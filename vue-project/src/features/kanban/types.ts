type Priority = 'high' | 'medium' | 'low';

 interface CardData {
    id: string
    title: string
    priority: Priority
  };

    interface ColumnData {
    id: string
    title: string          
    cards: CardData[]          
  }

  interface BoardData {
    id: string
    title: string          
    columns: ColumnData[]      
  }