package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class GreetingController {

	String title = "test";
	String imgLink = "link";
	double rating = 4.5;
	int age = 10;

	@GetMapping("/gameInfo")
	public GameInfo gameinfo(){
		return new GameInfo(title, imgLink, rating, age);
	}

	public static void main(String[] args) {
		SpringApplication.run(GreetingController.class, args);
	  }
}