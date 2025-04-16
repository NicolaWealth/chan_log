import {chanLog} from "./chan_log";
import assert from "assert";

describe("chanLog", () => {
  it("enabled", () => {
    const sut = chanLog(["db", "eg"]);
    sut("db", "test1");
    sut("eg", "test2");
    sut("eg", {
      toString() {
        return "test3";
      }
    });
    sut("foo", "test4");
    assert.deepStrictEqual(sut.log,[
      ["db","test1"],
      ["eg","test2"],
      ["eg","test3"],
    ])
  });
  it("disabled - []", () => {
    const sut = chanLog([]);
    sut("db", "test1");
    sut("eg", "test2");
    sut("eg", {
      toString() {
        return "test3";
      }
    });
    assert.deepStrictEqual(sut.log,[])
  });
  it("disabled - undefined", () => {
    const sut = chanLog(undefined);
    sut("db", "test1");
    sut("eg", "test2");
    sut("eg", {
      toString() {
        return "test3";
      }
    });
    assert.deepStrictEqual(sut.log,[])
  });
});
