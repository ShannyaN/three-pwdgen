    // Assignment code here
function generatePassword () {  
     // Making of arrays
    var low = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    console.log(low);
    up = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    console.log(up);
    var num =["1","2","3","4","5","6","7","8","9"];;
    console.log(num);
    var spec = ['!','@','#','$','%','^','&','*','(',')','-','+','{','}','[',']','=','?','/','~','>','<'];
    console.log(spec);
    var char = [];
    var pwd=[];
   
    // Asking for parameters//
    alert('Please reply to what should be included in your password.')
    var amt = prompt('How long would you like the password to be?')
    //Making sure password is an acceptable length
    if ((amt>128)||(amt<8)) {
        alert('Passwords must be a minimum of 8 characters and a maximum of 128. Try again.')
    }
    if ((amt<128)&&(amt>8)) {
        var permlow= confirm('Should your password have lowercase letters?');
        var permup= confirm('Should your password have uppercase letters?');
        var permnum= confirm('Should your password have numbers?');
        var permspec= confirm('Should your password have special characters?');
    }

    //Assembling array of possible characters
    if (permlow) {
        char = char.concat(low);
    }
    if (permup) {
        char = char.concat(up);
    }
    if (permnum) {
        char = char.concat(num);
    }
    if (permspec) {
        char = char.concat(spec);
    }
    console.log(char);

    //Ensuring something was picked
    if (char.length==0){
        alert('You must choose at least one option. Try again.')
    return null;
    }
   

    //Generating password
    for (var i = 0; i<amt;i++){
        idx= Math.floor(Math.random() * char.length);
        pwd.push(char[idx]);
    }  

    //Removing commas from output
    pwd= pwd.join("");
return (pwd);
console.log(pwd);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
