class Api {
    constructor({baseUrl, apiKey}) {
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
    }

    search(searchQuery){
        return fetch(`${this._baseUrl}/search/photos?query=${searchQuery}`,{
            headers: {
                Authorization: `Client-ID ${this._apiKey}`
            }
        }).then( response => response.ok ? response.json() : Promise.reject(response.status))
    }
}

const config = {
    baseUrl:'https://api.unsplash.com',
    apiKey: YOUR_TOKEN
}

const api = new Api(config)

export default api;