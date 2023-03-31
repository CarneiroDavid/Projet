const { expect } = require('chai')
const { HOST, PORT } = require('../src/env')


describe('Testing environnment', () => {

  it('load dotenv or var', () => {
    expect(HOST).to.eql("127.0.0.1")
    expect(PORT).to.eql("5000");
  })
})

