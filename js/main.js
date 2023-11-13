const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

// 버튼 클릭 이벤트문
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		// 만약 클릭한 버튼이 내가 클릭한 버튼(class on이 붙은 활성화된 버튼) 이라면, return을 실행해서 함수 실행 중지 (성능개선)(불필요한 activation 함수 호출 방지)
		// 만약 on이 없다면 (클릭하지 않았던 버튼) 해당 if 조건문 무시하고 정상적으로 activation 함수 호출
		if (btns[idx].classList.contains('on')) return;
		//activation(btns, idx);
		//activation(boxs, idx);
		[btns, boxs].forEach((el) => activation(el, idx));
	});
});

// 인수로 그룹 선택자와, 순번을 받아서
// 해당 순번에 해당하는 요소만 활성화시키는 함수

function activation(arr, index) {
	console.log('activation');
	arr.forEach((el) => el.classList.remove('on'));
	arr[index].classList.add('on');
}
