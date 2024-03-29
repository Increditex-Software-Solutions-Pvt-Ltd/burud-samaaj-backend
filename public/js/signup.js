// Data for dropdown options (replace with your own data)
const data = {
    "Maharashtra": {
        "Mumbai": {
            "Andheri": ["Town1", "Town2", "Town3"],
            "Bandra": ["Town4", "Town5", "Town6"],
            "Dadar": ["Town7", "Town8", "Town9"]
        },
        "Pune": {
            "Kothrud": ["Town10", "Town11", "Town12"],
            "Shivaji Nagar": ["Town13", "Town14", "Town15"],
            "Hinjewadi": ["Town16", "Town17", "Town18"]
        }
    },
    "Gujarat": {
        "Ahmedabad": {
            "Gandhinagar": ["Town19", "Town20", "Town21"],
            "Maninagar": ["Town22", "Town23", "Town24"],
            "Satellite": ["Town25", "Town26", "Town27"]
        },
        "Surat": {
            "Adajan": ["Town28", "Town29", "Town30"],
            "Varachha": ["Town31", "Town32", "Town33"],
            "Katargam": ["Town34", "Town35", "Town36"]
        }
    }
};

// Function to populate dropdown options based on selected parent dropdown
function populateDropdown(parentDropdown, childDropdown) {
    const parentValue = parentDropdown.value;
    childDropdown.innerHTML = "<option value=''>Select " + childDropdown.id.charAt(0).toUpperCase() + childDropdown.id.slice(1) + "</option>";
    if (parentValue !== "") {
        const options = data[parentDropdown.value];
        if (options !== undefined) {
            for (const key in options) {
                const option = document.createElement("option");
                option.value = key;
                option.text = key;
                childDropdown.appendChild(option);
            }
        }
        else {
            const state = document.getElementById("stateDropdown").value;
            const options = data[state][parentDropdown.value];
            for (const key in options) {
                const option = document.createElement("option");
                option.value = key;
                option.text = key;
                childDropdown.appendChild(option);
            }
        }

    }
}

// Function to populate towns based on selected taluka
function populateTowns() {
    const state = document.getElementById("stateDropdown").value;
    const district = document.getElementById("districtDropdown").value;
    const taluka = document.getElementById("talukaDropdown").value;
    const towns = document.getElementById("townDropdown");
    towns.innerHTML = "<option value=''>Select Town</option>";
    if (state !== "" && district !== "" && taluka !== "") {
        const townList = data[state][district][taluka];
        for (const town of townList) {
            const option = document.createElement("option");
            option.value = town;
            option.text = town;
            towns.appendChild(option);
        }
    }
}

// Populate state dropdown initially
const stateDropdown = document.getElementById("stateDropdown");
for (const state in data) {
    const option = document.createElement("option");
    option.value = state;
    option.text = state;
    stateDropdown.appendChild(option);
}

// Event listeners for state, district, and taluka dropdowns
stateDropdown.addEventListener("change", function () {
    populateDropdown(this, document.getElementById("districtDropdown"));
    document.getElementById("talukaDropdown").innerHTML = "<option value=''>Select District First</option>"; // Reset taluka dropdown
    // document.getElementById("townDropdown").innerHTML = "<option value=''>Select Town</option>"; // Reset town dropdown
});

document.getElementById("districtDropdown").addEventListener("change", function () {
    populateDropdown(this, document.getElementById("talukaDropdown"));
    document.getElementById("townDropdown").innerHTML = "<option value=''>Select Taluka First</option>"; // Reset town dropdown
});

document.getElementById("talukaDropdown").addEventListener("change", populateTowns);


// form validation
const form = document.getElementById("registration-form")

async function formDataValidation(event) {
    event.preventDefault()

    const inputs = document.querySelectorAll("input,select")

    let userObj = {

    }

    inputs.forEach((input) => {
        if (input.value !== "") {
            userObj[input.name] = input.value
        }
    })

    if (validateNumber && validationPass && validateEmail) {
        console.log(userObj);
        await $.ajax({
            type: 'POST',
            url: '/sendOtp', // Update the URL with your server endpoint
            data: userObj,
            success: function (response) {
                // Handle success response
                console.log(response);
            },
            error: function (xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }
}

function validateEmail() {
    let mail = document.getElementById("email");
    let flag = true
    if (mail.value.length) {
        if (!mail.value.includes("@gmail.com")) {
            let validMail = document.getElementById("validMail")
            validMail.classList = "text-danger"
            flag = false
        }
        else {
            let validMail = document.getElementById("validMail")
            validMail.classList = "text-danger d-none"
            flag = true
        }
    }
    else {
        let validMail = document.getElementById("validMail")
        validMail.classList = "text-danger d-none"
        flag = false
    }
    return flag
}

function validateNumber() {
    let number = document.getElementById("tel");
    let flag = true
    if (number.value.length) {
        if (number.value.length < 10 || number.value.length > 10) {
            let error = document.getElementById("validNum")
            error.classList = "text-danger"
            flag = false
        }
        else {
            let error = document.getElementById("validNum")
            error.classList = "text-danger d-none"
            flag = true
        }
    }
    else {
        let error = document.getElementById("validNum")
        error.classList = "text-danger d-none"
        flag = false
    }
    return flag
}

function validationPass() {
    let pass = document.getElementById("pass")
    let passc = document.getElementById("pass2")
    // console.log(pass.value === passc.value, pass.value, passc.value, pass.value.length);
    let flag = true

    if (pass.value.length < 8) {
        let errors = document.getElementById("errorL")
        errors.classList = "error text-danger"
        errors.style.display = "block"
        flag = false
    }
    if (pass.value.length >= 8) {
        let errors = document.getElementById("errorL")
        errors.classList = "text-danger d-none"
        errors.style.display = "none"
        flag = true

        if (pass.value !== passc.value) {
            let errors = document.querySelectorAll(".error")
            errors.forEach((err) => {
                err.classList = "error text-danger"
                err.style.display = "block"
            })
            flag = false
        }
        else if (pass.value === passc.value) {
            let errors = document.querySelectorAll(".error")
            errors.forEach((err) => {
                err.classList = "error text-danger d-none"
                err.style.display = "none"
            })
            flag = true
        }
    }
    return flag
}

let passInputs = document.querySelectorAll("#pass,#pass2")
passInputs.forEach((inp) => {
    [
        inp.addEventListener("keyup", validationPass)
    ]
})

let number = document.getElementById("tel");
number.addEventListener("keyup", validateNumber)

let mail = document.getElementById("email");
mail.addEventListener("keyup", validateEmail)