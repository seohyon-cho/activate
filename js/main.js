// DOM 요소의 속성값 제어

// DOM.getAttribute('속성명'): 해당 속성명의 값 가져오기
// DOM.setAttribute('속성명', '변경할 속성 값'): 해당 속성 명의 값을 변경

// const link = document.querySelector('a');
// console.log(link.getAttribute('href')); // a요소의 href 속성 값을 출력
// link.setAttribute('href', 'https://www.nate.com');
// link.setAttribute('target', '_blank');
// link.innerText = '네이트';

// 위의 정보값 url, target, 이름을 각각 객체로 정의한다음 배열로 묶어서 해당 a요소가 변경되도록 처리
const info = [
	{ url: 'https://www.naver.com', target: '_blank', name: '네이버' },
	{ url: 'https://www.nate.com', target: '_self', name: '네이트' },
	{ url: 'https://www.google.com', target: '_blank', name: '구글' },
];

/* 
  동적으로 DOM 생성하기
  방법 (1) : innerHTML을 이용해서 문자열로 직접 동적 태그 생성 (선택자의 기존 자식 내용을 없애면서 덮어쓰기)
  방법 (2)
*/

// 특정 부모 요소 안에 반복적인 DOM 요소를 동적으로 생성하기 위해서는

// const nav = document.querySelector('nav');
// // 1. 문자열을 초기화 하는 변수를 만들고
// let tags = '';
// // 2. += 를 활용해서, 반복 추가할 태그를 문자열 형태로 계속해서 쌓아놓음.
// tags += `<a href='${info[0].url}' target='${info[0].target}'>${info[0].name}</a>`;

// tags += `<a href='${info[1].url}' target='${info[1].target}'>${info[1].name}</a>`;

// tags += `<a href='${info[2].url}' target='${info[2].target}'>${info[2].name}</a>`;

// console.log(tags);
// // 3. 해당 DOM 요소에 변수에 있는(tags) 반복태그 문자열들을 한 번에 꽂아넣음.
// nav.innerHTML = tags;

const nav = document.querySelector('nav');
let tags = '';
info.forEach((data, index) => {
	tags += `<a href='${info[index].url}' target='${info[index].target}'>${info[index].name}</a>`;
});
console.log(tags);
nav.innerHTML = tags;
