package com.example.vue.service;

import com.example.vue.model.Board;
import com.example.vue.model.Card;


public interface BoardService {
    Board getBoard();
    Card addCard(Card card);
    void deleteCard( Long id);
    void moveCard(Long cardId, String fromColumnId, String toColumnId);
}
