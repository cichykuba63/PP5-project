document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navBtn = document.querySelector('.navbar-toggler')
	const navList = document.querySelector('.navbar-collapse')
	const allNavItems = document.querySelectorAll('.nav-link')
	const yearElement = document.querySelector('.year')
	const currentYear = new Date().getFullYear()
	const headerBtn = document.querySelector('header .btn')
	const priceList = document.querySelectorAll('.price-box p:last-of-type span')
	const contactForm = document.getElementById('contact-form')
	const priceForm = document.getElementById('priceForm')
	const feedbackForm = document.getElementById('feedbackForm');
    const form = document.getElementById('rateForm');
	const forms = []

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

	function saveContactForm(event) {
		event.preventDefault()
		const form = []

		const email = document.getElementById('contact-email').value
		const sex = document.getElementById('contact-select-gender').value
		const name = document.getElementById('contact-firstName').value
		const surname = document.getElementById('contact-lastName').value
		const topic = document.getElementById('contact-select-topic').value
		const message = document.getElementById('contact-textArea').value

		form.push(`Email: ${email}`)
		form.push(`Sex: ${sex}`)
		form.push(`Name: ${name}`)
		form.push(`Surname: ${surname}`)
		form.push(`Topic: ${topic}`)
		form.push(`Message: ${message}`)

		alert('Formularz został wysłany!')

		forms.push(form)
		console.log(forms)
	}

	function savePriceForm(event) {
		event.preventDefault()
		const form = []

		const email = document.getElementById('priceForm-email').value.trim()
		const firstName = document.getElementById('priceForm-firstName').value.trim()
		const lastName = document.getElementById('priceForm-lastName').value.trim()
		const phone = document.getElementById('priceForm-phone').value.trim()
		const gameType = document.getElementById('priceForm-select-gameType').value.trim()
		const multiplayer = document.getElementById('priceForm-select-multiplayer').value.trim()
		const gameDescription = document.getElementById('priceForm-gameDescription').value.trim()

		if (!email || !firstName || !lastName || !phone || !gameDescription) {
			const errDiv = document.getElementById('errDiv')
			errDiv.classList.remove('d-none')
			return
		} else {
			const errDiv = document.getElementById('errDiv')
			errDiv.classList.add('d-none')
		}

		form.push(`Email: ${email}`)
		form.push(`First name: ${firstName}`)
		form.push(`Last name: ${lastName}`)
		form.push(`Phone: ${phone}`)
		form.push(`Game Type: ${gameType}`)
		form.push(`Multiplayer: ${multiplayer}`)
		form.push(`Game description: ${gameDescription}`)

		alert('Formularz został wysłany!')

		forms.push(form)
		console.log(forms)
	}

	function checkScrollPosition() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.scrollY + windowHeight;

        if (scrollPosition >= documentHeight - 10) {
            feedbackForm.classList.remove('d-none');
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
	contactForm.addEventListener('submit', saveContactForm)
	priceForm.addEventListener('submit', savePriceForm)
	window.addEventListener('scroll', checkScrollPosition);

	form.addEventListener('submit', function (event) {
        event.preventDefault();
		const form = []

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;

		form.push(`Email: ${email}`)
		form.push(`First name: ${name}`)
		form.push(`Rating: ${rating}`)
		form.push(`Comment: ${comment}`)

		forms.push(form)
		console.log(forms)

        alert('Dziękujemy za opinię!');
    });
})
