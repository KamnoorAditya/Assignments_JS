function palindrome(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
            rev+=str[i];
    }
    if(str==rev){
            console.log("Palindrome");
    }
    else{
            console.log("Not a Palindrome");
    }
}
let input=prompt("Enter a string:");
palindrome(input);