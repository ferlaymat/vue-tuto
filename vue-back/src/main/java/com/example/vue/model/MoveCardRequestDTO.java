package com.example.vue.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MoveCardRequestDTO {
    private Long cardId;
    private String fromColumnId;
    private String toColumnId;
}