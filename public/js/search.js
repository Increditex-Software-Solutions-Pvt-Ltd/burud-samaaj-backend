function submitForm(event) {
	event.preventDefault(); // Prevent form from submitting normally

	// Get form data
	var formData = new FormData(document.getElementById("simpleForm"));

	// Convert formData to JSON object
	var jsonData = {};
	formData.forEach(function (value, key) {
		jsonData[key] = value;
	});

	// You can now use the jsonData object containing form data
	simpleFilter(jsonData)
	console.log(jsonData);


	// Here you can perform further actions, like sending the data to a server via AJAX
}

function submitAdvForm(event) {
	event.preventDefault(); // Prevent form from submitting normally

	// Get form data
	var formData = new FormData(document.getElementById("advanceForm"));

	// Convert formData to JSON object
	var jsonData = {};
	formData.forEach(function (value, key) {
		jsonData[key] = value;
	});

	// You can now use the jsonData object containing form data
	advanceFilter(jsonData)
	console.log(jsonData);


	// Here you can perform further actions, like sending the data to a server via AJAX
}

async function getDataFromBackend(){
	let profiles
	await $.ajax({
	  type: 'GET',
	  url: '/allprofiles', // Update the URL with your server endpoint
	  success: function (response) {
		  // Handle success response
		  if (response.profiles) {
			 profiles =  [...response.profiles];
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

async function simpleFilter(data) {

	const backendData = await getDataFromBackend();

	const filteredData = backendData.filter(item => {
		return item.fullname.toLowerCase() === data.name.toLowerCase() &&
			item.city.toLowerCase() === data.city.toLowerCase();
	});

	console.log(filteredData);

	const filteredDataDiv = document.getElementById('filteredData');
	const simpleInputForm = document.getElementById("description");
	const filterContainer = document.getElementById("filterContainer")
	simpleInputForm.style.display = "none"

	filteredDataDiv.classList = ""
	filterContainer.classList = "row m-0 mt-4"
	filterContainer.innerHTML = ""

	filteredData.forEach((item, i) => {
		console.log(item.occupation)
		let user = `
		<div class="col-md-4 column nature">
		<div class="image_body">
			<div class="content">
				<img src="https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2020/04/Indian-Bride-Feature-Image.jpg"
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
										<img src="https://i.pinimg.com/736x/c3/21/b4/c321b403c05ef0a241cb08f331868d87.jpg"
											alt="" style="height: 200px; width: 200px;">
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

async function advanceFilter(data) {
	const backendData = await getDataFromBackend();

	console.log(data.occupation, data.id)
	const filteredData = backendData.filter(item => {
		console.log(item.occupation, item.id)
		return item.occupation.toLowerCase() === data.occupation.toLowerCase() &&
			item.id === parseInt(data.id);
	});

	console.log(filteredData);

	const filteredDataDiv = document.getElementById('filteredData');
	const simpleInputForm = document.getElementById("description");
	const filterContainer = document.getElementById("filterContainer")
	simpleInputForm.style.display = "none"

	filteredDataDiv.classList = ""
	filterContainer.classList = "row m-0 mt-4"
	filterContainer.innerHTML = ""

	filteredData.forEach((item, i) => {
		console.log(item.occupation)
		let user = `
		<div class="col-md-4 column nature">
		<div class="image_body">
			<div class="content">
				<img src="https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2020/04/Indian-Bride-Feature-Image.jpg"
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
										<img src="https://i.pinimg.com/736x/c3/21/b4/c321b403c05ef0a241cb08f331868d87.jpg"
											alt="" style="height: 200px; width: 200px;">
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

function backBtn() {
	const filteredDataDiv = document.getElementById('filteredData');
	filteredDataDiv.classList = "row m-0 mt-4 d-none"
	const simpleInputForm = document.getElementById("description");
	simpleInputForm.style.display = "block"

}


async function addProfile() {
	await $.ajax({
		type: 'GET',
		url: '/checkprofile', // Update the URL with your server endpoint
		success: function (response) {
			// Handle success response
			if (response.message === 'User Profile Found') {
				$('#basicInfoAddModal').modal('hide');
				console.log("send request");
			}
			else {
				$('#basicInfo-form').trigger('reset');
				$('#basicInfoAddModal').modal('show');

			}
		},
		error: function (xhr, status, error) {
			// Handle error
			console.error(error);
		}
	});

}

function captureBasicDetails() {
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
	//  basicDetails['residentcity']=residentcity



	document.getElementById("profileforinput").value = profilefor;
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



}

// Function to update the Next button state
function updateNextbuttonstate() {
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


	if (
		profilefor &&
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
		residentcity
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

