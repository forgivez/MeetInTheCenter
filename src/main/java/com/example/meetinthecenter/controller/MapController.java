package com.example.meetinthecenter.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MapController {
<<<<<<< HEAD
    private final Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());
=======
    //private final Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());
>>>>>>> a047861885aabb8133a88296ad01d15bcb01098a

    @GetMapping("/")
    public String MainPage() {
        //log.info("/");
        System.out.println("/");
        return "map";
    }
    @GetMapping("/test")
    public String TestPage() {
        System.out.println("/test 요청");
        return "map2";
    }
    
}
