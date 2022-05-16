---
layout: page
title:  "Spring Cloud"
subtitle: "with nimkoes"
date:   2022-05-16 01:21:17 +0530
categories: ["study"]
author: "nimkoes"
---

## **개요**
---
inflearn 강의를 보고 정리한 자료  
[<u>'Spring Cloud로 개발하는 마이크로서비스 애플리케이션(MSA)</u>][link_study]
　  
　  
　  

## **정리**
---

- **섹션 0. Microservice와 Spring Cloud의 소개**  
  [강의를 시작하며](https://inky-bug-9a2.notion.site/0f3e4e0d99ca4ee7880daf0bee3b6654)  
  [목차]()  
  [소프트웨어 아키텍처]()  
  [Cloud Native Architecture]()  
  [Cloud Native Application]()  
  [12 Factors]()  
  [Monolithic vs. Microservice]()  
  [Microservice Architecture란?]()  
  [SOA vs. MSA]()  
  [Microservice Architecture Structures]()  
  [Spring Cloud란?]()  

- **섹션 1. Service Discovery**  
  [섹션 소개]()  
  [Spring Cloud Netflix Eureka]()  
  [Eureka Service Discovery - 프로젝트 생성]()  
  [User Service - 프로젝트 생성]()  
  [User Service - 등록]()  
  [User Service - Load Balancer]()  

- **섹션 2. API Gateway Service**  
  [섹션 소개]()  
  [API Gateway 란?]()  
  [Netflix Zuul - 프로젝트 생성]()  
  [Netflix Zuul - Filter 적용]()  
  [Spring Cloud Gateway 란?]()  
  [Spring Cloud Gateway - 프로젝트 생성]()  
  [Spring Cloud Gateway - Filter 적용]()  
  [Spring Cloud Gateway - Filter 적용]()  
  [Spring Cloud Gateway - Filter 적용]()  
  [Spring Cloud Gateway - Custom Filter 적용 ➀]()  
  [Spring Cloud Gateway - Custom Filter 적용 ➁]()  
  [Spring Cloud Gateway - Global Filter]()  
  [Spring Cloud Gateway - Logging Filter]()  
  [Spring Cloud Gateway - Load Balancer ➀]()  
  [Spring Cloud Gateway - Load Balancer ➁]()  

- **섹션 3. E-commerce 애플리케이션**  
  [섹션 소개]()  
  [E-commerce 애플리케이션 개요]()  
  [E-commerce 애플리케이션 구성]()  

- **섹션 4. Users Microservice ➀**  
  [섹션 소개]()  
  [Users Microservice 개요]()  
  [Users Microservice - 프로젝트 생성]()  
  [Users Microservice - welcome()   메소드]()  
  [Users Microservice - H2 데이터베이스 연동]()  
  [Users Microservice - 사용자 추가]()  
  [Users Microservice - JPA ➀]()  
  [Users Microservice - JPA ➁]()  
  [Users Microservice - Spring Security 연동]()  

- **섹션 5. Catalogs and Orders Microservice**  
  [섹션 소개]()  
  [Users Microservice - 사용자 조회 ①]()  
  [Users Microservice와 Spring Cloud Gateway 연동]()  
  [Users Microservice - 사용자 조회 ②]()  
  [Users Microservice - 사용자 조회 ③]()  
  [Catalogs Microservice - 개요]()  
  [Catalogs Microservice - 기능 구현 ①]()  
  [Catalogs Microservice - 기능 구현 ②]()  
  [Orders Microservice - 개요]()  
  [Orders Microservice - 기능 구현 ①]()  
  [Orders Microservice - 기능 구현 ②]()  

- **섹션 6. Users Microservice ➁**  
  [섹션 소개]()  
  [Users Microservice - 인증과 권한 기능 개요]()  
  [Users Microservice - AuthenticationFilter 추가]()  
  [Users Microservice - loadUserByUsername()   구현]()  
  [Users Microservice - Routes 정보 변경]()  
  [Users Microservice - Routes 테스트]()  
  [Users Microservice - 로그인 처리 과정]()  
  [Users Microservice - 로그인 성공 처리]()  
  [Users Microservice - JWT 생성]()  
  [Users Microservice - JWT 처리 과정]()  
  [Users Microservice - AuthorizationHeaderFilter 추가]()  
  [Users Microservice - 테스트]()  

- **섹션 7. Configuration Service**  
  [섹션 소개]()  
  [Spring Cloud Config]()  
  [Local Git Repository]()  
  [Spring Cloud Config - 프로젝트 생성]()  
  [Users Microservice에서 Spring Cloud Config 연동 ①]()  
  [Users Microservice에서 Spring Cloud Config 연동 ➁]()  
  [Spring Cloud Gateway에서 Spring Cloud Config 연동 ①]()  
  [Spring Cloud Gateway에서 Spring Cloud Config 연동 ②]()  
  [Profiles을 사용한 Configuration 적용]()  
  [Remote Git Repository]()  
  [Native File Repository]()  

- **섹션 8. Spring Cloud Bus**  
  [섹션 소개]()  
  [Spring Cloud Bus 개요]()  
  [RabbitMQ 설치 - MacOS]()  
  [RabbitMQ 설치 - Windows 10]()  
  [AMQP 사용]()  
  [Spring Cloud Bus 테스트]()  

- **섹션 9. 설정 정보의 암호화 처리**  
  [섹션 소개]()  
  [대칭키와 비대칭키]()  
  [대칭키를 이용한 암호화 ①]()  
  [대칭키를 이용한 암호화 ②]()  
  [비대칭키를 이용한 암호화 ① - keytool]()  
  [비대칭키를 이용한 암호화 ②]()  

- **섹션 10. Microservcie간 통신**  
  [섹션 소개]()  
  [Communication types]()  
  [RestTemplate 사용 ①]()  
  [RestTemplate 사용 ②]()  
  [FeignClient 사용 ①]()  
  [FeignClient 사용 ②]()  
  [FeignClient 예외 처리 ①]()  
  [FeignClient 예외 처리 ②]()  
  [ErrorDecoder를 이용한 예외 처리]()  
  [데이터 동기화 문제 ①]()  
  [데이터 동기화 문제 ②]()  

- **섹션 11. 데이터 동기화를 위한 Apache Kafka의 활용 ①**  
  [섹션 소개]()  
  [Apache Kafka 개요]()  
  [Apache Kafka 설치]()  
  [Apache Kafka 사용 - Producer/Consumer]()  
  [Apache Kafka 사용 - Kafka Connect]()  
  [Orders Microservice에서 MariaDB 연동]()  
  [Kafka Connect 설치 ①]()  
  [Kafka Connect 설치 ②]()  
  [Kafka Source Connect 사용]()  
  [Kafka Sink Connect 사용]()  

- **섹션 12. 데이터 동기화를 위한 Apache Kafka의 활용 ②**  
  [Orders Microservice와 Catalogs Microservice에 Kafka Topic의 적용]()  
  [Catalogs Microservice 수정]()  
  [Orders Microservice 수정]()  
  [Kafka를 활용한 데이터 동기화 테스트 ①]()  
  [Multi Orders Microservice 사용에 대한 데이터 동기화 문제]()  
  [Kafka Connect를 활용한 단일 데이터베이스를 사용]()  
  [Orders Microservice 수정 - MariaDB]() 
  [Orders Microservice 수정 - Orders Kafka Topic]()  
  [Orders Microservice 수정 - Order Kafka Producer]()  
  [Kafka를 활용한 데이터 동기화 테스트 ②]()  

- **섹션 13. 장애 처리와 Microservice 분산 추적**  
  [섹션 소개]()  
  [CircuitBreaker와 Resilience4J의 사용]()  
  [Users Microservice에 CircuitBreaker 적용]()  
  [분산 추적의 개요 Zipkin 서버 설치]()  
  [Spring Cloud Sleuth + Zipkin을 이용한 Microservice의 분산 추적 ①]()  
  [Spring Cloud Sleuth + Zipkin을 이용한 Microservice의 분산 추적 ②]()  

- **섹션 14. Microservice 모니터링**  
  [섹션 소개]()  
  [Micrometer 개요]()  
  [Micrometer 구현]()  
  [Prometheus와 Grafana 개요]()  
  [Prometheus와 Grafana 설치]()  
  [Prometheus와 Grafana의 연동과 Dashboard 구성]()  

- **섹션 15. 애플리케이션 배포를 위한 컨테이너 가상화**  
  [섹션 소개]()  
  [컨테이너 가상화]()  
  [Docker 컨테이너]()  
  [컨테이너 생성과 실행]()  
  [Docker 이미지 생성과 Public registry에 Push]()  

- **섹션 16. 애플리케이션 배포 - Docker Container**  
  [섹션 소개]()  
  [애플리케이션 배포 구성]()  
  [RabbitMQ]()  
  [Configuration Service]()  
  [Discovery Service]()  
  [Apigateway Service]()  
  [MariaDB]()  
  [Kafka]()  
  [Zipkin]()  
  [Monitoring]()  
  [Deployed Services]()  
  [User Microservice]()  
  [Order Microservice]()  
  [Catalog Microservice]()  
  [Test]()  
  [Multi Profiles]()  
  [강의를 마치며]()  

- **섹션 17. Appendix: Microservice Architecture 패턴**  
  [Event Sourcing + CQRS + Saga Pattern]()  
　  
　  

[link_study]:https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EC%84%9C%EB%B9%84%EC%8A%A4/dashboard
