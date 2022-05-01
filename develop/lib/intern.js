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