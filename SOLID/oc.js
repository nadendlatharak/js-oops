// open for extension 
// closed for modifications

class Vehicle{
    constructor(efficiency,fuelcap){
        this.efficiency = efficiency;
        this.capacity = fuelcap;
    }

    calcRange(){
        return this.efficiency * this.capacity;
    }
}

// let there be an addition of electric functionality
// modify this class to calculatethe range

