import * as Proxyquire from "proxyquire";
import {Sinon} from "../../../tools";

// tslint:disable-next-line: variable-name
const ParamRegistry: any = {
  required: Sinon.stub()
};

// tslint:disable-next-line: variable-name
const PropertyRegistry: any = {
  required: Sinon.stub()
};

class Test {}

const {Required} = Proxyquire.load("../../../../packages/common/src/mvc/decorators/required", {
  "../../filters/registries/ParamRegistry": {ParamRegistry},
  "../../jsonschema/registries/PropertyRegistry": {PropertyRegistry}
});

describe("Required", () => {
  describe("when decorator is used as param", () => {
    before(() => {
      Required()(Test, "test", 0);
    });

    after(() => {
      ParamRegistry.required.reset();
    });

    it("should called with the correct parameters", () => {
      ParamRegistry.required.should.have.been.calledWithExactly(Test, "test", 0);
    });
  });

  describe("when decorator is used as property", () => {
    before(() => {
      Required(null, "")(Test, "test");
    });

    after(() => {
      PropertyRegistry.required.reset();
    });

    it("should called with the correct parameters", () => {
      PropertyRegistry.required.should.have.been.calledWithExactly(Test, "test", [null, ""]);
    });
  });
});
