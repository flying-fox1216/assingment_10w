class Circle {
  constructor(x, y, d, c, opt) {
    this.d = d;
    this.c = c;
    // var opt = {
    //   restitution: 1,
    // };
    this.bodies = Bodies.circle(x, y, this.d, opt);
  }

  render() {
    push();
    fill(this.c);
    translate(this.bodies.position.x, this.bodies.position.y);
    rotate(this.bodies.angle);
    circle(0, 0, this.d * 2);
    pop();
  }
}
