const jwt = require('jsonwebtoken');

module.exports = async function (req, res, proceed) {
  const token = req.headers.authorization?.split(' ')[1] // Get token from header

  if (!token) {
    sails.log.error('Unauthorized: No token provided');
    return res.status(401).json({message: 'Unauthorized: No token provided'});
  }

  try {
    const decode = jwt.verify(token, 'your_jwt_secret');
    req.user = decode;
    return proceed();
  } catch (err) {
    sails.log.error('Unauthorized: Invalid Token');
    return res.status(401).json({message: 'Unauthorized: Invalid Token'})
  }
}
