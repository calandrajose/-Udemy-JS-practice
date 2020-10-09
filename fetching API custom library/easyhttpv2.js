/**
 * HTTP Library
 * Library for making HTTP requests using ES6
 * Fetch with Promises
 * @version 2.0.0
 * @author  Jose Calandra
 *
 **/

class EasyHttp {

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(resp => resp.json())
                .then(() => resolve('Resource deleted...'))
                .catch(err => reject(err));
        });
    }
}