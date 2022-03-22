function Appointment(time, date, type, location) {
  this.time = time;
  this.date = date;
  this.type = type;
  this.location = location;
  this.qrCode = "media/qr-code.png";
}

// build appointment list
var apptList = [Appointment("8:50 AM", "Sunday, February 27, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                Appointment("9:00 AM", "Monday, February 28, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                Appointment("8:50 AM", "Tuesday, March 1, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                Appointment("8:55 AM", "Tuesday, March 1, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                Appointment("3:20 PM", "Tuesday, March 1, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                Appointment("2:30 PM", "Thursday, March 3, 2022", "Asymptomatic COVID-19 Test", "TCS Hall"),
                Appointment("2:40 PM", "Thursday, March 3, 2022", "Asymptomatic COVID-19 Test", "TCS Hall")]

function loadAppointmentListings() {
  console.log(apptList);
  // for(let i = 0; i < apptList.length; i++) {
  //   document.getElementById("appointment_listings").innerHTML = 
  // }
}