let apiUrl

const apiUrls = {
    production: "https://my-bike-database-backend.onrender.com",
    development: "http://localhost:3001"
}

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl