const form = document.getElementById('surveyForm');

form.addEventListener('next', function(event) {
  event.preventDefault(); // 기본 제출 동작 방지

  // 선택한 답변 수집
  const name = document.querySelector('input[name="name"]:checked').value;
  const age = document.querySelector('input[name="age"]:checked').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const mbti = document.querySelector('input[name="mbti"]:checked').value;

  // 수집한 답변 데이터를 서버로 전송
  const data = {
    name: name,
    age: age,
    gender: gender,
    mbti: mbti
  };

  fetch('/submit-survey', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    // 서버 응답 처리
    console.log(result);
    // 결과를 표시하는 함수 호출 등 추가 동작 수행
  })
  .catch(error => {
    console.error('설문조사 제출 중 오류 발생:', error);
    // 오류 처리
  });
});
