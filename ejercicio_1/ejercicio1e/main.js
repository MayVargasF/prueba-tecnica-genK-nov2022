function handleMouseOver(ev) {
  ev.preventDefault();
  ev.target.innerHTML = ev.target.innerHTML.slice(0, -1) + "N";
}

function handleMouseOut(ev) {
  ev.preventDefault();
  ev.target.innerHTML = ev.target.innerHTML.slice(0, -1) + "n";
}

for (let i = 1; i <= 1000; i++) {
  let btn = document.createElement("button");
  btn.innerHTML = `${i} botón`;
  document.body.appendChild(btn);
  btn.addEventListener("mouseover", handleMouseOver);
  btn.addEventListener("mouseout", handleMouseOut);
}
