/* Reachability

The main concept of memory management in JavaScript is reachability.

Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed 
to be stored in memory.

1. There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.

For instance:

- Local variables and parameters of the current function.
- Variables and parameters for other functions on the current chain of nested calls.
- Global variables.
- (there are some other, internal ones as well)

These values are called roots.

2. Any other value is considered reachable if it’s reachable from a root by a reference or by a chain 
of references.

For instance, if there’s an object in a local variable, and that object has a property referencing 
another object, that object is considered reachable. And those that it references are also reachable. 
Detailed examples to follow.

There’s a background process in the JavaScript engine that is called garbage collector. It monitors 
all objects and removes those that have become unreachable. */