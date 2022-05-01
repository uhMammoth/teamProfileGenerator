class  employee{
    constructor(name, id, email){
        this.id = 1;
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
        return 'Employee';
    }
}

module.exports = employee;