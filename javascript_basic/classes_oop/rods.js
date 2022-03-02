class Rod {
    constructor (rodNumber,red,green,blue){
        this.rodNumber=rodNumber;
        this.red=red;
        this.green=green;
        this.blue=blue;
    }

    getRed(){
        return this.red;
    }
    getGreen(){
        return this.green;
    }
    getBlue(){
        return this.blue;
    }
    getRodNumber(){
        return this.rodNumber;
    }

    setRed(red){
         this.red=red;
    }
    setGreen(green){
         this.green=green;
    }
    setBlue(blue){
         this.blue=blue;
    }
}
