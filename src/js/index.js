const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal")
const modal = document.querySelector(".modal");
const video = document.getElementById("video");

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", video.src);
})