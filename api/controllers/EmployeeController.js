const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  registerUser: async function (req, res) {
    try {
      const {
        last_name,
        first_name,
        middle_name,
        mobile,
        email,
        address,
        birthdate,
        gender,
        civil_status,
        username,
        password,
        user_type,
        name,
        contact_number,
        contact_email,
        relationship,
        contact_address
      } = req.body;

      const employee = await Employee.create({
        last_name,
        first_name,
        middle_name,
        mobile,
        email,
        address,
        birthdate,
        gender,
        civil_status
      }).fetch();

      const user = await Users.create({
        employee_id: employee.id,
        username,
        email,
        password,
        user_type
      }).fetch();

      const icoe = await Emergency.create({
        employee_id: employee.id,
        name,
        contact_number,
        contact_email,
        relationship,
        contact_address
      }).fetch();
      return res.status(201).json({message: 'User created successfully', user: user, employee: employee, in_case_of_emergency: icoe});
    } catch (err) {
      return res.status(500).json({ message: `Error creating user ${err}` });
    }
  }
};
