// str = "abcde";
// s1 = "ace";
// s2 = "bd";
// output = "ace  bd"
//split, then extract even and odds, then assign them to a string and finally concatenate both of them with two spaces

function processData(input) {
    let splitted = input.split("");
    console.log(splitted);
    let evenOnes = [];
    let oddOnes = [];
    splitted.map(x => {
        if(splitted.indexOf(x) % 2 === 0){
            evenOnes.push(x);
        }
        else{
            oddOnes.push(x);
        }
    })
    console.log(evenOnes.join(""));
    console.log(oddOnes.join(""));

    console.log(evenOnes.join("") + "  " + oddOnes.join(""))
}

processData("hacker");