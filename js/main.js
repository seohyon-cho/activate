const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

// 버튼 클릭 이벤트문
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		// 여기서 (e)는 자동으로 제공되는 이벤트라는 객체
		// console.log('currentTarget', e.currenTarget);
		// console.log('target', e.target);
		// e.currentTarget (e 객체 안에 currentTarget이라는 것이 있고)
		// : js 이벤트 구문에 연결되어 있는 선택자가 선택됨
		// e.target (e 객체 안에 target이라는 것이 있음)
		// : 실제 화면상에서 이벤트가 발생한 대상 선택

		/* 만약 연결된 선택자가 <a> 하이퍼링크(링크이동)처럼 특정 기능이 있는 요소면, 
				해당 기능을 막아야 할 필요가 있음. 
				e.preventDefault();
		*/
		e.preventDefault();

		// if (btns[idx].classList.contains('on')) return;
		// btns[idx] 대신 e.currentTarget 써서 내가 선택한 그 해당 선택자만 호출.
		if (e.currentTarget.classList.contains('on')) return;

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
