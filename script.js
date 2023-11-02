// console.log("sohrab momand");
// console.log("Business");


// const sohrab = "Sohrab momand";
// console.log(sohrab);
// const cipher = window.btoa(sohrab);
// console.log(cipher);

// console.log("-------------------------------")

// const agianRealText = window.atob(cipher);
// console.log(agianRealText);


// console.log(window.btoa(sohrab));

// let encryptedData;

// function encrypter() {
// let storeString = document.getElementById('inputRealText').value;

// let makingTheDataencrypt = storeString;

// swtich(makingTheDataencrypt) {
//         case 'sohrab':
//     console.log('momand')


// }

// encryptedData = window.btoa(storeString);

// if (storeString == 'sohrab') {
//     let encryptedData = "vwhgvfd2u84yf9uw90ievxsssx0quvqhrgube09ru";
// }

// document.getElementById('inputEncryptedDate').value = encryptedData;

// }

// function decrypt() {
//     let decryptedData = window.atob(encryptedData);
//     document.getElementById('inputEncryptedDate').value = decryptedData;

// }




// const abcde = [['a', 'b', 'c', 'd', 'e', 'f',
//     'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
//     'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
//     'y', 'z'],
// ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
//     'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
//     'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']];

// let enterdData = prompt('Enter a text');

// let dataToencrypt = "";

// if (enterdData === abcde[0[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]] || enterdData === abcde[1[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]]) {
//     dataToencrypt += "akjbsdkv(^&*%&$986857KVJC";
// } else {
//     console.log("Error")
// }


// let enterdData = document.getElementById('inputRealText').value;
// let enterdData = prompt('Enter a text');
// let outputdecryptedData = "";

// for (let i = 0; i < enterdData.length; i++) {

//     switch (enterdData[i]) {
//         case "a":
//             outputdecryptedData += "jgf5%^";
//             break;

//         case "b":
//             outputdecryptedData += "jsfoa++++%^";
//             break;

//         case "c":
//             outputdecryptedData += "#$%^&";
//             break;

//         case "d":
//             outputdecryptedData += "#$%^&";
//             break;

//         case "e":
//             outputdecryptedData += "#$%^&";
//             break;

//         case "f":
//             outputdecryptedData += "#$%^&";
//             break;

//         case "g":
//             outputdecryptedData += "#$%^&";
//             break;

//         case "h":
//             outputdecryptedData += "#$%^&";
//             break;

//         case "i":
//             outputdecryptedData += "#$%^&";
//             break;

//         case "j":
//             outputdecryptedData += "#$%^&";
//             break;

//         case "k":
//             outputdecryptedData += "#$%^&";
//             break;

//         case "l":
//             outputdecryptedData += "#$%^&";
//             break;

//         case "o":
//             outputdecryptedData += "#$%^&";
//             break;
//     }
// }

// console.log(outputdecryptedData);


// let theDataFromUser = prompt("Enter A text or number");

// let theDate = [theDataFromUser];

// if (theDate == )

// function encryptedData(data, shift) {
//     let encryptedData = "";
//     for (let i = 0; i < data.length; i++) {
//         let charCode = data.charCodeAt(i);
//         if (charCode >= 65 && charCode <= 90) {
//             encryptedData += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
//         } else if (charCode >= 97 && charCode <= 122) {
//             encryptedData += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
//         } else {
//             encryptedData += data.charAt(i);
//         }
//     }
//     return encryptedData;
// }

// // const plainText = "Sohrab, Momand";
// // const shift = 3;

// // const encryptedText = encryptedData(plainText, shift);

// console.log("encrypted:  + encryptedText");

// const callThefunction = encryptedData("sohrab momand");

// console.log(callThefunction);


// // Encryption function
// function encryptData(data, shift) {
//     let encryptedData = "";
//     for (let i = 0; i < data.length; i++) {
//         let charCode = data.charCodeAt(i);
//         if (charCode >= 65 && charCode <= 90) { // Uppercase letters
//             encryptedData += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
//         } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
//             encryptedData += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
//         } else {
//             encryptedData += data.charAt(i); // Non-alphabetic characters remain unchanged
//         }
//     }
//     return encryptedData;
// }

// // Decryption function
// function decryptData(data, shift) {
//     let decryptedData = "";
//     for (let i = 0; i < data.length; i++) {
//         let charCode = data.charCodeAt(i);
//         if (charCode >= 65 && charCode <= 90) { // Uppercase letters
//             decryptedData += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
//         } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
//             decryptedData += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
//         } else {
//             decryptedData += data.charAt(i); // Non-alphabetic characters remain unchanged
//         }
//     }
//     return decryptedData;
// }

// // Example usage
// const plaintext = "Hello, World!";
// const shift = 3;

// const encryptedText = encryptData(plaintext, shift);
// console.log("Encrypted: " + encryptedText);

// const decryptedText = decryptData(encryptedText, shift);
// console.log("Decrypted: " + decryptedText);


// function toEncryptData(sTring) {

//     // the variable below used to stroe all the encrypted data manually
//     // we could use the method charCodeAt() but i want to do it manually
//     let base64charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

//     // now in here i want to convert the entered string to an array of charecters
//     // so i must use the split method to split any string into charecters
//     let charecters = sTring.split("");

//     // now i need a variable to store the result of the splited characters
//     let result = "";

//     // now i must loop through each charecter in the array
//     // using foor loop
//     for (let i = 0; i < charecters.length; i++) {

//         let charecter1 = charecters[i].charCodeAt(0);
//         let charecter2 = charecters[i + 1] ? charecters[i + 1].charCodeAt(0) : 0;
//         let charecter3 = charecters[i + 2] ? charecters[i + 2].charCodeAt(0) : 0;


//         // now lets combine the charecters values into 64-bit number
//         let combinedValue = (charecter1 << 16) + (charecter2 << 8) + charecter3;

//         // now i will use an array to split the 24 bit numbers into 6bit numbers
//         let base64Values = [
//             (combinedValue >> 18) & 63,
//             (combinedValue >> 12) & 63,
//             (combinedValue >> 6) & 63,
//             combinedValue & 63,
//         ];

//         // now i will convert the base64 numbers into base64 charecters
//         let convertbase64charecters = base64Values.map(function (value) {
//             return base64charecters.charAt(value);
//         });

//         if (!charecters[i + 1]) {
//             convertbase64charecters[2] = '=';
//         }

//         if (!charecters[i + 2]) {
//             convertbase64charecters[3] = '=';
//         }

//         result += base64Values.join("");
//     }

//     return result;
// }

// let realText = prompt("Enter Your Password");
// let encryptthedaTa = toEncryptData(realText);
// console.log(encryptthedaTa);


// console.log("sohrab");




// let password = prompt("Enter your password");

// let encrypt = Number(password) * Math.random();

// console.log(encrypt);


// let enteredData = prompt("Enter your name");

// let changeTheData = Math.random();

// let result = Number(enteredData) * changeTheData;

// let changeThedataBack = result.toString();

// console.log(changeThedataBack);





// function encryptData(data, key) {
//     const keyBytes = [];
//     for (let i = 0; i < data.length; i++) {
//         keyBytes.push(key.charCodeAt(i));
//     }

//     const dataBytes = [];
//     for (let i = 0; i < data.length; i++) {
//         dataBytes.push(data.charCodeAt(i));
//     }


//     const encryptedBytes = [];
//     for (let i = 0; i < dataBytes.length; i++) {
//         const encryptedByte = dataBytes[i] ^ keyBytes[i % keyBytes.length];
//         encryptedBytes.push(encryptedByte);
//     }

//     let encryptedData = "";
//     for (let i = 0; i < encryptedBytes.length; i++) {
//         const hex = encryptedBytes[i].toString(16).padStart(2, "0");
//         encryptedData += hex;
//     }

//     return encryptedData;
// }

// const data = "hu";
// const key = "My secret Key";

// const encryptedData = encryptData(data, key); console.log("encrypted Data: ", encryptedData);

// encryptData();







//==============//
// if a === ksncjdbf3r and random number
//==============//

// let enteredData = prompt("enter Your Name");
// if (enteredData >= "E" || enteredData >= "e") {
//     console.log("true");
// } else {
//     console.log("false");
// }





// let enteredData = prompt("enter Your Name");

// switch (enteredData) {
//     case 'A':
//         console.log("Kos zanet");
//         break;
//     case 'B':
//         console.log("Kos zanet");
//         break;
//     case 'C':
//         console.log("Kos zanet");
//         break;
//     case 'D':
//         console.log("Kos zanet");
//         break;
//     case 'E':
//         console.log("Kos zanet");
//         break;
//     case 'F':
//         console.log("Kos zanet");
//         break;
//     case 'G':
//         console.log("Kos zanet");
//         break;
//     case 'H':
//         console.log("Kos zanet");
//         break;
//     case 'I':
//         console.log("Kos zanet");
//         break;
//     case 'J':
//         console.log("Kos zanet");
//         break;
//     case 'K':
//         console.log("Kos zanet");
//         break;
//     case 'L':
//         console.log("Kos zanet");
//         break;
//     case 'M':
//         console.log("Kos zanet");
//         break;
//     case 'N':
//         console.log("Kos zanet");
//         break;
//     case 'O':
//         console.log("Kos zanet");
//         break;
//     case 'P':
//         console.log("Kos zanet");
//         break;
//     case 'Q':
//         console.log("Kos zanet");
//         break;
//     case 'R':
//         console.log("Kos zanet");
//         break;
//     case 'S':
//         console.log("Kos zanet");
//         break;
//     case 'T':
//         console.log("Kos zanet");
//         break;
//     case 'U':
//         console.log("Kos zanet");
//         break;
//     case 'V':
//         console.log("Kos zanet");
//         break;
//     case 'W':
//         console.log("Kos zanet");
//         break;
//     case 'X':
//         console.log("Kos zanet");
//         break;
//     case 'Y':
//         console.log("Kos zanet");
//         break;
//     case 'Z':
//         console.log("Kos zanet");
//         break;
// }


// console.log(enteredData);

// function encryptData(data) {
//     let encryptedData = '';
//     for (let i = 0; i < data.length; i++) {
//         const charCode = data.charCodeAt(i);
//         const encryptcharCode = charCode + 1;
//         encryptedData += String.fromCharCode(encryptcharCode);
//     }
//     return encryptedData;
// }

// function decryptData(encryptedData) {
//     let decryptedData = '';
//     for (let i = 0; i < encryptedData.length; i++) {
//         const charCode = data.charCodeAt(i);
//         const decryptedCharCode = charCode - 1;
//         decryptedData += String.fromCharCode(decryptedCharCode);;
//     }
//     return decryptedData;
// }




// const data = "Sohrab momand";
// const makeThisencrypted = encryptData(data);
// console.log(makeThisencrypted);

// const decrypt = decryptData(makeThisencrypted);
// console.log(decrypt)

// i will make a function that could encrypt the data
// Encryption function
function encryptData(data) {
    // now i need a varibale to store the encrypted data later
    let encryptedData = '';
    // with the help of the for loop below we will get every charecter of the inputed data or string
    for (let i = 0; i < data.length; i++) {
        // using the charCodeAt() method
        const charCode = data.charCodeAt(i);
        const encryptedCharCode = charCode + 1;
        encryptedData += String.fromCharCode(encryptedCharCode);
    }
    return encryptedData; // Return the encrypted data
}

// Decryption function
function decryptData(encryptedData) {
    // now i need a varibale to store the encrypted data later
    let decryptedData = '';
    for (let i = 0; i < encryptedData.length; i++) {
        const charCode = encryptedData.charCodeAt(i);
        const decryptedCharCode = charCode - 1;
        decryptedData += String.fromCharCode(decryptedCharCode);
    }
    return decryptedData; // Return the decrypted data
}

// Usage example
const data = 'i am from logar province';

const encrypted = encryptData(data);
console.log(encrypted);

const decrypted = decryptData(encrypted);
console.log(decrypted); 
