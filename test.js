const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const clis = require('.')

describe('clis', () => {
  it('is an object with lots of keys', () => {
    expect(Object.keys(clis).length).to.be.above(5 * 1000)
  })

  it('includes some well-known command-line tools', () => {
    expect(clis.mocha).to.include('mocha')
  })

  // The package js-beautify bundles CLIs html-beautify and css-beautify for convenience
  it('can detect clis in packages with other names', () => {
    expect(clis['html-beautify']).to.include('js-beautify')
  })
})
