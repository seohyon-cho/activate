const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

// 버튼 클릭 이벤트문
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		//activation(btns, idx);
		//activation(boxs, idx);
		[btns, boxs].forEach((el) => activation(el, idx));
	});
});

// 인수로 그룹 선택자와, 순번을 받아서
// 해당 순번에 해당하는 요소만 활성화시키는 함수

function activation(arr, index) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[index].classList.add('on');
}
