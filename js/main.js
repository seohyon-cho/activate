// DOM 요소의 속성값 제어

// DOM.getAttribute('속성명'): 해당 속성명의 값 가져오기
// DOM.setAttribute('속성명', '변경할 속성 값'): 해당 속성 명의 값을 변경

const link = document.querySelector('a');
console.log(link.getAttribute('href')); // a요소의 href 속성 값을 출력
link.setAttribute('href', 'https://www.nate.com');
link.setAttribute('target', '_blank');
link.innerText = '네이트';
