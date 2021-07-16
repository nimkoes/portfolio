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
  - [1.3 Spring MVC 연동][link_spring_web_mvc_003]  
  - [1.4 DispatcherServlet 기본 동작 원리][link_spring_web_mvc_004]  
  - [1.5 Spring MVC 동작 원리 마무리][link_spring_web_mvc_005]  
　  
  
#### 2. Spring MVC 설정  
  - [2.1 Spring Web MVC 설정 @EnableWebMvc, WebMvcConfigurer][link_spring_web_mvc_006]  
  - [2.2 Spring Boot 의 Spring MVC 설정 (war 배포)][link_spring_web_mvc_007]  
  - [2.3 Spring Web MVC 의 Formatter (Spring Boot 자동 설정)][link_spring_web_mvc_008]  
  - [2.4 핸들러 인터셉터 (HandlerInterceptor interface)][link_spring_web_mvc_009]  
  - [2.5 리소스 핸들러 (default Servlet)][link_spring_web_mvc_010]  
  - [2.6 HTTP 메시지 컨버터 (JSON, XML)][link_spring_web_mvc_011]  
　  
  
#### 3. Spring MVC 활용  
  - [3.1 요청 매핑하기 (mapping handler method)][link_spring_web_mvc_012]  
  - [3.2 핸들러 메소드 : 아규먼트와 리턴 타입 (개요)][link_spring_web_mvc_013]  
  - [3.3 핸들러 메소드 : URI 패턴][link_spring_web_mvc_014]  
  - 3.3 핸들러 메소드 (execute & using handler method)
  - 3.4 모델 ModelAttribute annotation  
  - 3.5 예외 처리 핸들러 ExceptionHandler annotation  
  - 3.6 전역 컨트롤러 ControllerAdvice annotation  
  - 3.7 Spring Web MVC 마무리  
　  
  

[link_spring_web_mvc_001]:https://xxxelppa.tistory.com/321
[link_spring_web_mvc_002]:https://xxxelppa.tistory.com/322
[link_spring_web_mvc_003]:https://xxxelppa.tistory.com/323
[link_spring_web_mvc_004]:https://xxxelppa.tistory.com/324
[link_spring_web_mvc_005]:https://xxxelppa.tistory.com/325

[link_spring_web_mvc_006]:https://xxxelppa.tistory.com/326
[link_spring_web_mvc_007]:https://xxxelppa.tistory.com/327
[link_spring_web_mvc_008]:https://xxxelppa.tistory.com/328
[link_spring_web_mvc_009]:https://xxxelppa.tistory.com/329
[link_spring_web_mvc_010]:https://xxxelppa.tistory.com/330
[link_spring_web_mvc_011]:https://xxxelppa.tistory.com/331

[link_spring_web_mvc_012]:https://xxxelppa.tistory.com/332
[link_spring_web_mvc_013]:https://xxxelppa.tistory.com/333
[link_spring_web_mvc_014]:https://xxxelppa.tistory.com/334
