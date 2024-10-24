const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
console.log(textInput.value);
let inputValue = "";

function checkPalindrome(input) {
  const str = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const revStr = str.split("").reverse().join("");

  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    result.innerText =
      str === revStr
        ? `${input} is a palindrome `
        : `${input} is not a palindrome`;
  }
}

checkBtn.addEventListener("click", function () {
  checkPalindrome(textInput.value);
});
