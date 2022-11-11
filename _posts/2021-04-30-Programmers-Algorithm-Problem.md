---
layout: page
title:  "Programmers Algorithm Problem"
subtitle: "my solution"
date:   2021-04-30 01:21:17 +0530
categories: ["algorithm"]
author: "nimkoes"
---



  
## 프로그래머스 문제 풀이 코드
---
**블로그에 풀이를 게시한 문제는 링크로 연결되어 있습니다.**  
**각 문제에 대한 '입출력 예' 에 대한 테스트는 [<u>깃헙 저장소</u>][link_github]에 업로드 되어 있습니다.**  
  
---  
  
- **레벨 단위**로 패키지 생성
- 이 프로젝트 내 클래스 이름은 **언더스코어 '_' 로 시작**하는 것으로 통일
- 대부분의 **설명은 코드 내 주석**으로 작성 했으며, **필요에 따라** 일부 별도의 설명을 추가
- [**<u>주석 이외의 추가 설명은 블로그</u>**][link_tistory]에 정리
- '**문제이름**'을 클릭하면 블로그 게시물로 이동  
  
  
  
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





### level 0
---

- 001 : [**<u>옹알이(1)</u>**][link_level_0_001]
- 002 : [**<u>두 수의 곱</u>**][link_level_0_002]
- 003 : [**<u>두 수의 차</u>**][link_level_0_003]
- 004 : [**<u>몫 구하기</u>**][link_level_0_004]
- 005 : [**<u>두 수의 합</u>**][link_level_0_005]
- 006 : [**<u>나머지 구하기</u>**][link_level_0_006]
- 007 : [**<u>숫자 비교하기</u>**][link_level_0_007]
- 008 : [**<u>나이 출력</u>**][link_level_0_008]
- 009 : [**<u>각도기</u>**][link_level_0_009]
- 010 : [**<u>짝수의 합</u>**][link_level_0_010]
- 011 : [**<u>배열의 평균값</u>**][link_level_0_011]
- 012 : [**<u>양꼬치</u>**][link_level_0_012]
- 013 : [**<u>두 수의 나눗셈</u>**][link_level_0_013]
- 014 : [**<u>머쓱이보다 키 큰 사람</u>**][link_level_0_014]
- 015 : [**<u>짝수 홀수 개수</u>**][link_level_0_015]
- 016 : [**<u>중복된 숫자 개수</u>**][link_level_0_016]
- 017 : [**<u>아이스 아메리카노</u>**][link_level_0_017]
- 018 : [**<u>피자 나눠 먹기 (1)</u>**][link_level_0_018]
- 019 : [**<u>배열 뒤집기</u>**][link_level_0_019]
- 020 : [**<u>문자열 뒤집기</u>**][link_level_0_020]
- 021 : [**<u>피자 나눠 먹기 (3)</u>**][link_level_0_021]
- 022 : [**<u>배열 두배 만들기</u>**][link_level_0_022]
- 023 : [**<u>배열 원소의 길이</u>**][link_level_0_023]
- 024 : [**<u>편지</u>**][link_level_0_024]
- 025 : [**<u>최댓값 만들기 (1)</u>**][link_level_0_025]
- 026 : [**<u>배열 자르기</u>**][link_level_0_026]
- 027 : [**<u>점의 위치 구하기</u>**][link_level_0_027]
- 028 : [**<u>특정 문자 제거하기</u>**][link_level_0_028]
- 029 : [**<u>삼각형의 완성조건 (1)</u>**][link_level_0_029]
- 030 : [**<u>옷가게 할인 받기</u>**][link_level_0_030]
- 031 : [**<u>문자 반복 출력하기</u>**][link_level_0_031]
- 032 : [**<u>문자열안에 문자열</u>**][link_level_0_032]
- 033 : [**<u>배열의 유사도</u>**][link_level_0_033]
- 034 : [**<u>제곱수 판별하기</u>**][link_level_0_034]
- 035 : [**<u>짝수는 싫어요</u>**][link_level_0_035]
- 036 : [**<u>자릿수 더하기</u>**][link_level_0_036]
- 037 : [**<u>순서쌍의 개수</u>**][link_level_0_037]
- 038 : [**<u>세균 증식</u>**][link_level_0_038]
- 039 : [**<u>모음 제거</u>**][link_level_0_039]
- 040 : [**<u>숨어있는 숫자의 덧셈 (1)</u>**][link_level_0_040]
- 041 : [**<u>개미 군단</u>**][link_level_0_041]
- 042 : [**<u>문자열 정렬하기 (1)</u>**][link_level_0_042]
- 043 : [**<u>중앙값 구하기</u>**][link_level_0_043]
- 044 : [**<u>가위 바위 보</u>**][link_level_0_044]
- 045 : [**<u>n의 배수 고르기</u>**][link_level_0_045]
- 046 : [**<u>직각삼각형 출력하기</u>**][link_level_0_046]
- 047 : [**<u>가장 큰 수 찾기</u>**][link_level_0_047]
- 048 : [**<u>대문자와 소문자</u>**][link_level_0_048]
- 049 : [**<u>약수 구하기</u>**][link_level_0_049]
- 050 : [**<u>문자열 정렬하기 (2)</u>**][link_level_0_050]
- 051 : [**<u>주사위의 개수</u>**][link_level_0_051]



### level 1
---
  
- 001 : [**<u>크레인 인형뽑기 게임</u>**<sub>2019 카카오 개발자 겨울 인턴십</sub>][link_level_1_001]
- 002 : [**<u>완주하지 못한 선수</u>**<sub>해시</sub>][link_level_1_002]
- 003 : [**<u>신규 아이디 추천</u>**<sub>2021 KAKAO BLIND RECRUITMENT</sub>][link_level_1_003]
- 004 : [**<u>모의고사</u>**<sub>완전탐색</sub>][link_level_1_004]
- 005 : [**<u>체육복</u>**<sub>탐욕법(Greedy)</sub>][link_level_1_005]
- 006 : [**<u>K번째수</u>**<sub>정렬</sub>][link_level_1_006]
- 007 : [**<u>2016년</u>**<sub>연습문제</sub>][link_level_1_007]
- 008 : [**<u>가운데 글자 가져오기</u>**<sub>연습문제</sub>][link_level_1_008]
- 009 : [**<u>같은 숫자는 싫어</u>**<sub>연습문제</sub>][link_level_1_009]
- 010 : [**<u>3진법 뒤집기</u>**<sub>월간 코드 챌린지 시즌1</sub>][link_level_1_010]
- 011 : [**<u>로또의 최고 순위와 최저 순위</u>**<sub>2021 Dev-Matching: 웹 백엔드 개발자(상반기)</sub>][link_level_1_011]
- 012 : [**<u>내적</u>**<sub>월간 코드 챌린지 시즌1</sub>][link_level_1_012]
- 013 : [**<u>소수 만들기</u>**<sub>Summer/Winter Coding(~2018)</sub>][link_level_1_013]
- 014 : [**<u>두 개 뽑아서 더하기</u>**<sub>월간 코드 챌린지 시즌1</sub>][link_level_1_014]
- 015 : [**<u>예산</u>**<sub>Summer/Winter Coding(~2018)</sub>][link_level_1_015]
- 016 : [**<u>음양 더하기</u>**<sub>월간 코드 챌린지 시즌2</sub>][link_level_1_016]
- 017 : [**<u>나누어 떨어지는 숫자 배열</u>**<sub>연습문제</sub>][link_level_1_017]
- 018 : [**<u>폰켓몬</u>**<sub>찾아라 프로그래밍 마에스터</sub>][link_level_1_018]
- 019 : [**<u>두 정수 사이의 합</u>**<sub>연습문제</sub>][link_level_1_019]
- 020 : [**<u>문자열 내 마음대로 정렬하기</u>**<sub>연습문제</sub>][link_level_1_020]
- 021 : [**<u>문자열 내 p와 y의 개수</u>**<sub>연습문제</sub>][link_level_1_021]
- 022 : [**<u>문자열 내림차순으로 배치하기</u>**<sub>연습문제</sub>][link_level_1_022]
- 023 : [**<u>문자열 다루기 기본</u>**<sub>연습문제</sub>][link_level_1_023]
- 024 : [**<u>서울에서 김서방 찾기</u>**<sub>연습문제</sub>][link_level_1_024]
- 025 : [**<u>소수 찾기</u>**<sub>연습문제</sub>][link_level_1_025]
- 026 : [**<u>수박수박수박수박수박수?</u>**<sub>연습문제</sub>][link_level_1_026]
- 027 : [**<u>문자열을 정수로 바꾸기</u>**<sub>연습문제</sub>][link_level_1_027]
- 028 : [**<u>시저 암호</u>**<sub>연습문제</sub>][link_level_1_028]
- 029 : [**<u>약수의 합</u>**<sub>연습문제</sub>][link_level_1_029]
- 030 : [**<u>이상한 문자 만들기</u>**<sub>연습문제</sub>][link_level_1_030]
- 031 : [**<u>자릿수 더하기</u>**<sub>연습문제</sub>][link_level_1_031]
- 032 : [**<u>자연수 뒤집어 배열로 만들기</u>**<sub>연습문제</sub>][link_level_1_032]
- 033 : [**<u>정수 내림차순으로 배치하기</u>**<sub>연습문제</sub>][link_level_1_033]
- 034 : [**<u>정수 제곱근 판별</u>**<sub>연습문제</sub>][link_level_1_034]
- 035 : [**<u>제일 작은 수 제거하기</u>**<sub>연습문제</sub>][link_level_1_035]
- 036 : [**<u>짝수와 홀수</u>**<sub>연습문제</sub>][link_level_1_036]
- 037 : [**<u>키패드 누르기</u>**<sub>2020 카카오 인턴십</sub>][link_level_1_037]
- 038 : [**<u>최대공약수와 최소공배수</u>**<sub>연습문제</sub>][link_level_1_038]
- 039 : [**<u>콜라츠 추측</u>**<sub>연습문제</sub>][link_level_1_039]
- 040 : [**<u>평균 구하기</u>**<sub>연습문제</sub>][link_level_1_040]
- 041 : [**<u>하샤드 수</u>**<sub>연습문제</sub>][link_level_1_041]
- 042 : [**<u>핸드폰 번호 가리기</u>**<sub>연습문제</sub>][link_level_1_042]
- 043 : [**<u>행렬의 덧셈</u>**<sub>연습문제</sub>][link_level_1_043]
- 044 : [**<u>x만큼 간격이 있는 n개의 숫자</u>**<sub>연습문제</sub>][link_level_1_044]
- 045 : [**<u>직사각형 별찍기</u>**<sub>연습문제</sub>][link_level_1_045]
- 046 : [**<u>(1차) 비밀지도</u>**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_1_046]
- 047 : [**<u>실패율</u>**<sub>2019 KAKAO BLIND RECRUITMENT</sub>][link_level_1_047]
- 048 : [**<u>(1차) 다트 게임</u>**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_1_048]
- 049 : [**<u>숫자 문자열과 영단어</u>**<sub>2021 카카오 채용연계형 인턴십</sub>][link_level_1_049]
- 050 : [**<u>약수의 개수와 덧셈</u>**<sub>월간 코드 챌린지 시즌2</sub>][link_level_1_050]
- 051 : [**<u>없는 숫자 더하기</u>**<sub>월간 코드 챌린지 시즌3</sub>][link_level_1_051]
- 052 : [**<u>나머지가 1이 되는 수 찾기</u>**<sub>월간 코드 챌린지 시즌3</sub>][link_level_1_052]
- 053 : [**<u>최소직사각형</u>**<sub>위클리 챌린지</sub>][link_level_1_053]


### level 2
---

- 001 : [**<u>기능개발</u>**<sub>스택/큐</sub>][link_level_2_001]
- 002 : [**<u>단체사진 찍기</u>**<sub>2017 카카오코드 본선</sub>][link_level_2_002]
- 003 : [**<u>짝지어 제거하기</u>**<sub>2017 팁스타운</sub>][link_level_2_003]
- 004 : [**<u>멀쩡한 사각형</u>**<sub>Summer/Winter Coding(2019)</sub>][link_level_2_004]
- 005 : [**<u>타겟 넘버</u>**<sub>깊이/너비 우선 탐색(DFS/BFS)</sub>][link_level_2_005]
- 006 : [**<u>더 맵게</u>**<sub>힙(Heap)</sub>][link_level_2_006]
- 007 : [**<u>124 나라의 숫자</u>**<sub>연습문제</sub>][link_level_2_007]
- 008 : [**<u>문자열 압축</u>**<sub>2020 KAKAO BLIND RECRUITMENT</sub>][link_level_2_008]
- 009 : [**<u>오픈채팅방</u>**<sub>2019 KAKAO BLIND RECRUITMENT</sub>][link_level_2_009]
- 010 : [**<u>카카오프렌즈 컬러링북</u>**<sub>2017 카카오코드 예선</sub>][link_level_2_010]
- 011 : [**<u>전화번호 목록</u>**<sub>해시</sub>][link_level_2_011]
- 012 : [**<u>소수 찾기</u>**<sub>완전탐색</sub>][link_level_2_012]
- 013 : [**<u>수식 최대화</u>**<sub>2020 카카오 인턴십</sub>][link_level_2_013]
- 014 : [**<u>가장 큰 수</u>**<sub>정렬</sub>][link_level_2_014]
- 015 : [**<u>프린터</u>**<sub>스택/큐</sub>][link_level_2_015]
- 016 : [**<u>예상 대진표</u>**<sub>2017 팁스타운</sub>][link_level_2_016]
- 017 : [**<u>(1차) 뉴스 클러스터링</u>**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_017]
- 018 : [**<u>조이스틱</u>**<sub>탐욕법(Greedy)</sub>][link_level_2_018]
- 019 : [**<u>괄호 변환</u>**<sub>2020 KAKAO BLIND RECRUITMENT</sub>][link_level_2_019]
- 020 : [**<u>튜플</u>**<sub>2019 카카오 개발자 겨울 인턴십</sub>][link_level_2_020]
- 021 : [**<u>다리를 지나는 트럭</u>**<sub>스택/큐</sub>][link_level_2_021]
- 022 : [**<u>H-Index</u>**<sub>정렬</sub>][link_level_2_022]
- 023 : [**<u>위장</u>**<sub>해시</sub>][link_level_2_023]
- 024 : [**<u>큰 수 만들기</u>**<sub>탐욕법(Greedy)</sub>][link_level_2_024]
- 025 : [**<u>후보키</u>**<sub>2019 KAKAO BLIND RECRUITMENT</sub>][link_level_2_025]
- 026 : [**<u>카펫</u>**<sub>완전탐색</sub>][link_level_2_026]
- 027 : [**<u>삼각 달팽이</u>**<sub>월간 코드 챌린지 시즌1</sub>][link_level_2_027]
- 028 : [**<u>구명보트</u>**<sub>탐욕법(Greedy)</sub>][link_level_2_028]
- 029 : [**<u>(1차) 프렌즈4블록</u>**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_029]
- 030 : [**<u>주식가격</u>**<sub>스택/큐</sub>][link_level_2_030]
- 031 : [**<u>영어 끝말잇기</u>**<sub>Summer/Winter Coding(~2018)</sub>][link_level_2_031]
- 032 : [**<u>점프와 순간 이동</u>**<sub>Summer/Winter Coding(~2018)</sub>][link_level_2_032]
- 033 : [**<u>이진 변환 반복하기</u>**<sub>월간 코드 챌린지 시즌1</sub>][link_level_2_033]
- 034 : [**<u>[1차]캐시</u>**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_034]
- 035 : [**<u>쿼드압축 후 개수 세기</u>**<sub>월간 코드 챌린지 시즌1</sub>][link_level_2_035]
- 036 : [**<u>스킬트리</u>**<sub>Summer/Winter Coding(~2018)</sub>][link_level_2_036]
- 037 : [**<u>가장 큰 정사각형 찾기</u>**<sub>연습문제</sub>][link_level_2_037]
- 038 : [**<u>(3차) 방금그곡</u>**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_038]
- 039 : [**<u>(3차) 압축</u>**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_039]
- 040 : [**<u>(3차) 파일명 정렬</u>**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_040]
- 041 : [**<u>올바른 괄호</u>**<sub>연습문제</sub>][link_level_2_041]
- 042 : [**<u>(3차) n진수 게임</u>**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_042]
- 043 : [**<u>다음 큰 숫자</u>**<sub>연습문제</sub>][link_level_2_043]
- 044 : [**<u>땅따먹기</u>**<sub>연습문제</sub>][link_level_2_044]
- 045 : [**<u>숫자의 표현</u>**<sub>연습문제</sub>][link_level_2_045]
- 046 : [**<u>최댓값과 최솟값</u>**<sub>연습문제</sub>][link_level_2_046]
- 047 : [**<u>최솟값 만들기</u>**<sub>연습문제</sub>][link_level_2_047]
- 048 : [**<u>피보나치 수</u>**<sub>연습문제</sub>][link_level_2_048]
- 049 : [**<u>행렬의 곱셈</u>**<sub>연습문제</sub>][link_level_2_049]
- 050 : [**<u>JadenCase 문자열 만들기</u>**<sub>연습문제</sub>][link_level_2_050]
- 051 : [**<u>N개의 최소공배수</u>**<sub>연습문제</sub>][link_level_2_051]
- 052 : [**<u>괄호 회전하기</u>**<sub>월간 코드 챌린지 시즌2</sub>][link_level_2_052]
- 053 : [**<u>방문 길이</u>**<sub>Summer/Winter Coding(~2018)</sub>][link_level_2_053]


### level 3
---

- 001 : [**<u>네트워크</u>**<sub>깊이/너비 우선 탐색(DFS/BFS)</sub>][link_level_3_001]
- 002 : [**<u>단어 변환</u>**<sub>깊이/너비 우선 탐색(DFS/BFS)</sub>][link_level_3_002]
- 003 : [**<u>2 x n 타일링</u>**<sub>연습문제</sub>][link_level_3_003]
- 004 : [**<u>여행경로</u>**<sub>깊이/너비 우선 탐색(DFS/BFS)</sub>][link_level_3_004]
- 005 : [**<u>베스트앨범</u>**<sub>해시</sub>][link_level_3_005]


### weekly challenge
---

- WEEK 001 : [**<u>부족한 금액 계산하기</u>**][link_wc_001]
- WEEK 002 : [**<u>상호 평가</u>**][link_wc_002]
- WEEK 004 : [**<u>직업군 추천하기</u>**][link_wc_004]
- WEEK 005 : [**<u>모음 사전</u>**][link_wc_005]
  



[link_tistory]:http://xxxelppa.tistory.com
[link_github]:https://github.com/nimkoes/programmers_code

[link_level_0_001]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_001.java
[link_level_0_002]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_002.java
[link_level_0_003]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_003.java
[link_level_0_004]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_004.java
[link_level_0_005]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_005.java
[link_level_0_006]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_006.java
[link_level_0_007]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_007.java
[link_level_0_008]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_008.java
[link_level_0_009]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_009.java
[link_level_0_010]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_010.java
[link_level_0_011]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_011.java
[link_level_0_012]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_012.java
[link_level_0_013]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_013.java
[link_level_0_014]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_014.java
[link_level_0_015]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_015.java
[link_level_0_016]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_016.java
[link_level_0_017]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_017.java
[link_level_0_018]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_018.java
[link_level_0_019]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_019.java
[link_level_0_020]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_020.java
[link_level_0_021]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_021.java
[link_level_0_022]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_022.java
[link_level_0_023]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_023.java
[link_level_0_024]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_024.java
[link_level_0_025]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_025.java
[link_level_0_026]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_026.java
[link_level_0_027]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_027.java
[link_level_0_028]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_028.java
[link_level_0_029]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_029.java
[link_level_0_030]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_030.java
[link_level_0_031]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_031.java
[link_level_0_032]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_032.java
[link_level_0_033]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_033.java
[link_level_0_034]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_034.java
[link_level_0_035]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_035.java
[link_level_0_036]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_036.java
[link_level_0_037]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_037.java
[link_level_0_038]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_038.java
[link_level_0_039]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_039.java
[link_level_0_040]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_040.java
[link_level_0_041]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_041.java
[link_level_0_042]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_042.java
[link_level_0_043]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_043.java
[link_level_0_044]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_044.java
[link_level_0_045]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_045.java
[link_level_0_046]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_046.java
[link_level_0_047]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_047.java
[link_level_0_048]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_048.java
[link_level_0_049]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_049.java
[link_level_0_050]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_050.java
[link_level_0_051]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_051.java
[link_level_0_052]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_052.java
[link_level_0_053]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_053.java
[link_level_0_054]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_054.java
[link_level_0_055]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_055.java
[link_level_0_056]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_056.java
[link_level_0_057]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_057.java
[link_level_0_058]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_058.java
[link_level_0_059]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_059.java
[link_level_0_060]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_060.java
[link_level_0_061]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_061.java
[link_level_0_062]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_062.java
[link_level_0_063]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_063.java
[link_level_0_064]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_064.java
[link_level_0_065]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_065.java
[link_level_0_066]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_066.java
[link_level_0_067]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_067.java
[link_level_0_068]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_068.java
[link_level_0_069]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_069.java
[link_level_0_070]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_070.java
[link_level_0_071]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_071.java
[link_level_0_072]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_072.java
[link_level_0_073]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_073.java
[link_level_0_074]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_074.java
[link_level_0_075]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_075.java
[link_level_0_076]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_076.java
[link_level_0_077]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_077.java
[link_level_0_078]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_078.java
[link_level_0_079]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_079.java
[link_level_0_080]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_080.java
[link_level_0_081]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_081.java
[link_level_0_082]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_082.java
[link_level_0_083]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_083.java
[link_level_0_084]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_084.java
[link_level_0_085]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_085.java
[link_level_0_086]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_086.java
[link_level_0_087]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_087.java
[link_level_0_088]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_088.java
[link_level_0_089]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_089.java
[link_level_0_090]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_090.java
[link_level_0_091]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_091.java
[link_level_0_092]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_092.java
[link_level_0_093]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_093.java
[link_level_0_094]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_094.java
[link_level_0_095]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_095.java
[link_level_0_096]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_096.java
[link_level_0_097]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_097.java
[link_level_0_098]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_098.java
[link_level_0_099]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_099.java
[link_level_0_100]:https://github.com/nimkoes/programmers_code/blob/master/src/com/nimkoes/level0/Solution_100.java

[link_level_1_001]:https://xxxelppa.tistory.com/137
[link_level_1_002]:https://xxxelppa.tistory.com/139
[link_level_1_003]:https://xxxelppa.tistory.com/138
[link_level_1_004]:https://xxxelppa.tistory.com/140
[link_level_1_005]:https://xxxelppa.tistory.com/141
[link_level_1_006]:https://xxxelppa.tistory.com/142
[link_level_1_007]:https://xxxelppa.tistory.com/143
[link_level_1_008]:https://xxxelppa.tistory.com/144
[link_level_1_009]:https://xxxelppa.tistory.com/145
[link_level_1_010]:https://xxxelppa.tistory.com/146
[link_level_1_011]:https://xxxelppa.tistory.com/149
[link_level_1_012]:https://xxxelppa.tistory.com/148
[link_level_1_013]:https://xxxelppa.tistory.com/152
[link_level_1_014]:https://xxxelppa.tistory.com/150
[link_level_1_015]:https://xxxelppa.tistory.com/151
[link_level_1_016]:https://xxxelppa.tistory.com/147
[link_level_1_017]:https://xxxelppa.tistory.com/153
[link_level_1_018]:https://xxxelppa.tistory.com/154
[link_level_1_019]:https://xxxelppa.tistory.com/155
[link_level_1_020]:https://xxxelppa.tistory.com/156
[link_level_1_021]:https://xxxelppa.tistory.com/157
[link_level_1_022]:https://xxxelppa.tistory.com/158
[link_level_1_023]:https://xxxelppa.tistory.com/159
[link_level_1_024]:https://xxxelppa.tistory.com/160
[link_level_1_025]:https://xxxelppa.tistory.com/161
[link_level_1_026]:https://xxxelppa.tistory.com/162
[link_level_1_027]:https://xxxelppa.tistory.com/163
[link_level_1_028]:https://xxxelppa.tistory.com/164
[link_level_1_029]:https://xxxelppa.tistory.com/165
[link_level_1_030]:https://xxxelppa.tistory.com/166
[link_level_1_031]:https://xxxelppa.tistory.com/167
[link_level_1_032]:https://xxxelppa.tistory.com/168
[link_level_1_033]:https://xxxelppa.tistory.com/169
[link_level_1_034]:https://xxxelppa.tistory.com/170
[link_level_1_035]:https://xxxelppa.tistory.com/171
[link_level_1_036]:https://xxxelppa.tistory.com/172
[link_level_1_037]:https://xxxelppa.tistory.com/173
[link_level_1_038]:https://xxxelppa.tistory.com/174
[link_level_1_039]:https://xxxelppa.tistory.com/175
[link_level_1_040]:https://xxxelppa.tistory.com/176
[link_level_1_041]:https://xxxelppa.tistory.com/177
[link_level_1_042]:https://xxxelppa.tistory.com/178
[link_level_1_043]:https://xxxelppa.tistory.com/179
[link_level_1_044]:https://xxxelppa.tistory.com/180
[link_level_1_045]:https://xxxelppa.tistory.com/181
[link_level_1_046]:https://xxxelppa.tistory.com/182
[link_level_1_047]:https://xxxelppa.tistory.com/183
[link_level_1_048]:https://xxxelppa.tistory.com/184
[link_level_1_049]:https://xxxelppa.tistory.com/337
[link_level_1_050]:https://xxxelppa.tistory.com/338
[link_level_1_051]:https://xxxelppa.tistory.com/343
[link_level_1_052]:https://xxxelppa.tistory.com/344
[link_level_1_053]:https://xxxelppa.tistory.com/345
  
[link_level_2_001]:https://xxxelppa.tistory.com/208
[link_level_2_002]:https://xxxelppa.tistory.com/209
[link_level_2_003]:https://xxxelppa.tistory.com/210
[link_level_2_004]:https://xxxelppa.tistory.com/211
[link_level_2_005]:https://xxxelppa.tistory.com/212
[link_level_2_006]:https://xxxelppa.tistory.com/213
[link_level_2_007]:https://xxxelppa.tistory.com/214
[link_level_2_008]:https://xxxelppa.tistory.com/215
[link_level_2_009]:https://xxxelppa.tistory.com/216
[link_level_2_010]:https://xxxelppa.tistory.com/217
[link_level_2_011]:https://xxxelppa.tistory.com/218
[link_level_2_012]:https://xxxelppa.tistory.com/219
[link_level_2_013]:https://xxxelppa.tistory.com/220
[link_level_2_014]:https://xxxelppa.tistory.com/221
[link_level_2_015]:https://xxxelppa.tistory.com/222
[link_level_2_016]:https://xxxelppa.tistory.com/223
[link_level_2_017]:https://xxxelppa.tistory.com/224
[link_level_2_018]:https://xxxelppa.tistory.com/225
[link_level_2_019]:https://xxxelppa.tistory.com/226
[link_level_2_020]:https://xxxelppa.tistory.com/227
[link_level_2_021]:https://xxxelppa.tistory.com/228
[link_level_2_022]:https://xxxelppa.tistory.com/229
[link_level_2_023]:https://xxxelppa.tistory.com/230
[link_level_2_024]:https://xxxelppa.tistory.com/231
[link_level_2_025]:https://xxxelppa.tistory.com/232
[link_level_2_026]:https://xxxelppa.tistory.com/233
[link_level_2_027]:https://xxxelppa.tistory.com/234
[link_level_2_028]:https://xxxelppa.tistory.com/235
[link_level_2_029]:https://xxxelppa.tistory.com/236
[link_level_2_030]:https://xxxelppa.tistory.com/237
[link_level_2_031]:https://xxxelppa.tistory.com/238
[link_level_2_032]:https://xxxelppa.tistory.com/239
[link_level_2_033]:https://xxxelppa.tistory.com/240
[link_level_2_034]:https://xxxelppa.tistory.com/241
[link_level_2_035]:https://xxxelppa.tistory.com/243
[link_level_2_036]:https://xxxelppa.tistory.com/244
[link_level_2_037]:https://xxxelppa.tistory.com/245
[link_level_2_038]:https://xxxelppa.tistory.com/246
[link_level_2_039]:https://xxxelppa.tistory.com/247
[link_level_2_040]:https://xxxelppa.tistory.com/248
[link_level_2_041]:https://xxxelppa.tistory.com/249
[link_level_2_042]:https://xxxelppa.tistory.com/250
[link_level_2_043]:https://xxxelppa.tistory.com/251
[link_level_2_044]:https://xxxelppa.tistory.com/252
[link_level_2_045]:https://xxxelppa.tistory.com/253
[link_level_2_046]:https://xxxelppa.tistory.com/254
[link_level_2_047]:https://xxxelppa.tistory.com/255
[link_level_2_048]:https://xxxelppa.tistory.com/256
[link_level_2_049]:https://xxxelppa.tistory.com/257
[link_level_2_050]:https://xxxelppa.tistory.com/258
[link_level_2_051]:https://xxxelppa.tistory.com/259
[link_level_2_052]:https://xxxelppa.tistory.com/339
[link_level_2_053]:https://xxxelppa.tistory.com/346
  
[link_level_3_001]:https://xxxelppa.tistory.com/262
[link_level_3_002]:https://xxxelppa.tistory.com/266
[link_level_3_003]:https://xxxelppa.tistory.com/268
[link_level_3_004]:https://xxxelppa.tistory.com/298
[link_level_3_005]:https://xxxelppa.tistory.com/335

[link_wc_001]:https://xxxelppa.tistory.com/336
[link_wc_002]:https://xxxelppa.tistory.com/340
[link_wc_004]:https://xxxelppa.tistory.com/341
[link_wc_005]:https://xxxelppa.tistory.com/342

