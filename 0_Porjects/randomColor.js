const hash = "0123456789ABCDEF";
let color = "#";

function randomColor() {
  for (let i = 0; i < 6; i++) {
    color += hash[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(randomColor())
