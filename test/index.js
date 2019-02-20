const assert = require("assert");
const { describe, it } = require("mocha");
const { getTitle } = require("../app/application/index");

describe("#getTitle", function() {
  it("should be Code reviewee tool", function() {
    const title = getTitle();
    assert.equal(title, "Code reviewee tool");
  });
});
