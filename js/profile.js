const main = document.querySelector(".main__images");

getAllImg();

function getAllImg() {
	const imagens = [
		{
			url: "../assets/img/pet-post-01.png",
			description:
				"Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis",
		},
		{
			url: "../assets/img/pet-post-02.png",
			description:
				"Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis",
		},
		{
			url: "../assets/img/pet-post-03.png",
			description:
				"Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis",
		},
	];

	imagens.forEach((item) => {
		// main.innerHTML += `
    //   <div class="card image__post">
    //     <img src="${item.url}" alt="Icone do Perfil">
    //   </div>
    // `;
	});
}
