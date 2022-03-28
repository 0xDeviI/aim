chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(o) {
        if (o.from && o.from === 'index' && o.start && o.start === 'Y') {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function(tabs) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: [`assets/js/script.js`]
                });
            });
        }
    });
});