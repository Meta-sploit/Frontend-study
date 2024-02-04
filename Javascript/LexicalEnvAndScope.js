function a(){
    var c =10; //local space of the fn a
    function b(){
        console.log(c);
    }
}

a();

// it will print 
// 10
// as fn b can access the variable c from it's prarent fn a.

/*
 * In above code, there is a heriercy. 
 * First in the call stack GEC will be created and then EC of a will be created and then for b.
 * For instance check the EC of b, it will inherit variables from EC of the fn a, so it is termed as Lexical Env, 
 * Lexical scope is the ability for a function scope to access variables from the parent scope.
 */