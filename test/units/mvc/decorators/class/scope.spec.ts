import {Store} from "../../../../../packages/core/src/class/Store";
import {Scope} from "../../../../../packages/common/src/mvc/decorators/class/scope";
import {expect} from "../../../../tools";

class Test {}

describe("Scope", () => {
  describe("when parameters is given", () => {
    before(() => {
      Scope("request")(Test);
      this.store = Store.from(Test);
    });

    it("should set metadata", () => {
      expect(this.store.get("scope")).to.eq("request");
    });
  });

  describe("when parameters is not given", () => {
    before(() => {
      Scope()(Test);
      this.store = Store.from(Test);
    });

    it("should set metadata", () => {
      expect(this.store.get("scope")).to.eq("request");
    });
  });
});
