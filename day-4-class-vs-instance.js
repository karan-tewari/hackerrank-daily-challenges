function Person(initialAge){
    // Add some more code to run some checks on initialAge
    // I always save initial value !
    var age = initialAge;
    
    if (age < 0) {
        age = 0;
        console.log("Age is not valid, setting age to 0.");
    }
    
    this.amIOld=function(){
        // Do some computations in here and print out the correct statement to the console
        switch (true) {
            case (age < 13):
                console.log("You are young.");
                break;
            case (age < 18):
                console.log("You are a teenager.");
                break;
            default:
                console.log("You are old.");
        }
    };
   
    this.yearPasses=function(){
        // Increment the age of the person in here
        return age += 1; 
    };
}