import * as utils from './utils.js';

const requiredParams = {
    title: s => typeof s === 'string',
    variants: o => Array.isArray(o),
    value: o => o !== undefined,
};

function checkRequiredParams(metrics) {
    return metrics.reduce((errors, metric)=>{
        if (!utils.isObject(metric)) {
            errors.push(metric + ' must be an object');
            return errors;
        }
        Object.keys(requiredParams).forEach((param, index)=>{
            const checkFunction = requiredParams[param];
            if (!checkFunction(metric[param])) {
                errors.push(`Error for metric ${index}, something wrong with "${param}" field`);
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
