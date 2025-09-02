
</head>
<body>

  <!-- PORTADA -->
  <header>
    <img src="https://via.placeholder.com/120" alt="Foto de perfil">
    <h1>Gian Alessandro</h1>
    <h3>Estudiante de Ingeniería de Sistemas - UNCP</h3>
  </header>

  <!-- SOBRE MÍ -->
  <section>
    <h2>Sobre mí</h2>
    <p>Hola, soy Gian Alessandro Janampa Choccelahua, estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú. 
       Me interesa el desarrollo web, la gestión de proyectos y la innovación tecnológica. 
       Este portafolio recopila mis aprendizajes y proyectos.</p>
  </section>

  <!-- PROYECTOS -->
  <section>
    <h2>Proyectos Concluidos</h2>
    <div class="proyecto">
      <h3>Proyecto 1 - Sistema de Gestión</h3>
      <p>Desarrollo de un sistema CRUD con base de datos para farmacia usando Java y SQL.</p>
    </div>
    <div class="proyecto">
      <h3>Proyecto 2 - Plataforma Web</h3>
      <p>Diseño de una web para artesanos de Junín, facilitando la venta en línea de sus productos.</p>
    </div>
    <div class="proyecto">
      <h3>Proyecto 2 - Plataforma Web</h3>
      <p>Desarrollo de un Sitio Web para la Exploración del Patrimonio Turístico y Cultural en la Provincia de Chupaca.</p>
    </div>
    
  </section>

  <!-- BIBLIOGRAFÍA -->
  <section>
    <h2>Bibliografía</h2>
    <ul>
      <li>Documentación oficial de GitHub Pages</li>
      <li>MDN Web Docs - HTML y CSS</li>
      <li>Videos de YouTube sobre desarrollo web</li>
    </ul>
  </section>

  <footer>
    <p>© 2025 - Portafolio de Gian Alessandro | <a href="https://github.com/GianAS1012">GitHub</a></p>
  </footer>

</body>
</html>

# CAPITULO 2 - Funciones CSS (calc(), clamp(), min(), max())

Las funciones en CSS forman parte de las herramientas modernas que permiten definir valores dinámicos sin necesidad de JavaScript. Su propósito es calcular y ajustar automáticamente propiedades de diseño, lo que hace que las páginas sean más flexibles y responsivas (MDN Web Docs, s. f.).

Estas funciones se interpretan directamente en el navegador y pueden trabajar con unidades mixtas (px, %, vw, rem, etc.), lo que antes requería cálculos manuales o media queries adicionales. Entre las más usadas tenemos:

calc(): permite realizar operaciones matemáticas (+, −, ×, ÷).

min(): selecciona el valor más pequeño entre dos o más opciones.

max(): selecciona el valor más grande entre dos o más opciones.

clamp(): fija un rango mínimo, preferido y máximo en una sola línea.

Estas funciones, combinadas con variables CSS, dan mayor control y eficiencia en proyectos grandes de diseño web.

🔹 Ventajas

Adaptabilidad: ajustan medidas de forma automática según el tamaño del dispositivo.

Simplicidad: reducen la necesidad de usar JavaScript o varias media queries.

Flexibilidad: permiten mezclar diferentes unidades (ejemplo: px con %).

Mantenimiento fácil: facilitan cambios en proyectos grandes y responsivos.

🔹 Ejemplos de código

Ejemplo con calc()
```css
div {
  width: calc(100% - 50px);
}
```
➡ El div ocupará todo el ancho de la página menos 50 píxeles.

Ejemplo con min()
```css
div {
  width: min(70%, 400px);
}
```
➡ El ancho será el menor valor: 70% de la pantalla o 400px.

Ejemplo con max()
```css
p {
  font-size: max(16px, 2vw);
}
```
➡ El texto nunca será más pequeño que 16px, pero crecerá en pantallas grandes.

Ejemplo con clamp()
```css
h1 {
  font-size: clamp(16px, 5vw, 40px);
}
```
➡ El título (h1) será como mínimo 16px, crecerá de forma dinámica (5vw), pero nunca más de 40px.

# CAPITULO 3 - Grid Layout Avanzado (Áreas de grid, auto-fit, auto-fill)

El CSS Grid Layout es un sistema de diseño en dos dimensiones (filas y columnas) que facilita la construcción de interfaces web organizadas y responsivas. A diferencia de Flexbox, que trabaja en una sola dirección (fila o columna), Grid permite controlar simultáneamente ambas dimensiones, ofreciendo mayor precisión y flexibilidad (W3C, s. f.).

Dentro de sus características avanzadas destacan:

grid-template-areas: permite asignar nombres a secciones del layout, lo que mejora la legibilidad y semántica del código.

auto-fit y auto-fill: permiten crear cuadrículas dinámicas donde los elementos se ajustan automáticamente al espacio disponible, sin necesidad de usar múltiples media queries.

Estas propiedades hacen de Grid una herramienta fundamental en proyectos modernos de diseño web, especialmente en páginas con estructuras complejas como dashboards, plantillas de noticias, portfolios o aplicaciones web.

🔹 Ventajas

Organización clara: usar nombres en las áreas facilita la lectura y mantenimiento.

Diseño responsivo: auto-fit y auto-fill ajustan automáticamente el número de columnas.

Mayor control: permite distribuir espacio, alineaciones y relaciones entre elementos de forma precisa.

Escalabilidad: útil para proyectos grandes donde la estructura puede crecer fácilmente.

🔹 Ejemplos de código
1. Uso de grid-template-areas

Permite asignar nombres a diferentes secciones del layout.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}

.header  { grid-area: header;  background: lightblue; }
.sidebar { grid-area: sidebar; background: lightgreen; }
.main    { grid-area: main;    background: lightcoral; }
.footer  { grid-area: footer;  background: lightgray; }

```
➡ Resultado: el diseño queda dividido en header, sidebar, main y footer de forma clara y ordenada.

2. Uso de auto-fit y auto-fill

Sirven para crear grids responsivos que se adaptan automáticamente.
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}
.item {
  background: lightseagreen;
  height: 100px;
  border-radius: 8px;
  text-align: center;
  line-height: 100px;
  color: white;
  font-weight: bold;
}

```
➡ Resultado: las tarjetas se ajustan solas al espacio disponible, evitando el uso de múltiples media queries.

En pantallas grandes → varias columnas.

En pantallas pequeñas → se reducen a 1 o 2 columnas automáticamente.
