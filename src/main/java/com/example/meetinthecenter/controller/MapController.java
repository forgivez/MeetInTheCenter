package com.example.meetinthecenter.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MapController {
    private final Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());

    @GetMapping("/")
    public String MainPage() {
        //log.info("/");
        System.out.println("/");
        return "map";
    }
    @GetMapping("/test")
    public String TestPage() {
        System.out.println("/test");
        return "map2";
    }
}
