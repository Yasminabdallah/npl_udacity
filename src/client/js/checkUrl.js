function checkUrl(url) {
    var validUrl = require('valid-url');

    if (validUrl.isUri(url)) {
        return true;
    }
    else {
        return false;
    }
}

export { checkUrl }
