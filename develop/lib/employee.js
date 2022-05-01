class  employee{
    constructor(name, email){
        this.id = 1;
        this.name = name;
        this.email = email;
    }
    addId(){
        this.id++;
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