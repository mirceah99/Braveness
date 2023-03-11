console.log(1);
console.log(2);
throw "gabi";
import smechererie from "smechererie";
smechererie.log = function (...args) {
  const lineUrl = smechererie.getLineUrl();
  console.log(`${lineUrl}`, ...args);
};
smechererie.log();
