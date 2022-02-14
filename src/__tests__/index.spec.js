import inicializar from "../main";
import "../index";

jest.mock('../main.js', () => jest.fn());

test('inicializa pokedex', () => {
  expect(inicializar)
    .toHaveBeenCalledTimes(1);
});