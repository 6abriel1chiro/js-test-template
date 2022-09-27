import sumar from "./sumador.js";
describe("Sumar", () => {


  
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("deberia dividir 2 numeros", () => {
    expect(dividir(4, 2)).toEqual(2);
  });


});
