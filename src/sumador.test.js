import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js"
import dividir from "./divisor.js"
describe("Sumar", () => {


  
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });

  it("deberia dividir 2 numeros", () => {
    expect(dividir(4, 2)).toEqual(2);
  });


});
