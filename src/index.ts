import * as chalk from "chalk";

const generateLogFunc = (color: string) => {
    return (...args: any[]) => {
        // const args = Array.from(new Array(arguments.length)).map((el, i) => arguments[i]);
        const types = ["string"]; // , "number", "boolean"
        const logs = args.map(arg => types.some(el => typeof arg === el) ? chalk.hex(color)(arg) : arg);

        console.log(...logs);
    };
};

export const logg = {
    navi: generateLogFunc("#001f3f"),
    blue: generateLogFunc("#0074D9"),
    aqua: generateLogFunc("#7FDBFF"),
    teal: generateLogFunc("#39CCCC"),
    olive: generateLogFunc("#3D9970"),
    green: generateLogFunc("#2ECC40"),
    lime: generateLogFunc("#01FF70"),
    yellow: generateLogFunc("#FFDC00"),
    orange: generateLogFunc("#FF851B"),
    red: generateLogFunc("#FF4136"),
    maroon: generateLogFunc("#85144b"),
    fuchsia: generateLogFunc("#F012BE"),
    purple: generateLogFunc("#B10DC9"),
    black: generateLogFunc("#111111"),
    gray: generateLogFunc("#AAAAAA"),
    silver: generateLogFunc("#DDDDDD"),
};
