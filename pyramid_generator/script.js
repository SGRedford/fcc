const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  return character + name;
}
const call = padRow("sean");
console.log(call);

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = "";

//\n is a new line character//
//for each row in rows, add the row to the result//

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
