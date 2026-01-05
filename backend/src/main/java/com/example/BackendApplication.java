package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Spring Boot 애플리케이션의 메인 클래스
 * 
 * @SpringBootApplication 어노테이션이 하는 일:
 * 1. 자동 설정 (Auto Configuration)
 * 2. 컴포넌트 스캔 (Component Scanning)
 * 3. Spring Boot의 기능 활성화
 */
@SpringBootApplication
public class BackendApplication {

    /**
     * 애플리케이션 실행 진입점 (Entry Point)
     * 
     * @param args 명령줄 인수
     */
    public static void main(String[] args) {
        // SpringApplication.run()이 Spring Boot 애플리케이션을 시작합니다
        SpringApplication.run(BackendApplication.class, args);
    }
}

