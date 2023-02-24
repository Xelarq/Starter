gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.8,
	effects: true
})

gsap.fromTo('.header', { x: 0, opacity: 1}, {
	opacity: 0, y: -200,
	scrollTrigger: {
		trigger: '.header',
		start: '0',
		end: '700',
		scrub: true
	}
}
)
let itemsL = gsap.utils.toArray('.paragraph .left-item')
	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -250 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-950',
				end: '-50',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.paragraph .right-item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 250 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-950',
				end: '-50',
				scrub: true
			}
		})
	})

}