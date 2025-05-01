---
toc: false
---

```js
import renderP5Sketch from "./p5-sketch.js"
```

```js
function getCanvas() 
{
  const div = html`<div></div>`;
  renderP5Sketch(div);
  return div;
}
```


<!-- ```js
function func() = {
   return "nada";
 }
``` -->


<div class="grid grid-cols-3">
  <div class="card" style="border: none; text-align: center;">
  <h1>Elio Ramos Colón</h1> <br> 
  <h2>Departamento de Matemática <br>
  Universidad de Puerto Rico en Humacao</h2> 
  </div>
  <div class="card" style="border: none;">
  <img src="images/triple-logo.png" style="width:80%; display: block; margin: auto;" />
  </div>
</div> 


<div class="grid grid-cols-3">
<div class="card" style="border: none;">
<img src="images/foto_erc.jpg" style="width:90%; display: block; margin: auto;" />
</div>
<div class="card" style="width:90%; border: none; display: block;">
${display(getCanvas())}
</div>
</div> 


<div style="max-width:80%; margin-left: 0; margin-right: auto;">
  Soy profesor de Matemáticas, Ciencia de Cómputo y Ciencia de Datos en el Departamento de Matemáticas de la <a href="https://www.uprh.edu">Universidad de Puerto Rico en Humacao</a>.  Soy el coordinador académico del <a href="https://cdat.uprh.edu">Programa de Bachillerato en Ciencia de Datos (PBCD)</a>.Tengo un Ph.D. en Ciencias Computacionales e Informática de <a href="https://gmu.edu">George Mason University</a>.  
  
  Dentro del PBCD enseño los cursos de:

<ul>
<li>Introducción a la Programación y la Ciencia de Cómputos I y su Laboratorio (Comp3081/Comp3083)</li>
<li>Introducción a la Programación y la Ciencia de Cómputos II y su Laboratorio (Comp3082/Comp3084)</li>
<li>Visualización de Datos (CDAT3001)</li>
<li>Diseño de Aplicaciones para la Web y Móviles (Comp4010)</li>
<li>Investigación subgraduada (Mate4010)</li>
</ul>

</div>



<!-- 
<div class="grid grid-cols-2" style="grid-auto-rows: 504px;">
  <div class="card">${
    resize((width) => Plot.plot({
      title: "Your awesomeness over time 🚀",
      subtitle: "Up and to the right!",
      width,
      y: {grid: true, label: "Awesomeness"},
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(aapl, {x: "Date", y: "Close", tip: true})
      ]
    }))
  }</div>
  <div class="card">${
    resize((width) => Plot.plot({
      title: "How big are penguins, anyway? 🐧",
      width,
      grid: true,
      x: {label: "Body mass (g)"},
      y: {label: "Flipper length (mm)"},
      color: {legend: true},
      marks: [
        Plot.linearRegressionY(penguins, {x: "body_mass_g", y: "flipper_length_mm", stroke: "species"}),
        Plot.dot(penguins, {x: "body_mass_g", y: "flipper_length_mm", stroke: "species", tip: true})
      ]
    }))
  }</div>
</div> -->

---

<b>Correo-electrónico</b>: elio.ramos@upr.edu


<style>

body {
  font-family: 'Roboto', 'Inter', 'Lato', sans-serif; /* fallback entre sans-serif modernos */
  background-color: #f9fafb; /* fondo claro, sobrio */
  color: #111827;            /* texto casi negro para buen contraste */
  line-height: 1.7;          /* legibilidad */
  letter-spacing: 0.01em;    /* espaciado sutil */
  padding: 1.5rem;           /* espacios amplios alrededor del contenido */
  max-width: 80%;           /* evita líneas muy largas */
  margin: auto;
}


.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

article, .post-content {
  max-width: 42rem;    /* ajusta a tu gusto */
  margin-left: auto;   /* centra */
  margin-right: auto;
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>
