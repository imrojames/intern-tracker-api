module.exports = {
  attributes: {
    employee_id: {model: 'Employee', required: true},
    name: {type: 'string', required: true},
    contact_number: {type: 'number', required: true},
    contact_email: {type: 'string'},
    relationship: {type: 'string'},
    contact_address: {type: 'string'}
  }
};
