import { myCustomMyLog } from "./test.js";
import { myLog } from "./linecode.js";
myCustomMyLog();

function x() {
  myLog("hello");
}
x();
x();

x();
myLog("hello");
console.log(
  "%cfile:///D:/GitRepos/Braveness/Backend/test2.js:10:1",
  "color: red"
);

console.log("%cThis text is red!", "color: #384234");
console.log(
  "\u001b[" +
    32 +
    "m" +
    "hello stack (file:///D:/GitRepos/Braveness/Backend/test2.js:10:1)" +
    "\u001b[0m"
);
console.log("\u001b[" + 32 + "m" + "hello stack" + "\u001b[0m");
