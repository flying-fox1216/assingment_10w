// class Polygon {
//   constructor(x, y, s, r, c, opt) {
//     this.s = s; //side
//     this.r = r; //width = radius
//     this.c = c;
//     var opt = {
//       restitution: 1,
//     };
//     this.bodies = Bodies.polygon(x, y, this.s, this.r, opt);
//   }

//   render() {
//     rectMode(CENTER);
//     push();
//     fill(this.c);
//     translate(this.bodies.position.x, this.bodies.position.y);
//     rotate(this.bodies.angle);
//     polygon(0, 0, this.r, this.s);
//     pop();
//   }
// }

class Polygon {
  constructor(x, y, s, r, c, opt) {
    this.sides = s;
    this.radius = r;
    this.c = c;

    this.bodies = Matter.Bodies.polygon(x, y, this.sides, this.radius, opt);
    // Matter.Composite.add(engine.world, this.body);
  }
  render() {
    fill(this.c);

    beginShape();
    this.bodies.vertices.forEach((v) => {
      vertex(v.x, v.y);
    });
    endShape(CLOSE);
  }
  // renderDirVector() {
  //   line(
  //     this.body.position.x,
  //     this.body.position.y,
  //     this.body.vertices[0].x,
  //     this.body.vertices[0].y
  //   );
  // }
}
