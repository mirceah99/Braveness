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
    static myLog(...args) {
        const error = this.generateError();
        const lineRegExp = /:[0-9]{1,9}:[0-9]{1,9}(\)?)/gm;
        const stackAsArray = error.stack.split("\n");
        const errorStackLength = stackAsArray.length;
        const highestLevelStack = stackAsArray[errorStackLength - 2];
        const matches = highestLevelStack.match(lineRegExp);
        let match = matches ? matches[0] : null;
        if (match) {
            match = match.substring(1); // exclude semicolon
            const [line] = match.split(":");
        }
        console.log('\x1b[33m%s\x1b[0m', `Logger at line: ${match}.\n`, ...args);
    }
}
exports.default = Bootstrap;
