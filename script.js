function check(email, password) {
  if(email.length>=3 && email.includes("@") && email.includes(".") && password.length>=8) {
      return true;
  }
  return false;
}

function solve() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  
  let para = document.querySelectorAll("p");

  if(check(email,password)) {
    para.forEach(p => p.style.display = "none");
    document.querySelector("div").style.display = "block";
  }
  else {
    para.forEach(p => p.style.display = "block");
      document.querySelector("div").style.display = "none";
  }
}

function signup() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  if (check(email, pass)) {
    let verify = window.confirm("Are you sure you want to submit?");
    if (verify) {
      alert("successful signup!");
    } else {
      location.reload;
    }
  } 

}