// set initial count
let count = 0;

// seletct value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

function chaneSpanColor() {
  let newColor = "";
  if (count > 0) newColor = "green";
  else if (count < 0) newColor = "red";
  else newColor = "#222";

  value.style.color = newColor;
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) count--;
    else if (styles.contains("increase")) count++;
    else if (styles.contains("reset")) count = 0;
    value.textContent = count;

    chaneSpanColor();
  });
});
