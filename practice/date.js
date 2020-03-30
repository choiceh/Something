const dateContainer = document.querySelector(".js_date"),
  dateTitle = dateContainer.querySelector(".date_f");

function getTime() {
  const date = new Date();
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const days = date.getDate();
  const month = date.getMonth();
  dateTitle.innerText = `${days}
   ${months[month]}`;
}

function init() {
  getTime();
}
init();
