package com.example;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Spring Boot 애플리케이션 기본 테스트 클래스
 * 
 * @SpringBootTest: 통합 테스트를 위한 설정을 자동으로 로드합니다
 */
@SpringBootTest
class BackendApplicationTests {

    /**
     * 컨텍스트가 제대로 로드되는지 확인하는 기본 테스트
     */
    @Test
    void contextLoads() {
        // 애플리케이션 컨텍스트가 정상적으로 로드되면 테스트 통과
    }
}

