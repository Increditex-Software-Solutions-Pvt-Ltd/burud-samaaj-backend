async function getDataFromBackend(){
    let profile
    await $.ajax({
      type: 'GET',
      url: '/getsingleprofile', 
      success: function (response) {
          // Handle success response
          if (response.profile) {
             profile =  response.profile;
          }
          else {
              profile = [];
          }
      },
      error: function (xhr, status, error) {
          // Handle error
          console.error(error);
      }
  });
  return profile
  }

  getDataFromBackend()