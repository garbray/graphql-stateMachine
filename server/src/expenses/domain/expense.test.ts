function sum(a: number, b: number): number {
  return a + b;
}

describe("expense", () => {
  it("run a test", () => {
    expect(2).toBe(2);
    expect(sum(2, 2)).toBe(4);
  });
});
