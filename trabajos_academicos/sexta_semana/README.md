
# Semana 6 — Fundamentos y Componentes de React (práctica)  
**React · componentes · props · JSX**

---

## 🧩 Tema  
**Componentes funcionales, props, composición y JSX.**

---

## 🎯 Objetivo  
Comprender los fundamentos del desarrollo en **React**, dominando la creación de **componentes funcionales**, el uso de **props** y **children**, y la composición de componentes para generar interfaces modulares y reutilizables.  
Asimismo, aplicar **JSX** para combinar HTML y JavaScript en un entorno declarativo que permite construir interfaces dinámicas con mayor legibilidad.

---

## 💡 ¿Qué hemos aprendido?  
Durante esta sexta semana, aprendimos a construir aplicaciones web usando la librería **React**, entendiendo su ciclo de renderizado y el concepto del **DOM virtual**.  
Los principales puntos abordados fueron:

- **Renderizado en React:** comprensión del funcionamiento de `ReactDOM.render()`, que actualiza el DOM de forma eficiente a partir del **DOM virtual**.  
- **Componentes:** elementos independientes reutilizables que representan partes de la interfaz; pueden ser de **función** o de **clase**.  
- **JSX:** extensión del lenguaje JavaScript que permite escribir código HTML dentro de JS. Se pueden incluir expresiones, atributos y variables mediante llaves `{ }`.  
- **Props:** mecanismo para **pasar datos entre componentes**. Los props son parámetros que se envían desde un componente padre a un hijo.  
- **Children:** permiten enviar contenido interno desde un componente padre al hijo, promoviendo la reutilización y la composición jerárquica.  
- **Estilos en React:** aplicación de estilos mediante hojas CSS, módulos CSS o estilos en línea definidos como objetos.  

Además, se exploraron buenas prácticas como:
- Nombrar los componentes con letra mayúscula.  
- Encapsular la lógica y el estilo de cada componente en archivos separados (`.jsx` y `.css`).  
- Renderizar listas usando el método `map()` con claves únicas.  

---

## 🧠 Ejercicios  

**Ejercicio 6.1 — Diseño responsivo con componentes**  
Desarrollar una aplicación en React con **7 componentes** (uno por sección), con diseño responsivo para PC, tablet y móvil usando CSS puro.  
Cada componente representa una parte del diseño (header, main, aside, footer, etc.), ensamblados dentro de `App.jsx`.

---

**Ejercicio 6.2 — Componentes anidados y paso de props**  
Crear **4 componentes anidados** (`Componente1 → Componente2 → Componente3 → Componente4`) y pasar un objeto con la siguiente estructura:  
```js
{ nombre: "Jaime", dirección: "Jr. Junín 450", ciudad: "Huancayo" }
```  
El último componente (`Componente4`) debe recibir y mostrar los datos dentro de un card con estilos CSS.

---

**Ejercicio 6.3 — Comunicación hijo → padre**  
Construir una aplicación con **2 componentes** donde un hijo envíe información al padre (por ejemplo, un mensaje o valor ingresado).  
El padre deberá renderizar dinámicamente el dato recibido usando el estado con `useState()`.

---

**Ejercicio 6.4 — Comunicación entre componentes hermanos**  
Diseñar **3 componentes** (1 padre y 2 hijos).  
El primer hijo (`Hermano1`) debe capturar el nombre y apellido, y el segundo (`Hermano2`) mostrarlos.  
El padre actúa como mediador compartiendo la información entre ambos a través de props y estado.

---

**Ejercicio 6.5 — Renderizado de listas**  
Renderizar los datos de un objeto de **4 estudiantes** (`id`, `name`, `city`) en una tabla estilizada con CSS.  
Ejemplo de estructura:
```js
const estudiantes = [
  { id: 1, name: "Gian", city: "Huancayo" },
  { id: 2, name: "Jim", city: "El Tambo" },
  { id: 3, name: "Elvis", city: "Pilcomayo" },
  { id: 4, name: "Gianella", city: "Chilca" },
];
```
Cada fila de la tabla debe generarse mediante `map()` y mostrar los datos dinámicamente.

---

## 🧩 Conclusión  
React introduce una forma moderna y eficiente de desarrollar interfaces de usuario mediante componentes reutilizables y datos dinámicos.  
Los conceptos de **props**, **children** y **JSX** permiten estructurar las aplicaciones de manera modular y limpia, separando la lógica, el diseño y la presentación.  
La práctica demostró cómo los datos pueden fluir entre componentes, facilitando el desarrollo de interfaces escalables y mantenibles.

---

## 🪞 Reflexión  
**¿Qué he aprendido?**  
He aprendido a crear componentes funcionales, a comunicar datos entre ellos mediante props, y a utilizar JSX para construir interfaces interactivas y dinámicas.  
Además, comprendí cómo React optimiza la actualización del DOM y organiza el código de manera modular.

**¿Cómo he aprendido?**  
Mediante la realización de ejercicios prácticos que combinan componentes anidados, comunicación de datos y renderizado de listas.  
El uso del entorno de desarrollo de Vite con React permitió visualizar de forma inmediata los cambios y comprender el flujo de datos en tiempo real.

---

## 📚 Bibliografía  
> Universidad | Universidad Nacional del Centro del Perú  
> ---------------------- | --------------------------------------  
> **Facultad:** | Ingeniería de Sistemas  
> **Asignatura:** | Desarrollo de Aplicaciones Web  
> **Docente:** | Jaime Suasnábar Terrel  
> **Alumna:** | Gian Alessandro Janampa Choccelahua  
> **Semestre:** | IX  
---
=======
# Semana 6 — Fundamentos y Componentes de React (práctica)  
**React · componentes · props · JSX**

---

## 🧩 Tema  
**Componentes funcionales, props, composición y JSX.**

---

## 🎯 Objetivo  
Comprender los fundamentos del desarrollo en **React**, dominando la creación de **componentes funcionales**, el uso de **props** y **children**, y la composición de componentes para generar interfaces modulares y reutilizables.  
Asimismo, aplicar **JSX** para combinar HTML y JavaScript en un entorno declarativo que permite construir interfaces dinámicas con mayor legibilidad.

---

## 💡 ¿Qué hemos aprendido?  
Durante esta sexta semana, aprendimos a construir aplicaciones web usando la librería **React**, entendiendo su ciclo de renderizado y el concepto del **DOM virtual**.  
Los principales puntos abordados fueron:

- **Renderizado en React:** comprensión del funcionamiento de `ReactDOM.render()`, que actualiza el DOM de forma eficiente a partir del **DOM virtual**.  
- **Componentes:** elementos independientes reutilizables que representan partes de la interfaz; pueden ser de **función** o de **clase**.  
- **JSX:** extensión del lenguaje JavaScript que permite escribir código HTML dentro de JS. Se pueden incluir expresiones, atributos y variables mediante llaves `{ }`.  
- **Props:** mecanismo para **pasar datos entre componentes**. Los props son parámetros que se envían desde un componente padre a un hijo.  
- **Children:** permiten enviar contenido interno desde un componente padre al hijo, promoviendo la reutilización y la composición jerárquica.  
- **Estilos en React:** aplicación de estilos mediante hojas CSS, módulos CSS o estilos en línea definidos como objetos.  

Además, se exploraron buenas prácticas como:
- Nombrar los componentes con letra mayúscula.  
- Encapsular la lógica y el estilo de cada componente en archivos separados (`.jsx` y `.css`).  
- Renderizar listas usando el método `map()` con claves únicas.  

---

## 🧠 Ejercicios  

**Ejercicio 6.1 — Diseño responsivo con componentes**  
Desarrollar una aplicación en React con **7 componentes** (uno por sección), con diseño responsivo para PC, tablet y móvil usando CSS puro.  
Cada componente representa una parte del diseño (header, main, aside, footer, etc.), ensamblados dentro de `App.jsx`.

---

**Ejercicio 6.2 — Componentes anidados y paso de props**  
Crear **4 componentes anidados** (`Componente1 → Componente2 → Componente3 → Componente4`) y pasar un objeto con la siguiente estructura:  
```js
{ nombre: "Jaime", dirección: "Jr. Junín 450", ciudad: "Huancayo" }
```  
El último componente (`Componente4`) debe recibir y mostrar los datos dentro de un card con estilos CSS.

---

**Ejercicio 6.3 — Comunicación hijo → padre**  
Construir una aplicación con **2 componentes** donde un hijo envíe información al padre (por ejemplo, un mensaje o valor ingresado).  
El padre deberá renderizar dinámicamente el dato recibido usando el estado con `useState()`.

---

**Ejercicio 6.4 — Comunicación entre componentes hermanos**  
Diseñar **3 componentes** (1 padre y 2 hijos).  
El primer hijo (`Hermano1`) debe capturar el nombre y apellido, y el segundo (`Hermano2`) mostrarlos.  
El padre actúa como mediador compartiendo la información entre ambos a través de props y estado.

---

**Ejercicio 6.5 — Renderizado de listas**  
Renderizar los datos de un objeto de **4 estudiantes** (`id`, `name`, `city`) en una tabla estilizada con CSS.  
Ejemplo de estructura:
```js
const estudiantes = [
  { id: 1, name: "Gian", city: "Huancayo" },
  { id: 2, name: "Jim", city: "El Tambo" },
  { id: 3, name: "Elvis", city: "Pilcomayo" },
  { id: 4, name: "Gianella", city: "Chilca" },
];
```
Cada fila de la tabla debe generarse mediante `map()` y mostrar los datos dinámicamente.

---

## 🧩 Conclusión  
React introduce una forma moderna y eficiente de desarrollar interfaces de usuario mediante componentes reutilizables y datos dinámicos.  
Los conceptos de **props**, **children** y **JSX** permiten estructurar las aplicaciones de manera modular y limpia, separando la lógica, el diseño y la presentación.  
La práctica demostró cómo los datos pueden fluir entre componentes, facilitando el desarrollo de interfaces escalables y mantenibles.

---

## 🪞 Reflexión  
**¿Qué he aprendido?**  
He aprendido a crear componentes funcionales, a comunicar datos entre ellos mediante props, y a utilizar JSX para construir interfaces interactivas y dinámicas.  
Además, comprendí cómo React optimiza la actualización del DOM y organiza el código de manera modular.

**¿Cómo he aprendido?**  
Mediante la realización de ejercicios prácticos que combinan componentes anidados, comunicación de datos y renderizado de listas.  
El uso del entorno de desarrollo de Vite con React permitió visualizar de forma inmediata los cambios y comprender el flujo de datos en tiempo real.

---

## 📚 Bibliografía  
> Universidad | Universidad Nacional del Centro del Perú  
> ---------------------- | --------------------------------------  
> **Facultad:** | Ingeniería de Sistemas  
> **Asignatura:** | Desarrollo de Aplicaciones Web  
> **Docente:** | Jaime Suasnábar Terrel  
> **Alumna:** | Gian Alessandro Janampa Choccelahua  
> **Semestre:** | IX  
---
>>>>>>> 70f3568d44af4e07e9f163dbd8ea1efd64f31e7b
