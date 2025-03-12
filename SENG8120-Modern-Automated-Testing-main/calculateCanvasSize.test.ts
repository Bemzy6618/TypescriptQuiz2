import calculateCanvasSize from "./calculateCanvasSize";
 
 describe("calculateCanvasSize", () => {
   test("returns correct result", () => {
     const result = calculateCanvasSize("10", "100");
 
     expect(result).toEqual(1000);
   })
 });
 describe("Negative Numbers", () => {
    test("handles negative numbers correctly", () => {
      expect(calculateCanvasSize("-10", "100")).toEqual(-1000);