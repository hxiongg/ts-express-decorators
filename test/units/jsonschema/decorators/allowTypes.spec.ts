import {JsonSchema} from "../../../../packages/common/src/jsonschema/class/JsonSchema";
import {AllowTypes} from "../../../../packages/common/src/jsonschema/decorators/allowTypes";
import {stubSchemaDecorator} from "./utils";

describe("AllowTypes", () => {
  before(() => {
    this.decoratorStub = stubSchemaDecorator();
    this.schema = new JsonSchema();
    AllowTypes("string", "number");
    this.decoratorStub.getCall(0).args[0](this.schema);
  });
  after(() => {
    this.decoratorStub.restore();
  });

  it("should store data", () => {
    this.schema.type.should.deep.eq(["string", "number"]);
  });
});
