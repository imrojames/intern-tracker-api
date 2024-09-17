
module.exports = {
  attributes: {
    last_name: {type: 'string', required: true},
    first_name: {type: 'string', required: true},
    middle_name: {type: 'string'},
    mobile: {type: 'number'},
    email: {type: 'string', required: true},
    address: {type: 'string'},
    birthdate: {type: 'ref', columnType: 'date', required: true}, //YYYY-MM-DD
    gender: {type: 'string', required: true},
    civil_status: {type: 'string'},
    active: {type: 'boolean', defaultsTo: true}
  }
};
