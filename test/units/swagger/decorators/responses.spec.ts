import {Store} from "../../../../packages/core/src/class/Store";
import {descriptorOf} from "../../../../packages/core/src/utils";
import {Responses} from "../../../../packages/swagger/src/decorators/responses";
import {expect} from "../../../tools";

class Test {
  test() {}
}

describe("Responses()", () => {
  before(() => {
    Responses(400, {
      description: "Bad Request"
    })(Test, "test", descriptorOf(Test, "test"));
    this.store = Store.fromMethod(Test, "test");
  });
  it("should set the responses", () => {
    expect(this.store.get("responses")).to.deep.eq({
      "400": {
        description: "Bad Request"
      }
    });
  });
});
