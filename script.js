const btn = document.querySelector(".btn");

btn.addEventListener("click", getquotes);

async function getquotes() {
  let a = await fetch("https://animechan.vercel.app/api/random");
  let b = await a.json();
  const anime = document.querySelector("header");
  anime.innerText = `anime : ${b.anime}`;
  const character = document.querySelector("article");
  character.innerText = `character : ${b.character}`;
  const quote = document.querySelector("section");
  quote.innerText = `quote : ${b.quote}`;
  console.log(b);
}
