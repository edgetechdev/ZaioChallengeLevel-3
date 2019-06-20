const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const userName = document.getElementById("userName");
const surName = document.getElementById("surName");
const age = document.getElementById("age");
//const createPassword = document.getElementById("createPassword");
//const confirmPassword = document.getElementById("confirmPassword");
const password = document.getElementById("Password");

signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signInButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);

function check_info() {
  var cp = document.getElementById("createPassword").value;
  var con = document.getElementById("confirmPassword").value;

  if (cp == "" || con == "") {
    alert("check fields");
    return false;
  }
  else if(cp != con){
    alert("no match");
  }
  else{
    alert("matches");
  }
}
