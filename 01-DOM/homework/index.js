const divs = document.querySelectorAll(".divNumbers");
​
console.log(divs);
​
divs.forEach((div) => {
  div.addEventListener("click", function () {
    console.log(div.style);
    let amarillo = "rgb(254, 228, 64)";
    let grisRosa = "rgb(245, 235, 224)";
    if (div.style.backgroundColor === amarillo) {
      div.style.backgroundColor = grisRosa;
    } else {
      div.style.backgroundColor = amarillo;
    }
  });
});