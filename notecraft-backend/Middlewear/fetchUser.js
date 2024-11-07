const jwt = require('jsonwebtoken');
const jwtString = 'Nothing';

const fetchUser = (req, res, next) => {
    const token = req.header('token');
    const data = jwt.verify(token, jwtString);
    req.user = data.user;
    next();
}

module.exports = fetchUser;