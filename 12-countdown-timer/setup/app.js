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

const giveaway = document.querySelector('.giveaway');
const h4s = document.querySelectorAll('.deadline-format h4');
const deadline = document.querySelector('.deadline');

// These lines to add 10 days on our counter sothat when someone views our project will see it works, in actual project you musn't use it
const tempDate = new Date();
const tempDayOfMonth = tempDate.getDate();
const tempMonth = tempDate.getMonth();
const tempYear = tempDate.getFullYear();

const futureDate = new Date(tempYear,tempMonth,tempDayOfMonth + 10,9,14,59);
// end of our code

// uncomment the comming line
// const futureDate = new Date(2023,2,23,9,14,59);
const dayOfWeek = futureDate.getDay();
const dayOfMonth = futureDate.getDate();
const month = futureDate.getMonth();
const years = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

giveaway.textContent = `giveaway ends on ${weekdays[dayOfWeek]}, ${dayOfMonth} ${months[month]} ${years}, ${formatAMPM(futureDate)}`

let countDown = setInterval(offerExpiration, 1000);

function offerExpiration() {
  const currentDate = new Date();
  const diff = futureDate.getTime() - currentDate.getTime();
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  const days = Math.floor(diff / oneDay);
  const hours = Math.floor(diff % oneDay /oneHour);
  const minutes = Math.floor(diff % oneHour /oneMinute);
  const seconds = Math.floor(diff % oneMinute /1000);
  const array = [days,hours,minutes,seconds];
  h4s.forEach((h4,i)=>{
    if (array[i]<10) {
      array[i] = `0${array[i]}`
    }
    h4.textContent = array[i]
  })
  if (diff<0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}
offerExpiration();


// This function for converting to 12 hour format =>

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
// console.log(formatAMPM(futureDate))