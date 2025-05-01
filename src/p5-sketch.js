import p5 from "p5";

export default function renderP5Sketch(container) {
  new p5((p) => {
    p.setup = () => {
      p.createCanvas(300, 300).parent(container);
      p.background(220);
    };

    p.draw = () => {
      p.ellipse(150,150,50);
    };
  });
}
