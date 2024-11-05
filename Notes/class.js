class car{
    constructor (){  
    this.brand = "toyato";//property of the class
    this.model = "2019";// property of the class
    }
    
    describe(){
    return `This car is a ${this.brand} ${this.model}.`;
    }
    }
    
    //creating a new object from the car class
    
    let myCar = new car();
    console.log(myCar.describe());