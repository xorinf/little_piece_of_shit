// Title: Implementation of Basic JavaScript Techniques for a Smart City Information Portal
// Aim: To implement basic JavaScript concepts such as variables, data types, operators,
// input/output methods, and conditional statements to add interactivity to a Municipal Corporation Smart City Information Portal.

// Function to process citizen details and calculate water consumption
function processCitizenPortal() {
    // 1. Accepts citizen name and age
    var name = document.getElementById("citizenName").value;
    var age = parseInt(document.getElementById("citizenAge").value);

    // 2. Personalized welcome message
    var welcomeMsg = "Welcome " + name + " to the Smart City Information Portal!";

    // 3. Accepts ward number
    var ward = parseInt(document.getElementById("wardNumber").value);

    // 4. Checks whether ward number is valid (1 to 50)
    var wardStatus = "";
    if (ward >= 1 && ward <= 50) {
        wardStatus = "Ward " + ward + " is a VALID ward number.";
    } else {
        wardStatus = "Ward " + ward + " is an INVALID ward number. (Valid ward numbers are 1 to 50)";
    }

    // 5. Determines Senior Citizen Service eligibility based on age (Age >= 60)
    var seniorStatus = "";
    if (age >= 60) {
        seniorStatus = "Eligible for Senior Citizen Service (Age: " + age + ")";
    } else {
        seniorStatus = "Not Eligible for Senior Citizen Service (Age: " + age + ")";
    }

    // 6. Accepts water-meter readings and calculates units consumed
    var prev = parseFloat(document.getElementById("prevReading").value);
    var curr = parseFloat(document.getElementById("currReading").value);
    var unitsConsumed = curr - prev;

    // 7. Displays the calculated results and summary
    var resultHtml = "<h4>" + welcomeMsg + "</h4>" +
        "<p><strong>Citizen Name:</strong> " + name + "</p>" +
        "<p><strong>Citizen Age:</strong> " + age + "</p>" +
        "<p><strong>Ward Status:</strong> " + wardStatus + "</p>" +
        "<p><strong>Senior Citizen Status:</strong> " + seniorStatus + "</p>" +
        "<p><strong>Previous Meter Reading:</strong> " + prev + "</p>" +
        "<p><strong>Current Meter Reading:</strong> " + curr + "</p>" +
        "<p><strong>Calculated Water Consumption:</strong> " + unitsConsumed + " units</p>";

    document.getElementById("output").innerHTML = resultHtml;
    document.getElementById("resultSection").style.display = "block";
}
