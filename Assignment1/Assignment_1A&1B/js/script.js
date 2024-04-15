const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});


function validateForm() {
  var name = document.getElementById('signupUsername').value;
  var email = document.getElementById('signupEmail').value;
  var password = document.getElementById('signupPassword').value;
  var confirmPassword = document.getElementById('signupConfirmPassword').value;
  // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
      alert("Enter valid Email");
      return false;
  }
  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert('Please fill in all fields.');
    return false;
  }
  if (password.length < 8) {
    alert("Password must be atleast 8 characters long");
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    alert("Password must contain a uppercase letter");
    return false;
  }
  if (!/[a-z]/.test(password)) {
    alert("Password must contain a lower letter");
    return false;
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    alert("Password must contain a spercial character");      
    return false;
  }
  if (password != confirmPassword) {
    alert("Password doesnt match");
    return false;
  }
  return true;
}

function submitForm() {
  if (validateForm()) {
    alert("Form Submitted");
  }
}
