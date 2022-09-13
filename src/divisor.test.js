
import dividir from "./divisor.js"
//code in test file  
describe("valid divisions", () => {
        
    test("n / 0 = infinity", () => {

    expect(dividir(3,0)).toThrowError("Error2");
  });
});

