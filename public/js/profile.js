// const backendData = getDataFromBackend();

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

const pageSize = 6;
let currentPage = 1;
let currentCategory = "all";
let currentsubCategory = "all"

async function displayProfiles(pageNumber, category, subCategory) {
  const backendData = await getDataFromBackend();
  currentPage = pageNumber;
  currentCategory = category;
  currentsubCategory = subCategory;

  // Filter profiles based on category
  let filteredData = backendData;
  if (category !== "all") {
    filteredData = backendData.filter(profile => profile.profilefor.toLowerCase() === category.toLowerCase());
  }
  if (subCategory !== "all") {
    if (subCategory === "disabled") {
      filteredData = [...filteredData].filter(profile => profile.disabled.toLowerCase() === "yes")
    }
    else {
      filteredData = [...filteredData].filter(profile => profile.maritalstatus.toLowerCase() === "divorced")
    }
  }

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const profiles = filteredData.slice(startIndex, endIndex);

  const profileContainer = document.getElementById('profileContainer');
  profileContainer.innerHTML = '';

  if (profiles.length) {
    for (const profile of profiles) {
      let picId = { id: profile.userphoto }
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

      console.log(profile);
      let user = `
        <div class="col-md-4 mt-3">
          <div class="image_body ${profile.profilefor} show">
            <div class="content">
              <img src="${profilepics.profilepic.replace(/\\/g, '/')}"
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
                            <img src="${profilepics.profilepic.replace(/\\/g, '/')}"
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
      profileContainer.innerHTML += user;
    }
  } else {
    profileContainer.innerHTML += `
      <h2 class='text-center mt-3'>No Data to Display</h2>
    `;
  }

  displayPagination(pageNumber);
}


// Function to display pagination buttons
async function displayPagination() {

  let backendData = await getFilteredData().then((res) => {
    return res
  })
  const totalPages = Math.ceil(backendData / pageSize);

  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  // Previous Button
  const prevButton = createPaginationButton('Previous');
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      displayProfiles(currentPage - 1, currentCategory, currentsubCategory);
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
      displayProfiles(i, currentCategory, currentsubCategory);
    });
    paginationContainer.appendChild(button);
  }

  // Next Button
  const nextButton = createPaginationButton('Next');
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      displayProfiles(currentPage + 1, currentCategory, currentsubCategory);
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
  let curBackend
  if (currentCategory === "all") {
    curBackend = backendData
  } else {
    curBackend = [...backendData].filter(profile => profile.profilefor.toLowerCase() === currentCategory.toLowerCase());
  }
  if (currentsubCategory !== "all") {
    if (currentsubCategory === "disabled") {
      curBackend = [...curBackend].filter(profile => profile.disabled.toLowerCase() === "yes");
    }
    else {
      curBackend = [...curBackend].filter(profile => profile.maritalstatus.toLowerCase() === "divorced");
    }
  }
  else {
    curBackend = backendData
  }
  return curBackend.length
}

// Add event listeners to filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    displayProfiles(1, category, currentsubCategory);
  });
});

// Get the select element

const selectElement = document.getElementById('advfilters');
console.log(selectElement);
// Add event listener for change event
selectElement.addEventListener('change', function () {
  // Get the selected option
  const selectedOption = selectElement.options[selectElement.selectedIndex];

  // Get the value of the selected option
  const selectedValue = selectedOption.value;

  // Log the selected value (you can do anything you want with it here)
  displayProfiles(1, currentCategory, selectedValue);
});

// Initial display
displayProfiles(1, "all", "all");




