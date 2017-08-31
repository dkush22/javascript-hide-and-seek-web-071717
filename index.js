function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.getElementById('nested')
}

function increaseRankBy(n) {
	const classname = document.getElementsByClassName('ranked-list')

	for (let i = 0; i < classname.length; i++) {
		classname[i].innerHTML = i + n
	}
}

function deepestChild() {
	return document.querySelectorAll('#grand-node div div div div')[0]
}
