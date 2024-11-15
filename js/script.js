document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navBtn = document.querySelector('.navbar-toggler')
    const navList = document.querySelector('.navbar-collapse')
    const allNavItems = document.querySelectorAll('.nav-link')

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

    allNavItems.forEach(link => link.addEventListener('click', () => {
        navList.classList.remove('show')

        if (window.scrollY < 100) {
            nav.classList.remove('shadow-bg')
        }
    }))

	window.addEventListener('scroll', addShadow)
	navBtn.addEventListener('click', btnClick)
})
