---
layout: page
title:  "Java Sandbox"
subtitle: "with nimkoes"
date:   2021-11-02 01:21:17 +0530
categories: ["study"]
author: "nimkoes"
---

　  
　  

### ***Java Sandbox***

---

　  

#### **Auto Boxing 성능 테스트 <sub>[section_001](https://github.com/nimkoes/java-snippet/blob/master/src/me/nimkoes/section_001/Main.java){:target="_blank"}</sub>**
 - 되도록 박싱된 기본 타입보다 기본타입을 사용  
 - 의도하지 않은 auto boxing 사용되지 않도록 주의  
　  

#### **Stream Collectors 실습 <sub>[section_002](https://github.com/nimkoes/java-snippet/blob/master/src/me/nimkoes/section_002/StreamCollectors.java){:target="_blank"}</sub>**
　  

#### **Builder Pattern 구현 실습 <sub>[section_003](https://github.com/nimkoes/java-snippet/blob/master/src/me/nimkoes/section_003/BuilderPattern.java){:target="_blank"}</sub>**
 - lombok 라이브러리를 사용하는게 편함  
　  

#### **if, if else, switch 속도 비교 테스트 <sub>[section_004](https://github.com/nimkoes/java-snippet/blob/master/src/me/nimkoes/section_004/Main.java){:target="_blank"}</sub>**
 - 분기하는 경우를 10가지로 가정하고, enum 으로 정의  
 - 조건이 참이 되는 경우를 랜덤하게 생성 하도록 구현  
 - 바이트코드까지 열어보진 않았으나 if 가 성능이 제일 떨어지고, if else 와 switch 는 근소한 차이로 switch 가 느림  
　  

#### **불필요한 객체 생성 속도 비교 테스트 (정규표현식) <sub>[section_005](https://github.com/nimkoes/java-snippet/blob/master/src/me/nimkoes/section_005/Main.java){:target="_blank"}</sub>**
 - 불필요한 객체를 생성하지 않았을 경우 테스트 상황 기준으로 평균 10배 정도 성능 차이 발생  
　  

#### **System.out.println vs. logback <sub>[section_006](https://github.com/nimkoes/java-snippet/blob/master/src/me/nimkoes/section_006/Main.java){:target="_blank"}</sub>**
 - 동일한 내용을 출력 한다고 가정하고 실습  
 - 대략 최소 2배 ~ 최대 10배 까지 시간 차이 발생　  




　  
　  
　  

### ***Java Paragraph***

---

　  

#### **정적 팩토리 메소드 <sub>(static factory method)</sub>**
유연한 만큼 잘 알고 사용해야 한다.  
사용하게 된다면 네이밍 컨벤션을 꼭 지킬 것.  
 - from, of, valueOf, instance 또는 getInstance, create 또는 newInstance, getType, newType, type  

　  

#### **점층적 생성자 패턴 <sub>(telescoping constructor pattern)</sub>**
되도록 this() 메소드를 학습하기 위한 패턴으로 생각하자.  
default constructor 로 객체를 생성한 다음 setter 로 값을 설정할 수 있지만, 이 역시 멤버 필드가 많아지면 안티 패턴이다.  
setter 로 객체를 온전히 생성하기 전까지 일관성<sub>(consistency)</sub>이 무너진 상태이다.  
규모와 상황에 따라 판단해야 하지만 멤버 필드가 충분히 많고, 일관성<sub>(consistency)</sub>을 유지 해야 한다면 빌더 패턴<sub>(builder pattern)</sub>을 적용하자.  
lombok 라이브러리를 사용하면 `@Builder` 한 줄로 어렵지 않게 문제를 해결할 수 있다.  

　  
　  
