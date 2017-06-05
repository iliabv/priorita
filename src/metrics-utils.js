import * as utils from './utils.js';

const requiredParams = {
    title: s => typeof s === 'string',
    variants: o => Array.isArray(o) && checkVariants(o),
    value: o => typeof o === 'number',
};

const explanations = {
    title: '"title" field is required and must contain a string',
    variants: '"variants" field is required and must contain an array of objects {name: String, value: Number}',
    value: '"value" filed is required and must contain number'
};

function checkVariants(list) {
    return list.every(item => {
        return item && item.hasOwnProperty('name') && item.hasOwnProperty('value');
    });
}

function checkRequiredParams(metrics) {
    return metrics.reduce((errors, metric, index)=>{
        if (!utils.isObject(metric)) {
            errors.push(metric + ' must be an object');
            return errors;
        }
        Object.keys(requiredParams).forEach((param)=>{
            const checkFunction = requiredParams[param];
            if (!checkFunction(metric[param])) {
                errors.push(
                    `Error for metric ${index}. ${explanations[param]}`
                );
            }
        });
        return errors;
    }, []);
}

export function checkMetrics(metrics) {
    let errors = [];
    if (!metrics) {
        errors.push('No metrics found');
    } else if (!Array.isArray(metrics)) {
        errors.push('JSON must contain "metrics" field with an array of metrics');
    } else {
        errors = errors.concat(checkRequiredParams(metrics));
    }
    return {
        success: errors.length === 0,
        errors: errors
    };
}

export function toJSON(metrics) {
    return JSON.stringify({metrics}, '\n', 2);
}
