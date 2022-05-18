/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import isGeneratorFunction from "./isGeneratorFunction.js";

/**
 * Alias for isGeneratorFunction for backwards compatibility
 * @ignore
 * @deprecated in 2.0, use isGeneratorFunction instead
 */
const isGenerator = (value) => isGeneratorFunction(value);

export default isGenerator;
