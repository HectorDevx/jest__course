const randomStrings = require("../index.js");

// Bloque de tests
describe("Probar funcionalidades de randomStrings", () => {
  test("Probar funcionalidad de Random String", () => {
    expect(typeof randomStrings()).toBe("string");
  });
  test("Comprobar que no existe una ciudad", () => {
    expect(randomStrings()).not.toMatch(/Cordoba/);
  });
});
