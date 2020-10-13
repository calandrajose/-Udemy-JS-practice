const github = new Github();
const ui = new Ui();
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
    const user = e.target.value;

    if (user !== '') {
        github.getUsers(user)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    ui.showAlert('User not found', 'alert alert-danger')
                    setTimeout(ui.clearProfile, 1500)      
                }
                else{
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    }
    else{
        ui.clearProfile();
    }
});