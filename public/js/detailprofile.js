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


	const profilefor = document.getElementById('profilefor').value;
	//  basicDetails['profilefor']=profilefor
	const fullname = document.getElementById('fullname').value;
	const birthname = document.getElementById('birthname').value;
	const birthplace = document.getElementById('birthplace').value;
	const disabled = document.getElementById('disabled').value;
	const address = document.getElementById('address').value;
	//  basicDetails['fullname']=fullname
	const city = document.getElementById('city').value;
	//  basicDetails['city']=city
	const dob = document.getElementById('dob').value;
	const tob = document.getElementById('tob').value;
	//  basicDetails['dob']=dob
	const income = document.getElementById('income').value;
	//  basicDetails['income']=income
	const education = document.getElementById('education').value;
	//  basicDetails['education']=education
	const bloodgroup = document.getElementById('bloodgroup').value;
	//  basicDetails['bloodgroup']=bloodgroup
	const spectacles = document.getElementById('spectacles').value;
	//  basicDetails['spectacles']=spectacles

	//  basicDetails['gotradevak']=gotradevak

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

	//  basicDetails['mangal']=mangal

	//  basicDetails['horoimage']=horoimage

	const email = document.getElementById('email').value;
	const mobile = document.getElementById('mobile').value;
	//  basicDetails['residentcity']=residentcity



	document.getElementById("profileforinput").value = profilefor;
	document.getElementById("fullnameinput").value = fullname;
	document.getElementById("birthnameinput").value = birthname;
	document.getElementById("birthplaceinput").value = birthplace;
	document.getElementById("cityinput").value = city;
	document.getElementById("dobinput").value = dob;
	document.getElementById("tobinput").value = tob;
	document.getElementById("disabledinput").value = disabled;
	document.getElementById("addressinput").value = address;
	document.getElementById("incomeinput").value = income;
	document.getElementById("educationinput").value = education;
	document.getElementById("bloodgroupinput").value = bloodgroup;
	document.getElementById("spectaclesinput").value = spectacles;
	document.getElementById("birthplaceinput").value = birthplace;
	document.getElementById("occupationinput").value = occupation;
	document.getElementById("complexioninput").value = complexion;
	document.getElementById("maritalstatusinput").value = maritalstatus;
	document.getElementById("heightinput").value = height;
	document.getElementById("occupationcityinput").value = occupationcity;
	document.getElementById("emailinput").value = email;
	document.getElementById("mobileinput").value = mobile;
}

// Function to update the Next button state
function updateNextbuttonstate() {

	const profilefor = $('#profilefor').val();
	const fullname = $('#fullname').val();
	const birthname = $('#birthname').val();
	const birthplace = $('#birthplace').val();
	const city = $('#city').val();
	const dob = $('#dob').val();
	const tob = $('#tob').val();
	const disabled = $('#disabled').val();
	const address = $('#address').val();
	const income = $('#income').val();
	const education = $('#education').val();
	const bloodgroup = $('#bloodgroup').val();
	const spectacles = $('#spectacles').val();
	const occupation = $('#occupation').val();
	const maritalstatus = $('#maritalstatus').val();
	const height = $('#height').val();
	const occupationcity = $('#occupationcity').val();
	const complexion = $('#complexion').val();

	const email = $('#email').val();
	const mobile = $('#mobile').val();



	if (
		profilefor &&
		fullname &&
		birthname &&
		birthplace &&
		city &&
		dob &&
		tob &&
		disabled &&
		address &&
		income &&
		education &&
		bloodgroup &&
		spectacles &&
		birthplace &&
		occupation &&
		maritalstatus &&
		height &&
		occupationcity &&
		complexion &&
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
		profilefor: document.getElementById('profileforinput').value,
		fullname: document.getElementById('fullnameinput').value,
		birthname: document.getElementById('birthnameinput').value,
		birthplace: document.getElementById("birthplaceinput").value,
		city: document.getElementById("cityinput").value,
		dateofbirth: document.getElementById("dobinput").value,
		timeofbirth: document.getElementById("tobinput").value,
		disabled: document.getElementById("disabledinput").value,
		address: document.getElementById("addressinput").value,
		income: document.getElementById("incomeinput").value,
		education: document.getElementById("educationinput").value,
		bloodgroup: document.getElementById("bloodgroupinput").value,
		spectacles: document.getElementById("spectaclesinput").value,
		occupation: document.getElementById("occupationinput").value,
		complexion: document.getElementById("complexioninput").value,
		maritalstatus: document.getElementById("maritalstatusinput").value,
		height: document.getElementById("heightinput").value,
		occupationcity: document.getElementById("occupationcityinput").value,
		email: document.getElementById("emailinput").value,
		mobile: document.getElementById("mobileinput").value,
	};

	// Gather data from the second modal
	const familyInfo = {
		fathername: document.getElementById('fathername').value,
		mothername: document.getElementById('mothername').value,
		maternaluncle: document.getElementById('maternaluncle').value,
		parentaddress: document.getElementById('parentaddress').value,
		familymembers: document.getElementById('familymembers').value,
		hudda: document.getElementById('hudda').value,
		fatheroccupation: document.getElementById('fatheroccupation').value,
		motheroccupation: document.getElementById('motheroccupation').value,
		expectation: document.getElementById('expectation').value,
		// agedifference: document.getElementById('agedifference').value,
		// preferredcity: document.getElementById('preferredcity').value,
		// expectedheight: document.getElementById('expectedheight').value,
		// herhiseducation: document.getElementById('herhiseducation').value,
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
			window.location.href = '/uploadphoto';
		},
		error: function (xhr, status, error) {
			// Handle error
			console.error(error);
		}
	});
}
