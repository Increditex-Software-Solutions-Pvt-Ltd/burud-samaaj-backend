async function getLatestDataFromBackend() {
    let profiles = [];

    try {
        const response = await $.ajax({
            type: 'GET',
            url: '/allprofiles', // Update the URL with your server endpoint or add query parameters for filtering
            dataType: 'json'
        });

        if (response.profiles) {
            // Sort profiles by createdAt field to get the latest ones
            response.profiles.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            // Slice the array to get the last 8 profiles
            profiles = response.profiles.slice(0, 8);
        }
    } catch (error) {
        // Handle error
        console.error(error);
    }

    return profiles;
}

async function showLatestProfiles() {
    const profileLatest = document.getElementById("latestProfileContainer");
    let profiles = await getLatestDataFromBackend()
    console.log(profiles);

    profileLatest.innerHTML = ""

    for (const profile of profiles) {
        let user = `
    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden text-center" style="height:200px;">
                            <img class="img-fluid"
                                src="https://www.shutterstock.com/image-photo/male-mugshot-passport-serious-portrait-260nw-2227218717.jpg"
                                alt="" style="object-fit: cover;">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>${profile.fullname}</h5>
                            <table class="table  text-center">

                                <tr>
                                    <td><b>Nashik</b></td>
                                </tr>
                                <tr>
                                    <td>
                                        <button class="btn  btn-outline-danger " btn-md data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop" style="outline: none;">View
                                            profile</button>
                                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-scrollable">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Profile
                                                            Details</h1>
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
                                                                    <tr>
                                                                        <td>Name:</td>
                                                                        <td>Priya</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Date Of Birth:</td>
                                                                        <td>27/05/1998</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Occupation:</td>
                                                                        <td>Self Buiseness(Agree Related)</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Education:</td>
                                                                        <td>MA (Master In Arts)</td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>



                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-danger">
                                                            <a href="profile_de.html" style="text-decoration: none;"
                                                                class="text-white">Send Interest</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>


                        </div>
                    </div>
                </div>
    `
        profileLatest.innerHTML += user
    }


}
showLatestProfiles()