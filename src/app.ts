import data from "./data.json" assert { type: "json" }; //imports array
const column: NodeListOf<HTMLElement> = document.querySelectorAll(".column"); //creates array with item .column
const amount: NodeListOf<HTMLElement> = document.querySelectorAll(".amount"); //creates array with item .amount

const createChart = () => {
  for (let i = 0; i <= 6; i++) {
    column[i].style.height = `${data[i].amount * 2}px`; //sets height of column in chart for every item from data.json
    amount[i].innerHTML = `$${data[i].amount}`; //sets number to amount from data.json
  }
};

column.forEach((column) => {
  //take all columns
  column.addEventListener("click", function action() {
    //adds event listener
    column.classList.toggle("active"); //toggle class for clicked object
    money(); //starts function
  });
});

const money = () => {
  for (let i = 0; i <= 6; i++) {
    //iterates through every column and amount
    if (column[i].classList.contains("active") == true) {
      //checks if there is class 'active'
      amount[i].style.opacity = "1"; //if it is or not sets opacity
    } else {
      amount[i].style.opacity = "0";
    }
  }
};

window.addEventListener("load", myInit, true);
function myInit() {
  createChart();
} //event listener for multiple functions, planned to use it but there were no need to
