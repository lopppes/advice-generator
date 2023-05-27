const button = document.querySelector(".button-section");
const number = document.querySelector(".advice");
const description = document.querySelector(".mensagem");

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const { slip } = await response.json();
  const { id, advice } = slip;
  number.innerHTML = `Advice #${id}`;
  description.innerHTML = `"${advice}"`;
};

button.addEventListener("click", getAdvice);

getAdvice();
