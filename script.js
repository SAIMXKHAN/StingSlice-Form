
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    let fullName = document.getElementById("fullName").value.trim();  // Get full name value and trim spaces
    let message = document.getElementById("message");
    let firstNameOutput = document.getElementById("firstNameOutput");
    let lastNameOutput = document.getElementById("lastNameOutput");

    // Split the full name into parts
    let nameParts = fullName.split(" ");  // Split the name by spaces

    // Check if there are at least two parts (first and last name)
    if (nameParts.length >= 2) {
        let firstName = nameParts[0];  // First name is the first part
        let lastName = nameParts.slice(1).join(" ");  // Last name is everything after the first part

        // Display the results in the output fields
        firstNameOutput.value = firstName; // Set value for first name input
        lastNameOutput.value = lastName;   // Set value for last name input

        // Display a success message
        message.innerHTML = `Contact Saved: <strong>${firstName} ${lastName}</strong>`;
        message.classList.remove('text-red-600'); // Remove error color if any
        message.classList.add('text-green-600', 'font-bold', `text-md`); // Success classes
    } else {
        // If the input doesn't contain at least a first and last name
        message.innerHTML = "Please enter both first and last name. Or give gap between first and last name. ";
       
        message.classList.remove('text-green-600'); // Remove success color if any
        message.classList.add('text-red-600', 'font-bold', `text-sm`); // Error classess
    }
});
