const modalPost = document.querySelector(".modal-post");
const openModal = document.querySelector("#open__modal");
const isVisible = document.querySelector("#is-visible");
const closed = document.querySelector("#close");

openModal.addEventListener("click", (e) => {
	toggleModal(e);
	loadModal();
});

modalPost.addEventListener("click", (e) => {
	toggleModal(e);
});

if (closed) {
	closed.addEventListener("click", (e) => {
		toggleModal(e);
	});
}

function counterNumberCharacters(event) {
	const add = document.querySelector("#add");
	add.innerHTML = event.target.value.length
}

function selectedFile() {
	const file = document.querySelector('.teste').click()
	// console.log('clicou', file.click())
}

function toggleModal(e) {
	if (e.target.id || e.key == "Escape") {
		// isVisible.classList.add("is-visible");
    modalPost.innerHTML = '';
	} else {
		// isVisible.classList.remove("is-visible");
	}
}

async function loadModal() {
	const request = await fetch("../pages/modal/modal-post.html");
	const modal = await request.text();
	console.log(modal)
	modalPost.innerHTML = modal;
}
