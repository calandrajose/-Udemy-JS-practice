class Github {

    constructor() {
        this.client_id = 'ba29abf4baf097906469';
        this.client_secret = '8c38b6876b83cc6214c117c9fba602fa7e5adaca';
        this.urlCredentials = `?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        this.idsecret64 = 'YmEyOWFiZjRiYWYwOTc5MDY0Njk8c38b6876b83cc6214c117c9fba602fa7e5adaca=='
    }

    async getUsers(username) {
         //const profileResp = await fetch(`https://api.github.com/users/${username}${this.urlCredentials}`); 
         const profileResp = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `Basic ${this.idsecret64}`,
            }
        }); 
        //const reposResp = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}${this.urlCredentials}`); 

        const reposResp = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, {
            headers: {
                Authorization: `Basic ${this.idsecret64}`,
            }
        }); 

        const profile = await profileResp.json();
        const repos = await reposResp.json();

        return {
            profile: profile,
            repos: repos
        };
    }
}   