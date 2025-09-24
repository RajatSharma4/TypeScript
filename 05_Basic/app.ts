//unknown , any in typescript

// let userInput: any;
// let userInput: unknown;
// let userName: string

// userInput = 10
// userName = "rajat"

// if(typeof userInput === "string"){
// userName = userInput // this is invalid because of unknown 

// }

// userName = userInput // this is valid because of any




// never return type in function

function generateError(message:string, code:number):never{
    throw{message:message, statusCode: code}
}

console.log(generateError("Invalid server", 504));
