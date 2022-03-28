var port = chrome.runtime.connect();
(function() {
    port.postMessage({
        'from': 'index',
        'start': 'Y'
    });
})();