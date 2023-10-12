package com.example.demo;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.util.*;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class GameInfoController {

	@GetMapping("/gameInfo")
	public List<GameInfo> gameinfo(){

		ObjectMapper mapper = new ObjectMapper();

		//JSON file to Java object
		try{
			List<GameInfo> testGames = mapper.readValue(new File(System.getProperty("user.dir") + "\\test.json"), new TypeReference<>(){});
			return testGames;
		}
		catch(Exception e){
			System.out.println("Error: " + e);
		}
	
		return null;
	}

	public static void main(String[] args) {

		SpringApplication.run(GameInfoController.class, args);

	  }
}