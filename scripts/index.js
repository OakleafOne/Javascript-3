function isValidPassword(password, username) {
    // Kontrollera längd
    if (password.length < 8) {
        return false;
    }

    if (password.includes(' ')) {
        return false;
    }

    if (password.includes(username)) {
        return false;
    }

    return true;
}

function checkPassword() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const display = document.getElementById('resultat');

    if (isValidPassword(pass, user)) {
        display.textContent = "Password is valid!";
        display.style.color = "green";
    } else {
        display.textContent = "Password does not meet the requirements.";
        display.style.color = "red";
    }
}