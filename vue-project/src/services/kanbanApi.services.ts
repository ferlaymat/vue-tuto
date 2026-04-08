import { BoardData, Priority, CardData } from "@/features/kanban-api/types";

  const API_URL = "http://localhost:8080/api/v1/board";

  // define dto
  interface MoveCardRequestDTO {
    cardId: number;
    fromColumnId: string;
    toColumnId: string;
  }


  export async function fetchBoard(): Promise<BoardData> {
    //use fetch to make the http call to get the board
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }


  export async function addCardApi(title: string, priority: Priority):
  Promise<CardData> {
    const response = await fetch(`${API_URL}/card`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        priority
      })
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}`);
    }

    return response.json();
  }


  export async function deleteCardApi(cardId: number): Promise<void> {
    const response = await fetch(`${API_URL}/card/id/${cardId}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
  }


  export async function moveCardApi(request: MoveCardRequestDTO): Promise<void> {
    const response = await fetch(`${API_URL}/card/move`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request)
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
  }