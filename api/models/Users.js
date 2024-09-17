const bcrypt = require('bcryptjs');

module.exports = {
  attributes: {
    employee_id: {model: 'Employee', required: true}, // Relation to Employee model
    username: {type: 'string', required: true, unique: true},
    email: {type: 'string', required: true, unique: true},
    password: {type: 'string', required: true},
    user_type: {type: 'number', defaultsTo: 1}, //1 = admin, 0 = user
    active: {type: 'boolean', defaultsTo: true}
  },

  //hash password before creating user
  beforeCreate: async function (user, proceed) {
    try {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      return proceed();
    } catch (error) {
      return proceed(error);
    }
  },
}
