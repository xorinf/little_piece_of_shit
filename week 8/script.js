// Title: Implementation of JavaScript Functions, Arrays, Objects, DOM and Events
// Aim: To enhance the existing Smart City Information Portal by implementing basic JavaScript functions, 
// arrays, objects, DOM manipulation, and events.

// 1. Maintain the names of five city services in an Array
var serviceNames = [
    "Hospital",
    "Fire Station",
    "Police Station",
    "Public Library",
    "Bus Station"
];

// 2. Store basic information about each city service using JavaScript Objects
var cityServicesData = {
    "Hospital": {
        name: "City Central Multi-Speciality Hospital",
        location: "Sector 4, Healthcare Boulevard",
        workingHours: "24 Hours (Emergency) / 8:00 AM - 8:00 PM (OPD)",
        contactNumber: "+91-040-23456701"
    },
    "Fire Station": {
        name: "Central Fire & Emergency Rescue Station",
        location: "Industrial Area, Ring Road Phase-1",
        workingHours: "24 Hours (Emergency Response)",
        contactNumber: "+91-040-23456702"
    },
    "Police Station": {
        name: "Metropolitan Police Head Station",
        location: "Civic Center, Main Avenue",
        workingHours: "24 Hours (Public Assistance & Patrol)",
        contactNumber: "+91-040-23456703"
    },
    "Public Library": {
        name: "Smart City Central Digital & Public Library",
        location: "Knowledge Park, University Road",
        workingHours: "9:00 AM - 7:00 PM (Tue - Sun, Closed Mondays)",
        contactNumber: "+91-040-23456704"
    },
    "Bus Station": {
        name: "Inter-State Central Bus Terminal (ISBT)",
        location: "Transport Hub, Central Railway Road",
        workingHours: "24 Hours (Bus Operations)",
        contactNumber: "+91-040-23456705"
    }
};

// 3. Function to display a simple welcome message when citizen interacts with the service section
function displayWelcomeMessage() {
    var welcomeDiv = document.getElementById("welcomeMessage");
    if (welcomeDiv) {
        welcomeDiv.innerHTML = "<strong>Notification:</strong> Welcome to Smart City Services! Explore and access essential municipal facilities below.";
        welcomeDiv.style.display = "block";
    }
}

// 4. Function to display available city services on the webpage (DOM Manipulation)
function showServices() {
    // Show welcome message upon interaction
    displayWelcomeMessage();

    var servicesListContainer = document.getElementById("servicesList");
    var serviceSelect = document.getElementById("serviceSelect");
    var servicesDisplayArea = document.getElementById("servicesDisplayArea");

    if (!servicesListContainer || !serviceSelect) return;

    // Build the HTML list of available services from the array
    var listHtml = "<ul class='service-badges-list'>";
    for (var i = 0; i < serviceNames.length; i++) {
        var service = serviceNames[i];
        listHtml += "<li class='service-badge' onclick='selectAndShowDetails(\"" + service + "\")'>" +
                    "<strong>" + (i + 1) + ". " + service + "</strong>" +
                    " <span class='badge-hint'>(Click to inspect)</span></li>";
    }
    listHtml += "</ul>";

    servicesListContainer.innerHTML = listHtml;

    // Populate the dropdown menu if not already populated
    serviceSelect.innerHTML = "<option value=''>-- Select a City Service --</option>";
    for (var j = 0; j < serviceNames.length; j++) {
        var option = document.createElement("option");
        option.value = serviceNames[j];
        option.textContent = (j + 1) + ". " + serviceNames[j];
        serviceSelect.appendChild(option);
    }

    // Enable the dropdown and show the container
    serviceSelect.disabled = false;
    servicesDisplayArea.style.display = "block";

    // Update status indicator
    var statusSpan = document.getElementById("servicesStatus");
    if (statusSpan) {
        statusSpan.innerHTML = "<span style='color: green; font-weight: bold;'>&#10003; 5 Services Loaded Successfully</span>";
    }
}

// 5. Function to display basic information of the selected service inside the webpage
function showServiceDetails() {
    var serviceSelect = document.getElementById("serviceSelect");
    var selectedService = serviceSelect ? serviceSelect.value : "";
    var detailsOutput = document.getElementById("detailsOutput");
    var detailsCard = document.getElementById("serviceDetailsCard");

    if (!detailsOutput || !detailsCard) return;

    if (!selectedService) {
        detailsOutput.innerHTML = "<p style='color: #c0392b; font-weight: bold;'>&#9888; Please select a service from the list first.</p>";
        detailsCard.style.display = "block";
        return;
    }

    // Retrieve service object from cityServicesData
    var serviceObj = cityServicesData[selectedService];

    if (serviceObj) {
        var detailsHtml = 
            "<div class='service-card-content'>" +
                "<h3 style='color: #003366; margin-top: 0; border-bottom: 2px solid #0055a5; padding-bottom: 6px;'>" +
                    "&#127963; " + serviceObj.name + 
                "</h3>" +
                "<table class='details-table'>" +
                    "<tr>" +
                        "<th>Category / Service</th>" +
                        "<td><strong>" + selectedService + "</strong></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>Location</th>" +
                        "<td>" + serviceObj.location + "</td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>Working Hours</th>" +
                        "<td><span class='badge-hours'>" + serviceObj.workingHours + "</span></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<th>Contact Number</th>" +
                        "<td><strong style='color: #003366;'>" + serviceObj.contactNumber + "</strong></td>" +
                    "</tr>" +
                "</table>" +
            "</div>";

        detailsOutput.innerHTML = detailsHtml;
        detailsCard.style.display = "block";
    }
}

// 6. Helper function to select and display service directly when clicking a badge
function selectAndShowDetails(serviceName) {
    var serviceSelect = document.getElementById("serviceSelect");
    if (serviceSelect) {
        serviceSelect.value = serviceName;
    }
    showServiceDetails();
}
