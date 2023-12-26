const jwt = require('jsonwebtoken') ;

const generateToken = ( userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

};

module.exports =generateToken;
