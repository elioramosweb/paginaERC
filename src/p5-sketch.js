// import p5 from "p5";

// export default function renderP5Sketch(container) {
//   new p5((p) => {
//     p.setup = () => {
//       p.createCanvas(300, 300).parent(container);
//       p.background(220);
//     };

//     p.draw = () => {
//       p.fill(0);
//       p.ellipse(150,150,50);
//     };
//   });
// }

// import p5 from "p5";

// const colors = [
//   "#f2eb8a", "#fed000", "#fc8405", "#ed361a", "#e2f0f3", "#b3dce0", "#4464a1",
//   "#203051", "#ffc5c7", "#f398c3", "#cf3895", "#6d358a", "#06b4b0", "#4b8a5f"
// ];

// export default function renderP5Sketch(container, w = 400, h =400) {
//   requestAnimationFrame(() => {
//     let resizeTimeout; // ✅ define timeout aquí

//     new p5((p) => {
//       let mySeed;

//       p.setup = () => {
//         const w = container.clientWidth;
//         const h = container.clientHeight;
//         console.log("canvas parent size:", container.clientHeight, container.clientHeight);
//         p.createCanvas(h, h).parent(container);
//         p.rectMode(p.CENTER);
//         p.ellipseMode(p.CENTER);
//         p.colorMode(p.HSB, 360, 100, 100);
//         p.strokeCap(p.SQUARE);
//         mySeed = p.floor(p.random(1, 100000));
//         p.noLoop();
//       };

//       p.draw = () => {
//         setBackground(p);

//         let mySize = p.width / 4;
//         drawGrid(p, mySize, 0);
//         mySize = p.width / 8;
//         drawGrid(p, mySize, 2, true);
//         mySize = p.width / 16;
//         drawGrid(p, mySize, 4, true);
//       };

//       p.windowResized = () => {
//         clearTimeout(resizeTimeout);
//         resizeTimeout = setTimeout(() => {
//           const w = container.clientWidth;
//           const h = container.clientHeight;
//           p.resizeCanvas(w, h);
//           p.redraw();
//         }, 200);
//       };

//       function drawGrid(p, mySize, colorIndex, offsetHalf = false) {
//         const start = offsetHalf ? mySize / 2 : 0;
//         for (let xx = start; xx <= p.width; xx += mySize) {
//           for (let yy = start; yy <= p.height; yy += mySize) {
//             p.push();
//             p.translate(xx, yy);
//             p.noFill();
//             p.rotate(p.random([0, p.HALF_PI, p.PI, p.TWO_PI - p.HALF_PI]));
//             drawPattern(p, 0, 0, mySize, colorIndex);
//             p.pop();
//           }
//         }
//       }

//       function drawPattern(p, x, y, mySize, colorIndex) {
//         let offset = 0;

//         p.strokeWeight(mySize / 4.5);
//         p.stroke(0);
//         p.noFill();
//         p.arc(x - mySize / 2, y - mySize / 2, mySize + offset, mySize + offset, 0, p.HALF_PI);
//         p.arc(x + mySize / 2, y + mySize / 2, mySize + offset, mySize + offset, -p.PI, -p.HALF_PI);

//         p.strokeWeight(mySize / 6);
//         p.stroke(colors[colorIndex]);
//         p.arc(x - mySize / 2, y - mySize / 2, mySize + offset, mySize + offset, 0, p.HALF_PI);
//         p.arc(x + mySize / 2, y + mySize / 2, mySize + offset, mySize + offset, -p.PI, -p.HALF_PI);

//         p.strokeWeight(mySize / 8);
//         p.stroke(colors[colorIndex + 1]);
//         p.arc(x - mySize / 2, y - mySize / 2, mySize + offset, mySize + offset, 0, p.HALF_PI);
//         p.arc(x + mySize / 2, y + mySize / 2, mySize + offset, mySize + offset, -p.PI, -p.HALF_PI);
//       }

//       function setBackground(p) {
//         p.fill(colors[6]);
//         p.rect(p.width / 2, p.height / 2, p.width, p.height);
//       }
//     });
//   });
// }

import p5 from "p5";

const colors = ["#ff0000", "#feb30f", "#0aa4f7", "#ffffff"];

export default function renderP5Sketch(container, w = 400, h = 400) {
  new p5((p) => {
    let nodes = [];
    let mySize = 10;
    let frameLimit = 1000;
    let resizeTimeout;

    p.setup = () => {
      p.createCanvas(w, h).parent(container);
      p.rectMode(p.CENTER);
      p.ellipseMode(p.CENTER);
      p.colorMode(p.HSB, 360, 100, 100, 100);
      p.background(80);

      // Crear nodos por primera vez
      for (let i = 0; i < 20; i++) {
        nodes.push(new Node(p.width / 2, p.height / 2, mySize));
      }
    };

    p.draw = () => {
      for (let node of nodes) {
        node.display();
      }

      if (p.frameCount > frameLimit) {
        p.noLoop();
      }
    };

    p.windowResized = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newW = container.clientWidth;
        const newH = container.clientHeight;

        p.resizeCanvas(newW, newH);
        p.background(100);
        p.loop(); // continúa animación

        // Opcional: reposicionar nodos fuera de bounds
        for (let node of nodes) {
          if (
            node.x > newW || node.y > newH ||
            node.x < 0    || node.y < 0
          ) {
            node.x = newW / 2;
            node.y = newH / 2;
          }
        }
      }, 200);
    };

    class Node {
      constructor(x, y, size) {
        this.x0 = x;
        this.y0 = y;
        this.x = x;
        this.y = y;
        this.size = size;
        this.step = p.random([60, 120]);
        this.color = p.random([generateColor(10), p.color(0, 0, 100)]);
        this.strokeWidth = 5;
        this.strokeColor = p.random([generateColor(10), p.color(0, 0, 100)]);
      }

      display() {
        const oldX = this.x;
        const oldY = this.y;

        const ranAng1 = p.random([0, p.HALF_PI, p.PI, 3 * p.HALF_PI]);
        const ranAng2 = p.random([0, p.HALF_PI, p.PI, 3 * p.HALF_PI]);

        this.x += this.step * p.cos(ranAng1);
        this.y += this.step * p.sin(ranAng2);

        const temp = this.step / 2;

        if (
          this.x > temp * 3 &&
          this.x < p.width - temp * 3 &&
          this.y > temp * 3 &&
          this.y < p.height - temp * 3
        ) {
          p.fill(this.color);
          p.noStroke();
          p.ellipse(oldX, oldY, temp, temp);
          p.fill(0);
          p.ellipse(oldX, oldY, temp / 3, temp / 3);

          p.strokeWeight(this.strokeWidth);
          addBlur();
          p.stroke(this.strokeColor);
          p.line(oldX, oldY, this.x, this.y);
        }
      }
    }

    function generateColor(scale) {
      const base = p.color(colors[p.floor(p.random(colors.length))]);
      return p.color(
        p.hue(base) + p.randomGaussian() * scale,
        p.saturation(base) + p.randomGaussian() * scale,
        p.brightness(base) + p.randomGaussian() * scale,
        p.random(99, 100)
      );
    }

    function addBlur() {
      p.drawingContext.shadowOffsetX = 1;
      p.drawingContext.shadowOffsetY = 0;
      p.drawingContext.shadowBlur = 3;
      p.drawingContext.shadowColor = "black";
    }
  });
}
