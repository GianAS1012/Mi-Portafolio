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
