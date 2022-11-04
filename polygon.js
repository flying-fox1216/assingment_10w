class Polygon {
  constructor(x, y, s, r, c, opt) {
    this.s = s; //side
    this.r = r; //width = radius
    this.c = c;
    var opt = {
      restitution: 1,
    };
    this.bodies = Bodies.polygon(x, y, this.s, this.r, opt);
  }

  render() {
    rectMode(CENTER);
    push();
    fill(this.c);
    translate(this.bodies.position.x, this.bodies.position.y);
    rotate(this.bodies.angle);
    rect(0, 0, this.s, this.r);
    pop();
  }
}
