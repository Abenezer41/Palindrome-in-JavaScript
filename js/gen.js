
let clr = document.getElementById('clr');
function PasswordRand(){
    let  palindrome_random = document.getElementById("palindrome_random");
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var  pass_num = document.getElementById("numpass").value;
    
    var palindromeLength = pass_num;
    var palindrome = "";

    for (var i = 0; i < palindromeLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        palindrome += chars.substring(randomNumber, randomNumber +1);
    }

    palindrome_random.textContent = palindrome;
    document.getElementById("palindrome_random").value = palindrome;
}

function clear(){
  document.getElementById("palindrome_random").value = "";
}

clr.addEventListener('click',()=>{
  clear()
})