document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navBtn = document.querySelector('.navbar-toggler')
	const navList = document.querySelector('.navbar-collapse')
	const allNavItems = document.querySelectorAll('.nav-link')
	const yearElement = document.querySelector('.year')
	const currentYear = new Date().getFullYear()
	const headerBtn = document.querySelector('header .btn')
	const priceList = document.querySelectorAll('.price-box p:last-of-type span')

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

	async function fetchPrices() {
		try {
			const API_KEY = '08c43580'
			const response = await fetch(`https://my.api.mockaroo.com/price.json?key=${API_KEY}`)
			const data = await response.json()

			const prices = data.map(item => item.price)
			prices.sort((a, b) => a - b)

			const priceUnder1000 = prices.filter(price => price >= 700 && price <= 1000)
			const priceUnder2500 = prices.filter(price => price >= 1500 && price <= 2500)
			const priceUnder4500 = prices.filter(price => price >= 2500 && price <= 4500)

			priceList[0].textContent = `${priceUnder1000[0]} zł`
			priceList[1].textContent = `${priceUnder2500[0]} zł`
			priceList[2].textContent = `${priceUnder4500[0]} zł`
		} catch (error) {
			console.error('Błąd pobierania danych z API:', error)
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
	fetchPrices()
})
