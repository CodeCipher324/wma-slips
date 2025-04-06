<!DOCTYPE html>
<html>
<head>
    <title>Name Validation</title>
    <script>
        function validateName() {
            let name = document.getElementById("name").value;
            // Regex to check if the name contains only letters and spaces
            let namePattern = /^[a-zA-Z\s]+$/;

            if (namePattern.test(name)) {
                alert("Name is: " + name);
            } else {
                alert("Name is Invalid");
            }
        }
    </script>
</head>
<body>
    <h2>Name Validation</h2>
    <input type="text" id="name" placeholder="Enter your name">
    <button onclick="validateName()">Submit</button>
</body>
</html>
