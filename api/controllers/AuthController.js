const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/Users');

module.exports = {
  logins: async function (req, res) {
    try {
      const {username, email, password} = req.body;

      const user = await Users.findOne({ email });

      // check user email if exist
      if (!user) {
        return res.status(404).json({message: 'User not found'});
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({message: 'Invalid credintials'});
      }

      // Create JWT Token
      const token = jwt.sign({id: user.id}, 'your_jwt_secret', {expiresIn: '1h'});
      return res.status(200).json({message: 'Login Successful', token});
    } catch (err) {
      return res.status(500).json({message: `Error during login ${err}`, error: err});
    }
  },

  protected: async function (req, res) {
    try {
      return res.status(200).json({message: 'Access granted to protected route'});
    } catch (err) {
      return res.status(500).json({message: `${err}`});
    }
  }
}
