const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		// 직전의 모든 요소 초기화
		btns.forEach((btn) => btn.classList.remove('on'));
		// 클릭한 순번에 해당하는 버튼만 활성화
		btns[idx].classList.add('on');
		// 박스 초기화
		boxs.forEach((btn) => btn.classList.remove('on'));
		// 클릭한 버튼에 해당하는 박스만 활성화
		boxs[idx].classList.add('on');
	});
});
