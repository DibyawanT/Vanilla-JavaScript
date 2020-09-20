const colors = [
  "blue",
  "lime",
  "yellow",
  "magenta",
  "green",
  "red",
  "rgb(133,122,111)",
  "#f1f5f8",
  "#f1h5e8"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  //get a random no. between 0-3 so that we get colors[random_no]
  const random_no = getRandomNo();
  document.body.style.backgroundColor = colors[random_no];
  color.textContent = colors[random_no];
});
function getRandomNo() {
  return Math.floor(Math.random() * colors.length);
}
