// select elements
const tableFrom = document.querySelector(".table-from");
const amount = document.getElementById("amount");
const result = document.querySelector(".table-text");

// define variable
var e_text = "Sorry! if (number <= 0) null value return.";

// event listener add
tableFrom.addEventListener("submit", function (e) {
  e.preventDefault();

  // get value
  const num = parseInt(amount.value);

  if (num <= 0) {
    result.innerHTML = `<p class="result">${e_text}</p>`;
  } else if (isNaN(num)) {
    alert("Hello, Please input number first then click enter.");
  } else {
    let temp;
    for (let i = 1; i <= 10; i++) {
      console.log(num + " x " + i + " = " + num * i);
      temp = num + " x " + i + " = " + num * i + "\n";

      result.innerHTML = `<p class="result">${temp}</p>`;
    }
  }
});
