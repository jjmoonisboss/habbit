
// grabbing the calendar id from html
const calendar = document.querySelector("#app-calendar ");

// SO it can keep counting up the days
console.log('hi');
const isWeekend = day =>{
 return day % 7 === 5 || day % 7 === 6;
}

const isZero = day =>{
  return day === 0;
}
// im trying to blank out the zero

for(let day= 0; day<= 30; day++){

  const weekend = isWeekend(day);
  const zero = isZero(day);
  

  calendar.insertAdjacentHTML("beforeend",`<div class="day ${weekend ? "weekend" : ""} ${zero ? "zero" : ""}">${day}</div>`);
  // repeats for every day


}
