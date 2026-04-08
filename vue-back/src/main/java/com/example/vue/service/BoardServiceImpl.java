package com.example.vue.service;

import com.example.vue.model.Board;
import com.example.vue.model.Card;
import com.example.vue.model.Column;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    private Board board;

    @PostConstruct
    public void init() {
        board = new Board(
                "1",
                "My Kanban",
                List.of(
                        new Column("col-1", "To-do", new ArrayList<>()),
                        new Column("col-2", "In progress", new ArrayList<>()),
                        new Column("col-3", "Done", new ArrayList<>())
                )
        );
    }

    @Override
    public Board getBoard() {
        return board;
    }

    @Override
    public Card addCard(Card card) {
        Column col = board.getColumns().get(0);
        Long id = new Date().getTime();
        card.setId(id);
        col.getCards().add(card);
        return card;
    }

    @Override
    public void deleteCard(Long id) {
        for (Column col : board.getColumns()) {
            for (Card card : col.getCards()) {
                if (card.getId().equals(id)) {
                    col.getCards().remove(card);
                    return;
                }
            }
        }
        throw new IllegalArgumentException("not card for id:" + id);
    }

    @Override
    public void moveCard(Long cardId, String fromColumnId, String toColumnId) {

        Column fromColumn = board.getColumns().stream()
                .filter(col -> col.getId().equals(fromColumnId))
                .findFirst()
                .orElseThrow();

        Card card = fromColumn.getCards().stream()
                .filter(c -> c.getId().equals(cardId))
                .findFirst()
                .orElseThrow();

        Column toColumn = board.getColumns().stream()
                .filter(col -> col.getId().equals(toColumnId))
                .findFirst()
                .orElseThrow();




        fromColumn.getCards().remove(card);

        toColumn.getCards().add(card);
    }


}
