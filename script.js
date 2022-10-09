var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
  var genders = document.getElementsByName("gender");
  if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
     alert( "Please provide a valid year of birth! eg 2019" );
     document.myForm.year.focus() ;
     return false;
  }
  else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || 
  document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
     alert( "Please provide your month of birth! between 1 and 12" );
     document.myForm.month.focus() ;
     return false;
  }
  else if( document.myForm.date.value == "" || isNaN( document.myForm.month.value ) || 
  document.myForm.month.value.length != 2|| document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
     alert( "Please provide a valid date that you were born in!" );
     document.myForm.day.focus() ;
     return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false ) {
      alert("You must select male or female");
      return false;
  }   
  else{
    return true ;
  }
  
}

function calculateDayValue(){
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}

function getGender(){
  var genders = document.getElementsByName("gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }
  switch(gender){
    case "male":
      if (dayValue == 1){
        alert("You were born on " +dayNames[0] + " and Your akan name is " +maleNames[0]+"!");
      }
      else if(dayValue == 2){
        alert("You were born on "+dayNames[1] + " and Your akan name is " +maleNames[1]+"!");
      }
      else if(dayValue == 3){
        alert("You were born on " +dayNames[2]+ " and Your akan name is " +maleNames[2]+"!");
      }
      else if(dayValue == 4){
        alert("You were born on "+dayNames[3] +  " and Your akan name is " +maleNames[3]+"!");
      }
      else if(dayValue == 5){
        alert("You were born on "+dayNames[4] +  " and Your akan name is " +maleNames[4]+"!");
      }
      else if(dayValue == 6){
        alert("You were born on "+dayNames[5] +  " and Your akan name is " +maleNames[5]+"!");
      }
      else if(dayValue == -0){
        alert("You were born on "+dayNames[6] + " and Your akan name is " +maleNames[6]+"!");
      }
    break;
    case "female":
      if (dayValue == 1){
        alert("You were born on "+dayNames[0] + " and Your akan name is  " +femaleNames[0]+"!");
      }
      else if(dayValue == 2){
        alert("You were born on " +dayNames[1] + " and Your akan name is " +femaleNames[1]+"!");
      }
      else if(dayValue == 3){
        alert("You were born on " +dayNames[2] + " and Your akan name is " +femaleNames[2]+"!");
      }
      else if(dayValue == 4){
        alert("You were born on " +dayNames[3] + " and Your akan name is " +femaleNames[3]+"!");
      }
      else if(dayValue == 5){
        alert("You were born on " +dayNames[4] + " and Your akan name is " +femaleNames[4]+"!");
      }
      else if(dayValue == 6){
        alert("You were born on " +dayNames[5] + " and Your akan name is " + femaleNames[5]+"!");
      }else if(dayValue == -0){
        alert("You were born on " +dayNames[6] + " and Your akan name is " +femaleNames[6]+"!");
      }
    break
    default:
          
  }
}
function findName(){
  dayValue = calculateDayValue();
  getGender();
}
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":"
            + min + ":" + sec + am_pm;
 
    document.getElementById("clock")
            .innerHTML = currentTime;
}

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}