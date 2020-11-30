let token = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      token--;
    } else if (styles.contains("increase")) {
      token++;
    } else {
      token = 0;
    }

    if (token > 0) {
      value.style.color = "blue";
    }
    if (token < 0) {
      value.style.color = "red";
    }
    if (token === 0) {
      value.style.color = "white";
    }
    value.textContent = token;
  });
});