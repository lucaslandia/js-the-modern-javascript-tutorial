/* Babel is a transpiler. It rewrites modern JavaScript code into the previous standard.

Actually, there are two parts in Babel:

1. First, the transpiler program, which rewrites the code. The developer runs it on their own 
computer. It rewrites the code into the older standard. And then the code is delivered to the 
website for users. Modern project build systems like webpack provide means to run transpiler 
automatically on every code change, so that it’s very easy to integrate into development process.

2. Second, the polyfill.

New language features may include new built-in functions and syntax constructs. The transpiler 
rewrites the code, transforming syntax constructs into older ones. But as for new built-in functions, 
we need to implement them. JavaScript is a highly dynamic language, scripts may add/modify any functions, 
so that they behave according to the modern standard.

A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing 
implementations. */