import {Store} from "../../../../packages/core/src/class/Store";
import {SocketEventName} from "../../../../packages/socketio/src";
import {expect} from "../../../tools";

describe("@SocketEventName", () => {
  class Test {}

  before(() => {
    SocketEventName(Test, "test", 0);
    this.store = Store.from(Test);
  });

  it("should set metadata", () => {
    expect(this.store.get("socketIO")).to.deep.eq({
      handlers: {
        test: {
          parameters: {
            "0": {
              filter: "eventName",
              mapIndex: undefined
            }
          }
        }
      }
    });
  });
});
