
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

  let name ="";
  if (day < 7 ){
   const dayName = getDayName(day);
   name = `<div class="name">${dayName}</div>`;
  }
  //^^ makes sure days of the week dont repeat


  console.log(getDayName(day))

  calendar.insertAdjacentHTML("beforeend",`<div class="day ${weekend ? "weekend" : ""} ${zero ? "zero" : ""}">${name}${day}</div>`);
  // repeats for every day
}

document.querySelectorAll("#app-calendar .day").forEach(day =>{
  day.addEventListener("click", event =>{
    event.currentTarget.classList.toggle("selected");
    //toggle gives you the option to select or unselect an option
  });
});
