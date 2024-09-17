const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
  logins: async function (req, res) {
    try {
      const {username, email, password} = req.body;

      const user = await Users.findOne({ email });

      // check user email if exist
      if (!user) {
        sails.log.error('User not found');
        return res.status(404).json({message: 'User not found'});
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        sails.log.error('Invalid credintials');
        return res.status(401).json({message: 'Invalid credintials'});
      }

      // Create JWT Token
      const token = jwt.sign({id: user.id}, 'your_jwt_secret', {expiresIn: '1h'});
      sails.log.info('Login Successful');
      return res.status(200).json({message: 'Login Successful', token});
    } catch (err) {
      sails.log.error(`Error during login ${err}`);
      return res.status(500).json({message: `Error during login ${err}`, error: err});
    }
  },

  protected: async function (req, res) {
    try {
      sails.log.info('Access granted to protected route');
      return res.status(200).json({message: 'Access granted to protected route'});
    } catch (err) {
      return res.status(500).json({message: `${err}`});
    }
  }
}
