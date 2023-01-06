let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let date = document.getElementById("input-date");
let myDays;


function generateYearRange(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}

createYear = generateYearRange(1970, 2050);

document.getElementById("year").innerHTML = createYear;



let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tableEl = document.getElementById("calendar-body");  // body of the calendar

// clearing all previous cells

    tableEl.innerHTML = "";

// filing data of month and year in the page using DOM.

    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

// creating all cells

    let date = 1;
    for (let i = 0; i < 6; i++) {

// creates a table row

        let row = document.createElement("tr");

//creating individual cells, filing them up with data.

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tableEl.appendChild(row); // appending each row into calendar body.
    }

}

//add btn coding
function date5(myDays) {
    const value = document.getElementById("value").value;
    const ele = document.getElementsByClassName(value);
    const allEle = document.getElementsByClassName("sel");
    if (value >= myDays || value < 1) {
      alert("Please enter a valid date!");
    } else {
      if (allEle.length >= 1) {
        allEle[0].classList.remove("sel");
        ele[0].className += " sel";
      } else {
        if (ele[0].className.split(" ").includes("sel")) {
          ele[0].classList.remove("sel");
          ele[0].className += " white";
        } else {
          ele[0].className += " sel";
        }
      }
    }
  }
  const btn = document.getElementsByClassName("button1");
  btn[0].addEventListener("click", () => date5(myDays));
  const elements = document.getElementsByTagName("td");
  function daysInMonth(iMonth, iYear) {
    myDays = 32 - new Date(iYear, iMonth, 32).getDate();
    return myDays;
  }
