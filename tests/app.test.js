const request = require("supertest");
const { describe, it } = require("mocha");
const assert = require("assert")
const app = require("../src/server");

describe("Test app route /", () => {

    it("Is route / containing Hello world", (done) => {
        request(app)
        .get("/")
        .expect("Content-Type", /text\/html/)
        .expect(200)
        .expect("Hello World 1 5")
        .expect((res) => {
            assert(res.text === "Hello World 1 5")
        })
        .end(done)
    })

    //TODO faire un test avec it pour tester la route /test

describe('Test route /test', () => {
  it('répond avec un code 200', (done) => {
    request(app)
      .get('/test')
      .expect(200)
      .end(done)
  });
});

});