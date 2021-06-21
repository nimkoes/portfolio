---
layout: page
title:  "Spring Web MVC (not boot) _ 작성중"
subtitle: "Spring Web MVC 정리"
date:   2021-06-17 01:21:17 +0530
categories: ["summary"]
author: "nimkoes"
---
  
　  
　  
## **개요**  

---

정리는 inflearn 사이트에 백기선님이 만든 '스프링 웹 MVC' 를 보면서 하지만, 강의를 그대로 옮겨오지 않았다.  
전체적인 흐름과 토픽은 사용하지만 필요에 따라 토픽을 나누거나 합치고 내가 알고있는 것들을 정리 할 계획이다.  
길어지더라도 여러 편으로 나누지 않고 이 한 포스트에 모든 내용을 담을 계획이다.  
  
　  
　  

## **목차**  

---

#### **스프링 MVC 동작 원리**

  - MVC 와 레거시 서블릿 애플리케이션
  - 스프링 IoC 컨테이너 연동
  - 스프링 MVC 연동
  - DispatcherServlet 1부
  - DispatcherServlet 2부
  - DispatcherServlet 3부
  - 스프링 MVC 구성 요소
  - 스프링 MVC 동작 원리 마무리
　  

#### **스프링 MVC 동작 원리**

  - 스프링 MVC 빈 설정
  - @EnableWebMvc
  - WebMvcConfigurer
  - 스프링 부트의 스프링 MVC 설정
  - 스프링 부트 JSP
  - WAR 파일 배포하기
  - WebMvcConfigurer 1부 Formatter
  - 도메인 클래스 컨버터
  - 핸들러 인터셉터
  - 핸들러 인터셉터 구현
  - 리소스 핸들러
  - HTTP 메시지 컨버터
  - HTTP 메시지 컨버터 2부 JSON
  - HTTP 메시지 컨버터 XML
  - 기타 WebMvcConfigurer 설정
  - 스프링 MVC 설정 마무리
　  

#### **스프링 MVC 활용**

  - 스프링 MVC 활용 소개
  - 요청 맵핑하기 1부 HTTP Method
  - 요청 맵핑하기 2부 URI 패턴
  - 요청 맵핑하기 3부 미디어 타입
  - 요청 맵핑하기 4부 헤더와 매개변수
  - 요청 맵핑하기 5부 HEAD와 OPTIONS
  - 요청 맵핑하기 6부 커스텀 애노테이션
  - 요청 맵핑하기 7부 연습 문제
  - 핸들러 메소드 1부 아규먼트와 리턴 타입
  - 핸들러 메소드 2부 URI 패턴
  - 핸들러 메소드 3부 요청 매개변수 (단순 타입)
  - 핸들러 메소드 4부 폼 서브밋
  - 핸들러 메소드 5부 @ModelAttribute
  - 핸들러 메소드 6부 @Validated
  - 핸들러 메소드 7부 폼 서브밋 에러 처리
  - 핸들러 메소드 8부 @SessionAttribute
  - 핸들러 메소드 9부 멀티 폼 서브밋
  - 핸들러 메소드 10부 @SessionAttribute
  - 핸들러 메소드 11부 RedirectAttributes
  - 핸들러 메소드 12부 Flash Attributes
  - 핸들러 메소드 13부 MultipartFile
  - 핸들러 메소드 14부 ResponseEntity
  - 핸들러 메소드 15부 @RequestBody & HttpEntity
  - 핸들러 메소드 16부 @ResponseBody & ResponseEntity
  - 핸들러 메소드 17부 정리 및 과제
  - 모델 @ModelAttribute
  - 데이터 바인더 @InitBinder
  - 예외 처리 핸들러 @ExceptionHandler
  - 전역 컨트롤러 @ControllerAdvice
  - 스프링 MVC 강좌 마무리
　  
　  
　  
　  

### **MVC 와 레거시 서블릿 애플리케이션**  

---

MVC 는 Model, View, Controller 이 세가지를 줄여 표현한 약어 이다.  
MVC 에 대해 검색을 해보면 '패턴' 이라는 말을 같이 볼 수 있다.  
　  
패턴이라는 것에 대해 쉽게 설명하면, 예로부터 전해 내려오는 가장 이상적인 방법 이라고 할 수 있다.  
패턴에 대해 찾아보면 GoF 라는 것도 볼 수 있는데, GoF 는 Gang of Four 의 줄임 말로 Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides 네 사람을 뜻한다.  
GoF 와 패턴이 무슨 상관이냐 할 수 있겠지만, 앞서 얘기한 가장 이상적인 방법에 대한 표준을 정리하신 분들이다.  
　  
다시 MVC 에 대해 얘기하면, 보통 MVC 를 MVC1 과 MVC2 로 구분해서 얘기 한다.  
하지만 사실 model1 과 model2 가 있으며 model2 를 MVC2 라고 부를 뿐이고 MVC1 이라는 것은 존재하지 않는다.  
model1 방식과 MVC2 라고도 하는 model2 의 차이점은 Controller 역할을 하는 Servlet 클래스의 존재 여부이다.  
model1 방식은 사용자의 요청에 대해 모든것을 처리하는 킹왕짱울트라캡숑만능 JSP 를 사용한다.  
　  
![001_007](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/study/spring_web/001_007.PNG?raw=true "001_007")
　  
model2 방식은 사용자의 요청을 받는 Controller 역할을 할 Servlet 이 있고, 필요에 따라 JSP 를 View 의 용도로 사용한다.  
　  
![001_008](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/study/spring_web/001_008.PNG?raw=true "001_008")
　  
본격적으로 MVC 에 대해 알아보기 전에 JSP 에 대해 간단하게 알아보자.  
아주 오래전에는 웹 애플리케이션을 개발할 때 JSP 기술을 많이 사용 했다.  
JSP 는 Java Server Page 를 줄인 말로 Java 언어로 작성한 Server 에서 동작하는 Page 라는 의미를 담고 있다.  
최근 JSP 는 JSP 가 제공하는 다양한 기능을 사용하는 대신 View 의 용도로만 사용하려 노력하기 때문에, 그저 html 태그로 작성한 View 를 위한 파일 정도로 인식할 수 있다.  
　  
Java Server Page 라는 의미인 만큼 JSP 는 Client 가 아닌 Server 에서 동작 하며 결국 java 코드로 변환되어 사용 된다.  
믿지 못할것 같아서 아주 오래된 방식의 웹 애플리케이션을 하나 만들어 봤다.  
(model1 방식에 대한 예제는 만들지 않았다.)  
　  
![001_001](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/study/spring_web/001_001.PNG?raw=true "001_001")
　  
Dynamic Web Project 를 만드는데, module version 을 2.5로 설정 했다.  
　  
![001_002](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/study/spring_web/001_002.PNG?raw=true "001_002")
　  
프로젝트 디렉토리 구조는 위와 같으며, 다음과 같이 Servlet 을 하나 만들고, html 코드를 브라우저에 출력할 수 있도록 했다.  
Controller 역할을 할 Servlet 을 만들었기 때문에 MVC2 구조를 가지는 웹 애플리케이션이라고 할 수 있다.  
　  
```java
package me.nimkoes.sample;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyServlet extends HttpServlet {

    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doGet(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
     */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().print("<html>");
        resp.getWriter().print("    <head>");
        resp.getWriter().print("        <title>My Old App</title>");
        resp.getWriter().print("    </head>");
        resp.getWriter().print("    <body>");
        resp.getWriter().print("        <h1>Hello !</h1>");
        resp.getWriter().print("    </body>");
        resp.getWriter().print("</html>");
    }
}
```
　  
이 서블릿을 사용하기 위해 web.xml 을 다음과 같이 작성 했다.  
　  
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://java.sun.com/xml/ns/javaee"
    xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
    id="WebApp_ID" version="2.5">
    <display-name>OldStyleDynamicWebApplication</display-name>
    
    <servlet>
        <servlet-name>MySample</servlet-name>
        <servlet-class>me.nimkoes.sample.MyServlet</servlet-class>
    </servlet>
    
    <servlet-mapping>
        <servlet-name>MySample</servlet-name>
        <url-pattern>/Hello</url-pattern>
    </servlet-mapping>
    
    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.htm</welcome-file>
        <welcome-file>index.jsp</welcome-file>
        <welcome-file>default.html</welcome-file>
        <welcome-file>default.htm</welcome-file>
        <welcome-file>default.jsp</welcome-file>
    </welcome-file-list>
</web-app>
```
　  
그리고 WAS (Web Application Server) 역할로 Tomcat 서버를 사용해서 프로젝트를 구동하면 다음과 같은 결과를 볼 수 있다.  
　  
![001_003](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/study/spring_web/001_003.PNG?raw=true "001_003")
　  
단순한 "Hello !" 문자열 하나 브라우저에 출력 하기 위해 수많은 print 메소드를 사용 했다.  
이렇게 Controller 역할을 하는 Servlet 클래스 안에서 View 처리까지 할 수 있겠지만 굳이 만들어보지 말고 상상만 해보자.  
상상만 해도 고통스러운 일을 하지 않기 위해 View 역할을 하는 JSP 를 별도로 만들자.  
보안을 위해 WEB-INF 폴더 아래 다음과 같이 jsp 파일을 하나 추가 했다.  
　  
![001_004](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/study/spring_web/001_004.PNG?raw=true "001_004")
　  
```jsp
<html>
    <head>
        <title>My Another Old App</title>
    </head>
    <body>
        <h1>Another Hello !</h1>
    </body>
</html>
```
　  
GET 요청을 처리하도록 만든 MyServlet.java 코드를 다음과 같이 수정해 요청이 들어왔을 때 jsp 파일을 사용할 수 있도록 했다.  
　  
```java
package me.nimkoes.sample;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyServlet extends HttpServlet {

    /*
     * (non-Javadoc)
     * 
     * @see javax.servlet.http.HttpServlet#doGet(javax.servlet.http.
     * HttpServletRequest, javax.servlet.http.HttpServletResponse)
     */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("/WEB-INF/view/MyHello.jsp").forward(req, resp);
    }

}
```
　  
실행 결과는 다음과 같다.  
　  
![001_005](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/study/spring_web/001_005.PNG?raw=true "001_005")
　  
java 코드에서 print 메소드로 화면을 그렸을 때와 비교해보면 정말 많이 편해졌다.  
그럼 이 jsp 파일은 어떻게 브라우저에 출력 되었을 까.  
jsp 파일은 사실 java 코드로 변환 된다.  
다음은 java 코드로 자동 변환 된 파일을 확인해보자.  
eclipse 사용 기준으로 workspace 로 지정된 폴더에 가면 .metadata 라는 폴더가 있다.  
현재 프로젝트 기준으로 다음 경로를 찾아가보면 java 파일이 된 jsp 파일을 볼 수 있다.  
　  
workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp1/work  
/Catalina/localhost/OldStyleDynamicWebApplication/org/apache/jsp/view
　  
![001_006](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/study/spring_web/001_006.PNG?raw=true "001_006")
　  
파일을 열어보면 처음 자바 코드로 화면을 그리던 것과 비슷한 코드를 볼 수 있다.  
　  
```java
/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.9
 * Generated at: 2021-06-17 15:06:02 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.view;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class MyHello_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory = javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response, null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<html>\r\n");
      out.write("\t<head>\r\n");
      out.write("\t\t<title>My Another Old App</title>\r\n");
      out.write("\t</head>\r\n");
      out.write("\t<body>\r\n");
      out.write("\t\t<h1>Another Hello !</h1>\r\n");
      out.write("\t</body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
```
　  
java 코드로 변환 된 jsp 파일을 해석하기 위해서는 java class 파일을 해석하기 위한 compiler 가 있어야 하고, 이 java 코드를 실행한 결과 html 코드를 브라우저에 전달 한다.  
오래된 웹 애플리케이션은 위와 같은 흐름으로 만들어 졌다.  
MVC2 구조로 만들었다고 하더라도 JSP 가 제공하는 다양한 기능을 활용하면 View 역할 뿐만 아니라 비즈니스 로직까지도 담아낼 수 있다.  
앞서 얘기했지만 각자의 역할을 분명히 하기 위해 갈수록 JSP 를 사용 하더라도 그 안에 View 역할만 하는 html 코드만 작성하려는 편이다.  
　  
html 코드는 정적이다.  
정적이라는 것은 한 번 읽은 자원에 대해 변화가 없다는 것을 뜻한다.  
하지만 현실의 문제는 정적인 자원만으로 해결하기에는 너무 복잡하고 동적이다.  
동적인 처리를 하기 위해 javascript 나 java 와 같은 언어를 사용해야 한다.  
　  
앞서 만든 예제에서 보았듯 JSP 는 결국 java 코드로 변한다.  
JSP 는 Scriptlet 이라는 <% %> 을 사용해서 java 코드를 직접 삽입하는 것도 가능하다.  
그래서 오래된 웹 애플리케이션에서는 View 를 동적으로 구성하기 위해 Scriptlet 을 사용했고, 그 결과 아주 혼란스러운 코드가 만들어 졌다.  
　  
일반적으로 개발자들은 디자인을 전문적으로 배운 디자이너와 비교했을 때 미적인 요소를 떠나 UX 적인 측면을 고려하기보다 기능이 동작하는 것에 초점을 맞춘다.  
개발자가 model1 방식의 JSP 처럼 킹왕짱울트라캡숑 할 수 있었다면 좋았겠지만(?) 현실적으로 불가능 하기 때문에 디자이너와 협업을 한다.  
하지만 디자이너는 Scriptlet 이나 java 코드에 대해 일반적으로 잘 알지 못한다.  
시간이 지나 레거시 View 를 개선해야 한다고 할 때 java 코드가 뒤죽박죽 섞인 JSP 는 개발자도 건드리기 싫은데 디자이너는 그 코드를 보고 어떤 결과가 나오는지 파악하기가 거의 불가능 하다.  
　  
그래서 요즘엔 View 의 영역엔 되도록 html 코드만 남기고, 동적인 처리는 javascript 와 같은 언어를 사용해서 처리하는게 일반적이다.  
　  
　  
정리하면 model1 은 킹왕짱울트라캡숑만능 JSP 를 사용하고, model2 는 Controller 역할을 하는 Servlet 을 분리한 구조이다.  
Spring 의 MVC 는 model2 구조를 사용하며 front controller 패턴을 사용 한다.  
front controller 패턴이라고 하니 그럴싸해 보이지만, 사용자 요청을 처리 할 controller 역할을 하는 DispatcherServlet 이라는 Servlet 을 하나만 등록 해서 사용하는 것을 뜻한다.  
(그렇다고 무조건 하나만 등록 가능한 것은 아니지만 Spring 을 사용 하면서 2개 이상 Servlet 을 등록해서 사용하는것은 학습 목적 제외하고 아직은 본 적이 없다.)
　  
　  
　  
레거시 서블릿 애플리케이션 관련하여 마지막으로 리스너와 필터에 대해 정리한다.  
　  
리스너란 쉽게 설명하면 누가 내 얘기 안하나 귀 쫑긋 하고 듣고 있다가 자기 얘기 할 때 옳다구나 등장해서 무엇인가 처리한다고 생각하면 된다.  
즉, 특정 이벤트가 발생하기를 기다리는 리스너가 그 이벤트가 발생하면 미리 정의한 로직을 수행한다.  
다음은 서블릿에서 제공하는 이벤트 리스너를 정리한 것이다.  

|이벤트 리스너|설명|
|---|---|
|ServletContextListener|웹 애플리케이션의 시작, 종료 이벤트에 대한 리스너|
|ServletContextAttributeListener|ServletContext 에 attribute 를 추가, 수정, 삭제 이벤트에 대한 리스너|
|HttpSessionListener|HTTP session 의 시작, 종료 이벤트에 대한 리스너|
|HttpSessionAttributeListener|HttpSession 에 attribute 를 추가, 수정, 삭제 이벤트에 대한 리스너|
|ServletRequestListener|client 요청에 대해 ServletRequest 생성과 응답 후 ServletRequest 삭제 이벤트에 대한 리스너|
|ServletRequestAttributeListener|ServletRequest 에 attribute 를 추가, 수정, 삭제 이벤트에 대한 리스너|
  
　  
그 외에도 HttpSessionActivationListener, HttpSessionBindingListener, AsyncListener 이벤트 리스너가 존재 한다.  
　  
　  
앞서 만든 레거시 프로젝트에 웹 애플리케이션 시작, 종료 이벤트에 대한 리스너인 ServletContectListener 를 리스너로 등록하고 실행 결과를 보자.  
등록 과정은 ServletContextListener 를 구현한 클래스를 하나 추가하고, web.xml 파일에 이 클래스를 리스너로 추가하면 된다.  

  
　  




