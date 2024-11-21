document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navBtn = document.querySelector('.navbar-toggler')
	const navList = document.querySelector('.navbar-collapse')
	const allNavItems = document.querySelectorAll('.nav-link')
	const yearElement = document.querySelector('.year')
	const currentYear = new Date().getFullYear()
	const headerBtn = document.querySelector('header .btn')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else if (window.scrollY < 100 && !navList.classList.contains('show')) {
			nav.classList.remove('shadow-bg')
		}
	}

	function btnClick() {
		if (window.scrollY < 100) {
			nav.classList.toggle('shadow-bg')
		}
	}

	function headerBtnHover() {
		headerBtn.classList.add('header-btn-hover')
	}

	function closeNavIfClickOutside(event) {
		if (!nav.contains(event.target) && !navBtn.contains(event.target)) {
			navList.classList.remove('show')
			btnClick()
		}
	}

	allNavItems.forEach(link =>
		link.addEventListener('click', () => {
			navList.classList.remove('show')
			btnClick()
		})
	)

	document.addEventListener('click', closeNavIfClickOutside)
	window.addEventListener('scroll', addShadow)
	navBtn.addEventListener('click', btnClick)
	headerBtn.addEventListener('mouseover', headerBtnHover)
	yearElement.textContent = `${currentYear}`
})
