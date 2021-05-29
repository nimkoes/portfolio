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
**각 문제에 대한 '입출력 예' 에 대한 테스트는 [깃헙 저장소][link_github]에 업로드 되어 있습니다.**  
  
---  
  
- **레벨 단위**로 패키지 생성
- 이 프로젝트 내 클래스 이름은 **언더스코어 '_' 로 시작**하는 것으로 통일
- 대부분의 **설명은 코드 내 주석**으로 작성 했으며, **필요에 따라** 일부 별도의 설명을 추가
- [**주석 이외의 추가 설명은 블로그**][link_tistory]에 정리
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

- 001 : [**기능개발**<sub>스택/큐</sub>][link_level_2_001]
- 002 : [**단체사진 찍기**<sub>2017 카카오코드 본선</sub>][link_level_2_002]
- 003 : [**짝지어 제거하기**<sub>2017 팁스타운</sub>][link_level_2_003]
- 004 : [**멀쩡한 사각형**<sub>Summer/Winter Coding(2019)</sub>][link_level_2_004]
- 005 : [**타겟 넘버**<sub>깊이/너비 우선 탐색(DFS/BFS)</sub>][link_level_2_005]
- 006 : [**더 맵게**<sub>힙(Heap)</sub>][link_level_2_006]
- 007 : [**124 나라의 숫자**<sub>연습문제</sub>][link_level_2_007]
- 008 : [**문자열 압축**<sub>2020 KAKAO BLIND RECRUITMENT</sub>][link_level_2_008]
- 009 : [**오픈채팅방**<sub>2019 KAKAO BLIND RECRUITMENT</sub>][link_level_2_009]
- 010 : [**카카오프렌즈 컬러링북**<sub>2017 카카오코드 예선</sub>][link_level_2_010]
- 011 : [**전화번호 목록**<sub>해시</sub>][link_level_2_011]
- 012 : [**소수 찾기**<sub>완전탐색</sub>][link_level_2_012]
- 013 : [**수식 최대화**<sub>2020 카카오 인턴십</sub>][link_level_2_013]
- 014 : [**가장 큰 수**<sub>정렬</sub>][link_level_2_014]
- 015 : [**프린터**<sub>스택/큐</sub>][link_level_2_015]
- 016 : [**예상 대진표**<sub>2017 팁스타운</sub>][link_level_2_016]
- 017 : [**(1차) 뉴스 클러스터링**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_017]
- 018 : [**조이스틱**<sub>탐욕법(Greedy)</sub>][link_level_2_018]
- 019 : [**괄호 변환**<sub>2020 KAKAO BLIND RECRUITMENT</sub>][link_level_2_019]
- 020 : [**튜플**<sub>2019 카카오 개발자 겨울 인턴십</sub>][link_level_2_020]
- 021 : [**다리를 지나는 트럭**<sub>스택/큐</sub>][link_level_2_021]
- 022 : [**H-Index**<sub>정렬</sub>][link_level_2_022]
- 023 : [**위장**<sub>해시</sub>][link_level_2_023]
- 024 : [**큰 수 만들기**<sub>탐욕법(Greedy)</sub>][link_level_2_024]
- 025 : [**후보키**<sub>2019 KAKAO BLIND RECRUITMENT</sub>][link_level_2_025]
- 026 : [**카펫**<sub>완전탐색</sub>][link_level_2_026]
- 027 : [**삼각 달팽이**<sub>월간 코드 챌린지 시즌1</sub>][link_level_2_027]
- 028 : [**구명보트**<sub>탐욕법(Greedy)</sub>][link_level_2_028]
- 029 : [**(1차) 프렌즈4블록**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_029]
- 030 : [**주식가격**<sub>스택/큐</sub>][link_level_2_030]
- 031 : [**영어 끝말잇기**<sub>Summer/Winter Coding(~2018)</sub>][link_level_2_031]
- 032 : [**점프와 순간 이동**<sub>Summer/Winter Coding(~2018)</sub>][link_level_2_032]
- 033 : [**이진 변환 반복하기**<sub>월간 코드 챌린지 시즌1</sub>][link_level_2_033]
- 034 : [**[1차]캐시**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_034]
- 035 : [**쿼드압축 후 개수 세기**<sub>월간 코드 챌린지 시즌1</sub>][link_level_2_035]
- 036 : [**스킬트리**<sub>Summer/Winter Coding(~2018)</sub>][link_level_2_036]
- 037 : [**가장 큰 정사각형 찾기**<sub>연습문제</sub>][link_level_2_037]
- 038 : [**(3차) 방금그곡**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_038]
- 039 : [**(3차) 압축**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_039]
- 040 : [**(3차) 파일명 정렬**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_040]
- 041 : [**올바른 괄호**<sub>연습문제</sub>][link_level_2_041]
- 042 : [**(3차) n진수 게임**<sub>2018 KAKAO BLIND RECRUITMENT</sub>][link_level_2_042]
- 043 : [**다음 큰 숫자**<sub>연습문제</sub>][link_level_2_043]
- 044 : [**땅따먹기**<sub>연습문제</sub>][link_level_2_044]
- 045 : [**숫자의 표현**<sub>연습문제</sub>][link_level_2_045]
- 046 : [**최댓값과 최솟값**<sub>연습문제</sub>][link_level_2_046]
- 047 : [**최솟값 만들기**<sub>연습문제</sub>][link_level_2_047]
- 048 : [**피보나치 수**<sub>연습문제</sub>][link_level_2_048]
- 049 : [**행렬의 곱셈**<sub>연습문제</sub>][link_level_2_049]
- 050 : [**JadenCase 문자열 만들기**<sub>연습문제</sub>][link_level_2_050]
- 051 : [**N개의 최소공배수**<sub>연습문제</sub>][link_level_2_051]


### level 3
---

- 001 : [**네트워크**<sub>깊이/너비 우선 탐색(DFS/BFS)</sub>][link_level_3_001]
- 002 : [**단어 변환**<sub>깊이/너비 우선 탐색(DFS/BFS)</sub>][link_level_3_002]
- 003 : [**2 x n 타일링**<sub>연습문제</sub>][link_level_3_003]
- 004 : [**여행경로**<sub>깊이/너비 우선 탐색(DFS/BFS)</sub>][link_level_3_004]
  



[link_tistory]:http://xxxelppa.tistory.com
[link_github]:https://github.com/nimkoes/programmers_code

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
  
  
[link_level_3_001]:https://xxxelppa.tistory.com/262
[link_level_3_002]:https://xxxelppa.tistory.com/266
[link_level_3_003]:https://xxxelppa.tistory.com/268
[link_level_3_004]:https://xxxelppa.tistory.com/298
