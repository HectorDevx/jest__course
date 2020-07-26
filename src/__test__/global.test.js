// Datos de pruebas
const text = "Hola Mundo";
const fruits = ["manzana", "melon", "banana"];

//Comando text que recibe como parametros. Un string que describe lo que va a pasar y una función anónima en la cual viene lo que se va a probar.
test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});

// Prueba de Arrays
test("¿Tenemos una banana?", () => {
  expect(fruits).toContain("banana");
});

//Prueba con Números
test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});

//Pruebas con Booleanos
test("¿Es verdadero?", () => {
  expect(true).toBeTruthy();
});

// Función que coloca los elementos de un string en el orden contrario.
const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

// Prueba de un callback
test("Probar un Callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

// Promesa que devuelve una promesa con la ógica anterior.
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

//Prueba de una promesa
test("Probar una promesa", () => {
  return reverseString2("Hola").then((string) => {
    expect(string).toBe("aloH");
  });
});

// Prueba de Async y await
test("Probar async/await", async () => {
  const string = await reverseString2("Hola");
  expect(string).toBe("aloH");
});

// Correr algo antes o después de nuestras pruebas.
afterEach(() => console.log("Después de cada prueba"));
afterAll(() => console.log("Después de todas las pruebas"));

beforeEach(() => console.log("Antes de cada prueba"));
beforeAll(() => console.log("Antes de todas las pruebas"));
