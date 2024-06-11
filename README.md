# ✨ Record my learning

<details open>
  <summary>
    <h2>A11Y</h2>
  </summary>
  
  <ul>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/master/Tutorial.md">
        Tutorial
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/master/Page Structure.md">
        Page Structure
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/master/Button.md">
        Button
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/master/ComboBox.md">
        ComboBox
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/master/Carousel.md">
        Carousel
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Checkbox">
        Checkbox
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Images">
        Images
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Menu Button.md">
        Menu Button
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Menu.md">
        Menu
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Alert.md">
        Alert
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Meter">
        Meter
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Accordion">
        Accordion
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Dialog.md">
        Dialog
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Feed">
        Feed
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Form.md">
        Form
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/ListBox.md">
        ListBox
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Tab">
        Tab
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/web-accessibility/blob/main/Table.md">
        Table
      </a>
    </li>
  </ul>

</details>

## Computer Science

<ul>
  <li>
    <a href="./CS/kernel.md">
      커널
    </a>
  </li>
  <li>
    <a href="./CS/Process vs Thread.md">
      프로세스와 스레드
    </a>
  </li>
  <li>
    <a href="./CS/DHCP.md">
      DHCP
    </a>
  </li>
  <li>
    <a href="./CS/NAT vs NAPT vs Port Forwarding.md">
      NAT vs NAPT vs Port Forwarding
    </a>
  </li>
  <li>
    <a href="./CS/표준 스트림.md">
      표준 스트림
    </a>
  </li>
</ul>

<details open>
  <summary>
    <h2>Design Patterns</h2>
  </summary>
  
  <ul>
    <li>
      <a href="https://github.com/wonjin-dev/wiki/tree/main/Design%20Patterns/Abstract%20Factory">
        Abstract Factory
      </a>
    </li>
  </ul>
</details>

<details open>
  <summary>
    <h2>Algorithm</h2>
  </summary>

### 자료구조의 종류

> `단순 구조`, `선형 구조`, `비선형 구조`

#### 단순구조

- 정수
- 실수
- 문자열
- 논리

#### 선형 구조

> 한 원소 뒤에 하나의 원소만이 존재하여 자료들이 선형으로 나열되어 있는 구조

- 배열
- 연결 리스트
- 스택
- 큐

#### 비선형 구조

> 원소 간에 다대다 관계를 가지는 구조

- 그래프
- 트리

<br/><hr/><br/>

### 시간복잡도

> 소프트웨어의 성능은 명확하게 표현할 수 없다. 따라서 `빅오표기법`으로 표현한다 (시간복잡도 표현)

### 빅오표기법

<img width="1117" src="https://user-images.githubusercontent.com/82315118/210250252-ccd1198a-13b7-422c-bb18-7736edef55cf.png" />

( 상수함수 < 로그함수 < 선형함수 < 다항함수 < 지수함수 )

- 상수항은 무시한다
- 가장 큰 항 외에는 무시한다

```
O(1) : stack에서 Push, Pop

O(log n) : 이진 트리

O(n) : for loop

O(n log n) : 퀵 정렬, 병합정렬, 힙 정렬

O(n^2): 이중 for 문, 삽입정렬, 거품정렬, 선택정렬

O(2^n) : 피보나치 수열
```

<br/><hr/><br/>

### 큐와 스택

#### 스택

후입선출 자료구조

> 코드로는 배열로 표현하는 것이 유리

#### 큐 (Queue)

> 선입선출 자료구조.

(선출)`Front`, `Rear`(후출), `EnQueue`(==push), `DeQueue`(==pop)

- 큐는 배열로 구현하면 앞에 빠진 인덱스를 채우지 않기 때문에 사이즈가 무한정 늘어날 수 있다.
  > JS한정
  > 그렇다고 인덱스를 당기려면 선형시간이 소요 되기 때문에 배열이 아닌 연결 리스트로 큐를 구현하는 것이 올바르다
- 원형 큐 자료구조를 구현할 때는 배열로 구현해도 된다.
  > 한정된 공간을 사용할때 원형 큐를 이용하기 때문에 연결 리스트로 구현해도 이점이 없기 때문
- shift로 큐를 구현하는 것은 올바르지 않다.
  > shift는 선형시간이 소요

<br/><hr/><br/>

<ul>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Linked List">
      Linked List
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/BST">
      BST
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Recursion">
      Recursion
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/BFS.md">
      BFS
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/DFS.md">
      DFS
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Graph.md">
      Graph
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Trie">
      Trie
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Heap">
      Heap
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Hash Table.md">
      Hash Table
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Greedy.md">
      Greedy
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Sort.md">
      Sort
    </a>
  </li>
</ul>

</details>

<details>
  <summary>
    <h2>Studies</h2>
  </summary>
  
  <ul>
    <li>
      <a href="https://github.com/Soomgo-public/docker-study">
        Docker 공식문서 & "도커 교과서" 스터디
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/engineer-information-processing">
        정보 처리 기사 스터디
      </a>
    </li>
  </ul>

</details>
