const assert = require("assert");
const { describe, it } = require("mocha");
const { getTitle, sum, queryBuilder } = require("../app/application/index");

describe("#getTitle", function() {
  it("should be Code reviewee tool", function() {
    const title = getTitle();
    assert.equal(title, "Code reviewee tool");
  });

  it("SUM", function() {
    assert.equal(sum(2, 3), 5);
  });

  it("select columns from specific table", () => {
    assert.equal(
      "select id, email from users",
      queryBuilder("users", ["id", "email"])
    );
  });
  it("select all columns from specific table if not define", () => {
    assert.equal("select * from users", queryBuilder("users"));
  });
});
