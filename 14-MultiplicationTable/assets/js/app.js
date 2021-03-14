// select elements
const tableForm = document.querySelector(".table-from");
const getValue = document.getElementById("amount");

tableForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const num = parseInt(getValue.value);

  if (isNaN(num)) {
    alert("Please enter input first. Thanks");
  } else if (num < 1) {
    alert("Less then or equals 0 numbers can't calculate.");
  } else {
    for (let i = 1; i <= 10; i++) {
      // console.log(num + " x " + i + " = " + num * i);

      document.querySelector(".append-result").innerHTML +=
        "<li>" + num + " x " + i + " = " + num * i + "<li/>";
    }
  }
});
