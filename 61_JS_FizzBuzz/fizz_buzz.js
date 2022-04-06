function playFizzBuzz(number) {
    let resultArray = []
    let result;
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            result = "fizz buzz";
        } else if (i % 5 === 0) {
            result = "buzz";
        } else if (i % 3 === 0) {
            result = "fizz";
        } else { result = i };
        resultArray.push(result);
    };
    return resultArray;
};

let fizzBuzz40 = playFizzBuzz(40);
fizzBuzz40


