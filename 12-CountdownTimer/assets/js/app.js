const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

// TODO: temporary data generate
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 2, 15, 11, 59, 0); // hardcoded
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 59, 00);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minute = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway end on ${weekday}, ${date} ${month} ${year} ${hours}:${minute} PM`;

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

// get remaining time
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  /**
   * here ...
   * 1s = 1000ms
   * 1m = 60s
   * 1hr = 60min
   * 1d = 24ht
   */

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all value
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });

  // clear interval
  if (t < 0) {
    deadline.innerHTML = `<h4 class="expired">Sorry! this giveaway has expired</h4>`;
  }
}

// countdown time
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
