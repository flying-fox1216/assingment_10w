let Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Common = Matter.Common;

let engine;

let boxes = [];
let ground;
let MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse;

//   var mouse = Mouse.create(render.canvas),
//   mouseConstraint = MouseConstraint.create(engine, {
//     mouse: mouse,
//     constraint: {
//       stiffness: 0.2,
//       render: {
//         visible: false,
//       },
//     },
//   });
// Composite.add(world, mouseConstraint);

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  ground = new Rect(150, 610, 300, 60, "#C0AAA9", { isStatic: true });
  ground2 = new Rect(650, 610, 300, 60, "#C0AAA9", { isStatic: true });
  wall_1 = new Rect(0, 150, 20, 900, "#C0AAA9", { isStatic: true });
  wall_2 = new Rect(800, 150, 20, 900, "#C0AAA9", { isStatic: true });
  obj = new Polygon(width / 2, 400, 3, 100, "#C0AAA9", { isStatic: true });
  // new Rect(400, 350, 150, 100, "#C0AAA9", { isStatic: true });

  // obj_1 = new Rect(800, 150, 20, 900, "#C0AAA9", { isStatic: true });
  Composite.add(engine.world, ground.bodies);
  Composite.add(engine.world, ground2.bodies);
  Composite.add(engine.world, wall_1.bodies);
  Composite.add(engine.world, wall_2.bodies);
  Composite.add(engine.world, obj.bodies);
  // Composite.add(engine.world, obj_1.bodies);

  // Matter.Runner.run(engine);
  // Render.run(Render);
}

function mousePressed() {
  let angle = random(0, 6);
  let size = random(10, 40);
  let randomColor = color(random(256), random(256), random(256));
  let newRect;
  if (mouseButton === LEFT) {
    // newRect = new Rect(mouseX, mouseY, size, size, randomColor);

    // keep the mouse in sync with rendering
    render.mouse = mouse;
  } else if (mouseButton === CENTER) {
    print(angle);
    if (angle >= 3) {
      newRect = new Polygon(mouseX, mouseY, angle, size, randomColor);
    } else if (angle < 3) {
      newRect = new Circle(mouseX, mouseY, size, randomColor);
    }
  }
  Composite.add(engine.world, newRect.bodies);
  boxes.push(newRect); // 묶음 boxes에 사각형 추가, 아래 render 코드에 사각형을 그릴수 있도록 함
}

function draw() {
  background("#F8F3FD");

  Engine.update(engine);
  noStroke();
  fill("#FF8C58");
  boxes.forEach((e) => e.render());
  // for (let i = 0; i < boxes.length; i++) {
  //   boxes[i].render();
  // }

  ground.render();
  ground2.render();
  wall_1.render();
  wall_2.render();
  // obj_1.render();
  obj.render();
}
