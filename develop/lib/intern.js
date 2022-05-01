//intern is a subclass of employee using attributes id,name, email and school
const employee = require('./Employee');

class intern extends employee {
    constructor(school){
        super();
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = intern;