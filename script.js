const student={
    fullName:" surabhi M R",
    marks:98.8,
    printMarks:function(){
        console.log("marks=",this.marks);
    },
};

const employee={
    calTax(){
        console.log(" Tax rate is 10%");
    },
    calTax2:function(){
        console.log(" tax rate is 20%");
    }

};

const surabhi={
    salary:50000,
    calTax(){
        console.log(" tax rate is 30%");
    }
};
const surabhi2={
    salary:50000,
};
const surabhi3={
    salary:50000,
};
const surabhi4={
    salary:50000,
};
const surabhi5={
    salary:50000,
};

surabhi.__proto__=employee;
surabhi2.__proto__=employee;
surabhi3.__proto__=employee;
surabhi4.__proto__=employee;
surabhi5.__proto__=employee;

//<<<<classes>>>

class ToyotoCar{
    constructor(brand,milege){
        console.log(" creating a new object");
        this.brand=brand;
        this.milege=milege;
    }
    start(){
        console.log(" start");
    }
    stop(){
        console.log("stop");
    }
    
}
let fortuner=new ToyotoCar(" fortuner",10);

let lexus=new ToyotoCar("lexus",12);

<<<<< inheritance>>>>>>
class parent{
    hello(){
        console.log(" hello");
    }
}
class child extends parent{}
let obj=new child();

class man{
    constructor(){
        this.species="homosapiens";
    }
    eat(){
        console.log("eats");
    }
}
class engineer extends man{
    constructor(branch){
        super();//to invoke parent class constructor
        this.branch=branch;
    }
    code(){
        console.log(" coding and problem solving");
    }
}
let surabhi=new engineer(" data science");

//=========
// data modeling
// ========

// data modeling is the proccess of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the types of data used and stored within the system , the relationship among these data types, the ways the data can  be grouped and organised and its formats and attributes.
