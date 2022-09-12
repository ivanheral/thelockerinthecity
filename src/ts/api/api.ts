const API_URL = process.env.API_URL ? process.env.API_URL : '';

export type methods = 'GET' | 'PUT' | 'POST' | 'PATCH';

export type iInit = {
    method: methods;
    headers: Headers;
    body?: string | undefined;
};

function fetchLocker<T>(path: string, method: methods = 'GET', body?: T) {
    const myHeaders = new Headers();

    const Init: iInit = { method, headers: myHeaders };

    if (body) Init.body = JSON.stringify(body);

    return fetch(`${API_URL}/${path}`, Init).then((postsResponse) => {
        if (postsResponse.ok) {
            return postsResponse.json();
        }
        return Promise.reject();
    });
}

export default fetchLocker;
