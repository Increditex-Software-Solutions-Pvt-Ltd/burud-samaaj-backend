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
        let user = `
    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item position-relative rounded overflow-hidden">
                    <div class="overflow-hidden text-center">
                    <img class="img-fluid object-fit-cover" 
                         style="height: 200px; " 
                         src="${profilepics.profilepic.replace(/\\/g, '/')}" 
                         alt="">
                </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>${profile.fullname}</h5>
                            <table class="table  text-center">

                                <tr>
                                    <td><b>${profile.city}</b></td>
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

