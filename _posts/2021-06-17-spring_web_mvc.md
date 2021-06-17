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
전체적인 흐름과 토픽을 사용하지만, 내가 이해한 방식으로 '이렇게까지 해야하나' 싶게 정리 할 계획이다.  
여러 편으로 나누지 않고 이 한 포스트에 모든 내용을 담을 계획이다.  
  
　  
　  

## **목차**  

---

#### **스프링 MVC 동작 원리**

   - 스프링 MVC 소개
   - 서블릿 소개
   - 서블릿 애플리케이션 개발
   - 서블릿 리스너와 필터
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
　  
---
　  
　  
　  

### **스프링 MVC 소개 & 서블릿 소개**  

---

용어의 정의를 확실히 하는게 이해하는데 조금이라도 도움이 된다.  
MVC 는 Model, View, Controller 이 세가지를 줄여 표현한 약어 이다.  
검색을 하다보면 MVC 와 함께 '패턴' 이라는 말이 자주 등장 한다.  
　  
패턴이라는 것에 대해 쉽게 설명하면, 예로부터 전해 내려오는 가장 이상적인 모양새 라고 할 수 있을것 같다.  
패턴에 대해 찾아보면 GoF 라는 것도 볼 수 있는데, GoF 는 Gang of Four 의 줄임 말로 Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides 네 분을 뜻한다.  
GoF 와 패턴이 무슨 상관이냐 할 수 있겠지만, 앞서 얘기한 가장 이상적인 모양새에 대한 표준을 정리하신 분들이다.  
　  
다시 본론으로 돌아와서 웹 애플리케이션을 개발할 때 보통 MVC 패턴을 사용하는데, 이 패턴은 MVC1 과 MVC2 로 나뉜다.  
우선 MVC1 패턴에 대해 알아보기 전에 JSP 에 대해 간단하게 정리해보자.  
MVC1 패턴을 사용했을 당시 JSP 라는 기술을 사용해서 웹 애플리케이션 개발을 많이 사용 했다.  
JSP 는 Java Server Page 를 줄인 말로 Java 언어로 작성한 Server 에서 동작하는 Page 라는 의미를 담고 있다.  
최근 JSP 를 JSP 답게 사용하는 경우가 많지 않기 때문에 누군가에게는 그저 html 태그로 작성한 view 를 위한 파일의 확장자 정도로 기억될 것 같다.  
　  
Java Server Page 라는 의미인 만큼 JSP 는 Client 가 아닌 Server 에서 동작 한다.  
믿지 못할것 같아서 아주 오래된 방식의 웹 애플리케이션을 하나 만들어 봤다.  
　  
![001_001](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/study/spring_web/001_001.PNG?raw=true "001_001")
　  
Dynamic Web Project 를 만드는데, module version 을 2.5로 설정 했다.  
　  
![001_002](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/study/spring_web/001_002.PNG?raw=true "001_002")
　  
프로젝트 디렉토리 구조는 위와 같으며, 다음과 같이 Servlet 을 하나 만들고, html 코드를 브라우저에 출력할 수 있도록 했다.  
　  
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
화면이 복잡해지고, 외부 리소스를 사용하는 웹 애플리케이션을 만들어야 한다고 상상만 해보자.  
이런 미친짓을 하지 않기 위해 JSP 기술을 사용할 수 있다.  
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
　  
그리고 GET 요청을 처리하도록 만든 MyServlet.java 코드를 다음과 같이 수정해 요청이 들어왔을 때 jsp 파일을 출력할 수 있도록 했다.  
　  
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
　  
workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\work\Catalina\localhost\OldStyleDynamicWebApplication\org\apache\jsp\view
　  
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

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

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
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
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
　  
얘기가 많이 새어나갔지만 전통적인 방식의 JSP 기술을 사용한 웹 애플리케이션 개발은 위와 같은 흐름으로 만들었다.  
그리고 MVC1 패턴은, 결국 java 코드로 변환 되는, jsp 파일을 사용해서 DB 접속도 하고, 브라우저에 보여주는 화면도 만드는 일을 했다.  
　  
화면을 그리고 데이터 처리까지 모두 다 하는 만능 jsp 파일을 만들면 유지보수 하기가 매우 어려워진다.  
정말 관리를 잘 한 jsp 코드라면 또 모르겠지만, 일반적인 경우 화면을 그리는 도중 비즈니스 로직을 수행 해도 기술적으로 문제가 없기 때문에  
눈으로 먹는 스파게티를 만들어내기 아주 좋은 환경에 놓이게 된다.  
　  
그래서 선배 개발자들은 하나의 파일을 역할을 구분하여 관리하는게 너무 힘들기 때문에, 논리적인 아닌 물리적으로 나눠 주셨다.  
역할에 따라 물리적으로 구분한 패턴이 MVC2 패턴이다.  

　  
　  
　  
  
  
