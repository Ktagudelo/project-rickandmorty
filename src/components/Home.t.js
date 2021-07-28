import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "./Home";

let container = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renderiza datos de usuario", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  // Usa la versión asíncrona de act para aplicar promesas resueltas
  await act(async () => {
    render(<Home id="123" />, container);
  });

  expect(container.querySelectorAll('.cards-item__details--title').textContent).toBe(fakeUser.name);

  // elimina la simulación para asegurar que las pruebas estén completamente aisladas
  global.fetch.mockRestore();
});