
const fetch = require("node-fetch")

module.exports = function () {
    return fetch("http://localhost:8000/branch").then(r=>r.json()).catch(error => console.error(error.response.data))
}