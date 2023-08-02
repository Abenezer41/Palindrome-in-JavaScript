let input = document.getElementById("inp");
let button = document.getElementById("btn1");
let span = document.getElementById("display");
let button2 = document.getElementById("btn2");

button.addEventListener("click", () => {
  showPalindrom(input.value);
});

function showPalindrom(inputtxt) {
  let word1 = inputtxt;
  word1.split("");

  let word2 = "";

  for (let i = word1.length - 1; i >= 0; i--) {
    word2 += word1[i];
  }
  if (word1 === word2) {
    span.innerText = word1 + " is A Palindrom Word.";
  } else {
    span.innerText = word1 + " is Not A Palindrom Word.";
  }
}

function Clear() {
  input.value = "";
  span.innerText = "";
}

button2.addEventListener("click", () => {
  Clear();
});
