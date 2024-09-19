const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  registerUser: async function (req, res) {
    try {
      const {employeeData, employeeAccountData, incaseOfEmergencyData} = req.body;
      const newEmployee = await Employee.create({ ...employeeData}).fetch();
      const newEmpAccount = await Users.create({ ...employeeAccountData, employee_id: newEmployee.id}).fetch();
      const newEmpICOE = await Emergency.create({ ...incaseOfEmergencyData, employee_id: newEmployee.id}).fetch();

      return res.status(201).json({
        message: `Employee successfullt created`,
        employee: newEmployee,
        employee_account: newEmpAccount,
        incaseOfEmergency: newEmpICOE
      });
    } catch (err) {
      return res.status(500).json({errorss: `${err}`});
    }
  },

  updateEmployee: async function (req,res) {
    const employee_id = req.params.id;
    const {employeeData, emergencyData} = req.body;

    try {
      const updatedEmployee = await Employee.updateOne({id: employee_id}).set(employeeData);
      if (!updatedEmployee) {
        sails.log.error(`Employee not found`);
        return res.status(404).json({message: `Employee not found`});
      }

      const updatedICOE = await Emergency.updateOne({employee_id: employee_id}).set(emergencyData);
      if (!updatedICOE) {
        sails.log.error(`Emergency contact not found`);
        return res.status(404).json({message: `Emergency contact not found`});
      }

      sails.log.info(`Employee updated successfully`)
      return res.status(200).json({
        message: 'Employee updated successfully',
        employee: updatedEmployee,
        in_case_of_emergency: updatedICOE
      });
    } catch (err) {
      sails.log.error(`An error occurred while updating employee. ${err}`);
      return res.status(500).json({error: `${err}`});
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

      const deleteUser = await Users.updateOne({employee_id: req.params.id}).set({active: false});
      if (!deleteUser) {
        sails.log.error(`User not found`);
        return res.status(404).json({message: `User not found`});
      }

      sails.log.info(`Employee successfully deactivated`);
      return res.status(200).json({message: `Employee successfully deactivated`, employee: deletedEmp});
    } catch (err) {
      sails.log.error(`Error: ${err}`);
      return res.status(500).json({message: `Error: ${err}`});
    }
  }
};

