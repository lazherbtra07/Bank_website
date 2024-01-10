// mobile menu
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLinks = document.querySelector("#hLinks");
const faSolid = document.querySelector(".fa-solid");

hamburger.addEventListener("click", () => {
  menu.classList.toggle('hidden');
  faSolid.classList.toggle('fa-xmark');
})

hLinks.array.forEach(link => {
  link.addEventListener('click', () =>{
    menu.classList.toggle('hidden')
    faSolid.classList.toggle('fa-xmark')
  })
});