function Appointment(time, date, type, location) {
  this.time = time;
  this.date = date;
  this.type = type;
  this.location = location;
  this.qrCode = "media/qr-code.png";
}

// localStorage.setItem("upcomingAppts", JSON.stringify([]))

var upcomingAppts = [];
localStorage.setItem("numInCart", 2);

// build appointment list
var apptList = [new Appointment("8:50 AM", "Sunday, February 27, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                new Appointment("9:00 AM", "Monday, February 28, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                new Appointment("8:50 AM", "Tuesday, March 1, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                new Appointment("8:55 AM", "Tuesday, March 1, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                new Appointment("3:20 PM", "Tuesday, March 1, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                new Appointment("2:30 PM", "Thursday, March 3, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                new Appointment("2:40 PM", "Thursday, March 3, 2022", "Asymptomatic COVID-19 Test", "TCS Hall")]

// Q: How to change 'this' into the entire object?
function loadAppointmentListings() {
  for(let i = 0; i < apptList.length; i++) {
    document.getElementById("slots").innerHTML += 
      '<td class="button">' + '<a href="appointment-details.html" onclick="saveNewAppt('+i+')">' + apptList[i].time + '</a></td>'
  }
}

function saveNewAppt(selected_id) {
  var time = apptList[selected_id].time;
  localStorage.setItem("numInCart", JSON.parse(localStorage.getItem("numInCart")) + 1);
  alert("New appointment for: " + time + ". Now have " + localStorage.getItem("numInCart") + " upcoming appointments.");
  // store object

}

function loadAppointmentDetails() {
  appt = JSON.parse(localStorage.getItem("newAppt"));
  console.log(appt);
  document.getElementById("type").innerHTML = appt.type;
  document.getElementById("date-time").innerHTML = appt.date + " at " + appt.time;
  document.getElementById("location").innerHTML = appt.location;
}

function loadCart() {
  document.getElementById("num-in-cart").innerHTML = localStorage.getItem("numInCart");
}