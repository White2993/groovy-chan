function homePageDisplay() {
  var userName = prompt("Please Enter a Username");
  document.getElementById("userNameDisplay").innerHTML = "Welcome, " + userName + "!"
  if(!userName) {
    document.getElementById("userNameDisplay").innerHTML = "Howdy, Pardner!"
  }
  localStorage.setItem('username', userName);
  console.log(localStorage.getItem('username'))
}

function userNameCheck() {
  if (localStorage.getItem('username') === "" || localStorage.getItem('username') === null) {
    homePageDisplay();
  } else {
    document.getElementById("userNameDisplay").innerHTML = "Welcome, " + localStorage.getItem('username') + "!"
  }
}

function profilePageDisplay() {
  document.getElementById("profileNameDisplay").innerHTML = "Congratulations " + localStorage.getItem('username')
}

function userNameClear() {
  localStorage.clear('username');
  location.reload();
}