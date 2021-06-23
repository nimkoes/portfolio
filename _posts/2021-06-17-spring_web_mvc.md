---
layout: page
title:  "Spring Web MVC (not boot) _ 작성중"
subtitle: "Spring Web MVC 정리"
date:   2021-06-17 01:21:17 +0530
categories: ["summary"]
author: "nimkoes"
---
  
　  
## **개요**  

　  
정리는 inflearn 사이트에 백기선님이 만든 '스프링 웹 MVC' 를 보면서 하지만, 강의 내용을 그대로 정리하는 짓은 하지 않는다.  
전체적인 흐름을 참고하지만 필요에 따라 토픽을 나누거나 합쳤으며, 되도록 눈으로 보기만 해도 이해할 수 있을 정도로 정리하는 것을 목표로 한다.  
　  
작성중인 모든 내용에 대해 마음에 들때까지 반복해서 읽고 수정하기 때문에 지금 보고있는 내용이 언제라도 바뀔 수 있다.  
　  
<sub>처음엔 github 에 post 로 작성 했지만, 내용이 길어지면서 자꾸 오류가 발생하여 부득이 tistory 에 정리하게 되었다.</sub>
　  
　  
　  
## **목차**

---

#### 1. Spring MVC 동작 원리  
  - [1.1 MVC 와 Legacy Servlet Application][link_spring_web_mvc_001]  
  - [1.2 Spring IoC Container 연동][link_spring_web_mvc_002]  
  - 1.3 Spring MVC 연동  
  - 1.4 DispatcherServlet  
  - 1.5 Spring MVC 구성 요소  
  - 1.6 Spring MVC 동작 원리 마무리  
　  
  
#### 2. Spring MVC 설정  
  - 2.1 Spring MVC Bean 설정  
  - 2.2 EnableWebMvc Annotation  
  - 2.3 Spring Boot 의 Spring MVC 설정  
  - 2.4 Spring Boot JSP  
  - 2.5 war 파일 배포하기  
  - 2.6 WebMvcConfigurer Formatter  
  - 2.7 도메인 클래스 컨버터  
  - 2.8 핸들러 인터셉터  
  - 2.9 리소스 핸들러  
  - 2.10 HTTP 메시지 컨버터 (JSON, XML)  
  - 2.11 Spring MVC 설정 마무리  
　  
  
#### 3. Spring MVC 활용  
  - 3.1 Spring MVC 활용 개요  
  - 3.2 요청 매핑하기 : HTTP Method  
  - 3.3 요청 매핑하기 : URI 패턴  
  - 3.4 요청 매핑하기 : 미디어 타입  
  - 3.5 요청 매핑하기 : 헤더와 매개변수  
  - 3.6 요청 매핑하기 : HEAD 와 OPTIONS  
  - 3.7 요청 매핑하기 : 커스텀 annotation  
  - 3.8 요청 매핑하기 : 연습 문제  
  - 3.9 핸들러 메소드 : 아규먼트와 리턴 타입  
  - 3.10 핸들러 메소드 : URI 패턴  
  - 3.11 핸들러 메소드 : 요청 매개변수 (단순타입)  
  - 3.12 핸들러 메소드 : 폼 서브밋  
  - 3.13 핸들러 메소드 : ModelAttribute annotation  
  - 3.14 핸들러 메소드 : Validated annotation  
  - 3.15 햄들러 메소드 : 폼 서브밋 에러 처리  
  - 3.16 핸들러 메소드 : SessionAttributes annotation  
  - 3.17 핸들러 메소드 : 멀티 폼 서브밋  
  - 3.18 핸들러 메소드 : SessionAttribute annotation  
  - 3.19 핸들러 메소드 : RedirectAttribute  
  - 3.20 핸들러 메소드 : Flash Attribute  
  - 3.21 핸들러 메소드 : MultipartFile  
  - 3.22 핸들러 메소드 : ResponseEntity  
  - 3.23 핸들러 메소드 : RequestBody annotation & HttpEntity  
  - 3.24 핸들러 메소드 : ResponseBody annotation & ResponseEntity  
  - 3.25 핸들러 메소드 : 정리 및 과제  
  - 3.26 모델 ModelAttribute annotation  
  - 3.27 예외 처리 핸들러 ExceptionHandler annotation  
  - 3.28 전역 컨트롤러 ControllerAdvice annotation  
  - 3.29 Spring Web MVC 마무리  
　  
  
  

[link_spring_web_mvc_001]:https://xxxelppa.tistory.com/321
[link_spring_web_mvc_002]:https://xxxelppa.tistory.com/322
