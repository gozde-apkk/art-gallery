




const { expressjwt } = require('express-jwt');
const config = require('config.json');

module.exports = jwt;

function jwt() {
    const { secret } = process.env.API_SECRET;
    return expressjwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate'
        ]
    });
}