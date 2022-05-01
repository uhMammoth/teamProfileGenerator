const employee = require('./Employee');

class engineer extends employee {
    constructor(github){
        super();
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = engineer;