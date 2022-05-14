import isGeneratorFunction from "./isGeneratorFunction.js";

/**
 * Alias for isGeneratorFunction for backwards compatibility
 */
const isGenerator = (value) => isGeneratorFunction(value);

export default isGenerator;
