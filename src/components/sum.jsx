function Sum(){
    let input = prompt("dfg");
let numbers = input.split(",");
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += Number(numbers[i]);
}

console.log("The sum of the numbers is: " + sum);

}
export default Sum;