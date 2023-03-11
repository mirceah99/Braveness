function getErrorObject() {
  try {
    throw Error("");
  } catch (err) {
    return err;
  }
}

//favueir
// (function () {
//   err = getErrorObject();

//   console.log("....", err.stack.split("\n"));
//   const reg = /:[0-9]{1,9}:[0-9]{1,9}(\)?)/gm;
//   var matches = err.stack.split("\n")[2].match(reg);
//   let match = matches[0] || "";

//   if (match) match = match.substr(1).split(":")[0];

//   console.log({ matches, match });
// })();

export function myLog(...args) {
  const err = getErrorObject();

  console.log("....", err.stack.split("\n"));
  const reg = /:[0-9]{1,9}:[0-9]{1,9}(\)?)/gm;
  const stackLength = err.stack.split("\n").length;
  var matches = err.stack.split("\n")[stackLength - 2].match(reg);
  let match = matches[0] || "";

  if (match) match = match.substr(1).split(":")[0];

  console.log(`line: ${match}`, ...args);
}
