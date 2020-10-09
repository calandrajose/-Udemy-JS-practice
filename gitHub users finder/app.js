const github = new Github();
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
    const user = e.target.value;

    if (user !== '') {
        github.getUsers(user)
            .then(data => {
                if(data.profile === 'Not Found'){
                    //show alert UI
                }
                else{
                    ///create profile UI
                }
            });
    }
    else{
        //CLEAR INTERFACE
    }
});