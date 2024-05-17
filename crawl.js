function normalizeURL(urlString) {
    // remove trailing /
    if (urlString[urlString.length - 1] == '/') {
        urlString = urlString.slice(0, urlString.length - 1)
    }

    let urlObj = new URL(urlString)

    return `${urlObj.hostname}${urlObj.pathname}`
}

module.exports = {
    normalizeURL
}