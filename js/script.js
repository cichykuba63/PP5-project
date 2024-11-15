document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navBtn = document.querySelector('.navbar-toggler')
    const navBox = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else if (window.scrollY < 100 && !navBox.classList.contains('show')) {
			nav.classList.remove('shadow-bg')
		}
	}

	function btnClick() {
		if (window.scrollY < 100) {
			nav.classList.toggle('shadow-bg')
		}
    }

	window.addEventListener('scroll', addShadow)
	navBtn.addEventListener('click', btnClick)
})
