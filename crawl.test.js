const {normalizeURL} = require("./crawl.js")
const {test, expect} = require('@jest/globals')


// normalize protocol
test('normalizeURL protocol', () => {
    const input = 'https://minhovate.com/test'
    const actual = normalizeURL(input)
    const expected = 'minhovate.com/test'
    expect(actual).toEqual(expected)
})

test('normalizeURL protocol', () => {
    const input = 'http://minhovate.com/test'
    const actual = normalizeURL(input)
    const expected = 'minhovate.com/test'
    expect(actual).toEqual(expected)
})

// normalize trailing /
test('normalizeURL trailing /', () => {
    const input = 'https://minhovate.com/test/'
    const actual = normalizeURL(input)
    const expected = 'minhovate.com/test'
    expect(actual).toEqual(expected)
})

// normalize capitals /
test('normalizeURL capitals', () => {
    const input = 'httPs://MinhoVate.com/test/'
    const actual = normalizeURL(input)
    const expected = 'minhovate.com/test'
    expect(actual).toEqual(expected)
})