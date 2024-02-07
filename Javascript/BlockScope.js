/**
 * 
 */

var a=10;
{
    let b=20;
    const c=30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

console.log(a); // 10
console.log(b); // error b is not defined
console.log(c); // code will not be executed for this line 

/**
 * Scope of let and const will be restricted to the block but var can be acessed anywhere 
 * in the file as it is of type var and had been assigned to global execution context.
 */

var a=10;
{
    var a=20;
    const c=30;
    console.log(a); // 20
    console.log(c); // 30
}

console.log(a); // 20

/**
 * variable a is shadowing itself in the block and at line 31 output will be 20 as both are 
 * pointing to same varible in global execution context
 */


let x=10;
{
    let x=20;
    console.log(x); // 20
}

console.log(x); // 10

/**
 * For line 39 one memory will be created for x (Script)
 * the inside the block again memory (Block) for x will be created 
 * as they both are in different memory scope so at line 43 Block 
 * memory will be removed and x will be retrieved from Script memory
 * Same behaviour will be seen for the const also.
 */

let f=20;
{
    let f=30;
    console.log(f);
}

/**
 * above code will give the error because scope of f as var is for entire the file 
 * So it will contradict as redecalred variable 
 * but below code will not give error 
 *  let f=20;
    {
        let f=30;
        console.log(f);
    }
 *  as f at line 67 has scope inside the block only  same goes for the const 
 */


/**
 * There are three type of scope
 *     Global - when any var is defined, can be accessed anywhere in the file, also with this or window keyword
 *     Script - default memory created for the let and const 
 *     Block  - Memory created for the let and const inside the block and their scope is restricted inside the block itself
 */