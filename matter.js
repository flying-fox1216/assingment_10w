let Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Common = Matter.Common;

let engine;

let boxes = [];
let ground;
// let MouseConstraint = Matter.MouseConstraint,
//   Mouse = Matter.Mouse;
let sides = [2, 3, 4, 5, 6, 7, 8, 9];

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  ground = new Rect(150, 610, 320, 60, "#C0AAA9", { isStatic: true });
  ground2 = new Rect(650, 610, 320, 60, "#C0AAA9", { isStatic: true });
  wall_1 = new Rect(0, 150, 20, 900, "#C0AAA9", { isStatic: true });
  wall_2 = new Rect(800, 150, 20, 900, "#C0AAA9", { isStatic: true });
  obj = new Polygon(width / 2, 370, 3, 100, "#C0AAA9", {
    isStatic: true,
    angle: Math.PI * -1.5,
  });
  // new Rect(400, 350, 150, 100, "#C0AAA9", { isStatic: true });

  // obj_1 = new Rect(800, 150, 20, 900, "#C0AAA9", { isStatic: true });
  Composite.add(engine.world, ground.bodies);
  Composite.add(engine.world, ground2.bodies);
  Composite.add(engine.world, wall_1.bodies);
  Composite.add(engine.world, wall_2.bodies);
  Composite.add(engine.world, obj.bodies);

  // Matter.Runner.run(engine);
  // Render.run(Render);
}

function mousePressed() {
  let angle = random(sides);
  let size = random(10, 40);
  let randomColor = color(random(256), random(256), random(256));
  let newRect;
  if (mouseButton === LEFT) {
    if (angle > 2) {
      newRect = new Polygon(mouseX, mouseY, angle, size, "#C0AAA9", {
        isStatic: true,
        angle: Math.PI * random(-1, 1),
      });
    } else if (angle < 3) {
      newRect = new Circle(mouseX, mouseY, size, "#C0AAA9", {
        isStatic: true,
        angle: Math.PI * random(-1, 1),
      });
    }
  } else if (mouseButton === CENTER) {
    if (angle > 2) {
      newRect = new Polygon(mouseX, mouseY, angle, size, randomColor, {
        restitution: 1,
      });
    } else if (angle < 3) {
      newRect = new Circle(mouseX, mouseY, size, randomColor);
    }
  }
  Composite.add(engine.world, newRect.bodies);
  // Composite.add(engine.world, newRect2.body);
  boxes.push(newRect); // 묶음 boxes에 사각형 추가, 아래 render 코드에 사각형을 그릴수 있도록 함
}

function mouseDragged() {
  let angle = random(sides);
  let size = random(10, 40);
  let randomColor = color(random(256), random(256), random(256));
  let newRect;
  // if (mouseButton === LEFT) {
  // } else
  if (mouseButton === CENTER) {
    if (angle > 2) {
      newRect = new Polygon(mouseX, mouseY, angle, size, randomColor, {
        restitution: 1,
      });
    } else if (angle < 3) {
      newRect = new Circle(mouseX, mouseY, size, randomColor);
    }
  }
  Composite.add(engine.world, newRect.bodies);
  // Composite.add(engine.world, newRect2.body);
  boxes.push(newRect); // 묶음 boxes에 사각형 추가, 아래 render 코드에 사각형을 그릴수 있도록 함
}

function draw() {
  let angle2 = random(sides);
  let size2 = random(10, 40);
  let randomColor = color(random(256), random(256), random(256));
  let widthlenth = random(20, width - 20);
  if (frameCount % 30 == 0) {
    newRect2 = new Polygon(widthlenth, 50, angle2, size2, randomColor, {
      restitution: 1,
    });

    boxes.push(newRect2);
    Composite.add(engine.world, newRect2.bodies);
  }

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
  obj.render();
}

// 해야할 거 = 마우스 드래그, 아래로 떨어졌을 시 위로 다시 나오게하기
