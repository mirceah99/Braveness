"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bootstrap {
    static generateError() {
        try {
            throw Error("");
        }
        catch (err) {
            return err;
        }
    }
    static getStackLine(stackArray) {
        for (let i = stackArray.length - 1; i >= 0; i--) {
            if (stackArray[i].includes(this.logCustomId))
                return stackArray[i];
        }
        throw "Error detecting log line";
    }
    static myLog(...args) {
        const error = this.generateError();
        const lineRegExp = /:[0-9]{1,9}:[0-9]{1,9}(\)?)/gm;
        const pathRegExp = /(?<=\().*(:)/gm;
        const stackAsArray = error.stack.split("\n");
        const stackTargetTrace = Bootstrap.getStackLine(stackAsArray);
        let stackPath = stackTargetTrace.match(pathRegExp)[0];
        stackPath = stackPath.substring(0, stackPath.length - 1);
        const matches = stackTargetTrace.match(lineRegExp);
        let match = matches ? matches[0] : null;
        if (match) {
            match = match.substring(1); // exclude semicolon
            const [line] = match.split(":");
            console.log("\x1b[33m%s\x1b[0m", `Logger at line: ${line}. Jump: ${stackPath}\n`, ...args);
        }
    }
}
exports.default = Bootstrap;
