const cities = [
  "Ciudad de México",
  "Bogotá",
  "Lima",
  "Buenos Aires",
  "Guadalajara",
];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

// Promesa que devuelve una promesa con la ógica anterior.
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = randomString;
