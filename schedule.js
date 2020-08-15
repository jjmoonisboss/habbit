
// grabbing the calendar id from html
const calendar = document.querySelector("#app-calendar ");

// SO it can keep counting up the days
console.log('hi');
const isWeekend = day =>{
  return day === 5 && 6 && 12 && 13 && 19 && 20 && 26 && 27;
}



for(let day= 1; day<= 30; day++){

  // const weekend = isWeekend(day);
  

  calendar.insertAdjacentHTML("beforeend",`<div class="day">${day}</div>`);
  // repeats for every day


}
