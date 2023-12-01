const reverse = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") return str;

  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = +str[i];
  }
  return newStr;
};
console.log(reverse("Raghib"));
