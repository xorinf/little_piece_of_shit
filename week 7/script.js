// Week 7: Implementation of Basic JavaScript Techniques for Smart City Information Portal
// Aim: To implement basic JavaScript concepts such as variables, data types, operators,
// input/output methods, and conditional statements to add interactivity.

// Function to process citizen portal form data
function processCitizenPortal() {
    // Extracting user input values from the DOM
    var nameInput = document.getElementById("citizenName").value.trim();
    var ageInput = document.getElementById("citizenAge").value;
    var wardInput = document.getElementById("wardNumber").value;
    var prevReadingInput = document.getElementById("prevReading").value;
    var currReadingInput = document.getElementById("currReading").value;

    var resultSection = document.getElementById("resultSection");
    var errorBox = document.getElementById("errorBox");

    // Clear previous error messages
    errorBox.style.display = "none";
    errorBox.innerHTML = "";

    // Input validation for citizen name
    if (!nameInput) {
        showError("Please enter the citizen name.");
        return;
    }

    // Input validation for age
    if (ageInput === "" || isNaN(ageInput) || Number(ageInput) < 0 || Number(ageInput) > 125) {
        showError("Please enter a valid age between 0 and 125.");
        return;
    }

    // Input validation for ward number
    if (wardInput === "" || isNaN(wardInput)) {
        showError("Please enter a valid numeric ward number.");
        return;
    }

    // Input validation for previous meter reading
    if (prevReadingInput === "" || isNaN(prevReadingInput) || Number(prevReadingInput) < 0) {
        showError("Please enter a valid previous water meter reading.");
        return;
    }

    // Input validation for current meter reading
    if (currReadingInput === "" || isNaN(currReadingInput) || Number(currReadingInput) < 0) {
        showError("Please enter a valid current water meter reading.");
        return;
    }

    // Declaring variables and parsing data types
    var citizenName = String(nameInput);
    var citizenAge = parseInt(ageInput, 10);
    var wardNumber = parseInt(wardInput, 10);
    var prevReading = parseFloat(prevReadingInput);
    var currReading = parseFloat(currReadingInput);

    // Checking if ward number is valid (Valid wards are 1 to 50)
    var isWardValid = false;
    var wardStatusMessage = "";
    var wardBadgeHtml = "";

    if (wardNumber >= 1 && wardNumber <= 50) {
        isWardValid = true;
        wardStatusMessage = "Ward No. " + wardNumber + " is a valid municipal ward.";
        wardBadgeHtml = "<span class=\"badge badge-success\">Valid (Ward " + wardNumber + ")</span>";
    } else {
        isWardValid = false;
        wardStatusMessage = "Ward No. " + wardNumber + " is INVALID. Valid ward numbers are between 1 and 50.";
        wardBadgeHtml = "<span class=\"badge badge-danger\">Invalid Ward (" + wardNumber + ")</span>";
    }

    // Checking Senior Citizen Service eligibility based on age (Age >= 60)
    var isSeniorEligible = false;
    var seniorStatusMessage = "";
    var seniorBadgeHtml = "";

    if (citizenAge >= 60) {
        isSeniorEligible = true;
        seniorStatusMessage = "Citizen is " + citizenAge + " years old and ELIGIBLE for Senior Citizen Service.";
        seniorBadgeHtml = "<span class=\"badge badge-success\">Eligible (Age " + citizenAge + ")</span>";
    } else {
        isSeniorEligible = false;
        seniorStatusMessage = "Citizen is " + citizenAge + " years old and NOT ELIGIBLE for Senior Citizen Service (Requires age 60 or above).";
        seniorBadgeHtml = "<span class=\"badge badge-info\">Not Eligible (Age " + citizenAge + ")</span>";
    }

    // Checking if current meter reading is greater than or equal to previous reading
    if (currReading < prevReading) {
        showError("Current water meter reading cannot be less than previous reading.");
        return;
    }

    // Calculating water units consumed using arithmetic subtraction operator
    var unitsConsumed = currReading - prevReading;
    var consumptionCategory = "";
    var consumptionBadge = "";

    // Determining water consumption slab
    if (unitsConsumed <= 15) {
        consumptionCategory = "Low Domestic Consumption (Subsidized)";
        consumptionBadge = "<span class=\"badge badge-success\">" + unitsConsumed.toFixed(1) + " Units (Normal)</span>";
    } else if (unitsConsumed <= 30) {
        consumptionCategory = "Standard Domestic Consumption";
        consumptionBadge = "<span class=\"badge badge-info\">" + unitsConsumed.toFixed(1) + " Units (Moderate)</span>";
    } else if (unitsConsumed <= 50) {
        consumptionCategory = "Moderate to High Domestic Consumption";
        consumptionBadge = "<span class=\"badge badge-warning\">" + unitsConsumed.toFixed(1) + " Units (High)</span>";
    } else {
        consumptionCategory = "High Domestic Consumption (Surcharge Applicable)";
        consumptionBadge = "<span class=\"badge badge-danger\">" + unitsConsumed.toFixed(1) + " Units (Very High)</span>";
    }

    // Displaying personalized welcome message and results on the web page
    document.getElementById("outputWelcome").innerHTML =
        "<h4>Welcome, " + escapeHtml(citizenName) + "!</h4>" +
        "<p>Thank you for accessing the Smart City Information Portal.</p>";

    // Displaying ward status
    document.getElementById("outputWard").innerHTML =
        "<div class=\"info-card-label\">Municipal Ward Status</div>" +
        "<div class=\"info-card-value\">" + wardBadgeHtml + "</div>";
    document.getElementById("outputWardMsg").textContent = wardStatusMessage;

    // Displaying senior citizen service eligibility
    document.getElementById("outputSenior").innerHTML =
        "<div class=\"info-card-label\">Senior Citizen Service</div>" +
        "<div class=\"info-card-value\">" + seniorBadgeHtml + "</div>";
    document.getElementById("outputSeniorMsg").textContent = seniorStatusMessage;

    // Displaying water consumption details
    document.getElementById("outputWater").innerHTML =
        "<div class=\"info-card-label\">Water Consumption</div>" +
        "<div class=\"info-card-value\">" + consumptionBadge + "</div>";

    document.getElementById("outputWaterSummary").innerHTML =
        "<p><strong>Previous Meter Reading:</strong> " + prevReading.toFixed(1) + " KL</p>" +
        "<p><strong>Current Meter Reading:</strong> " + currReading.toFixed(1) + " KL</p>" +
        "<p><strong>Total Units Consumed:</strong> <span class=\"consumption-metric\">" + unitsConsumed.toFixed(1) + " Units</span></p>" +
        "<p><strong>Assessment Category:</strong> " + consumptionCategory + "</p>";

    // Making the result container visible
    resultSection.style.display = "block";
    resultSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Function to run interactive prompt and alert assistant mode
function runPromptAssistant() {
    // Accepting citizen name using prompt()
    var citizenName = prompt("Smart City Information Portal\n\nPlease enter Citizen Name:");
    if (!citizenName || citizenName.trim() === "") {
        alert("Operation cancelled or empty name.");
        return;
    }
    citizenName = citizenName.trim();

    // Accepting citizen age using prompt()
    var ageInput = prompt("Welcome " + citizenName + "!\nPlease enter Citizen Age:");
    if (ageInput === null) return;
    var citizenAge = parseInt(ageInput, 10);
    if (isNaN(citizenAge) || citizenAge < 0 || citizenAge > 125) {
        alert("Invalid age entered!");
        return;
    }

    // Displaying personalized welcome message using alert()
    alert("Welcome, " + citizenName + "!\nThank you for accessing the Municipal Corporation Smart City Portal.");

    // Accepting ward number using prompt()
    var wardInput = prompt("Please enter your Ward Number (1 to 50):");
    if (wardInput === null) return;
    var wardNumber = parseInt(wardInput, 10);

    // Validating ward number
    var wardStatus = "";
    if (!isNaN(wardNumber) && wardNumber >= 1 && wardNumber <= 50) {
        wardStatus = "Ward " + wardNumber + " is VALID.";
    } else {
        wardStatus = "Ward " + wardNumber + " is INVALID (Valid ward numbers are 1 to 50).";
    }

    // Determining senior citizen service eligibility
    var seniorStatus = "";
    if (citizenAge >= 60) {
        seniorStatus = "ELIGIBLE for Senior Citizen Service (Age: " + citizenAge + ")";
    } else {
        seniorStatus = "NOT ELIGIBLE for Senior Citizen Service (Age: " + citizenAge + " < 60)";
    }

    // Accepting water meter readings using prompt()
    var prevStr = prompt("Enter Previous Month Water Meter Reading:");
    if (prevStr === null) return;
    var prevReading = parseFloat(prevStr);

    var currStr = prompt("Enter Current Month Water Meter Reading:");
    if (currStr === null) return;
    var currReading = parseFloat(currStr);

    if (isNaN(prevReading) || isNaN(currReading) || prevReading < 0 || currReading < 0) {
        alert("Invalid meter reading values entered!");
        return;
    }

    if (currReading < prevReading) {
        alert("Current meter reading cannot be less than previous reading!");
        return;
    }

    // Calculating water units consumed
    var unitsConsumed = currReading - prevReading;

    // Displaying calculated consumption and full summary using alert()
    var report = "Smart City Citizen Summary Report\n\n" +
        "Citizen Name: " + citizenName + "\n" +
        "Citizen Age: " + citizenAge + "\n" +
        "Ward Number: " + wardNumber + "\n\n" +
        "Ward Status: " + wardStatus + "\n" +
        "Senior Service: " + seniorStatus + "\n\n" +
        "Previous Reading: " + prevReading + "\n" +
        "Current Reading: " + currReading + "\n" +
        "Units Consumed: " + unitsConsumed.toFixed(2) + " Units";

    alert(report);
}

// Function to display error message on UI
function showError(msg) {
    var errorBox = document.getElementById("errorBox");
    if (errorBox) {
        errorBox.textContent = msg;
        errorBox.style.display = "block";
        errorBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
        alert(msg);
    }
}

// Function to reset the form and result display
function resetPortalForm() {
    var form = document.getElementById("citizenForm");
    if (form) form.reset();
    var resultSection = document.getElementById("resultSection");
    if (resultSection) resultSection.style.display = "none";
    var errorBox = document.getElementById("errorBox");
    if (errorBox) {
        errorBox.style.display = "none";
        errorBox.innerHTML = "";
    }
}

// Function to escape HTML special characters
function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function (m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}
