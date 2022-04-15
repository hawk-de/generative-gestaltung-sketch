      function setup() {
        const canvas = createCanvas(500, 500);
        canvas.parent("sketch");
        background(0, 2);
      }
      function draw() {
        background(0, 2);
        stroke(0, 200);
        fill(255, 20);
        ellipse(
          width / 2,
          height / 2,
          100 + random(-10, 10),
          100 + random(-10, 10)
        );
      }