"use strict"

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    //Constructors are methods that run when we instantiate our class

    registerUser(){
        console.log(this.username+" is now registered")
    }

    static countUsers(){
        console.log("There are 20 users")
    }
}


// let Shinu = new User("Shinu", "mathewshinu9474@gmail.com", "shinz9434")
// Shinu.registerUser()
// User.countUsers()

class Members extends User{
    constructor(username, email, password, memberpackage){
        super(username, email, password);
        this.memberpackage = memberpackage
    }

    getPackage(){
        console.log("Package "+this.memberpackage+" recieved for "+this.username)
    }
}

let Mike = new Members("Mike", "mike@gmail.com", "mike@13", "GB1432")
Mike.getPackage()
