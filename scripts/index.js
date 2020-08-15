function userNamePrompt() {
  var userName = prompt("Please Enter a Username");
}

function homePageDisplay() {
  var userName = prompt("Please Enter a Username");
  document.getElementById("userNameDisplay").innerHTML = "Welcome, " + userName + "!"
  if(!userName) {
    document.getElementById("userNameDisplay").innerHTML = "Howdy, Pardner!"
  }
}