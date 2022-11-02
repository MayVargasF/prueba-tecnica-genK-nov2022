let btn = document.createElement("button");
btn.innerHTML = "1 botón";
document.body.appendChild(btn);

function handleMouseOver(ev) {
  ev.preventDefault();
  btn.innerHTML = "1 botóN";
}

btn.addEventListener("mouseover", handleMouseOver);

function handleMouseOut(ev) {
  ev.preventDefault();
  btn.innerHTML = "1 botón";
}

btn.addEventListener("mouseout", handleMouseOut);
