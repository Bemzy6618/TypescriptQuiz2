import paintRequiredCalculator from "./paintRequiredCalculator";
 
 describe("paint required calculator", () => {
   test("should return expected result", () => {
     const result = paintRequiredCalculator(50, 10);
 
     expect(result).toEqual(5);
   });
 });
 describe("Zero area", () => {
    test("should return 0 if area is 0", () => {
      expect(paintRequiredCalculator(0, 10)).toEqual(0);
    });
  });