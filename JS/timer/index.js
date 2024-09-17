// 1. input 요소 생성 및 body에 추가
const input = document.createElement('input');
input.type = 'text';
document.body.appendChild(input);

// 2. input에서 Enter 키를 누르면 처리할 이벤트 리스너 등록
input.addEventListener('keyup', function (event) {
  // Enter 키가 눌렸을 때
  if (event.key === 'Enter') {
    const inputValue = Number(input.value);

    // 3. 입력값이 숫자가 아닌 경우 처리
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 60) {
      console.log('숫자를 입력해주세요');
      input.value = '';
      return;
    }

    // 4. span 요소와 clear 버튼 추가
    const span = document.createElement('span');
    span.textContent = inputValue;
    document.body.appendChild(span);

    const clearButton = document.createElement('button');
    clearButton.textContent = 'clear';
    document.body.appendChild(clearButton);

    // 5. 타이머 시작
    let count = inputValue;
    const timerId = setInterval(function () {
      count--;
      span.textContent = count;

      if (count === 0) {
        clearInterval(timerId);
        console.log('타이머 종료');
        span.remove();
        clearButton.remove();
      }
    }, 1000);

    // 6. clear 버튼 클릭 시 타이머 취소
    clearButton.addEventListener('click', function () {
      clearInterval(timerId);
      span.remove();
      clearButton.remove();
    });
  }
});
