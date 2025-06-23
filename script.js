document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.getElementById('gender').value;
    let username = document.getElementById('username').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Regular Expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/; // Alphabetic characters and spaces only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/; // Strong password: at least 8 characters, one lowercase, one uppercase, one number, one special character
    const usernameRegex = /^[a-zA-Z0-9_]+$/; // Alphanumeric characters and underscores only
    const phoneRegex = /^\d{10}$/; // 10-digit phone number
    
    // Perform form validation using regular expressions
    if (!nameRegex.test(fullName)) {
        document.getElementById("fullnameerrormsg").value;
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!passwordRegex.test(password)) {
        alert('Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!usernameRegex.test(username)) {
        alert('Username can only contain alphanumeric characters and underscores.');
        return;
    }

    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    alert("data successfully enterd");
    // If all validations pass, log the form data
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Gender:', gender);
    console.log('Username:', username);
    console.log('Phone Number:', phoneNumber);
    console.log('Confirm Password:', confirmPassword);
});
