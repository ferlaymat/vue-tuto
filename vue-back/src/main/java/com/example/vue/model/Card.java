package com.example.vue.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class Card {
    private Long id;
    private String title;
    private Priority priority;

}
