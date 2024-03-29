async function addProfile() {
    try {
        await $.ajax({
            type: 'GET',
            url: '/checkprofile', // Endpoint to check user profile existence
            success: async function (response) {
                if (response.message === 'User Profile Found') {
                    $('#basicInfoAddModal').modal('hide');
                    console.log("send request");

                    // Add AJAX request to send friend request
                    await $.ajax({
                        type: 'PUT',
                        url: '/sendRequest', // Endpoint to send friend request
                        success: function (response) {
                            console.log('Friend request sent successfully');
                        },
                        error: function (xhr, status, error) {
                            console.error('Error sending friend request:', error);
                        }
                    });
                } else {
                    $('#basicInfo-form').trigger('reset');
                    $('#basicInfoAddModal').modal('show');
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    } catch (error) {
        console.error('Error adding profile:', error);
    }
}

function captureBasicDetails() {
    const profilepic = document.getElementById('profilepic').value;
    const biopic1 = document.getElementById('biopic1').value;
    const biopic2 = document.getElementById('biopic2').value;

    const profilefor = document.getElementById('profilefor').value;
    //  basicDetails['profilefor']=profilefor
    const fullname = document.getElementById('fullname').value;
    //  basicDetails['fullname']=fullname
    const city = document.getElementById('city').value;
    //  basicDetails['city']=city
    const dob = document.getElementById('dob').value;
    //  basicDetails['dob']=dob
    const income = document.getElementById('income').value;
    //  basicDetails['income']=income
    const education = document.getElementById('education').value;
    //  basicDetails['education']=education
    const bloodgroup = document.getElementById('bloodgroup').value;
    //  basicDetails['bloodgroup']=bloodgroup
    const spectacles = document.getElementById('spectacles').value;
    //  basicDetails['spectacles']=spectacles
    const gotradevak = document.getElementById('gotradevak').value;
    //  basicDetails['gotradevak']=gotradevak
    const birthplace = document.getElementById('birthplace').value;
    //  basicDetails['birthplace']=birthplace
    const occupation = document.getElementById('occupation').value;
    //  basicDetails['occupation']=occupation
    const maritalstatus = document.getElementById('maritalstatus').value;
    //  basicDetails['maritalstatus']=maritalstatus
    const height = document.getElementById('height').value;
    //  basicDetails['height']=height
    const occupationcity = document.getElementById('occupationcity').value;
    //  basicDetails['occupationcity']=occupationcity
    const complexion = document.getElementById('complexion').value;
    //  basicDetails['complexion']=complexion
    const mangal = document.getElementById('mangal').value;
    //  basicDetails['mangal']=mangal
    const horoimage = document.getElementById('horoimage').value;
    //  basicDetails['horoimage']=horoimage
    const residentcity = document.getElementById('residentcity').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    //  basicDetails['residentcity']=residentcity


    document.getElementById("profilepicinput").value = profilepic;
    document.getElementById("profileforinput").value = profilefor;
    document.getElementById("biopicinput1").value = biopic1;
    document.getElementById("biopicinput2").value = biopic2;
    document.getElementById("fullnameinput").value = fullname;
    document.getElementById("cityinput").value = city;
    document.getElementById("dobinput").value = dob;
    document.getElementById("incomeinput").value = income;
    document.getElementById("educationinput").value = education;
    document.getElementById("bloodgroupinput").value = bloodgroup;
    document.getElementById("spectaclesinput").value = spectacles;
    document.getElementById("gotrainput").value = gotradevak;
    document.getElementById("birthplaceinput").value = birthplace;
    document.getElementById("occupationinput").value = occupation;
    document.getElementById("complexioninput").value = complexion;
    document.getElementById("maritalstatusinput").value = maritalstatus;
    document.getElementById("heightinput").value = height;
    document.getElementById("occupationcityinput").value = occupationcity;
    document.getElementById("mangalinput").value = mangal;
    document.getElementById("horoimageinput").value = horoimage;
    document.getElementById("residentcityinput").value = residentcity;
    document.getElementById("emailinput").value = email;
    document.getElementById("mobileinput").value = mobile;



}

// Function to update the Next button state
function updateNextbuttonstate() {
    const profilepic = $('#profilepic').val();
    const biopic1 = $('#biopic1').val();
    const biopic2 = $('#biopic2').val();
    const profilefor = $('#profilefor').val();
    const fullname = $('#fullname').val();
    const city = $('#city').val();
    const dob = $('#dob').val();
    const income = $('#income').val();
    const education = $('#education').val();
    const bloodgroup = $('#bloodgroup').val();
    const spectacles = $('#spectacles').val();
    const gotradevak = $('#gotradevak').val();
    const birthplace = $('#birthplace').val();
    const occupation = $('#occupation').val();
    const maritalstatus = $('#maritalstatus').val();
    const height = $('#height').val();
    const occupationcity = $('#occupationcity').val();
    const complexion = $('#complexion').val();
    const mangal = $('#mangal').val();
    const horoimage = $('#horoimage').val();
    const residentcity = $('#residentcity').val();
    const email = $('#email').val();
    const mobile = $('#mobile').val();

    console.log(profilepic);

    if (
        profilepic &&
        profilefor &&
        biopic1 &&
        biopic2 &&
        fullname &&
        city &&
        dob &&
        income &&
        education &&
        bloodgroup &&
        spectacles &&
        gotradevak &&
        birthplace &&
        occupation &&
        maritalstatus &&
        height &&
        occupationcity &&
        complexion &&
        mangal &&
        horoimage &&
        residentcity &&
        email &&
        mobile 
    ) {
        $('#proceedToSecondModal').prop('disabled', false);
    } else {
        $('#proceedToSecondModal').prop('disabled', true);
    }
}


$('#basicInfoAddModal').on('show.bs.modal', function () {
    $('#proceedToSecondModal').prop('disabled', true);
});


$('#basicInfo-form input, #basicInfo-form select').on('input change', function () {
    updateNextbuttonstate();
});


function addFamilyBackground() {
    $('#familyInfo-form').trigger('reset');
    $('#familyinfoAddModal').modal('show');
}

function submitFormData() {

    const basicInfo = {
        profilepic: document.getElementById('profilepicinput').value,
        biopic1 : document.getElementById('biopicinput1').value,
        bioPic2: document.getElementById('biopicinput2').value,
        profilefor: document.getElementById('profileforinput').value,
        fullname: document.getElementById('fullnameinput').value,
        city: document.getElementById("cityinput").value,
        dateofbirth: document.getElementById("dobinput").value,
        income: document.getElementById("incomeinput").value,
        education: document.getElementById("educationinput").value,
        bloodgroup: document.getElementById("bloodgroupinput").value,
        spectacles: document.getElementById("spectaclesinput").value,
        gotra: document.getElementById("gotrainput").value,
        birthplace: document.getElementById("birthplaceinput").value,
        occupation: document.getElementById("occupationinput").value,
        complexion: document.getElementById("complexioninput").value,
        maritalstatus: document.getElementById("maritalstatusinput").value,
        height: document.getElementById("heightinput").value,
        occupationcity: document.getElementById("occupationcityinput").value,
        mangal: document.getElementById("mangalinput").value,
        horoimage: document.getElementById("horoimageinput").value,
        residentcity: document.getElementById("residentcityinput").value,
    };

    // Gather data from the second modal
    const familyInfo = {
        fathername: document.getElementById('fathername').value,
        mothername: document.getElementById('mothername').value,
        maternaluncle: document.getElementById('maternaluncle').value,
        nativeplace: document.getElementById('nativeplace').value,
        citywealth: document.getElementById('citywealth').value,
        parentcity: document.getElementById('parentcity').value,
        sister: document.getElementById('sister').value,
        agedifference: document.getElementById('agedifference').value,
        preferredcity: document.getElementById('preferredcity').value,
        expectedheight: document.getElementById('expectedheight').value,
        herhiseducation: document.getElementById('herhiseducation').value,
        herhisoccupation: document.getElementById('herhisoccupation').value,
        herhisparentresidence: document.getElementById('herhisparentresidence').value,
        // Add other fields as needed
    };

    // Combine data from both modals
    const formData = { ...basicInfo, ...familyInfo };

    // Send data to the server using AJAX
    $.ajax({
        type: 'POST',
        url: '/addprofile', // Update the URL with your server endpoint
        data: formData,
        success: function (response) {
            // Handle success response
            console.log(response);
            $('#basicInfoAddModal').modal('hide');
            $('#familyinfoAddModal').modal('hide');
            $('.toast').toast('show');
        },
        error: function (xhr, status, error) {
            // Handle error
            console.error(error);
        }
    });
}