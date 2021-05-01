---
layout: page
title:  "Programmers Algorithm Problem"
subtitle: "my solution"
date:   2021-04-30 01:21:17 +0530
categories: ["algorithm"]
---



  
## 프로그래머스 문제 풀이 코드
---
**블로그에 풀이를 게시한 문제는 링크로 연결되어 있습니다.**  
  
- **레벨 단위**로 패키지 생성
- 이 프로젝트 내 클래스 이름은 **언더스코어 '_' 로 시작**하는 것으로 통일
- 대부분의 **설명은 코드 내 주석**으로 작성 했으며, **필요에 따라** 일부 별도의 설명을 추가
- **클래스명은 구글 번역기 사용**<sub>너무 이상한 이름은 확인해서 고칠 예정</sub>
  
  
  
- [**주석 이외의 추가 설명은 블로그**][link_tistory]에 정리
- '**문제이름**'을 클릭하면 블로그 게시물로 이동
- '**클래스이름**'을 클릭하면 깃헙 저장소로 이동
- test.{FQCN} 위치에 '**입출력 예**' 에 해당하는 테스트 코드 작성


### 라이브러리
---
  - org.junit.jupiter:junit-jupiter:5.7.1
  - org.assertj:assertj-core:3.19.0
  - org.projectlombok:lombok:1.18.16
  
### 라이브러리 추가하는 방법<sub>intelliJ 기준</sub>
---  
![intellij_add_library_001](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/algorithm/intellij_add_library_001.png?raw=true "intellij_add_library_001"){: width="320px"}  
  - File > Project Structure 클릭  
![intellij_add_library_002](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/algorithm/intellij_add_library_002.png?raw=true "intellij_add_library_002"){: width="410px"}
  - Libraries 메뉴에서 '+' 버튼 클릭하여 나오는 드롭다운 메뉴의 From Maven 클릭    
![intellij_add_library_003](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/algorithm/intellij_add_library_003.png?raw=true "intellij_add_library_003"){: width="570px"}
  - 위에 명시한 버전을 포함한 라이브러리 정보 넣고 Download to 에 원하는 위치 설정하고 OK 버튼 클릭
  
  
  
### lombok 라이브러리 다운로드 이후 적용이 되지 않을 때 설정 방법
---
![intellij_lombok_setting_001](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/algorithm/intellij_lombok_setting_001.png?raw=true "intellij_lombok_setting_001"){: width="320px"}  
  - File > Settings 클릭  
![intellij_lombok_setting_002](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/algorithm/intellij_lombok_setting_002.png?raw=true "intellij_lombok_setting_002"){: width="710px"}  
  - Plugins 메뉴에서 lombok 을 검색해서 플러그인 설치  
![intellij_lombok_setting_003](https://github.com/nimkoes/nimkoes.github.io/blob/master/assets/img/milestone/algorithm/intellij_lombok_setting_003.png?raw=true "intellij_lombok_setting_003"){: width="710px"}  
  - annotation processor 검색한 다음 오른쪽의 Enable annotation processing 체크박스 활성화 되도록 체크  
  
  
  
### level 1
---
  
- 001 : [**크레인 인형뽑기 게임**<sub>2019 카카오 개발자 겨울 인턴십</sub>][link_level_1_001]
- 002 : [**완주하지 못한 선수**<sub>해시</sub>][link_level_1_002]
- 003 : [**신규 아이디 추천**<sub>2021 KAKAO BLIND RECRUITMENT</sub>][link_level_1_003]
- 004 : [**모의고사**<sub>완전탐색</sub>][link_level_1_004]
- 005 : [**체육복**<sub>탐욕법(Greedy)</sub>][link_level_1_005]
- 006 : [**K번째수**<sub>정렬</sub>][link_level_1_006]
- 007 : [**2016년**<sub>연습문제</sub>][link_level_1_007]
- 008 : [**가운데 글자 가져오기**<sub>연습문제</sub>][link_level_1_008]
- 009 : [**같은 숫자는 싫어**<sub>연습문제</sub>][link_level_1_009]
- 010 : [**3진법 뒤집기**<sub>월간 코드 챌린지 시즌1</sub>][link_level_1_010]
- 011 : [**로또의 최고 순위와 최저 순위**<sub>2021 Dev-Matching: 웹 백엔드 개발자(상반기)</sub>][link_level_1_011]
- 012 : [**내적**<sub>월간 코드 챌린지 시즌1</sub>][link_level_1_012]
- 013 : [**소수 만들기**<sub>Summer/Winter Coding(~2018)</sub>][link_level_1_013]
- 014 : [**두 개 뽑아서 더하기**<sub>월간 코드 챌린지 시즌1</sub>][link_level_1_014]
- 015 : [**예산**<sub>Summer/Winter Coding(~2018)</sub>][link_level_1_015]
- 016 : [**음양 더하기**<sub>월간 코드 챌린지 시즌2</sub>][link_level_1_016]
- 017 : [**나누어 떨어지는 숫자 배열**<sub>연습문제</sub>][link_level_1_017]
- 018 : [**폰켓몬**<sub>찾아라 프로그래밍 마에스터</sub>][link_level_1_018]
- 019 : [**두 정수 사이의 합**<sub>연습문제</sub>][link_level_1_019]
- 020 : [**문자열 내 마음대로 정렬하기**<sub>연습문제</sub>][link_level_1_020]
- 021 : [**문자열 내 p와 y의 개수**<sub>연습문제</sub>][link_level_1_021]
- 022 : [**문자열 내림차순으로 배치하기**<sub>연습문제</sub>][link_level_1_022]
- 023 : [**문자열 다루기 기본**<sub>연습문제</sub>][link_level_1_023]
- 024 : [**서울에서 김서방 찾기**<sub>연습문제</sub>][link_level_1_024]
- 025 : [**소수 찾기**<sub>연습문제</sub>][link_level_1_025]
- 026 : [**수박수박수박수박수박수?**<sub>연습문제</sub>][link_level_1_026]
- 027 : [**문자열을 정수로 바꾸기**<sub>연습문제</sub>][link_level_1_027]
- 028 : [**시저 암호**<sub>연습문제</sub>][link_level_1_028]
- 029 : [**약수의 합**<sub>연습문제</sub>][link_level_1_029]
- 030 : [**이상한 문자 만들기**<sub>연습문제</sub>][link_level_1_030]
- 031 : [**자릿수 더하기**<sub>연습문제</sub>][link_level_1_031]
- 032 : [**자연수 뒤집어 배열로 만들기**<sub>연습문제</sub>][link_level_1_032]
- 033 : [**정수 내림차순으로 배치하기**<sub>연습문제</sub>][link_level_1_033]
- 034 : [**정수 제곱근 판별**<sub>연습문제</sub>][link_level_1_034]
- 035 : [**제일 작은 수 제거하기**<sub>연습문제</sub>][link_level_1_035]
- 036 : [**짝수와 홀수**<sub>연습문제</sub>][link_level_1_036]
- 037 : [**키패드 누르기**<sub>2020 카카오 인턴십</sub>][link_level_1_037]
- 038 : [**최대공약수와 최소공배수**<sub>연습문제</sub>][link_level_1_038]
- 039 : [**콜라츠 추측**<sub>연습문제</sub>][link_level_1_039]
- 040 : [**평균 구하기**<sub>연습문제</sub>][link_level_1_040]
- 041 : [**하샤드 수**<sub>연습문제</sub>][link_level_1_041]
- 042 : [**핸드폰 번호 가리기**<sub>연습문제</sub>][link_level_1_042]
- 043 : [**행렬의 덧셈**<sub>연습문제</sub>][link_level_1_043]
- 044 : [**x만큼 간격이 있는 n개의 숫자**<sub>연습문제</sub>][link_level_1_044]
- 045 : [**직사각형 별찍기**<sub>연습문제</sub>][link_level_1_045]
- 046 : [**(1차) 비밀지도**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_1_046]
- 047 : [**실패율**<sub>2019 KAKAO BLIND RECRUITMENT</sub>][link_level_1_047]
- 048 : [**(1차) 다트 게임**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_1_048]


### level 2
---
  
### level 3
---



[link_tistory]:http://xxxelppa.tistory.com

[link_level_1_001]:https://xxxelppa.tistory.com/137
[link_level_1_002]:https://xxxelppa.tistory.com/139
[link_level_1_003]:https://xxxelppa.tistory.com/138
[link_level_1_004]:https://xxxelppa.tistory.com/140
[link_level_1_005]:https://xxxelppa.tistory.com/141
[link_level_1_006]:https://xxxelppa.tistory.com/142
[link_level_1_007]:#
[link_level_1_008]:#
[link_level_1_009]:#
[link_level_1_010]:#
[link_level_1_011]:https://xxxelppa.tistory.com/149
[link_level_1_012]:#
[link_level_1_013]:#
[link_level_1_014]:#
[link_level_1_015]:#
[link_level_1_016]:#
[link_level_1_017]:#
[link_level_1_018]:#
[link_level_1_019]:#
[link_level_1_020]:#
[link_level_1_021]:#
[link_level_1_022]:#
[link_level_1_023]:#
[link_level_1_024]:#
[link_level_1_025]:#
[link_level_1_026]:#
[link_level_1_027]:#
[link_level_1_028]:#
[link_level_1_029]:#
[link_level_1_030]:#
[link_level_1_031]:#
[link_level_1_032]:#
[link_level_1_033]:#
[link_level_1_034]:#
[link_level_1_035]:#
[link_level_1_036]:#
[link_level_1_037]:#
[link_level_1_038]:#
[link_level_1_039]:#
[link_level_1_040]:#
[link_level_1_041]:#
[link_level_1_042]:#
[link_level_1_043]:#
[link_level_1_044]:#
[link_level_1_045]:#
[link_level_1_046]:#
[link_level_1_047]:#
[link_level_1_048]:#
  