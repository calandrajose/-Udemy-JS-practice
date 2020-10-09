class Github{

    constructor() {
        this.client_id = 'ba29abf4baf097906469';
        this.client_secret = '8c38b6876b83cc6214c117c9fba602fa7e5adaca';
        this.urlCredentials = `?client_id=${this.client_id}&cliente_secret=${this.client_secret}`;
    }

    async getUsers(username) {
        const profileResp = await fetch(`https://api.github.com/users/${username}${this.urlCredentials}`);
        const profile = await profileResp.json();

        return {
            profile: profile
        };
    }
}