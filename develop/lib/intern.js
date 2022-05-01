const employee = require('./employee');

class intern extends employee {
    constructor(school){
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