const http = new EasyHttp();
const url = 'https://api.github.com/user';


/**GET GITHUB USERS */

/* http.get(url)
.then(data => console.log(data))
.catch(err => console.log('Error : ' +err)); */

const testData = {
    username: 'John Doe',
    email : 'jdoe@gmail.com'
};

/**POST JSON DATA */
http.post("https://jsonplaceholder.typicode.com/users", testData)
.then(resp => console.log(resp))
.catch(err => console.log(err));

/**PUT JSON DATA */
http.put("https://jsonplaceholder.typicode.com/users/1", testData)
.then(resp => console.log(resp))
.catch(err => console.log(err));

/**DELETE USER */
http.delete("https://jsonplaceholder.typicode.com/users/1")
.then(resp => console.log(resp))
.catch(err => console.log(err));