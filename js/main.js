const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		btns.forEach((el) => el.classList.remove('on'));
		btns[idx].classList.add('on');
		boxs.forEach((el) => el.classList.remove('on'));
		boxs[idx].classList.add('on');
	});
});
