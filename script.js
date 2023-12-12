const tit1 = document.getElementById("custom-title");
const brain = document.querySelector(".brain-custom");
const par = document.getElementById("para1");
const tit2 = document.getElementById("custom-te");
const btn = document.getElementById("btn1");
const list = document.querySelector("ul");

//  Objectif créer un élement  == "réussi"
const p = document.createElement("span");

//  Créer un élément enfant au body = "réussi"
document.body.appendChild(p);

let lastScroll = 0;

// evenement scroll
window.addEventListener("scroll", (e) => {
  if (e.y < lastScroll) {
    let u = e.y + "px";
  } else {
    let o = e.y + "-600px";
  }
});

// test fonctionnalité method()
//  change background btn
tit1.addEventListener("click", () => {
  btn.style.background = "white";
  btn.style.color = "blue";
});

brain.addEventListener("click", () => {
  let a = 9;
  let b = 0;
  if (a > b) {
    tit1.style.background = "red";
    tit1.style.padding = "10px";
  } else {
    null;
  }
});

list.addEventListener("click", () => {
  tit2.innerHTML = "15% Conscient et 85% Inconscient ";
});

btn.addEventListener("mouseup", () => {
  par.innerHTML = "C''est vous qui êtes à bord";
});
