import {Metadata} from "../../../../packages/core/src/class/Metadata";
import {HttpServer} from "../../../../packages/common/src/server";
import {Sinon} from "../../../tools";

describe("HttpServer", () => {
  before(() => {
    this.setParamTypesStub = Sinon.stub(Metadata, "setParamTypes");

    // tslint:disable-next-line: no-unused-variable
    class Test {
      constructor(@HttpServer https: HttpServer) {}
    }
  });
  after(() => {
    this.setParamTypesStub.restore();
  });

  it("should store metadata", () => {
    this.setParamTypesStub.should.have.been.calledWithExactly(Sinon.match.func, undefined, [HttpServer]);
  });
});
