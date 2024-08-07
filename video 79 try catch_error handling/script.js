let a = prompt("Enter a number")

let b = prompt("Enter second number")

// let sum = a + b;

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b);

function main(){

    let x = 1;
    try {
        console.log("The sum is ", sum*x);
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai");
        return false
    }
    // console.log("files are being closed and db connection is being closed");
    finally{
        console.log("files are being closed and db connection is being closed");
    }
}

let c = main()

// NOTE :- As we know that if we want to run the code after return statement in any func() so we can't do that but finally{} is used to execute the code despite(ke bawajood) of return statement. 
