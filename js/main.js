// Initializing Variables
const value = [];
const textareaEl = document.querySelector("#textarea");

const keywordPress = () => {
  if (event.key === "a") {
    value.push("a");
  } else if (event.key == "Backspace") {
    value.pop();
  } else if (event.key === "b") {
    value.push("b");
  } else if (event.key === "c") {
    value.push("c");
  } else if (event.key === "d") {
    value.push("d");
  } else if (event.key === "e") {
    value.push("e");
  } else if (event.key === "f") {
    value.push("f");
  } else if (event.key === "g") {
    value.push("g");
  } else if (event.key === "h") {
    value.push("h");
  } else if (event.key === "i") {
    value.push("i");
  } else if (event.key === "j") {
    value.push("j");
  } else if (event.key === "k") {
    value.push("k");
  } else if (event.key === "l") {
    value.push("l");
  } else if (event.key === "m") {
    value.push("m");
  } else if (event.key === "n") {
    value.push("n");
  } else if (event.key === "o") {
    value.push("o");
  } else if (event.key === "p") {
    value.push("p");
  } else if (event.key === "q") {
    value.push("q");
  } else if (event.key === "r") {
    value.push("r");
  } else if (event.key === "s") {
    value.push("s");
  } else if (event.key === "t") {
    value.push("t");
  } else if (event.key === "u") {
    value.push("u");
  } else if (event.key === "v") {
    value.push("v");
  } else if (event.key === "w") {
    value.push("w");
  } else if (event.key === "x") {
    value.push("x");
  } else if (event.key === "y") {
    value.push("y");
  } else if (event.key === "z") {
    value.push("z");
  } else if (event.key === "A") {
    value.push("A");
  } else if (event.key === "B") {
    value.push("B");
  } else if (event.key === "C") {
    value.push("C");
  } else if (event.key === "D") {
    value.push("D");
  } else if (event.key === "E") {
    value.push("E");
  } else if (event.key === "F") {
    value.push("F");
  } else if (event.key === "G") {
    value.push("G");
  } else if (event.key === "H") {
    value.push("H");
  } else if (event.key === "I") {
    value.push("I");
  } else if (event.key === "J") {
    value.push("J");
  } else if (event.key === "K") {
    value.push("K");
  } else if (event.key === "L") {
    value.push("L");
  } else if (event.key === "M") {
    value.push("M");
  } else if (event.key === "N") {
    value.push("N");
  } else if (event.key === "O") {
    value.push("O");
  } else if (event.key === "P") {
    value.push("P");
  } else if (event.key === "Q") {
    value.push("Q");
  } else if (event.key === "R") {
    value.push("R");
  } else if (event.key === "S") {
    value.push("S");
  } else if (event.key === "T") {
    value.push("T");
  } else if (event.key === "U") {
    value.push("U");
  } else if (event.key === "V") {
    value.push("V");
  } else if (event.key === "W") {
    value.push("W");
  } else if (event.key === "X") {
    value.push("X");
  } else if (event.key === "Y") {
    value.push("Y");
  } else if (event.key === "Z") {
    value.push("Z");
  } else if (event.key === " ") {
    value.push(" ");
  } else if (event.key === "1") {
    value.push("1");
  } else if (event.key === "2") {
    value.push("2");
  } else if (event.key === "3") {
    value.push("3");
  } else if (event.key === "4") {
    value.push("4");
  } else if (event.key === "5") {
    value.push("5");
  } else if (event.key === "6") {
    value.push("6");
  } else if (event.key === "7") {
    value.push("7");
  } else if (event.key === "8") {
    value.push("8");
  } else if (event.key === "9") {
    value.push("9");
  } else if (event.key === "0") {
    value.push("0");
  } else if (event.key === "!") {
    value.push("!");
  } else if (event.key === "@") {
    value.push("@");
  } else if (event.key === "#") {
    value.push("#");
  } else if (event.key === "$") {
    value.push("$");
  } else if (event.key === "%") {
    value.push("%");
  } else if (event.key === "^") {
    value.push("^");
  } else if (event.key === "&") {
    value.push("&");
  } else if (event.key === "*") {
    value.push("*");
  } else if (event.key === "(") {
    value.push("(");
  } else if (event.key === ")") {
    value.push(")");
  } else if (event.key === "_") {
    value.push("_");
  } else if (event.key === "-") {
    value.push("-");
  } else if (event.key === "=") {
    value.push("=");
  } else if (event.key === "+") {
    value.push("+");
  } else if (event.key === "\\") {
    value.push("\\");
  } else if (event.key === `'`) {
    value.push(`'`);
  } else if (event.key === `"`) {
    value.push(`"`);
  } else if (event.key === `}`) {
    value.push(`}`);
  } else if (event.key === `{`) {
    value.push("}");
  } else if (event.key === "/") {
    value.push("/");
  } else if (event.key === "?") {
    value.push("?");
  } else if (event.key === ">") {
    value.push(">");
  } else if (event.key === `<`) {
    value.push("<");
  } else if (event.key === `.`) {
    value.push(".");
  } else if (event.key === `,`) {
    value.push(",");
  }
  textareaEl.textContent = value.join("");
};

// Calling Function

document.addEventListener("keydown", () => {
  keywordPress();
});

// Problems
// Make the cursor so the user can see.
// Make some sortcuts like enter or tab.
