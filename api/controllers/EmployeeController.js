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

      sails.log.info('User created successfully');
      return res.status(201).json({message: 'User created successfully', user: user, employee: employee, in_case_of_emergency: icoe});
    } catch (err) {
      sails.log.error(err);
      return res.status(500).json({ message: `Error creating user ${err}` });
    }
  },

  updateEmployee: async function (req, res) {
    try {
      let params = req.allParams();

      let attributes = {};
      let attributes2 = {}
      if (params.last_name) {
        attributes.last_name = params.last_name;
      }
      if (params.first_name) {
        attributes.first_name = params.first_name;
      }
      if (params.middle_name) {
        attributes.middle_name = params.middle_name;
      }
      if (params.mobile) {
        attributes.mobile = params.mobile;
      }
      if (params.email) {
        attributes.email = params.email;
      }
      if (params.address) {
        attributes.address = params.address;
      }
      if (params.birthdate) {
        attributes.birthdate = params.birthdate;
      }
      if (params.gender) {
        attributes.gender = params.gender;
      }
      if (params.civil_status) {
        attributes.civil_status = params.civil_status;
      }

      // update employee by id
      const updatedEmployee = await Employee.update({
        id: params.id
      }, attributes);

      // get the updated employee by id
      const getUpdatedEmp = await Employee.findOne({
        id: params.id,
      });

      sails.log.info(`Successfully updated employee ${params.id}`)
      return res.status(201).json({message: 'Update employee', employee: getUpdatedEmp});
    } catch (err) {
      sails.log.error(`Error: ${err}`);
      return res.status(500).json({message: `Error: ${err}`});
    }
  },

  findEmployee: async function (req, res) {
    try {
      const employees = await Employee.find();
      sails.log.info('Successfully pullup all employee');
      return res.status(200).json({message: 'List of employees', employee: employees});
    } catch (err) {
      sails.log.error(`Error: ${err}`);
      return res.status(500).json({message: `Error: ${err}`});
    }
  },

  findOneEmployee: async function (req, res) {
    try {
      const employee = await Employee.findOne({id: req.params.id});
      sails.log.info(`Successfully pull up employee ${ req.params.id}`);
      return res.status(200).json({message: `Successfully pull up employee ${req.params.id}`, employee: employee});
    } catch (err) {
      sails.log.error(`Error: ${err}`);
      return res.status(500).json({message: `Error: ${err}`});
    }
  },

  deleteEmployee: async function (req, res) {
    try {
      const deletedEmp = await Employee.updateOne({id: req.params.id}).set({active: false})
      if (!deletedEmp) {
        sails.log.error(`Employee not found`);
        return res.status(404).json({message: `Employee not found`});
      }

      sails.log.info(`Employee successfully deactivated`);
      return res.status(200).json({message: `Employee successfully deactivated`, employee: deletedEmp});
    } catch (err) {
      sails.log.error(`Error: ${err}`);
      return res.status(500).json({message: `Error: ${err}`});
    }
  }
};

