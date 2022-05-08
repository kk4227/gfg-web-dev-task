let navUl = document.querySelector("nav > ul");
let navBtn = document.querySelector("nav > div:first-of-type");
let navOpen = document.querySelector("nav > div:nth-of-type(2)");
let navClose = document.querySelector("nav > div:last-of-type");

function openAndCloseNavbar() {
	navUl.classList.toggle("open");
	navBtn.classList.toggle("open");
	navOpen.classList.toggle("open");
	navClose.classList.toggle("open");
}

navOpen.addEventListener("click", openAndCloseNavbar);
navClose.addEventListener("click", openAndCloseNavbar);

function inViewport(el) {
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;

	while (el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	return (
		top < window.pageYOffset + window.innerHeight &&
		left < window.pageXOffset + window.innerWidth &&
		top + height > window.pageYOffset &&
		left + width > window.pageXOffset
	);
}

servicesH2 = document.querySelector("section#services > h2");
servicesP = document.querySelector("section#services > p");
services = document.querySelectorAll("section#services > div > div");

helpLeft = document.querySelector("section#help > div > div");
helpRight = document.querySelector("section#help > div > img");

workLeft = document.querySelector("section#work-with-us > div > div");
workRight = document.querySelector("section#work-with-us > div > img");

projectsH2 = document.querySelector("section#projects > div > h2");
projectsP = document.querySelector("section#projects > div > p");
projects = document.querySelectorAll("section#projects > div > div > div");

testimonialImg = document.querySelector("section#testimonials > div:first-of-type > img");
testimonialContent = document.querySelector("section#testimonials > div:first-of-type > div");
testimonialCompanies = document.querySelectorAll("section#testimonials > div:last-of-type > img");

footerLeft = document.querySelector("footer > div > div:first-of-type > div:first-of-type");
footerRight1 = document.querySelector("footer > div > div:first-of-type > div:nth-of-type(2)");
footerRight2 = document.querySelector("footer > div > div:first-of-type > div:nth-of-type(3)");
footerRight3 = document.querySelector("footer > div > div:first-of-type > div:last-of-type");
footerBottom = document.querySelector("footer > div > div:last-of-type");

document.addEventListener("scroll", function () {
	if (inViewport(servicesH2)) {
		servicesH2.classList.add("animate");
		servicesP.classList.add("animate");
	}

	if (inViewport(services[0])) {
		services[0].classList.add("animate");
		if (inViewport(services[1])) {
			setTimeout(function () {
				services[1].classList.add("animate");
			}, 250);
		}
		if (inViewport(services[2])) {
			setTimeout(function () {
				services[2].classList.add("animate");
			}, 500);
		}
	}

	if (inViewport(helpLeft)) {
		helpLeft.classList.add("animate");
	}
	if (inViewport(helpRight)) {
		helpRight.classList.add("animate");
	}

	if (inViewport(workLeft)) {
		workLeft.classList.add("animate");
	}
	if (inViewport(workRight)) {
		workRight.classList.add("animate");
	}

	if (inViewport(projectsH2)) {
		projectsH2.classList.add("animate");
		projectsP.classList.add("animate");
	}

	if (inViewport(projects[0])) {
		projects[0].classList.add("animate");
		if (inViewport(projects[1])) {
			setTimeout(function () {
				projects[1].classList.add("animate");
			}, 250);
		}
		if (inViewport(projects[2])) {
			setTimeout(function () {
				projects[2].classList.add("animate");
			}, 500);
		}
	}

	if (inViewport(testimonialImg)) {
		testimonialImg.classList.add("animate");
	}
	if (inViewport(testimonialContent)) {
		testimonialContent.classList.add("animate");
	}

	if (inViewport(testimonialCompanies[0])) {
		testimonialCompanies[0].classList.add("animate");
		if (inViewport(testimonialCompanies[1])) {
			setTimeout(function () {
				testimonialCompanies[1].classList.add("animate");
			}, 250);
		}
		if (inViewport(testimonialCompanies[2])) {
			setTimeout(function () {
				testimonialCompanies[2].classList.add("animate");
			}, 500);
		}
		if (inViewport(testimonialCompanies[3])) {
			setTimeout(function () {
				testimonialCompanies[3].classList.add("animate");
			}, 750);
		}
	}

	if (inViewport(footerLeft)) {
		footerLeft.classList.add("animate");
	}
	if (inViewport(footerRight1)) {
		footerRight1.classList.add("animate");
		if (inViewport(footerRight2)) {
			setTimeout(function () {
				footerRight2.classList.add("animate");
			}, 250);
		}
		if (inViewport(footerRight3)) {
			setTimeout(function () {
				footerRight3.classList.add("animate");
			}, 500);
		}
	}

	if (inViewport(footerBottom)) {
		footerBottom.classList.add("animate");
	}
});
