window.addEventListener("scroll", function() {
	if (window.scrollY > 50) {
		document.querySelector("header").style.backgroundColor = "#fff";
		document.querySelector("header").style.color = "#333";
	} else {
		document.querySelector("header").style.backgroundColor = "#333";
		document.querySelector("header").style.color = "#fff";
	}
});
