<<<<<<< HEAD
# Semana 5 — Práctica · Instalación Vite · React · Next.js  
**Vite · React · Next.js · npm**

---

## 🧩 Tema
**Scaffolding con Vite, bundling; overview de React y Next.js.**

---

## 🎯 Objetivo
Comprender y aplicar el proceso de **configuración inicial (scaffolding)** de proyectos modernos con **Vite**, explorando sus ventajas en comparación con otras herramientas de *bundling* tradicionales.  
Además, conocer los fundamentos y diferencias entre **React** y **Next.js**, identificando cuándo utilizar cada uno según el tipo de proyecto (SPA vs SSR/SSG).

---

## 💡 ¿Qué hemos aprendido?
Durante esta quinta semana, se abordaron los conceptos clave relacionados con la creación y estructura de proyectos web modernos:

- **Vite:** herramienta de *build* ultrarrápida para desarrollo front-end basada en *ES Modules* y compatible con frameworks modernos como React, Vue o Svelte.  
  - Instalación global/local mediante `npm create vite@latest`.  
  - Elección de plantilla (por ejemplo, React + JavaScript o React + TypeScript).  
  - Configuración del entorno con `npm install` y ejecución del servidor local con `npm run dev`.  
  - Ventajas de Vite frente a CRA (*Create React App*): inicio instantáneo, recarga en caliente (*Hot Module Replacement*) y tiempos de compilación mínimos.  

- **React:** introducción al concepto de componentes, *JSX*, estado (`useState`) y renderizado reactivo.  
  Se revisó la estructura base del proyecto (`src/App.jsx`, `main.jsx`) y cómo se enlaza con el `index.html`.  

- **Next.js:** presentación de su enfoque basado en React pero con capacidades extendidas: **renderizado del lado del servidor (SSR)**, **generación estática (SSG)** y **enrutamiento automático**.  
  Se analizó cómo Next optimiza el rendimiento, la carga progresiva de páginas y la estructura de carpetas (`pages/`, `app/`, `public/`, etc.).

En conjunto, esta semana permitió **sentar las bases para el desarrollo con frameworks de última generación**, comprendiendo cómo iniciar, ejecutar y estructurar proyectos eficientes y escalables.

---

## 🧠 Ejercicios
**Ejercicio 5.1 — Creación de proyecto con Vite:**  
Instalar Vite mediante:
```bash
npm create vite@latest nombre-proyecto
```
Seleccionar la plantilla **React** y configurar el entorno con:
```bash
cd nombre-proyecto
npm install
npm run dev
```
Verificar que el proyecto levante correctamente en `http://localhost:5173`.

**Ejercicio 5.2 — Exploración de estructura React/Vite:**  
Analizar los archivos generados (`main.jsx`, `App.jsx`, `index.html`) y modificar el contenido para incluir un componente propio.

**Ejercicio 5.3 — Introducción a Next.js:**  
Instalar un proyecto Next.js con:
```bash
npx create-next-app@latest
```
Ejecutar en local (`npm run dev`) y explorar el comportamiento del enrutamiento por carpetas.

**Ejercicio 5.4 — Comparativa práctica:**  
Documentar diferencias en el arranque, estructura de archivos, y rendimiento entre un proyecto creado con **Vite** y uno con **Next.js**.

---

## 🧩 Conclusión
Vite se consolida como una herramienta moderna y ligera para el desarrollo front-end, facilitando la creación rápida de entornos React con tiempos mínimos de compilación.  
Por su parte, **Next.js** ofrece un ecosistema más completo orientado al **renderizado híbrido**, ideal para aplicaciones escalables y optimizadas.  
Ambas tecnologías permiten un flujo de trabajo más ágil, productivo y adaptable a las necesidades actuales del desarrollo web profesional.

---

## 🪞 Reflexión
**¿Qué he aprendido?**  
He aprendido a crear proyectos modernos con **Vite**, comprender cómo estructura sus módulos, y a ejecutar aplicaciones React y Next.js en entorno local.  
También entendí la diferencia entre una **SPA (Single Page Application)** y una aplicación **SSR (Server Side Rendered)**, lo que me da una visión más clara de los tipos de proyectos web actuales.

**¿Cómo he aprendido?**  
A través de la instalación guiada, el análisis de carpetas generadas, la práctica en el entorno local y la comparación de rendimiento entre Vite y otras herramientas tradicionales.  
La experimentación directa con React y Next.js me permitió visualizar su potencial en proyectos reales.

---

## 📚 Bibliografía
>Universidad                |Universidad Nacional del Centro del Perú   |
>-------------------------  | ------------------------------            |
>**Facultad:**              | Ingeniería de Sistemas                    |
>**Asignatura:**            | Desarrollo de Aplicaciones Web            |
>**Docente:**               | Jaime Suasnábar Terrel                    |
>**Alumna:**                | Gian Alessandro Janampa Choccelahua       |
>**Semestre:**              | IX                                        |
---
=======
# Semana 5 — Práctica · Instalación Vite · React · Next.js  
**Vite · React · Next.js · npm**

---

## 🧩 Tema
**Scaffolding con Vite, bundling; overview de React y Next.js.**

---

## 🎯 Objetivo
Comprender y aplicar el proceso de **configuración inicial (scaffolding)** de proyectos modernos con **Vite**, explorando sus ventajas en comparación con otras herramientas de *bundling* tradicionales.  
Además, conocer los fundamentos y diferencias entre **React** y **Next.js**, identificando cuándo utilizar cada uno según el tipo de proyecto (SPA vs SSR/SSG).

---

## 💡 ¿Qué hemos aprendido?
Durante esta quinta semana, se abordaron los conceptos clave relacionados con la creación y estructura de proyectos web modernos:

- **Vite:** herramienta de *build* ultrarrápida para desarrollo front-end basada en *ES Modules* y compatible con frameworks modernos como React, Vue o Svelte.  
  - Instalación global/local mediante `npm create vite@latest`.  
  - Elección de plantilla (por ejemplo, React + JavaScript o React + TypeScript).  
  - Configuración del entorno con `npm install` y ejecución del servidor local con `npm run dev`.  
  - Ventajas de Vite frente a CRA (*Create React App*): inicio instantáneo, recarga en caliente (*Hot Module Replacement*) y tiempos de compilación mínimos.  

- **React:** introducción al concepto de componentes, *JSX*, estado (`useState`) y renderizado reactivo.  
  Se revisó la estructura base del proyecto (`src/App.jsx`, `main.jsx`) y cómo se enlaza con el `index.html`.  

- **Next.js:** presentación de su enfoque basado en React pero con capacidades extendidas: **renderizado del lado del servidor (SSR)**, **generación estática (SSG)** y **enrutamiento automático**.  
  Se analizó cómo Next optimiza el rendimiento, la carga progresiva de páginas y la estructura de carpetas (`pages/`, `app/`, `public/`, etc.).

En conjunto, esta semana permitió **sentar las bases para el desarrollo con frameworks de última generación**, comprendiendo cómo iniciar, ejecutar y estructurar proyectos eficientes y escalables.

---

## 🧠 Ejercicios
**Ejercicio 5.1 — Creación de proyecto con Vite:**  
Instalar Vite mediante:
```bash
npm create vite@latest nombre-proyecto
```
Seleccionar la plantilla **React** y configurar el entorno con:
```bash
cd nombre-proyecto
npm install
npm run dev
```
Verificar que el proyecto levante correctamente en `http://localhost:5173`.

**Ejercicio 5.2 — Exploración de estructura React/Vite:**  
Analizar los archivos generados (`main.jsx`, `App.jsx`, `index.html`) y modificar el contenido para incluir un componente propio.

**Ejercicio 5.3 — Introducción a Next.js:**  
Instalar un proyecto Next.js con:
```bash
npx create-next-app@latest
```
Ejecutar en local (`npm run dev`) y explorar el comportamiento del enrutamiento por carpetas.

**Ejercicio 5.4 — Comparativa práctica:**  
Documentar diferencias en el arranque, estructura de archivos, y rendimiento entre un proyecto creado con **Vite** y uno con **Next.js**.

---

## 🧩 Conclusión
Vite se consolida como una herramienta moderna y ligera para el desarrollo front-end, facilitando la creación rápida de entornos React con tiempos mínimos de compilación.  
Por su parte, **Next.js** ofrece un ecosistema más completo orientado al **renderizado híbrido**, ideal para aplicaciones escalables y optimizadas.  
Ambas tecnologías permiten un flujo de trabajo más ágil, productivo y adaptable a las necesidades actuales del desarrollo web profesional.

---

## 🪞 Reflexión
**¿Qué he aprendido?**  
He aprendido a crear proyectos modernos con **Vite**, comprender cómo estructura sus módulos, y a ejecutar aplicaciones React y Next.js en entorno local.  
También entendí la diferencia entre una **SPA (Single Page Application)** y una aplicación **SSR (Server Side Rendered)**, lo que me da una visión más clara de los tipos de proyectos web actuales.

**¿Cómo he aprendido?**  
A través de la instalación guiada, el análisis de carpetas generadas, la práctica en el entorno local y la comparación de rendimiento entre Vite y otras herramientas tradicionales.  
La experimentación directa con React y Next.js me permitió visualizar su potencial en proyectos reales.

---

## 📚 Bibliografía
>Universidad                |Universidad Nacional del Centro del Perú   |
>-------------------------  | ------------------------------            |
>**Facultad:**              | Ingeniería de Sistemas                    |
>**Asignatura:**            | Desarrollo de Aplicaciones Web            |
>**Docente:**               | Jaime Suasnábar Terrel                    |
>**Alumna:**                | Gian Alessandro Janampa Choccelahua       |
>**Semestre:**              | IX                                        |
---
>>>>>>> 70f3568d44af4e07e9f163dbd8ea1efd64f31e7b
