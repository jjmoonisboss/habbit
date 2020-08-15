// grabbing the calendar id from html
const calendar = document.querySelector("#app-calendar ");

// SO it can keep counting up the days
for(let day=1; day<= 30; day++){

  calendar.insertAdjacentHtml("beforeend",'<div class></div>' );
}
