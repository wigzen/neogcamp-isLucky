const dob = document.getElementById("brithday");
const luckyNumber = document.getElementById("lucky_num");
const submit = document.getElementById("btn");
const display = document.getElementById("display");

submit.addEventListener("click", () => {
  let date = dob.value.replaceAll("-", "0").split("");
  let sum = 0;
  date.forEach((element) => (sum += Number(element)));
  // console.log(typeof luckyNumber.value)
  if (sum % Number(luckyNumber.value) === 0) {
    display.textContent = `${luckyNumber.value} is a lucky number`;
  } else {
    display.textContent = `${luckyNumber.value} is not lucky number`;
  }
});
