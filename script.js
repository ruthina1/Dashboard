let btn1 = document.getElementById("abtn1");
let btn2 = document.getElementById("abtn2");
let btn3 = document.getElementById("abtn3");
let btn4 = document.getElementById("abtn4");

let field1 = document.getElementById("field1");
let field2 = document.getElementById("field2");
let field3 = document.getElementById("field3");
let field4 = document.getElementById("field4");


let x = 0;
function btncolor(x){
    if (x==1){
        btn1.style.color="white";
        btn1.style.backgroundColor="blueviolet";
        btn1.style.borderTopLeftRadius="12px";
        field1.style.display="flex";
        field2.style.display="none";
        field3.style.display="none";
        field4.style.display="none";

        btn2.style.color="blueviolet";
        btn2.style.backgroundColor="white";

        btn3.style.color="blueviolet";
        btn3.style.backgroundColor="white";

        btn4.style.color="blueviolet";
        btn4.style.backgroundColor="white";

    }

    else if (x==2)
    {
        btn2.style.color="white";
        btn2.style.backgroundColor="blueviolet";
        field1.style.display="none";
        field2.style.display="flex";
        field3.style.display="none";
        field4.style.display="none";
        
        btn1.style.color="blueviolet";
        btn1.style.backgroundColor="white";

        btn3.style.color="blueviolet";
        btn3.style.backgroundColor="white";

        btn4.style.color="blueviolet";
        btn4.style.backgroundColor="white";

    }

    else if(x==3){
        btn3.style.color="white";
        btn3.style.backgroundColor="blueviolet";
        field1.style.display="none";
        field2.style.display="none";
        field3.style.display="flex";
        field4.style.display="none";

        btn1.style.color="blueviolet";
        btn1.style.backgroundColor="white";

        btn2.style.color="blueviolet";
        btn2.style.backgroundColor="white";

        btn4.style.color="blueviolet";
        btn4.style.backgroundColor="white";
    }
    else{
        btn4.style.color="white";
        btn4.style.backgroundColor="blueviolet";
        btn4.style.borderTopRightRadius="12px";
        field1.style.display="none";
        field2.style.display="none";
        field3.style.display="none";
        field4.style.display="flex";
        
        btn2.style.color="blueviolet";
        btn2.style.backgroundColor="white";

        btn3.style.color="blueviolet";
        btn3.style.backgroundColor="white";

        btn1.style.color="blueviolet";
        btn1.style.backgroundColor="white";
    }
}


let a = document.getElementById("acontainer1");
let b = document.getElementById("userr");
let c = document.getElementById("act");
function userm(){
  a.style.display="none";
  b.style.display="flex";
  d.style.display="none";

}

function dash(){
  a.style.display="flex";
  b.style.display="none";
  d.style.display="none";
}

let d= document.getElementById("report");
function report(){
  a.style.display="none";
  b.style.display="none";
  d.style.display="flex";
}


function updateProgressAndPie() {
  btn1.style.color="white";
        btn1.style.backgroundColor="blueviolet";
        btn1.style.borderTopLeftRadius="12px";
        field1.style.display="flex";
        field2.style.display="none";
        field3.style.display="none";
        field4.style.display="none";
  const statuses = document.querySelectorAll("td:nth-child(5) label");

  // Count occurrences of each status
  let activeCount = 0;
  let pendingCount = 0;
  let inactiveCount = 0;
  const totalProjects = statuses.length;

  statuses.forEach(status => {
      if (status.style.color === "green") {
          activeCount++;
      } else if (status.style.color === "yellow") {
          pendingCount++;
      } else if (status.style.color === "red") {
          inactiveCount++;
      }
  });

  // Calculate percentages
  const activePercentage = (activeCount / totalProjects) * 100;
  const pendingPercentage = (pendingCount / totalProjects) * 100;
  const inactivePercentage = (inactiveCount / totalProjects) * 100;

  // Update the progress bars and labels
  document.getElementById("activeBar").style.width = `${activePercentage}%`;
  document.getElementById("activeBar").textContent = `${activePercentage.toFixed(2)}%`;
  document.getElementById("activeLabel").textContent = `Active Projects: ${activePercentage.toFixed(2)}%`;

  document.getElementById("pendingBar").style.width = `${pendingPercentage}%`;
  document.getElementById("pendingBar").textContent = `${pendingPercentage.toFixed(2)}%`;
  document.getElementById("pendingLabel").textContent = `Pending Projects: ${pendingPercentage.toFixed(2)}%`;

  document.getElementById("inactiveBar").style.width = `${inactivePercentage}%`;
  document.getElementById("inactiveBar").textContent = `${inactivePercentage.toFixed(2)}%`;
  document.getElementById("inactiveLabel").textContent = `Inactive Projects: ${inactivePercentage.toFixed(2)}%`;

  // Update the pie chart with the same data
  updatePieChart(activePercentage, pendingPercentage, inactivePercentage);
}

// Function to update the pie chart
function updatePieChart(activePercentage, pendingPercentage, inactivePercentage) {
  const canvas = document.getElementById("pieChart");
  const ctx = canvas.getContext("2d");

  const total = 100; // Total is always 100% for the pie chart
  const centerX = 200, centerY = 200, radius = 100;
  
  let startAngle = 0;

  // Function to draw each section of the pie chart
  function drawSlice(value, color, label) {
      const sliceAngle = (value / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY); // Move to the center of the canvas
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle); // Draw arc for the slice
      ctx.closePath();
      ctx.fillStyle = color; // Set the color for the slice
      ctx.fill();

      // Calculate the position for the percentage label
      const labelAngle = startAngle + sliceAngle / 2; // Position in the middle of the slice
      const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7); // X position for the label
      const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7); // Y position for the label

      // Draw the percentage text in the middle of the slice
      ctx.fillStyle = "#000"; // Text color (black)
      ctx.font = "16px Arial"; // Set font size and type
      ctx.textAlign = "center"; // Center align the text
      ctx.textBaseline = "middle"; // Vertically center the text
      ctx.fillText(label, labelX, labelY); // Draw the label text at the calculated position

      startAngle += sliceAngle; // Update the starting angle for the next slice
  }

  // Clear the canvas before drawing new chart
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the slices for each project type
  drawSlice(activePercentage, "#4caf50", `${activePercentage.toFixed(2)}%`); // Active Projects (Green)
  drawSlice(pendingPercentage, "#ff9800", `${pendingPercentage.toFixed(2)}%`); // Pending Projects (Orange)
  drawSlice(inactivePercentage, "#f44336", `${inactivePercentage.toFixed(2)}%`); // Inactive Projects (Red)
}

// Call the function to update progress and pie chart when the page loads
window.onload = updateProgressAndPie;








/**
 // Simple User Store (for demo purposes)
let users = [];
let loggedInUser = null;

// Helper function to show registration form
function showRegistrationForm() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('registration-form').style.display = 'block';
  document.getElementById('error-message').style.display = 'none';
}

// Helper function to show login form
function showLoginForm() {
  document.getElementById('registration-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('error-message').style.display = 'none';
}

// Register user
document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  // Simple validation
  if (!username || !email || !password) {
    alert('All fields are required');
    return;
  }

  const newUser = { username, email, password, role };
  users.push(newUser);

  alert('Registration successful!');
  showLoginForm();
});

// Login user
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Simple validation
  if (!email || !password) {
    showErrorMessage('Please fill in all fields.');
    return;
  }

  loggedInUser = users.find(user => (user.email === email || user.username === email) && user.password === password);

  if (loggedInUser) {
    showDashboard();
  } else {
    showErrorMessage('Invalid email/username or password.');
  }
});

// Show error message
function showErrorMessage(message) {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.innerText = message;
  errorMessageElement.style.display = 'block';
}

// Show the appropriate dashboard
function showDashboard() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('registration-form').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';

  // Hide all dashboards
  document.getElementById('admin-dashboard').style.display = 'none';
  document.getElementById('manager-dashboard').style.display = 'none';
  document.getElementById('user-dashboard').style.display = 'none';

  // Show the dashboard based on the user's role
  if (loggedInUser.role === 'Admin') {
    document.getElementById('admin-dashboard').style.display = 'block';
  } else if (loggedInUser.role === 'Manager') {
    document.getElementById('manager-dashboard').style.display = 'block';
  } else if (loggedInUser.role === 'User') {
    document.getElementById('user-dashboard').style.display = 'block';
  }
}

// Logout user
function logout() {
  loggedInUser = null;
  document.getElementById('dashboard').style.display = 'none';
  showLoginForm();
}

 */

// Get the context of the canvas
const ctx = document.getElementById("mychart").getContext("2d");

// Define the labels for the chart
const labels = [
  "January",
  "February", // Fixed typo ("Feburary" to "February")
  "March",
  "April",
  "May",

];

// Define the dataset
const data = {
  labels: labels,
  datasets: [  // Fixed "dataset" to "datasets"
    {
      label: "Five Month Report",
      data: [45, 90, 33, 75, 55, 19],
      backgroundColor: [
        "rgba(255,99,132,0.2)",
        "rgba(255,159,64,0.2)",
        "rgba(255, 205,86,0.2)",
        "rgba(75,192,192,0.2)",
        "rgba(54,162,235,0.2)",
        "rgba(201,203,207,0.2)"
      ],
      borderColor: [
        "rgb(255,99,132)",
        "rgb(255,159,64)",
        "rgb(255, 205,86)",
        "rgb(75,192,192)",
        "rgb(54,162,235)",
        "rgb(201,203,207)"
      ],
      borderWidth: 1
    }
  ]
};


// Configuration for the chart
const config = {
  type: "bar",  // The type of chart (bar chart)
  data: data,   // The data for the chart
  options: {
    scales: {
    y: {
      beginAtZero:true
      }
    }
  }
};

// Create the chart
const mychart = new Chart(ctx, config);
