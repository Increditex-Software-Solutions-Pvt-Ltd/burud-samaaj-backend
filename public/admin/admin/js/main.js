'use strict';

function handleApprove(userId) {
	// Make an AJAX request to your server
	alert("Approval in process")
	$.ajax({
		type: 'POST',
		url: '/admin/approveuser',
		data: { userId }, // Pass the user ID to the server
		success: function (response) {
			// Handle success response from the server
			alert('User approved successfully');
			window.location.href="/admin/users"
			// You can perform additional actions here if needed
		},
		error: function (xhr, status, error) {
			// Handle error response from the server
			alert('Error approving user');
			console.error('Error:', error);
		}
	});
}
async function handleReject(userId) {
	// Make an AJAX request to your server
	let reason = await prompt("Enter reason for rejection")
	alert("Rejection in process")
	await $.ajax({
		type: 'POST',
		url: '/admin/rejectuser',
		data: { userId,reason }, // Pass the user ID to the server
		success: function (response) {
			// Handle success response from the server
			alert('User Rejected successfully');
			window.location.href="/admin/users"
			// You can perform additional actions here if needed
		},
		error: function (xhr, status, error) {
			// Handle error response from the server
			alert('Error rejecting user');
			console.error('Error:', error);
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
				$('[id="dob"]', parent).val(res.dateofbirth.substring(0, 10));
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

function resetaboutcmsForm() {
	$('#aboutcmsAddModalLabel').text('add about content');
	$('#about-cmsform').trigger('reset');
}

function addAboutCms() {
	resetaboutcmsForm();
	$('#aboutcmsModal').modal('show');

}
function editAboutForm(about_id) {
	resetaboutcmsForm();

	$('#about-cmsform').attr('action', '/admin/edit-about/' + about_id);
	$.ajax({
		url: '/admin/edit-about/' + about_id,
		method: 'GET',
		success: function (res) {
			console.log(res);
			if (res.success) {
				const menu = res.data;
				const parent = $('#aboutcmsModal');
				$('#aboutcmsAddModalLabel').text("update about record");
				$('[name="aboutwebsite"]', parent).val(menu.aboutwebsite);
				$('[name="adhykshmanogat"]', parent).val(menu.adhykshmanogat);
				$('[name="sachivmanogat"]', parent).val(menu.sachivmanogat);
			

				// Clear previous images
			
				// Handle populardish as a string or array
				
				parent.modal('show');
			} else {
				console.error('Failed to retrieve about:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving about:', error);
		}
	});
}

function resetMemberForm() {
	$('#memberAddModalLabel').text('add Member content');
	$('#member-cmsform').trigger('reset');
}

function addMember() {
	resetMemberForm();
	$('#memberAddModal').modal('show');

}
function editMembers(member_id) {
	resetMemberForm();

	$('#member-cmsform').attr('action', '/admin/member/' + member_id);
	$.ajax({
		url: '/admin/member/' + member_id,
		method: 'GET',
		success: function (res) {
			console.log(res);
			if (res.success) {
				const members = res.data;
				const parent = $('#memberAddModal');
				$('#memberAddModalLabel').text("update member records");
				$('[name="membername"]', parent).val(members.membername);
				$('[name="position"]', parent).val(members.position);


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

function confirmDeleteMember(memberId) {
	if (confirm('Are you sure you want to delete this member?')) {
		deleteMember(memberId);
	}
}

async function deleteMember(memberId) {
	try {

		const response = await fetch(`/admin/delete-member/${memberId}`, {
			method: 'POST',
		});

		if (response.ok) {

			window.location.href = '/admin/cms';
		} else {

			console.error('Error deleting member:', response.statusText);
		}
	} catch (error) {
		console.error('Error deleting member:', error);
	}
}



function resetStoryForm() {
	$('#successStoryAddModalLabel').text('add success story');
	$('#successstory-form').trigger('reset');
}

function addSuccessStory() {
	resetStoryForm();
	$('#successStoryAddModal').modal('show');
}

function editSuccessStory(story_id) {
	resetStoryForm();

	$('#successstory-form').attr('action', '/admin/story/' + story_id);
	$.ajax({
		url: '/admin/story/' + story_id,
		method: 'GET',
		success: function (res) {
			console.log(res);
			if (res.success) {
				const story = res.data;
				const parent = $('#successStoryAddModal');
				$('#successStoryAddModalLabel').text("update success story");
				$('[name="bridename"]', parent).val(story.bridename);
				$('[name="groomname"]', parent).val(story.groomname);
				$('[name="city"]', parent).val(story.city);
				$('[name="description"]', parent).val(story.description);

				parent.modal('show');
			}
			else {
				console.error('Failed to retrieve story:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving story:', error);
		}
	})
}

function confirmDeleteStory(storyId) {
	if (confirm('Are you sure you want to delete this success story?')) {
		deleteStory(storyId);
	}
}

async function deleteStory(storyId) {
	try {

		const response = await fetch(`/admin/delete-story/${storyId}`, {
			method: 'POST',
		});

		if (response.ok) {

			window.location.href = '/admin/cms';
		} else {

			console.error('Error deleting story:', response.statusText);
		}
	} catch (error) {
		console.error('Error deleting story:', error);
	}
}
function resetVideoForm() {
	$('#successVideoAddModalLabel').text('add success video');
	$('#successvideo-form').trigger('reset');
}

function addSuccessVideo() {
	resetVideoForm();
	$('#successVideoAddModal').modal('show');
}

function editSuccessVideo(video_id) {
	resetVideoForm();

	$('#successvideo-form').attr('action', '/admin/video/' + video_id);
	$.ajax({
		url: '/admin/video/' + video_id,
		method: 'GET',
		success: function (res) {
			console.log(res);
			if (res.success) {
				const story = res.data;
				const parent = $('#successVideoAddModal');
				$('#successVideoAddModalLabel').text("update success video");
				$('[name="videourl"]', parent).val(story.videourl);
				$('[name="year"]', parent).val(story.year);
				$('[name="description"]', parent).val(story.description);

				parent.modal('show');
			}
			else {
				console.error('Failed to retrieve story:', res.message);
			}
		},
		error: function (xhr, status, error) {
			console.error('Error retrieving story:', error);
		}
	})
}

function confirmDeleteVideo(videoId) {
	if (confirm('Are you sure you want to delete this success video?')) {
		deleteVideo(videoId);
	}
}

async function deleteVideo(videoId) {
	try {

		const response = await fetch(`/admin/delete-video/${videoId}`, {
			method: 'POST',
		});

		if (response.ok) {

			window.location.href = '/admin/cms';
		} else {

			console.error('Error deleting story:', response.statusText);
		}
	} catch (error) {
		console.error('Error deleting story:', error);
	}
}













