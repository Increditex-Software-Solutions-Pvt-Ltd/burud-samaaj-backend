async function getDataFromBackend() {
	let profiles
	await $.ajax({
		type: 'GET',
		url: '/allprofiles', // Update the URL with your server endpoint
		success: function (response) {
			// Handle success response
			if (response.profiles) {
				profiles = [...response.profiles];
			}
			else {
				profiles = [];
			}
		},
		error: function (xhr, status, error) {
			// Handle error
			console.error(error);
		}
	});
	return profiles
}

document.getElementById("searchButton").addEventListener("click", async function () {
	var searchInput = document.getElementById("searchInput").value.split(" ").join("").trim().toLowerCase();

	// Make sure search input is not empty
	if (searchInput !== "") {
		console.log(searchInput);
		advanceFilter(searchInput)
	} else {
		// If search input is empty, clear search results
		const filteredDataDiv = document.getElementById('filteredData');
		const filterContainer = document.getElementById("filterContainer")
		filteredDataDiv.classList = "mt-5"

		filterContainer.innerHTML = ""
		filterContainer.innerHTML += `<h1 class="text-center">Type something to search</h1>`

	}
});

document.getElementById("searchInput").addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
	  // keyCode 13 corresponds to the Enter key
	  var searchInput = document.getElementById("searchInput").value.split(" ").join("").trim().toLowerCase();

	// Make sure search input is not empty
	if (searchInput !== "") {
		console.log(searchInput);
		advanceFilter(searchInput)
	} else {
		// If search input is empty, clear search results
		const filteredDataDiv = document.getElementById('filteredData');
		const filterContainer = document.getElementById("filterContainer")
		filteredDataDiv.classList = "mt-5"

		filterContainer.innerHTML = ""
		filterContainer.innerHTML += `<h1 class="text-center">Type something to search</h1>`

	}
	}
})

document.getElementById("searchButton").addEventListener("click", async function () {
	var searchInput = document.getElementById("searchInput").value.split(" ").join("").trim().toLowerCase();

	// Make sure search input is not empty
	if (searchInput !== "") {
		console.log(searchInput);
		advanceFilter(searchInput)
	} else {
		// If search input is empty, clear search results
		const filteredDataDiv = document.getElementById('filteredData');
		const filterContainer = document.getElementById("filterContainer")
		filteredDataDiv.classList = "mt-5"

		filterContainer.innerHTML = ""
		filterContainer.innerHTML += `<h1 class="text-center">Type something to search</h1>`

	}
});


let searchFilterData

async function advanceFilter(data) {
	const backendData = await getDataFromBackend();

	let filteredData = backendData.filter(item => {
		return item.occupation.split(" ").join("").toLowerCase().includes(data) || item.city.split(" ").join("").toLowerCase().includes(data) || item.fullname.split(" ").join("").toLowerCase().includes(data) || item.education.split(" ").join("").toLowerCase().includes(data) || item.birthplace.split(" ").join("").toLowerCase().includes(data) || item.fathername.split(" ").join("").toLowerCase().includes(data) || item.mothername.split(" ").join("").toLowerCase().includes(data)

	});
	searchFilterData = [...filteredData]
	showProfiles(filteredData)
}

// Function to filter JSON data based on filter criteria
function filterData() {
	var ageMin = parseInt(document.getElementById("ageMin").value) || 0;
	var ageMax = parseInt(document.getElementById("ageMax").value) || Infinity;
	var heightMin = parseInt(document.getElementById("heightMin").value) || 0;
	var heightMax = parseInt(document.getElementById("heightMax").value) || Infinity;
	var city = document.getElementById("cityFilter").value;
	var education = document.getElementById("educationFilter").value;
	var profileFor = document.getElementById("profileForFilter").value;

	var filteredData = searchFilterData.filter(function (item) {
		return item.age >= ageMin &&
			item.age <= ageMax &&
			item.height >= heightMin &&
			item.height <= heightMax &&
			(city === "" || item.city === city) &&
			(education === "" || item.education === education) &&
			(profileFor === "" || item.profileFor === profileFor);
	});

	console.log(filteredData);
	// Display filtered data
	showProfiles(filteredData);
}

// Attach event listeners to filter inputs
var filterInputs = document.querySelectorAll('.filters input, .filters select');
filterInputs.forEach(function (input) {
	console.log("Event added");
	input.addEventListener("change", filterData);
});

function clearFilters() {
	// Reset input values
	document.getElementById("ageMin").value = "";
	document.getElementById("ageMax").value = "";
	document.getElementById("heightMin").value = "";
	document.getElementById("heightMax").value = "";
	document.getElementById("cityFilter").selectedIndex = 0; // Reset to the first option
	document.getElementById("educationFilter").selectedIndex = 0; // Reset to the first option
	document.getElementById("profileForFilter").selectedIndex = 0; // Reset to the first option

	// Call the filter function to reapply default filters
	showProfiles(searchFilterData)
}

function showProfiles(filteredData) {
	const filteredDataDiv = document.getElementById('filteredData');
	const filterContainer = document.getElementById("filterContainer")

	if (filteredData.length > 0) {
		filteredDataDiv.classList = "mt-5"
		filterContainer.classList = "row m-0 mt-4"
		filterContainer.innerHTML = ""

		filteredData.forEach(async (item, i) => {
			let picId = { id: item.userphoto }
			console.log("userphotos", picId);
			let profilepics;
			try {
				const response = await $.ajax({
					type: 'GET',
					url: '/getuserphotos',
					data: picId
				});
				if (response.pics) {
					profilepics = response.pics;
				} else {
					profilepics = [];
				}
			} catch (error) {
				console.error(error);
				profilepics = [];
			}

			console.log(item);
			let user = `
		<div class="col-md-4 column nature">
		<div class="image_body">
			<div class="content">
				<img src="${profilepics.profilepic.replace(/\\/g, '/')}"
					alt="Lights" style="width:100%" class="img rounded-5">
				<div class="text-center">
					<h4 class=" p-2">${item.fullname}</h4>
					<p> <button class="btn btn-danger">${item.city}</button>
						<button type="button" class="btn btn-outline-dark" data-bs-toggle="modal"
							data-bs-target="#staticBackdrop${i}">
							See Details
						</button>
					<div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static"
						data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
						aria-hidden="true">
						<div class="modal-dialog modal-dialog-scrollable">
							<div class="modal-content">
								<div class="modal-header">
									<h1 class="modal-title fs-5" id="staticBackdropLabel">Profile Details</h1>
									<button type="button" class="btn-close" data-bs-dismiss="modal"
										aria-label="Close"></button>
								</div>
								<div class="modal-body">
									<div>
										<img src="${profilepics.profilepic.replace(/\\/g, '/')}"
											alt="" style="height: 200px; width: 200px;object-fit:cover">
										<div class="mt-2">
											<h6 class="text-center">Personal Information</h6>
											<table class="table">
												<h5 class="bg-danger text-white p-2"><b>${item.id}</b></h5>
												<tr>
													<td>Name:</td>
													<td>${item.fullname}</td>
												</tr>
												<tr>
													<td>Date Of Birth:</td>
													<td>${item.dateofbirth.substring(0, 10)}</td>
												</tr>
												<tr>
													<td>Occupation:</td>
													<td>${item.occupation}</td>
												</tr>
												<tr>
													<td>Education:</td>
													<td>${item.education}</td>
												</tr>
											</table>
										</div>
									</div>



								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary"
										data-bs-dismiss="modal">Close</button>
										<button type="button" class="btn btn-danger">
										<a href="/detailprofile/${item.id}" style="text-decoration: none;"
											class="text-white">View Profile</a>
									</button>
								</div>
							</div>
						</div>
					</div>
					</p>

				</div>
			</div>
		</div>
	</div>
		`

			filterContainer.innerHTML += user
		});
	}
	else {
		filteredDataDiv.classList = "mt-5"
		filterContainer.innerHTML = ""
		filterContainer.innerHTML += `<h1 class="text-center">No Data matched</h1>`
	}
}

// function backBtn() {
// 	const filteredDataDiv = document.getElementById('filteredData');
// 	filteredDataDiv.classList = "row m-0 mt-4 d-none"
// }


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
