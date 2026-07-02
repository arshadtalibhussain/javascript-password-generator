function getRandomPassword(length) {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "~`!@#$%^&*;:'.,/?";
  const possibleCharacters = upperCase + lowerCase + numbers + symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters.charAt(randomIndex);
  }
  return password;
}

function generatePasswords() {
  const limitInput = document.getElementById("limit");
  const limitValue = Number(limitInput.value);

  if (!limitValue || limitValue < 4 || limitValue > 128) {
    alert("Please enter a valid password length between 4 and 128.");
    limitInput.focus();
    return;
  }

  document.querySelector(".output1").textContent = getRandomPassword(limitValue);
  document.querySelector(".output2").textContent = getRandomPassword(limitValue);
  document.querySelector(".output3").textContent = getRandomPassword(limitValue);
  document.querySelector(".output4").textContent = getRandomPassword(limitValue);
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generatePasswords);
