//TODO --------------- CH# 21-25--------------

//* Q1 & 6:
let firstName = prompt(`Your first name ,sir!`);
let lastName = prompt(`Your last name ,sir!`);
fulName = firstName + " " + lastName;
fulName = firstName.concat(` ${lastName}`);
alert(`Welcome, ${fulName}`);

//* Q2:
const mobile = prompt(`Enter your favourite phone brand`, ``);
alert(
  `My favourite phone is : ${mobile} \n length of string is ${mobile.length}`
);

//* Q3:
const word = `Pakistani`;
alert(`String: ${word} \nIndex of "n" is: ${word.indexOf(`n`)}`);

//* Q4:
const string = `hello world`;
alert(`String: ${string} \nLast index of "l" is: ${string.lastIndexOf(`l`)}`);

//* Q5:
alert(`String: ${word} \nCharacter at index 3: ${word.charAt(3)}`);

//* Q7:
const city = `Hyderabad`;
let replaced = city.replace(`Hyder`, `Islam`);
alert(replaced);

//* Q8:
let sentence = `Ali and Sami are best friends.They play cricket and football together`;
let regex = /and/gi;
let message = sentence.replace(regex, `&`);
alert(message);

//* Q9:
let number = `472`;
alert(typeof number);
number = +number;
alert(typeof number);

//* Q10:
let input = prompt(`Any word`);
let caps = input.toUpperCase();
alert(caps);

//* Q11:
const titleCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
alert(titleCase(`basit`));

//* Q12:
//! solution:i
let num = 35.36;
let stringNumber = String(num);
let exp = /\./;
let removed = stringNumber.replace(exp, ``);
alert(removed);
// let split = num.split(`.`)
// alert(split)
//! solution:ii
let string1 = `36.56`;
let split = string1.split(".");
join = split.join("");
alert(join);
// alert(split);

//* Q13:
const invalid = [`@`, `,`, `.`, `!`];
let userName = prompt(`Enter your user name.`);
let validity = true;

for (let char of userName) {
  if (invalid.includes(char)) {
    alert(`invalid input!`);
    validity = false;
    break;
  }
}

if (validity) {
  alert(`Welcome,${userName} `);
}

//* Q14:
const Fruits = [`cake`, `apple pie`, `cookie`, `chips`, `patties`];
let item = prompt(`Welcome!,what would you like to have today sir?`);
let itemI = item.toLowerCase();

if (Fruits.includes(itemI)) {
  const index = Fruits.indexOf(itemI);
  alert(`${item} is available at index ${index} in our bakery`);
} else alert(`We are sorry,${item} is not available in our bakery`);

//* Q15:
let password = prompt(`Enter your password`);
let Split = password.split(``);

const check = (ele) => {
  const x = ele.charCodeAt(0);
  return (x >= 65 && x <= 90) || (x >= 97 && x <= 122) || (x >= 48 && x <= 57);
};

let firstCharCode = Split[0].charCodeAt(0);
// alert(Split.every(check))
// alert(!( firstCharCode >=48 && firstCharCode <=57 ))
// alert((Split.length > 6))

if (
  Split.every(check) &&
  !(firstCharCode >= 48 && firstCharCode <= 57) &&
  Split.length > 6
) {
  alert(`Valid password`);
} else alert(`Invalid password!`);

//* Q16:
let university = `University of Karachi`;
const Arr = university.split(``);

Arr.forEach((ele) => {
  document.write(`${ele}<br>`);
});

//* Q17:
let inputString = prompt(`word`);
alert(`User input : ${inputString} \n
Last character of input : ${inputString.charAt(inputString.length - 1)}`);

//* Q18:
let text = `The quick brown fox jumps over the lazy dog`;
let Word = /the/gi;
let result = text.match(Word).length;
alert(`Text: ${text} \nThere are ${result} occurence(s) of word "the"`);
