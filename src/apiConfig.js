let apiURL

const apiURLs = {
    production: "https://mybikedatabase-backend.herokuapp.com",
    development: "http://localhost:3001"
}

if (window.location.hostname === "localhost") {
    apiURL = apiURLs.development
} else {
    apiURL = apiURLs.production
}

export default apiURL