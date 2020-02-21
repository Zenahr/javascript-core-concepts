// Expected behaviour:
//              fizz_buzz(20) ---> 1, 2, fizz, 4, buzz, fizz_buzz, 7, ... 20 (print out all number till 20, print out fizz if the number is divideable by 3, print out buzz if diviediable by 5 and print out fizz_buzz if diviedable by both 3 and 5)

// Some shorthand code to make my life easier
const L = function(message) {return console.log(message)}
const T = function(object) {return console.table(object)}


function fizz_buzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            L("fizz_buzz")
        } else if (i % 3 == 0 ) {
            L("fizz")
        }  else if (i % 5 == 0) {
            L("buzz")
        }  else {
            L(i)
        }   
    }
}

fizz_buzz(32)