// let userObj = {};

// function nextStep(step) {
//     var currentStep = document.getElementById('step' + step);
//     var inputs = currentStep.querySelectorAll('input[required], select[required]');
//     var isValid = true;
//     let curObj = {};
//     for (var i = 0; i < inputs.length; i++) {
//         if (!inputs[i].value) {
//             isValid = false;
//             inputs[i].classList.add('error');
//             break;
//         } else {
//             curObj[inputs[i].name] = inputs[i].value;
//             inputs[i].classList.remove('error');
//         }
//     }
//     if (isValid) {
//         // Merge the current step's data with the existing userObj
//         userObj = { ...userObj, ...curObj };
//         localStorage.setItem("userProfile", JSON.stringify(userObj));
        
//         // Move to the next step
//         document.getElementById('step' + step).classList.remove('active');
//         document.getElementById('step' + (step + 1)).classList.add('active');
//     } else {
//         alert('Please fill in all required fields.');
//     }
// }

// function prevStep(step) {
//     document.getElementById('step' + step).classList.remove('active');
//     document.getElementById('step' + (step - 1)).classList.add('active');
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     console.log(userObj);
// }

function captureBasicDetails(){
     const fullname = document.getElementById('fullname').value;
     const city = document.getElementById('city').value;
     const dob = document.getElementById('dob').value;
     const income = document.getElementById('income').value;
     const education = document.getElementById('education').value;
     const bloodgroup = document.getElementById('bloodgroup').value;
     const spectacles = document.getElementById('spectacles').value;
     const gotradevak = document.getElementById('gotradevak').value;
     const birthplace = document.getElementById('birthplace').value;
     const occupation = document.getElementById('occupation').value;
     const maritalstatus = document.getElementById('maritalstatus').value;
     const height = document.getElementById('height').value;
     const occupationcity = document.getElementById('occupationcity').value;
     const complexion = document.getElementById('complexion').value;
     const mangal = document.getElementById('mangal').value;
     const horoimage = document.getElementById('horoimage').value;
     const residentcity = document.getElementById('residentcity').value;

    console.log(fullname) 
    console.log(city) 
    console.log(dob )
    console.log(income) 
    console.log(education )
    console.log(bloodgroup )
    console.log(spectacles )
    console.log(gotradevak )
    console.log(birthplace )
    console.log(occupation )
    console.log(maritalstatus) 
    console.log(height )
    console.log(occupationcity) 
    console.log(complexion )
    console.log(mangal )
    console.log(horoimage) 
    console.log(residentcity) 
     
     document.getElementById('fullnameinput').value = fullname;
     document.getElementById('cityinput').value = city; 
     document.getElementById('dobinput').value = dob;
     document.getElementById('incomeinput').value  = income;
     document.getElementById('educationinput').value = education;
     document.getElementById('bloodgroupinput').value = bloodgroup;
     document.getElementById('spectaclesinput').value  = spectacles;
     document.getElementById('gotrainput').value  = gotradevak;
     document.getElementById('birthplaceinput').value = birthplace;
     document.getElementById('occupationinput').value  = occupation;
     document.getElementById('maritalstatusinput').value = maritalstatus;
    document.getElementById('heightinput').value  = height;
    document.getElementById('occupationcityinput').value = occupation;
    document.getElementById('complexioninput').value  = complexion;
    document.getElementById('mangalinput').value = mangal;
    document.getElementById('horoimageinput').value = horoimage;
    document.getElementById('residentcityinput').value = residentcity;

}

function addProfile(){
    $('#basicInfo-form').trigger('reset');
    $('#basicInfoAddModal').modal('show');
}

function addFamilyBackground(){
    $('#amilyInfo-form').trigger('reset');
    $('#familyinfoAddModal').modal('show');
}