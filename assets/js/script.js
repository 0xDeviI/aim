var _location = window.location.href;

if (_location === "https://github.com/" || _location === "http://github.com/") {
    let objects = document.getElementsByClassName("border rounded-2 mb-4 pb-3 color-border-muted color-bg-default js-notice");
    if (objects.length > 0) {
        objects[0].parentNode.removeChild(objects[0]);
    }
}