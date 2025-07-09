let timeDisplay = document.getElementById("time");

function refreshTime() {
    let dateString = new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" });
    timeDisplay.innerHTML = dateString;
}

setInterval(refreshTime, 1000);

function loadAdminData() {
    let adminName = localStorage.getItem('Admin_Name');
    if (adminName) {
        document.getElementById('adminName').value = adminName; 
        document.getElementById('adminName').classList.add('saved'); 
    }
}

function saveAdminData(event) {
    event.preventDefault();
    let adminName = document.getElementById('adminName').value;
    localStorage.setItem('Admin_Name', adminName); 
    document.getElementById('adminName').classList.add('saved');
}

document.addEventListener('DOMContentLoaded', loadAdminData);

function saveUserData(event) {
    event.preventDefault();
    
    let firstName = document.getElementById('firstName').value;
    let secondName = document.getElementById('secondName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    
    let firstNameError = document.getElementById('firstNameError');
    let secondNameError = document.getElementById('secondNameError');
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');
    
    firstNameError.style.display = "none";
    secondNameError.style.display = "none";
    emailError.style.display = "none";
    phoneError.style.display = "none";

    let isValid = true; //перевідка валідності
    
    if (firstName.length < 3 || !/^[А-Яа-яІіЇїЄєҐґ'-]+$/.test(firstName)) {
        firstNameError.style.display = "block";
        firstNameError.textContent = "Ім'я повинно містити тільки українські літери (3+ символи)";
        isValid = false;
    }
    
    if (secondName.length < 3 || !/^[А-Яа-яІіЇїЄєҐґ'-]+$/.test(secondName)) {
        secondNameError.style.display = "block";
        secondNameError.textContent = "Прізвище повинно містити тільки українські літери (3+ символи)";
        isValid = false;
    }
    
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        emailError.style.display = "block";
        emailError.textContent = "Введіть коректну email адресу";
        isValid = false;
    }
    
    let phoneRegex = /^\+?\d{7,15}$/;
    if (!phoneRegex.test(phone) || phone.length < 7) {
        phoneError.style.display = "block";
        phoneError.textContent = "Некоректний номер телефону (мінімум 7 цифр)";
        isValid = false;
    }
    
    if (isValid) {
        localStorage.setItem('First _Name', firstName);
        localStorage.setItem('Second_Name', secondName);
        localStorage.setItem('Email', email);
        localStorage.setItem('Phone', phone);
        
        document.getElementById('registrationForm').reset(); //очищення форми
        
        addUser(firstName, secondName, email, phone);
    }
}

function addUser(firstName, secondName, email, phone) {
    let usersList = document.getElementById('usersList');
    let currentDate = new Date().toLocaleString();
    
    let userDiv = document.createElement('div');
    userDiv.className = 'user-item';
    userDiv.innerHTML = `
        <p>${firstName} | ${secondName} | ${email} | ${phone} |  ${currentDate}</p>
        <button onclick="markAsVisited(this)">Відвідано</button>
        <button onclick="markAsNotVisited(this)">Не відвідано</button>
        <button onclick="deleteUser(this)">Видалити</button>
    `;
    
    usersList.appendChild(userDiv);
}

function markAsVisited(button) {
    const userDiv = button.parentElement;
    userDiv.classList.add('visited');
}

function markAsNotVisited(button) {
    const userDiv = button.parentElement;
    userDiv.classList.add('not-visited');
}

function deleteUser(button) {
    button.parentElement.remove();
}

document.getElementById('firstName').addEventListener('input', function() {
    document.getElementById('firstNameError').style.display = "none";
});
document.getElementById('secondName').addEventListener('input', function() {
    document.getElementById('secondNameError').style.display = "none";
});
document.getElementById('email').addEventListener('input', function() {
    document.getElementById('emailError').style.display = "none";
});
document.getElementById('phone').addEventListener('input', function() {
    document.getElementById('phoneError').style.display = "none";
});
