
function fiveToOneHundred() {
    for (let i=5; i<=100; i++)
        console.log(i)
};

fiveToOneHundred();

//2.
function multiplesOfThree() {
    for (let i = 0; i < 100; i++){
        if (i % 3 === 0) {
            console.log(i)
        }
       }
    }
multiplesOfThree();

function multiplesOfThreeOrFive() {
    for (let i = 0; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }
};

multiplesOfThreeOrFive();