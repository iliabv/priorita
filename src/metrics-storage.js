
export function load() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get('metrics', function(data) {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(data ? data.metrics : null);
            }
        });
    });
}

export function save(metrics) {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.set({metrics}, function() {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve();
            }
        });
    });
}
