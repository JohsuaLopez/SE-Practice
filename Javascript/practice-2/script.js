// Code rep · JavaScript — from a blank file: reverseString("hello") → "olleh"

let msg = "hello";

let reversed = "";
for (let i=msg.length -1 ; i >=0 ; i-- ){
    reversed = reversed + msg[i];

}
console.log(reversed);