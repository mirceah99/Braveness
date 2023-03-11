export class BraveLogs {
  static logCustomId: string = "24489ad3-7249-47d6-ae18-d52408aff67c";
  private static generateError(): any {
    try {
      throw Error("");
    } catch (err) {
      return err;
    }
  }

  private static getStackLine(stackArray: string[]) {
    for (let i = stackArray.length - 1; i >= 0; i--) {
      if (stackArray[i].includes(this.logCustomId)) return stackArray[i];
    }
    throw "Error detecting log line";
  }

  static myLog(...args: any[]) {
    const error = this.generateError();
    const lineRegExp = /:[0-9]{1,9}:[0-9]{1,9}(\)?)/gm;
    const pathRegExp = /(?<=\().*(:)/gm;

    const stackAsArray: string[] = error.stack.split("\n");
    const stackTargetTrace = BraveLogs.getStackLine(stackAsArray);

    let stackPath = stackTargetTrace.match(pathRegExp)![0];
    stackPath = stackPath.substring(0, stackPath.length - 1);

    const matches = stackTargetTrace.match(lineRegExp);
    let match = matches ? matches[0] : null;

    if (match) {
      match = match.substring(1); // exclude semicolon
      const [line] = match.split(":");

      console.log(
        "\x1b[33m%s\x1b[0m",
        `Logger at line: ${line}. Jump: ${stackPath}\n`,
        ...args
      );
    }
  }
}
