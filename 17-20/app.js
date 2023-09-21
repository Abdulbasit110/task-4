//TODO:------------- ch:17-20-----------------

//* Q1:
const multiArray  = [[],[]] ;

//* Q2:
const matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

for(let ele of matrix) {
    console.log(ele);
}
// matrix.forEach((ele) => {
//     console.log(ele);
// });

//* Q3:
for(let i = 1; i<=10 ;i++) {
    document.write(`${i}<br>`);
}

//* Q4:

let num = +prompt(`Enter a number to show its multiplicatin table:`,2);

let length = +prompt(`What should be the length of the table?`,10);

for(let i = 1; i<=length ;i++) {
    document.write(`${num} x ${i} = ${num*i}<br>`);
}

//* Q5:
const fruits = [`apple`,`banana`,`mango`,`orange`,`strawberry`];
for(let ele of fruits) {
    document.write(`${ele}<br>`);
}

//* Q6:
// ! a:
const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
document.write(`Counting:<br><br>${numbers}<br><br>`)
// ! b:
const reverse = numbers.reverse();
document.write(`Reverse counting:<br><br>${reverse}<br><br>`);
numbers.reverse();
// ! c:
const even = numbers.filter((ele)=>{
    return ele % 2===0;
});
document.write(`Even:<br><br>${even}<br><br>`)
// ! d:
const odd = numbers.filter((ele)=>{
    return ele % 2!==0;
});
document.write(`Even:<br><br>${odd}<br><br>`)
// ! e:
numbers.shift()
document.write(`Series:<br><br>`)
for(let ele of numbers) {
    if(ele % 2===0) {
        document.write(`${ele}k,`)
    }
    else continue;
}

//* Q7:
const A = [`cake`,`apple pie`,`cookie`,`chips`,`patties`]

const item = prompt(`Welcome!,what would you like to have today sir?`);
if (A.includes(item)) {
    alert (`${item} is available at index ${A.indexOf(item)} in our bakery. `);
}
else{
    alert("Sorry we don't serve that kinda food")
}

//* Q8:
const maxArray = [24,53,78,91,12];
alert(`${Math.max(...maxArray)}`);

//* Q9:
const minArray = [24,53,78,91,12];
alert(`${Math.min(...minArray)}`);

//* Q10:
const range = [];
for(let i = 1; i<=20 ;i++) {
    range.push(5*i)
}
alert(range);