let apiUrl

const apiUrls = {
    production: "https://mybikedatabase-backend.herokuapp.com",
    development: "http://localhost:3001"
}

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl