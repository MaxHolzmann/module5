let hourNine = document.getElementById('hour-9'); 
let hourTen = document.getElementById('hour-10'); 
let hourEleven = document.getElementById('hour-11'); 
let hourTwelve = document.getElementById('hour-12'); 
let hourOne = document.getElementById('hour-13');
let hourTwo = document.getElementById('hour-14');
let hourThree = document.getElementById('hour-15'); 
let hourFour = document.getElementById('hour-16');   
let hourFive = document.getElementById('hour-17'); 

let hours = [hourNine, hourTen, hourEleven, hourTwelve, hourOne, hourTwo, hourThree, hourFour, hourFive];

$(document).ready(() => {

  dayjs.extend(window.dayjs_plugin_advancedFormat);


  for(let i = 9; i < hours.length + 9; i++) {

    console.log(i - 9);

    if(localStorage.getItem(i - 9) !== null) {
      console.log("item " + (i - 9) + " found")
      hours[i - 9].children[1].textContent = localStorage.getItem(i - 9);
    }

    if(i == dayjs().hour()) {
      hours[i - 9].classList.add("present");
      hours[i - 9].classList.remove('past', 'future')
    }
    if(i < dayjs().hour()){
      hours[i - 9].classList.add('past');
      hours[i - 9].classList.remove('present', 'future');
    }
    if(i > dayjs().hour()){
      hours[i - 9].classList.add('future');
      hours[i - 9].classList.remove('present', 'past');
    }

  }

  $("button").click((e) => {
    let targetButton = e.target.value;
    let sibling = e.target.previousElementSibling;
    localStorage.setItem(+targetButton, sibling.value.toString());
  })  
  

    $("#currentDay").text(dayjs().format('dddd' + ', ' + 'MMMM' + " Do" + ", h:mma" + ""));
});

