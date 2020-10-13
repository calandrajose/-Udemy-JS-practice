class Ui {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="profile image" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">${user.login}</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_repos}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.followers}</span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>    
            </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest repos</h3>
      <div id="repos"></div>
      `;
    }

    showRepos(repos){
        let output = '';

        repos.forEach(((repo) => {
            output +=`
                <div class="card card-body mb-2">
                    <div class="row>
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary"><h5> Stars: ${repo.stargazers_count}</h5></span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        }));
        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message, className){
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');   
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        setTimeout(this.clearAlert(), 1500)
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
}