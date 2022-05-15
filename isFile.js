import getType from "./getType.js";

/**
 * Check if a value is a file
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = new File(["foo"], "foo.txt", { type: "text/plain" });
 * isFile(v1); // true 
 */
const isFile = (value) => getType(value) === "File";

export default isFile;