package com.insignia.BuildModules;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAdminServer
public class BuildModulesApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuildModulesApplication.class, args);
	}

}
