class  employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }    
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Emlpoyee';
    }
}

class manager extends employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

class engineer extends employee {
    constructor(github){
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
}

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