const fibonacci = function(num) {
    if(num<0)
        return "OOPS";
    if(num==0)
        return 0;
    if(num==1)
        return 1;
    return fibonacci(num-1)+fibonacci(num-2);
};

// if num ==2: fib(1) + fib(0) = 1
// if num==3: fib(2) + fib(1) = fib(1) + fib (0) + fib(1) = 2;

// Do not edit below this line
module.exports = fibonacci;
