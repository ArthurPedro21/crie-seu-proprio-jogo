var icecreamImg
var fireEnemy, fireEnemyImg
var iceCube, iceCubeImg
var score

var box, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32, box33
var backgroundImage
var ice
var enemyGroup
var trajetory = []
var pos = []
function preload() {

  backgroundImage = loadImage("superficie-com-tinta-aquarela-abstrata.jpg");
  fireEnemyImg = loadAnimation("fireEnemy1.png", "fireEnemy2.png", "fireEnemy3.png")
  iceCubeImg = loadImage("ice-cubes(2).png");
  icecreamImg = loadImage("Untitled.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  box = createSprite(windowWidth / 2, windowHeight / 2 - 250, 510, 10);
  box.shapeColor = "black";
  box2 = createSprite(windowWidth / 2 - 250, windowHeight / 2, 10, 500)
  box2.shapeColor = "black";
  box3 = createSprite(windowWidth / 2, windowHeight / 2 + 250, 510, 10);
  box3.shapeColor = "black";
  box4 = createSprite(windowWidth / 2 + 250, windowHeight / 2, 10, 500)
  box4.shapeColor = "black";
  box5 = createSprite(812, 335, 50, 50)
  box5.shapeColor = "black"
  box6 = createSprite(812, 610, 50, 50)
  box6.shapeColor = "black"
  box7 = createSprite(1112, 610, 50, 50)
  box7.shapeColor = "black"
  box8 = createSprite(1112, 335, 50, 50)
  box8.shapeColor = "black"
  box9 = createSprite(789, 293, 5, 50)
  box9.shapeColor = "black"
  box10 = createSprite(862, 312, 50, 5)
  box10.shapeColor = "black"
  box11 = createSprite(963, 268, 350, 5)
  box11.shapeColor = "black"
  box12 = createSprite(887, 633, 100, 5)
  box12.shapeColor = "black"
  box13 = createSprite(852, 587, 45, 5)
  box13.shapeColor = "black"
  box14 = createSprite(875, 560, 5, 55)
  box14.shapeColor = "black"
  box15 = createSprite(830, 535, 90, 5)
  box15.shapeColor = "black"
  box16 = createSprite(windowWidth / 2, windowHeight / 2, 80, 80)
  box16.shapeColor = "black"
  box17 = createSprite(787, 505, 5, 60)
  box17.shapeColor = "black"
  box18 = createSprite(810, 477, 50, 5)
  box18.shapeColor = "black"
  box19 = createSprite(835, 447, 5, 65)
  box19.shapeColor = "black"
  box20 = createSprite(810, 417, 50, 5)
  box20.shapeColor = "black"
  box21 = createSprite(920, 465, 5, 250)
  box21.shapeColor = "black"
  box22 = createSprite(983, 380, 125, 5)
  box22.shapeColor = "black"
  box23 = createSprite(1045, 385, 5, 90)
  box23.shapeColor = "black"
  box24 = createSprite(1030, 487, 65, 5)
  box24.shapeColor = "black"
  box25 = createSprite(1037, 633, 100, 5)
  box25.shapeColor = "black"
  box26 = createSprite(1050, 587, 80, 5)
  box26.shapeColor = "black"
  box27 = createSprite(1010, 565, 5, 43)
  box27.shapeColor = "black"
  box28 = createSprite(1039, 542, 60, 5)
  box28.shapeColor = "black"
  box29 = createSprite(1135, 553, 5, 81)
  box29.shapeColor = "black"
  box30 = createSprite(1120, 500, 40, 5)
  box30.shapeColor = "black"
  box30.rotation = box30.rotation + 40
  box31 = createSprite(1105, 455, 5, 70)
  box31.shapeColor = "black"
  box32 = createSprite(1120, 410, 40, 5)
  box32.rotation = box32.rotation - 40
  box32.shapeColor = "black"
  ice = createSprite(windowWidth / 2 - 70, windowHeight / 2 - 53, 20, 20)
  ice.shapeColor = "blue"
  ice.addImage("icecream", icecreamImg)
  ice.scale = 0.09
  //ice.debug = true
  iceCube = createSprite(windowWidth / 2 - 80, windowHeight / 2 - 53, 20, 20)
  fireEnemy = createSprite(847, 608, 20, 20)
  fireEnemy.addAnimation("fire", fireEnemyImg)
  fireEnemy.scale = 0.5
  //fireEnemy.debug = true
  fireEnemy.setCollider("rectangle", 0, 0, 40, 40)
  iceCube.addImage("icecube", iceCubeImg)
  iceCube.scale = 0.08

}

function draw() {
  image(backgroundImage, windowWidth / 2 - 250, windowHeight / 2 - 250, 500, 500);
  if (keyDown(RIGHT_ARROW)) {
    ice.x = ice.x + 4
  }

  if (keyDown(LEFT_ARROW)) {
    ice.x = ice.x - 4
  }

  if (keyDown(UP_ARROW)) {
    ice.y = ice.y - 4
  }

  if (keyDown(DOWN_ARROW)) {
    ice.y = ice.y + 4
  }

  ice.collide(box);
  ice.collide(box2);
  ice.collide(box3);
  ice.collide(box4);
  ice.collide(box5);
  ice.collide(box6);
  ice.collide(box7);
  ice.collide(box8);
  ice.collide(box9);
  ice.collide(box10);
  ice.collide(box11);
  ice.collide(box12);
  ice.collide(box13);
  ice.collide(box14);
  ice.collide(box15);
  ice.collide(box16);
  ice.collide(box17);
  ice.collide(box18);
  ice.collide(box19);
  ice.collide(box20);
  ice.collide(box21);
  ice.collide(box22);
  ice.collide(box23);
  ice.collide(box24);
  ice.collide(box25);
  ice.collide(box26);
  ice.collide(box27);
  ice.collide(box28);
  ice.collide(box29);
  ice.collide(box30);
  ice.collide(box31);
  ice.collide(box32);

  setTimeout(() => {
    seguir()
  }, 3000);
  drawSprites()

  if (ice.collide(fireEnemy)) {
    alert("You lose, try again")
    window.location.reload()
  }

  if (ice.collide(iceCube)) {
    score = score + 1
  }

  if (frameCount % 100 == 0) {
    iceCubes()
  }
}

function seguir() {
  var pos = [ice.x, ice.y]
  trajetory.push(pos)
  for (let index = 0; index < trajetory.length - 20; index++) {
    if (frameCount % 1 == 0) {
      fireEnemy.x = trajetory[index][0]
      fireEnemy.y = trajetory[index][1]
    }


  }
}

function iceCubes() {
  var i = Math.round(random(1, 3))
  if (i == 1) {
    iceCube.x = Math.round(random(810, 861))
    iceCube.y = 505
    iceCube.changeImage(iceCubeImg)

  }
  if (i == 2) {
    iceCube.x = 1023
    iceCube.y = Math.round(random(450, 480))
    iceCube.changeImage(iceCubeImg)

  }
  if (i == 3) {
    iceCube.x = Math.round(random(850, 845))
    iceCube.y = 605
    iceCube.changeImage(iceCubeImg)

  }
}