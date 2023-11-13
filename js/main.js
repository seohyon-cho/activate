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

const links = document.querySelectorAll('a');

info.forEach((data, idx) => {
	console.log(data.url);
	console.log(data.target);
	console.log(data.name);

	// const url = data.url;
	// const target = data.target;
	// const name = data.name;

	const { url, target, name } = data;

	links[idx].setAttribute('href', url);
	links[idx].setAttribute('target', target);
	links[idx].innerText = name;
	console.log('-----');
});

info.forEach;
