document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formbtn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var name = document.getElementById("FormName").value;
        var surname = document.getElementById("FormSurname").value;
        var username = document.getElementById("FormUsername").value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var age = document.getElementById("sliderValue").textContent;
        var country = document.getElementById("country").value;
        var city = document.getElementById("FormCity").value;
        var address = document.getElementById("FormAddress").value;
        var postalCode = document.getElementById("FormPCode").value;

        // Create table with form details
        var tableContent = "<table>" +
            "<tr><td>Name:</td><td>" + name + "</td></tr>" +
            "<tr><td>Surname:</td><td>" + surname + "</td></tr>" +
            "<tr><td>Username:</td><td>" + username + "</td></tr>" +
            "<tr><td>Gender:</td><td>" + gender + "</td></tr>" +
            "<tr><td>Age:</td><td>" + age + "</td></tr>" +
            "<tr><td>Country:</td><td>" + country + "</td></tr>" +
            "<tr><td>City:</td><td>" + city + "</td></tr>" +
            "<tr><td>Address:</td><td>" + address + "</td></tr>" +
            "<tr><td>Postal Code:</td><td>" + postalCode + "</td></tr>" +
            "</table>";

        // Display table
        document.getElementById("FormDetails").innerHTML = tableContent;
        document.getElementById("FormDetails").style.display = "block";
    });
});