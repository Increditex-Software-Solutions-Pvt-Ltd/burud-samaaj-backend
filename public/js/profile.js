


// const backendData = [{
//   id: '01',
//   name: "Nishant",
//   city: "Nashik",
//   occupation: "Software developer",
//   education: "BE",
//   dob: "8-10-2000",
//   profilePic: "www.image.com",
//   groomOrBride: "groom" // Added groomOrBride key
// },
// {
//   id: "02",
//   name: "Rohan",
//   city: "Mumbai",
//   occupation: "Data Scientist",
//   education: "MS",
//   dob: "12-05-1995",
//   profilePic: "www.image2.com",
//   groomOrBride: "groom" // Added groomOrBride key
// },
// {
//   id: "03",
//   name: "Priya",
//   city: "Pune",
//   occupation: "Doctor",
//   education: "MBBS",
//   dob: "04-08-1988",
//   profilePic: "www.image3.com",
//   groomOrBride: "bride" // Added groomOrBride key
// },
// {
//   id: "04",
//   name: "Amit",
//   city: "Delhi",
//   occupation: "Lawyer",
//   education: "LLB",
//   dob: "20-11-1979",
//   profilePic: "www.image4.com",
//   groomOrBride: "bride" // Added groomOrBride key
// },
// {
//   id: "05",
//   name: "suresh",
//   city: "kolhapur",
//   occupation: "Engineer",
//   education: "B.Tech",
//   dob: "15-03-1990",
//   profilePic: "www.image5.com",
//   groomOrBride: "bride" // Added groomOrBride key
// },
// {
//   id: "06",
//   name: "Suresh",
//   city: "Kolhapur",
//   occupation: "Teacher",
//   education: "B.Ed",
//   dob: "28-07-1985",
//   profilePic: "www.image6.com",
//   groomOrBride: "bride" // Added groomOrBride key
// },
// {
//   id: '07',
//   name: "Nishant",
//   city: "Nashik",
//   occupation: "Software developer",
//   education: "BE",
//   dob: "8-10-2000",
//   profilePic: "www.image.com",
//   groomOrBride: "groom" // Added groomOrBride key
// },
// {
//   id: "08",
//   name: "Rohan",
//   city: "Mumbai",
//   occupation: "Data Scientist",
//   education: "MS",
//   dob: "12-05-1995",
//   profilePic: "www.image2.com",
//   groomOrBride: "groom" // Added groomOrBride key
// },
// {
//   id: "09",
//   name: "Priya",
//   city: "Pune",
//   occupation: "Doctor",
//   education: "MBBS",
//   dob: "04-08-1988",
//   profilePic: "www.image3.com",
//   groomOrBride: "bride" // Added groomOrBride key
// },
// {
//   id: "10",
//   name: "Amit",
//   city: "Delhi",
//   occupation: "Lawyer",
//   education: "LLB",
//   dob: "20-11-1979",
//   profilePic: "www.image4.com",
//   groomOrBride: "bride" // Added groomOrBride key
// },
// {
//   id: "11",
//   name: "suresh",
//   city: "kolhapur",
//   occupation: "Engineer",
//   education: "B.Tech",
//   dob: "15-03-1990",
//   profilePic: "www.image5.com",
//   groomOrBride: "bride" // Added groomOrBride key
// },
// {
//   id: "12",
//   name: "Amey",
//   city: "Kolhapur",
//   occupation: "Teacher",
//   education: "B.Ed",
//   dob: "28-07-1985",
//   profilePic: "www.image6.com",
//   groomOrBride: "bride" // Added groomOrBride key
// },
// {
//   id: "13",
//   name: "Amit",
//   city: "Delhi",
//   occupation: "Lawyer",
//   education: "LLB",
//   dob: "20-11-1979",
//   profilePic: "www.image4.com",
//   groomOrBride: "disabled" // Added groomOrBride key
// },
// {
//   id: "14",
//   name: "suresh",
//   city: "kolhapur",
//   occupation: "Engineer",
//   education: "B.Tech",
//   dob: "15-03-1990",
//   profilePic: "www.image5.com",
//   groomOrBride: "disabled" // Added groomOrBride key
// },
// {
//   id: "15",
//   name: "Amey",
//   city: "Kolhapur",
//   occupation: "Teacher",
//   education: "B.Ed",
//   dob: "28-07-1985",
//   profilePic: "www.image6.com",
//   groomOrBride: "disabled" // Added groomOrBride key
// }
// ];

// const backendData = getDataFromBackend();

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

const pageSize = 6;
let currentPage = 1;
let currentCategory = "all";

async function displayProfiles(pageNumber, category) {
  const backendData = await getDataFromBackend();
  currentPage = pageNumber;
  currentCategory = category;

  // Filter profiles based on category
  let filteredData = backendData;
  if (category !== "all") {
    filteredData = backendData.filter(profile => profile.profilefor.toLowerCase() === category.toLowerCase());
  }

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const profiles = filteredData.slice(startIndex, endIndex);

  const profileContainer = document.getElementById('profileContainer');
  profileContainer.innerHTML = '';

  if(profiles.length){
    profiles.forEach(profile => {
      let user = `
                 <div class="col-md-4 mt-3">
                  <div class="image_body ${profile.profilefor} show">
                                      <div class="content">
                                          <img src="https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2020/04/Indian-Bride-Feature-Image.jpg"
                                              alt="Lights" style="width:100%" class="img rounded-5">
                                          <div class="text-center">
                                              <h5 class=" p-2">${profile.fullname}</h5>
                                              <p> <button class="btn btn-danger">${profile.city}</button>
                                                  <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal"
                                                      data-bs-target="#staticBackdrop${profile.id}">
                                                      See Details
                                                  </button>
                                              <div class="modal fade" id="staticBackdrop${profile.id}" data-bs-backdrop="static"
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
                                                                  <img src="https://cdn.shopify.com/s/files/1/0683/1800/3511/files/white_saree_bride_480x480.jpg?v=1691565347"
                                                                      alt="" style="height: 200px; width: 200px;" class="rounded-4">
                                                                  <div class="mt-2">
                                                                      <h6 class="text-center">Personal Information</h6>
                                                                      <table class="table">
                                                                          <h5 class="bg-danger text-white p-2"><b>${profile.id}</b></h5>
                                                                          <tr>
                                                                              <td>Name:</td>
                                                                              <td>${profile.fullname}</td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td>Date Of Birth:</td>
                                                                              <td>${profile.dateofbirth.substring(0, 10)}</td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td>Occupation:</td>
                                                                              <td>${profile.occupation}</td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td>Education:</td>
                                                                              <td>${profile.education}</td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </div>
                  
                  
                  
                                                          </div>
                                                          <div class="modal-footer">
                                                              <button type="button" class="btn btn-secondary"
                                                                  data-bs-dismiss="modal">Close</button>
                                                            
                                                                  <a href="/detailprofile/${profile.id}"
                                                                      class="btn btn-danger">View Profile</a>
                                                            
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              </p>
                  
                                          </div>
                                      </div>
                                  </div>
                                  </div>
                                
                  `;
      profileContainer.innerHTML += user
    });
  }
 else{
  profileContainer.innerHTML+=`
  <h2 class='text-center mt-3'>No Data to Display</h2>
  `
 }

  displayPagination(pageNumber);
}

// Function to display pagination buttons
async function displayPagination() {

  let backendData = await getFilteredData().then((res)=> {
    return res
  })
  const totalPages = Math.ceil(backendData / pageSize);

  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  // Previous Button
  const prevButton = createPaginationButton('Previous');
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      displayProfiles(currentPage - 1, currentCategory);
    }
  });
  paginationContainer.appendChild(prevButton);


  // Page Buttons
  let startPage = currentPage;
  let endPage = currentPage + 4;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - 4;
    if (startPage < 1) {
      startPage = 1;
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    const button = createPaginationButton(i);
    if (i === currentPage) {
      button.classList.add('active');
    }
    button.addEventListener('click', () => {
      displayProfiles(i, currentCategory);
    });
    paginationContainer.appendChild(button);
  }

  // Next Button
  const nextButton = createPaginationButton('Next');
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      displayProfiles(currentPage + 1, currentCategory);
    }
  });
  paginationContainer.appendChild(nextButton);
}

// Helper function to create pagination button
function createPaginationButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add('pagination-btn');
  return button;
}

// Function to get filtered data based on current category
async function getFilteredData() {
  const backendData = await getDataFromBackend();
  if (currentCategory === "all") {
    return backendData.length;
  } else {
    return backendData.filter(profile => profile.profilefor.toLowerCase() === currentCategory.toLowerCase()).length;
  }
}

// Add event listeners to filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    displayProfiles(1, category);
  });
});

// Initial display
displayProfiles(1, "all");

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

