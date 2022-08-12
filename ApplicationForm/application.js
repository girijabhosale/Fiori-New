var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
// var list6 = [];
var list7 = [];
var list8 = [];
var list9 = [];
var list10 = [];
var list11 = [];
var list12 = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(n);
  var gender;
  var dob;
  var dobYear;
  var dobMonth;
  var dobDay;
  var caf;
  var qual1;
  var qual2;
  var qual3;
  var qual4;
  var qual5;
  var qualifications = [];
  var hobbies =[];
  var hobbies1;
  var hobbies2;
  var hobbies3;
  var hobbies4;

  // console.log("")
  list1[x] = document.getElementById("fname").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("email").value;
  list4[x] = document.getElementById("mobileNo").value;
  // gender select and insert into table
  gender = document.getElementById("gender").value;
  // console.log("grnder value",list5[x] );
  var radioBtns = document.getElementsByClassName("radioBtn");
  for (var i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      gender = radioBtns[i].value;
      console.log("gender", gender);
    }
  }
  //
  // list6[x] = document.getElementById("DOB").value;
  dobYear = document.getElementById("dob-year").value;
  dobMonth = document.getElementById("dob-month").value;
  dobDay = document.getElementById("dob-day").value;
  // console.log("dobYear", dobYear);
  // console.log("dobMonth", dobMonth);
  // console.log("dobDate", dobDay);
  dob = dobYear + "/" + dobMonth + "/" + dobDay;

  list7[x] = document.getElementById("address").value;
  list8[x] = document.getElementById("city").value;
  list9[x] = document.getElementById("pincode").value;
  list10[x] = document.getElementById("state").value;
  list11[x] = document.getElementById("country").value;

  // list12[x] = document.getElementById("hobbies").value;
 hobbies1 = document.getElementById("hobbies1");
 hobbies2 = document.getElementById("hobbies2");
 hobbies3 = document.getElementById("hobbies3");
 hobbies4 = document.getElementById("hobbies4");
//  hobbies5 = document.getElementById("hobbies5");
 if(hobbies1.checked){
  hobbies.push('Drawing');
 }
 if(hobbies2.checked){
  hobbies.push('Singing');
 }
 if(hobbies3.checked){
  hobbies.push('Dancing');
 }
 if(hobbies4.checked){
  hobbies.push('Sketching');
 }
  
//  console.log("hobbies",hobbies);
//  if(hobbies5.checked){
//   hobbies.push('Drawing');
//  }

  // list13[x] = document.getElementById("qualification").value;
  qual1 = document.getElementById("qualification1");
  qual2 = document.getElementById("qualification2");
  qual3 = document.getElementById("qualification3");
  qual4 = document.getElementById("qualification4");
  qual5 = document.getElementById("qualification5");

  //  console.log("qualification",qual1.checked);
  //  console.log("qualification",qual2.checked);

  if (qual1.checked) {
    qualifications.push("High School (10Th)");
  }
  if (qual2.checked) {
    qualifications.push("Higher School (12th)");
  }
  if (qual3.checked) {
    qualifications.push("Graducation");
  }
  if (qual4.checked) {
    qualifications.push("Post Graducation");
  }
  if (qual5.checked) {
    qualifications.push("PhD");
  }
  // console.log("qualifications array", qualifications);

  // list14[x] = document.getElementById("caf").value;
  caf = document.getElementById("caf").value;
  var courseAF = document.getElementsByClassName("courseAF");
  for (var i = 0; i < courseAF.length; i++) {
    if (courseAF[i].checked) {
      caf = courseAF[i].value;
      // console.log("caf", caf);
    }
  }

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);
  var cel7 = NewRow.insertCell(6);
  var cel8 = NewRow.insertCell(7);
  var cel9 = NewRow.insertCell(8);
  var cel10 = NewRow.insertCell(9);
  var cel11 = NewRow.insertCell(10);
  var cel12 = NewRow.insertCell(11);
  var cel13 = NewRow.insertCell(12);
  var cel14 = NewRow.insertCell(13);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = gender;
  cel6.innerHTML = dob;
  cel7.innerHTML = list7[x];
  cel8.innerHTML = list8[x];
  cel9.innerHTML = list9[x];
  cel10.innerHTML = list10[x];
  cel11.innerHTML = list11[x];
  cel12.innerHTML = hobbies;
  cel13.innerHTML = qualifications;
  cel14.innerHTML = caf;

  n++;
  x++;



  alert("Submit");
}
