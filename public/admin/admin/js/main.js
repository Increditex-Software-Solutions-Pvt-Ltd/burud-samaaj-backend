'use strict';

async function handleApprove(userObj) {
	console.log(userObj,"user obj");
	let userId = {id:userObj}
	await $.ajax({
		type: 'POST',
		url: '/approveuser', // Update the URL with your server endpoint
		data: userId,
		success: function (response) {
			// Handle success response
			console.log("User Approved");
		},
		error: function (xhr, status, error) {
			// Handle error
			console.error(error);
		}
	});
}



function viewUserdetail(id) {
	$.ajax({
		url: '/admin/get-single-user/' + id,
		method: 'GET',
		success: function (res) {
			if (res) {
				console.log(res);
				const parent = $('#viewDetailUser');
				$('[id="firstname"]', parent).text('firstname');
			    $('[id="firstname"]', parent).val(res.firstname);
				$('[id="middlename"]', parent).text('middlename');
			    $('[id="middlename"]', parent).val(res.middlename);
				$('[id="lastname"]', parent).text('lastname');
			    $('[id="lastname"]', parent).val(res.lastname);
				$('[id="email"]', parent).text('email');
			    $('[id="email"]', parent).val(res.email);
				$('[id="phone"]', parent).text('phone');
			    $('[id="phone"]', parent).val(res.phone);
				$('[id="address"]', parent).text('address');
			    $('[id="address"]', parent).val(res.address);
				$('[id="state"]', parent).text('state');
			    $('[id="state"]', parent).val(res.state);
				$('[id="district"]', parent).text('district');
			    $('[id="district"]', parent).val(res.district);
				$('[id="taluka"]', parent).text('taluka');
			    $('[id="taluka"]', parent).val(res.taluka);
				$('[id="town"]', parent).text('town');
			    $('[id="town"]', parent).val(res.town);
				$('[id="pincode"]', parent).text('pincode');
			    $('[id="pincode"]', parent).val(res.postalcode);
				$('[id="country"]', parent).text('country');
			    $('[id="country"]', parent).val(res.country);
				$('[id="dob"]', parent).text('dob');
			    $('[id="dob"]', parent).val(res.dateofbirth.substring(0,10));
				$('[id="gender"]', parent).text('gender');
			    $('[id="gender"]', parent).val(res.gender);

				

				parent.modal('show');
			} else {
				console.error('Failed to retrieve Product details:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving Product details:', error);
		}
	});
}

function resethomecmsForm() {
	$('#homecmsAddModalLabel').text('add home content');
	$('#home-cmsform').trigger('reset');
}

function addHomeCms() {
	resethomecmsForm();
	$('#homecmsModal').modal('show');

}
function editHomeForm(home_id) {
	resethomecmsForm();

	$('#home-cmsform').attr('action', '/admin/home-content/' + home_id);
	$.ajax({
		url: '/admin/home-content/' + home_id,
		method: 'GET',
		success: function (res) {
			console.log(res);
			if (res.success) {
				const menu = res.data;
				const parent = $('#homecmsModal');
				$('#homecmsAddModalLabel').text("update home record");
				$('[name="mainHeading"]', parent).val(menu.mainHeading);
				$('[name="serviceheading"]', parent).val(menu.serviceHeading);
				$('[name="servicedesc"]', parent).val(menu.serviceDescription);
				$('[name="serviceshort"]', parent).val(menu.serviceShortInfo);

				// Clear previous images
				$('#uploadedImages').html('');

				// Handle populardish as a string or array
				if (typeof menu.populardish === 'string') {
					const imagePathArray = menu.populardish.replace(/\[|\]|"/g, '').replace(/\\/g, '/').replace(/\/\//g, '/').split(',');

					// Create a new row
					const rowDiv = $('<div>', {
						class: 'row',
					});

					// Add images to the row with .col-md-4 class
					if (imagePathArray.length > 0) {
						imagePathArray.forEach(imagePath => {
							// Prepend the base URL to each image path
							const fullImagePath = 'http://localhost:8000/' + imagePath.trim();

							const colDiv = $('<div>', {
								class: 'col-md-4 mb-3',
							});

							const imgElement = $('<img>', {
								src: fullImagePath,
								class: 'img-fluid mb-3',
								alt: 'Uploaded Image',
								style: 'width: 100%; height: 300px;',
							});

							colDiv.append(imgElement);
							rowDiv.append(colDiv);
						});

						// Append the row to the parent container
						$('#uploadedImages', parent).append(rowDiv);
					}
				} else if (Array.isArray(menu.populardish)) {
					// Handle populardish as an array of image paths
					menu.populardish.forEach(imagePath => {
						// Prepend the base URL to each image path
						const fullImagePath = 'http://localhost:8000/' + imagePath.trim();

						const colDiv = $('<div>', {
							class: 'col-md-4 mb-3',
						});

						const imgElement = $('<img>', {
							src: fullImagePath,
							class: 'img-fluid mb-3',
							alt: 'Uploaded Image',
							style: 'width: 100%; height: 200px;',
						});

						colDiv.append(imgElement);
						$('#uploadedImages', parent).append(colDiv);
					});
				} else {
					console.error('populardish is not a string or array:', menu.populardish);
				}

				parent.modal('show');
			} else {
				console.error('Failed to retrieve menu:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving menu:', error);
		}
	});
}

function resetyoutubeForm() {
	$('#youtubecmsModalLabel').text('add youtube content');
	$('#youtube-cmsform').trigger('reset');
}

function addYoutubeDetail() {
	resetyoutubeForm();
	$('#youtubecmsModal').modal('show');

}
function editYoutubeDetail(youtube_id) {
	resetyoutubeForm();

	$('#youtube-cmsform').attr('action', '/admin/youtuberecord/' + youtube_id);
	$.ajax({
		url: '/admin/youtuberecord/' + youtube_id,
		method: 'GET',
		success: function (res) {
			console.log(res);
			if (res.success) {
				const youtuberecord = res.data;
				const parent = $('#youtubecmsModal');
				$('#youtubecmsModalLabel').text("update youtube records");
				$('[name="youtubeLink"]', parent).val(youtuberecord.youtubeLink);


				parent.modal('show');
			}
			else {
				console.error('Failed to retrieve youtuberecord:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving menu:', error);
		}
	})
}

function resetAboutCmsForm() {
	$('#aboutcmsModalLabel').text('add about content');
	$('#about-cmsform').trigger('reset');
}

function addAboutcms() {
	resetAboutCmsForm();
	$('#aboutcmsModal').modal('show');
}

function editAboutDetail(about_id) {
	resetAboutCmsForm();

	$('#about-cmsform').attr('action', '/admin/aboutrecord/' + about_id);
	$.ajax({
		url: '/admin/aboutrecord/' + about_id,
		method: 'GET',
		success: function (res) {
			console.log(res);
			if (res.success) {
				const aboutrecord = res.data;
				const parent = $('#aboutcmsModal');
				$('#aboutcmsModalLabel').text("update about records");
				$('[name="aboutCompany"]', parent).val(aboutrecord.aboutCompany);
				$('[name="aboutFounder"]', parent).val(aboutrecord.aboutFounder);


				parent.modal('show');
			}
			else {
				console.error('Failed to retrieve aboutRecord:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving menu:', error);
		}
	})
}

function resetMenuForm() {
	$('#menuAddModalLabel').text('add menu');
	$('#menu-form-action').attr('name', 'add menu');
	$('#menu-form').trigger('reset');
}

function addMenu() {
	resetMenuForm();
	$('#menuAddModal').modal('show');
}

function editMenu(menu_id) {
	resetMenuForm();

	$('#menu-form').attr('action', '/admin/menu/' + menu_id);
	$.ajax({
		url: '/admin/menu/' + menu_id,
		method: 'GET',
		success: function (res) {
			console.log(res);
			if (res.success) {
				const menu = res.data;
				const parent = $('#menuAddModal');
				$('#menuAddModalLabel').text("update menu");
				$('[name="name"]', parent).val(menu.name);
				$('[name="price"]', parent).val(menu.price);
				$('[name="menutype"]', parent).val(menu.menutype);
				$('[name="category"]', parent).val(menu.category);
				$('[name="description"]', parent).val(menu.description);

				parent.modal('show');
			}
			else {
				console.error('Failed to retrieve menu:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving menu:', error);
		}
	})
}

function resetTopdishForm() {
	$('#topdishAddModalLabel').text('add top dish');
	$('#topdish-form').trigger('reset');
}

function addTopDish() {
	resetTopdishForm();
	$('#topdishAddModal').modal('show');
}

function editTopdish(dish_id) {
	resetTopdishForm();

	$('#topdish-form').attr('action', '/admin/dishrecord/' + dish_id);
	$.ajax({
		url: '/admin/dishrecord/' + dish_id,
		method: 'GET',
		success: function (res) {
			console.log(res);
			if (res.success) {
				const aboutrecord = res.data;
				const parent = $('#topdishAddModal');
				$('#topdishAddModalLabel').text("update top dish records");
				$('[name="dishname"]', parent).val(aboutrecord.dishname);
				$('[name="dishprice"]', parent).val(aboutrecord.dishprice);


				parent.modal('show');
			}
			else {
				console.error('Failed to retrieve dishRecord:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving menu:', error);
		}
	})
}

function addCategory() {
	resetCategoryForm();
	$('#categoryAddModal').modal('show');
	$('#category-form').attr('action', '/admin/addcategory');
}

function resetCategoryForm() {
	$('#categoryAddModalLabel').text('add category');
	$('#category-form-action').attr('name', 'add category');
	$('#category-form').trigger('reset');
}

$('#category-form').on('submit', function (e) {
	e.preventDefault();

	const form = $(this);
	const modal = $('#categoryAddModal');
	const btn = $('button[type="submit"]', modal);

	// Disable the button to prevent multiple submissions
	btn.prop('disabled', true);

	$.ajax({
		url: '/admin/addcategory',
		method: 'POST',
		data: form.serialize(),
		success: (res) => {
			modal.modal('hide');
		},
		complete: () => {
			// Re-enable the button after the AJAX request is complete
			btn.prop('disabled', false);
			updateSelect();
		}
	});
});


function viewMoreMenu(id) {
	$.ajax({
		url: '/admin/get-single-menu/' + id,
		method: 'GET',
		success: function (res) {
			if (res) {
				const parent = $('#viewMoreModal');

				$('[id="menu_desc"]', parent).text('Description');
				$('[id="menu_longdesc"]', parent).val(res.description);

				const baseUrl = 'http://localhost:8000/';

				let imageUrl = baseUrl + 'path-to-default-image.png'; // Replace with your default image URL

				if (res.image) {
					// Replace backslashes with forward slashes
					imageUrl = baseUrl + res.image.replace(/\\/g, '/');
					console.log('Image URL:', imageUrl);

					// Log image loading status
					$('<img>', { src: imageUrl }).on('load', function () {
						console.log('Image loaded successfully.');
					}).on('error', function (error) {
						console.error('Error loading image:', error);
					});
				}

				$('[id="menuImage"]', parent).attr('src', imageUrl);

				parent.modal('show');
			} else {
				console.error('Failed to retrieve Product details:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving Product details:', error);
		}
	});
}

function viewExploreDishes(id) {
	$.ajax({
		url: '/admin/get-single-homerecord/' + id,
		method: 'GET',
		success: function (res) {
			if (res) {
				const parent = $('#viewExploreDishes');
				const cardBody = $('.card-body', parent);

				// Clear previous content
				cardBody.html('');

				if (typeof res.populardish === 'string') {

					const imagePathArray = res.populardish.replace(/\[|\]|"/g, '').replace(/\\/g, '/').replace(/\/\//g, '/').split(',');

					// Add images to the modal body
					imagePathArray.forEach(imagePath => {
						// Prepend the base URL to each image path
						const fullImagePath = 'http://localhost:8000/' + imagePath.trim();

						const imgElement = $('<img>', {
							src: fullImagePath,
							class: 'img-fluid mb-3',
							alt: 'Dish Image'
						});
						cardBody.append(imgElement);
					});
				} else {
					console.error('populardish is not a string:', res.populardish);
				}
				parent.modal('show');
			} else {
				console.error('Failed to retrieve Product details:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving Product details:', error);
		}
	});
}







function updateSelect() {
	let details = [
		{
			dataurl: '/admin/categories',
			select: '#selectCategory'
		}

	];
	var emptyOption = $('<option></option>')
		.val('')
		.text('select');

	details.forEach((el) => {
		$.ajax({
			url: el.dataurl,
			method: 'GET',
			success: function (data) {
				const selectElement = $(el.select);
				selectElement.empty();

				selectElement.append(
					$('<option></option>').val('').text('Select')
				);
				data.forEach(function (item) {
					var optionElement = $('<option></option>')
						.val(item.id)
						.text(item.name);
					if (el.dataurl == '/admin/categories') {
						var optionElement = $('<option></option>')
							.val(item.id)
							.text(item.name);
					}
					selectElement.append(optionElement);
				});
			},
			error: function (xhr, status, error) {
				console.error('Error fetching :' + el.dataurl, error);
			}
		})
	})
}
updateSelect()


function viewMoreProduct(id) {
	$.ajax({
		url: '/admin/get-single-menu/' + id,
		method: 'GET',
		success: function (res) {
			if (res) {
				console.log(res);
				const parent = $('#viewMoreModal');
				$('[id="pro_desc"]', parent).text('Description');
				$('[id="pro_longdesc"]', parent).val(res.description);

				const baseUrl = 'http://localhost:8000/';


				let imageUrl = baseUrl + 'path-to-default-image.png'; // Replace with your default image URL

				if (res.image) {
					// If primary image is provided in the response, use it
					imageUrl = baseUrl + res.image.replace(/\\/g, '/');
				}

				const hoverImageUrl = baseUrl + (res.hoverimage || 'path-to-default-hover-image.png'); // Replace with your default hover image URL

				$('[id="productImage"]', parent).attr('src', imageUrl);
				$('[id="hoverProductImage"]', parent).attr('src', hoverImageUrl);

				console.log('res.hoverImage:', res.hoverImage);
				console.log('hoverImageUrl:', hoverImageUrl);

				parent.modal('show');
			} else {
				console.error('Failed to retrieve Product details:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving Product details:', error);
		}
	});
}

function confirmDelete(menuId) {
	if (confirm('Are you sure you want to delete this menu?')) {
		deleteMenu(menuId);
	}
}

async function deleteMenu(menuId) {
	try {

		const response = await fetch(`/admin/menu-delete/${menuId}`, {
			method: 'POST',
		});

		if (response.ok) {

			window.location.href = '/admin/menu';
		} else {

			console.error('Error deleting menu:', response.statusText);
		}
	} catch (error) {
		console.error('Error deleting menu:', error);
	}
}
function confirmDeletetopdish(dishId) {
	if (confirm('Are you sure you want to delete this top dish?')) {
		deleteTopdish(dishId);
	}
}

async function deleteTopdish(dishId) {
	try {

		const response = await fetch(`/admin/dish-delete/${dishId}`, {
			method: 'POST',
		});

		if (response.ok) {

			window.location.href = '/admin/cms';
		} else {

			console.error('Error deleting menu:', response.statusText);
		}
	} catch (error) {
		console.error('Error deleting menu:', error);
	}
}

function confirmDeleteEnquiry(enquiryId) {
	if (confirm('Are you sure you want to delete this enquiry?')) {
		deleteEnquiry(enquiryId);
	}
}

async function deleteEnquiry(enquiryId) {
	try {
		const response = await fetch(`/admin/enquiry-delete/${enquiryId}`, {
			method: 'POST',
		});

		if (response.ok) {
			window.location.href = '/admin/enquiry';
		} else {

			console.error('Error deleting enquiry:', response.statusText);
		}
	} catch (error) {
		console.error('Error deleting enquiry:', error);
	}
}