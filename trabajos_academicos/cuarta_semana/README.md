# Semana 4 — JavaScript básico y avanzado (práctica) 
**JavaScript · DOM · eventos · animaciones**

---

## 🧩 Tema
**Aplicación interactiva con manipulación del DOM, eventos de teclado y generación aleatoria.**

---

## 🎯 Objetivo
Desarrollar una **aplicación web dinámica** que combine la manipulación del DOM, el uso de **eventos de teclado**, **temporizadores** y **funciones aleatorias** para construir una **ruleta interactiva** y un **sorteo automático de equipos**.  
La práctica tiene como fin fortalecer el dominio de **JavaScript** aplicado al desarrollo front-end, la organización del código y el control preciso de elementos HTML en tiempo real.

---

## 💡 ¿Qué hemos aprendido?
Durante esta cuarta semana se integraron los conocimientos de JavaScript con el manejo visual del DOM, desarrollando una aplicación completa con interacción y animación.  
Se reforzaron los siguientes aspectos:

- **Creación y modificación dinámica del DOM:** uso de `document.createElement()`, `appendChild()`, `innerHTML`, `querySelector()` y `getElementById()`.  
- **Eventos de teclado:** detección y respuesta a teclas específicas (F1 a F9) para controlar las acciones principales de la aplicación.  
- **Manipulación de estilos y animaciones:** aplicación de clases CSS, colores dinámicos, transformaciones y transiciones con `transform` y `rotate()`.  
- **Uso de estructuras de control y funciones aleatorias:** implementación de `Math.random()` para determinar posiciones, colores y ganadores.  
- **Gestión modular del código:** separación de funciones para cada tarea (iniciar ruleta, detener, limpiar, generar equipos, etc.).  
- **Experiencia de usuario (UX):** visualización clara de resultados, animación fluida y respuesta inmediata a las acciones del usuario.

---

## 🧠 Ejercicios
**index.html**  
Interfaz principal que contiene la estructura base de la aplicación:  
- Un **textarea** para ingresar los nombres de los participantes.  
- Un **canvas o contenedor circular** que representa la ruleta.  
- Una **zona de resultados** donde se muestran los ganadores o equipos generados.  
- Indicaciones visuales y una leyenda con los **atajos de teclado (F1 a F9)**.

**Funciones implementadas:**
- **F1:** mostrar/ocultar la ayuda con la guía de funciones.  
- **F2:** limpiar el área de resultados.  
- **F3:** generar colores aleatorios para los sectores de la ruleta.  
- **F4:** dividir los nombres ingresados en el textarea y mostrarlos como sectores.  
- **F5:** iniciar el giro de la ruleta con animación.  
- **F6:** detener la ruleta y mostrar el ganador seleccionado.  
- **F7:** limpiar el textarea.  
- **F8:** realizar el **sorteo de equipos** distribuyendo los nombres en grupos.  
- **F9:** reiniciar todo el sistema a su estado inicial.

Cada acción se activa mediante un evento `keydown` asociado a la tecla correspondiente y ejecuta una función específica que manipula el DOM o los estilos en tiempo real.

---

## 🧩 Conclusión
La práctica permitió consolidar los conocimientos sobre **eventos, estructuras de control y manipulación del DOM** a través de un caso práctico y visual.  
La creación de una ruleta animada y un sorteo automatizado demostró cómo combinar **lógica, diseño y animación** dentro de un mismo entorno, fortaleciendo las competencias en programación interactiva.  
Además, el uso de atajos de teclado permitió experimentar con **interfaces más accesibles y ágiles**, simulando comportamientos de aplicaciones reales.

---

## 🪞 Reflexión
**¿Qué he aprendido?**  
He aprendido a integrar eventos de teclado con animaciones, controlando dinámicamente los elementos del DOM para crear una aplicación completamente funcional.  
También comprendí cómo aplicar estructuras lógicas, ciclos y funciones aleatorias para generar comportamientos interactivos en tiempo real.

**¿Cómo he aprendido?**  
Mediante la práctica guiada del docente, probando cada evento de teclado, depurando el comportamiento de la ruleta y el sorteo, y verificando los resultados en el navegador.  
La experimentación y la comprensión visual de las transformaciones CSS fueron claves para consolidar mi aprendizaje.

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

