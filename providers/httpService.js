var request = require("request");

function httpRequest(options) {
    return new Promise((resolve, reject) => {
        request(options, function(error, response, body) {
            if (error) {
                console.log(error);
                reject(error);
            }
            console.log(body);
            resolve(body);
        });
})
}
module.exports.httpRequest = httpRequest;