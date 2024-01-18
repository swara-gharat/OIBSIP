function Show(id) {
    if (document.getElementById(id).style.display == "none") {
      document.getElementById(id).style.display = "block";
    } else {
      document.getElementById(id).style.display = "none";
    }
  }
  
  //Submit Button
  function Verify() {
    var userRef = "ssurthi00";
    var passRef = "queen of luna ";
  
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef || pass == passRef) {
      alert("Successfully Completed");
    } else {
      alert("Sorry Something Went Wrong");
    }
  }