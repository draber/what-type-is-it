/**
 * More consistent variety of `typeof`
 * @param {*} value The value to check
 * @returns {String}
 */
 const getType = (value) => {
    if(typeof value === 'undefined'){
        return 'undefined';
    }
    if(value === null){
        return 'null';
    }
    if(!value.constructor || !value.constructor.name){
        return 'unknown';
    }
    if(value.constructor.name === 'GeneratorFunction'){
        return 'generator'
    }
    return value.constructor.name.toLowerCase();
};

export default getType;
