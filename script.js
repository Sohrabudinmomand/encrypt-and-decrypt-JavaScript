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

function toEncryptData(sTring) {

    // the variable below used to stroe all the encrypted data manually 
    // we could use the method charCodeAt() but i want to do it manually
    let base64charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    // now in here i want to convert the entered string to an array of charecters
    // so i must use the split method to split any string into charecters
    let charecters = sTring.split("");

    // now i need a variable to store the result of the splited characters
    let result = "";

    // now i must loop through each charecter in the array 
    // using foor loop
    for (let i = 0; i < charecters.length; i++) {

        let charecter1 = charecters[i].charCodeAt(0);
        let charecter2 = charecters[i + 1] ? charecters[i + 1].charCodeAt(0) : 0;
        let charecter3 = charecters[i + 2] ? charecters[i + 2].charCodeAt(0) : 0;


        // now lets combine the charecters values into 64-bit number
        let combinedValue = (charecter1 << 16) + (charecter2 << 8) + charecter3;

        // now i will use an array to split the 24 bit numbers into 6bit numbers
        let base64Values = [
            (combinedValue >> 18) & 63,
            (combinedValue >> 12) & 63,
            (combinedValue >> 6) & 63,
            combinedValue & 63,
        ];

        // now i will convert the base64 numbers into base64 charecters
        let convertbase64charecters = base64Values.map(function (value) {
            return base64charecters.charAt(value);
        })

        result += base64Values.join("");
    }

    return result;
}

let realText = prompt("Enter Your Password");
let encryptthedaTa = toEncryptData(realText);
console.log("realText " + encryptthedaTa);


console.log("sohrab");









