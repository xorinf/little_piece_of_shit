// Title: Implementation of Advanced JavaScript Concepts
// Aim: To enhance the existing Smart City Information Portal by applying advanced JavaScript concepts 
// for processing, validating, and storing citizen complaint information.

// 1. Complaint Categories
var complaintCategories = [
    "Road Damage",
    "Garbage",
    "Drainage",
    "Street Light",
    "Other"
];

// 2. Process entered citizen name and complaint text by removing unnecessary spaces and displaying name in proper format
function formatName(name) {
    var trimmed = name.trim().replace(/\s+/g, " ");
    var words = trimmed.split(" ");
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    return words.join(" ");
}

function formatText(text) {
    return text.trim().replace(/\s+/g, " ");
}

// 3. Register Complaint: validate, generate ID, record date, save in browser, handle errors
function registerComplaint() {
    var messageBox = document.getElementById("messageBox");
    var outputBox = document.getElementById("complaintOutput");

    // Handle a simple error during complaint processing and display a suitable message instead of stopping the webpage
    try {
        var rawName = document.getElementById("citizenName").value;
        var rawMobile = document.getElementById("mobileNumber").value;
        var category = document.getElementById("complaintCategory").value;
        var rawDesc = document.getElementById("complaintDescription").value;

        // Process name and text
        var citizenName = formatName(rawName);
        var description = formatText(rawDesc);
        var mobile = rawMobile.trim();

        // Check entered details before accepting complaint
        if (!citizenName) {
            throw new Error("Citizen Name is required.");
        }
        if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
            throw new Error("Please enter a valid 10-digit mobile number starting with 6-9.");
        }
        if (!category) {
            throw new Error("Please select a complaint category.");
        }
        if (!description || description.length < 5) {
            throw new Error("Complaint description must be at least 5 characters long.");
        }

        // Generate a simple Complaint ID automatically after successful registration
        var complaintId = "CMP" + Math.floor(100000 + Math.random() * 900000);

        // Record and display current date along with complaint
        var currentDate = new Date().toLocaleDateString();

        // Save citizen's name, Complaint ID and complaint category in the browser
        localStorage.setItem("citizenName", citizenName);
        localStorage.setItem("complaintId", complaintId);
        localStorage.setItem("complaintCategory", category);
        localStorage.setItem("mobileNumber", mobile);
        localStorage.setItem("complaintDate", currentDate);
        localStorage.setItem("complaintDescription", description);

        // Display suitable message and registered details inside the webpage
        messageBox.style.color = "green";
        messageBox.innerHTML = "&#10004; Complaint registered successfully!";

        var resultHtml = "<div class='service-details-card' style='display:block;'>" +
            "<h3 style='color: #003366; margin-top:0;'>Complaint Registration Details</h3>" +
            "<table class='details-table'>" +
            "<tr><th>Complaint ID</th><td><strong style='color:#003366;'>" + complaintId + "</strong></td></tr>" +
            "<tr><th>Registration Date</th><td>" + currentDate + "</td></tr>" +
            "<tr><th>Citizen Name</th><td>" + citizenName + "</td></tr>" +
            "<tr><th>Mobile Number</th><td>" + mobile + "</td></tr>" +
            "<tr><th>Complaint Category</th><td>" + category + "</td></tr>" +
            "<tr><th>Description</th><td>" + description + "</td></tr>" +
            "</table></div>";

        outputBox.innerHTML = resultHtml;

    } catch (error) {
        // Display a suitable message instead of stopping the webpage
        messageBox.style.color = "#cc0000";
        messageBox.innerHTML = "&#9888; Error: " + error.message;
        outputBox.innerHTML = "";
    }
}

// 4. View previously stored complaint from browser storage
function viewSavedComplaint() {
    var messageBox = document.getElementById("messageBox");
    var outputBox = document.getElementById("complaintOutput");

    try {
        var savedId = localStorage.getItem("complaintId");
        var savedName = localStorage.getItem("citizenName");
        var savedCategory = localStorage.getItem("complaintCategory");
        var savedDate = localStorage.getItem("complaintDate");
        var savedDesc = localStorage.getItem("complaintDescription");

        if (!savedId || !savedName) {
            throw new Error("No saved complaint found in the browser storage.");
        }

        messageBox.style.color = "#0055a5";
        messageBox.innerHTML = "&#8505; Retrieved saved complaint from browser storage.";

        var savedHtml = "<div class='service-details-card' style='display:block;'>" +
            "<h3 style='color: #003366; margin-top:0;'>Previously Saved Complaint</h3>" +
            "<table class='details-table'>" +
            "<tr><th>Complaint ID</th><td><strong style='color:#003366;'>" + savedId + "</strong></td></tr>" +
            "<tr><th>Registration Date</th><td>" + (savedDate || "N/A") + "</td></tr>" +
            "<tr><th>Citizen Name</th><td>" + savedName + "</td></tr>" +
            "<tr><th>Complaint Category</th><td>" + savedCategory + "</td></tr>" +
            "<tr><th>Description</th><td>" + (savedDesc || "N/A") + "</td></tr>" +
            "</table></div>";

        outputBox.innerHTML = savedHtml;

    } catch (error) {
        messageBox.style.color = "#cc0000";
        messageBox.innerHTML = "&#9888; Error: " + error.message;
        outputBox.innerHTML = "";
    }
}
