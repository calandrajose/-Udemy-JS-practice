class UI {
    constructor() {
        this.posts = document.querySelector('#posts');
        this.title = document.querySelector('#title');
        this.body = document.querySelector('#body');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
        this.idInput = document.querySelector('#id');
        
    }

    showPosts(data) {
        let output = '';
        data.forEach((post) => {
            output += `
        <div class="card mb-3">
            <div class="card-body">
                <h4 class="card-title">${post.title}</h4>
                <p class="card-text">${post.body}</p>
                <a href="#" data-id = ${post.id} class="edit card-link">
                    <i class="fa fa-pencil edit"></i>
                </a>
                <a href="#" data-id = ${post.id} class=" card-link">
                    <i class="fa fa-remove delete"></i>
                </a>
            </div>
        </div>
        `;
        });
        this.posts.innerHTML = output;
    }

    clearFields() {
        this.title.value = '';
        this.body.value = '';
        this.idInput.value = '';
    }

    showAlert(message, className) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.postsContainer');
        container.insertBefore(div, this.posts);

        setTimeout(() => this.clearAlert(), 2000);
    }

    clearAlert() {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }

    showPostInForm(data) {
        this.title.value = data.title;
        this.body.value = data.body;
        this.idInput.value = data.id;
    }

    changeState(newState){
        if(newState === 'edit'){
            this.editState();
        }else if(newState === 'post'){
            this.postState();
        }

        this.clearFields();
    }

    editState(){
        if(!document.querySelector('.cancel')){
            this.postSubmit.classList = 'edit-submit btn btn-warning btn-block';
            this.postSubmit.textContent = 'Edit';
            const btn = document.createElement('button');
            btn.classList = 'cancel btn btn-light btn-block mt-3';
            btn.appendChild(document.createTextNode('Cancel'));
            document.querySelector('.card-body').appendChild(btn);
        }
    }

    postState(){
        this.postSubmit.classList = 'post-submit btn btn-primary btn-block';
        this.postSubmit.textContent = 'Post it';
    
        if(document.querySelector('.cancel')){
            document.querySelector('.cancel').remove();
        }
    }
}

export const ui = new UI();