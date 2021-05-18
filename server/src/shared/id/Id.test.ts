import idGenerator from "./";

describe("GenerateId", () => {
  it("should generate a Uid", () => {
    const uid = idGenerator.makeId();
    expect(uid).toBeDefined();
  });

  it("should be a valid Uid", () => {
    const uid = idGenerator.makeId();
    expect(uid).toBeDefined();
    expect(idGenerator.isValid(uid)).toBeTruthy();
  });
});
