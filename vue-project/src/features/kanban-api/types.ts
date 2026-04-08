export type Priority = 'high' | 'medium' | 'low';

export interface CardData {
    id: number
    title: string
    priority: Priority
  };

export interface ColumnData {
    id: string
    title: string          
    cards: CardData[]          
  }

export interface BoardData {
    id: string
    title: string          
    columns: ColumnData[]      
  }