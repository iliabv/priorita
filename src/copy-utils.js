export function copyToClipboard(text) {
    return new Promise(function(resolve, reject) {
        var currentFocused = document.activeElement;
        var element = createFakeCopyElement(text);
        document.body.appendChild(element);

        element.select();
        if (element.setSelectionRange) {
            element.setSelectionRange(0, element.value.length);
        }
        execCopyText(resolve, reject);

        document.body.removeChild(element);
        currentFocused.focus();
    });
}

function createFakeCopyElement(value) {
    var element = document.createElement('textarea');
    element.style.height = '1px';
    element.style.border = '0';
    element.style.padding = '0';
    element.style.margin = '0';
    element.style.position = 'absolute';
    element.style.top = '0';
    element.setAttribute('readonly', '');
    element.value = value;
    return element;
}

function execCopyText(onSuccess, onError) {
    var error;
    try {
        document.execCommand('copy');
    } catch (err) {
        error = err;
    }
    if (error) {
        onError(error);
    } else {
        onSuccess();
    }
}
