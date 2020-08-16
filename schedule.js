
// grabbing the calendar id from html
const calendar = document.querySelector("#app-calendar ");

const isWeekend = day =>{
  // 5 when its saturday and 6 when its sunday
 return day % 7 === 3 || day % 7 === 4;
}
const isZero = day =>{
  return day === 0;
}

// SO it can keep counting up the days
console.log('hi');

// im trying to blank out the zero

for(let day= 0; day<= 31; day++){

  const weekend = isWeekend(day);
  const zero = isZero(day);
  
  const getDayName = day =>{
    const date =  new Date(Date.UTC(2020, 12, day));

    return new Intl.DateTimeFormat("en-US" , {weekday: "short"})
    .format(date);
}

const dayName = getDayName(day);



  console.log(getDayName(day))

  calendar.insertAdjacentHTML("beforeend",`<div class="day ${weekend ? "weekend" : ""} ${zero ? "zero" : ""}"><div class="name">${dayName}</div>${day}</div>`);
  // repeats for every day


}
