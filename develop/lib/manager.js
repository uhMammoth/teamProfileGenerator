const employee = require('./employee.js');

class manager extends employee {
    constructor(officeNumber){
        super();
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = manager;