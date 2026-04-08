package com.example.vue.controller;

import com.example.vue.model.Board;
import com.example.vue.model.Card;
import com.example.vue.model.MoveCardRequestDTO;
import com.example.vue.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/board")
public class BoardController {


    private final BoardService boardService;


    @GetMapping
    Board getBoard(){
        return this.boardService.getBoard();
    }

    @PostMapping("/card")
    Card addCard(@RequestBody Card card){
        return this.boardService.addCard(card);
    }

    @DeleteMapping("/card/id/{id}")
    void deleteCard(@PathVariable("id") Long id) {
        this.boardService.deleteCard(id);
    }

    @PutMapping("/card/move")
    void moveCard(@RequestBody MoveCardRequestDTO dto){
       this.boardService.moveCard(dto.getCardId(), dto.getFromColumnId(), dto.getToColumnId());
    }


}
