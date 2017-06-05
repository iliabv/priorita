
export function readFile(file) {
    return new Promise(function(resolve, reject) {
        const reader = new FileReader();
        reader.onload = function(e) {
            let result;
            try {
                result = JSON.parse(e.target.result);
            } catch(e) {
                return reject(e);
            }
            return resolve(result);
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

export function isObject(obj) {
    return typeof obj === 'object' && !Array.isArray(obj);
}
