const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var ground, right, left, up;
var gh, pacMan, maze, mmg;

function preload(){
 //gh = loadAnimation("./assets/Pacman.png","./assets/Pacman2.png");
 gh = loadImage("./assets/Pacman1.png");
 mmg = loadImage("./assets/maze.png");
 coin = loadImage("./assets/coins.png")

}


function setup() {
  createCanvas(900,700)
  engine = Engine.create();
  world = engine.world;
 
  ground = createSprite(350,690,700,10);
  ground.shapeColor = "blue";
  
  right = createSprite(690,290,10,700);
  right.shapeColor = "blue";

  left = createSprite(10,350,10,700);
  left.shapeColor = "blue";

  up = createSprite(350,10,700,10);
  up.shapeColor = "blue";
  
  pacMan = createSprite(35,35,30,30);
  pacMan.addImage("Ghost Hunter", gh);
  pacMan.scale = 0.05;

  v_wallsGroup = new Group();
  h_wallsGroup = new Group();
  coins_group = new Group();

 /* maze = createSprite(350,350,700,700);
  maze.addImage("maze",mmg);
  maze.scale = 1.5;*/

  verticalWalls();
  horizontalWalls()
  
}

function draw() 
{
  background("white");
  Engine.update(engine);

  if(keyIsDown(LEFT_ARROW)){
   // console.log("I am inside if")
    pacMan.x -= 3;
  }

  if(keyIsDown(RIGHT_ARROW)){
    pacMan.x += 3;
  }

  if(keyIsDown(UP_ARROW)){
    pacMan.y -= 3;
  }

  if(keyIsDown(DOWN_ARROW)){
    pacMan.y += 3;
  }

  if(pacMan.collide(v_wallsGroup)){
    pacMan.x = 35;
    pacMan.y = 35;
  }

  if(pacMan.collide(h_wallsGroup)){
    pacMan.x = 35;
    pacMan.y = 35;
  }

  if(pacMan.collide(up) || pacMan.collide(ground)){
     pacMan.x = 35;
     pacMan.y = 35;
  }

  if(pacMan.collide(right) || pacMan.collide(left)){
     pacMan.x = 35;
     pacMan.y = 35;
  }

  if(coins_group.overlap(pacMan)){
   coins_group.destroy()
  }

  displayCoins()
  drawSprites()
}


function verticalWalls(){
  w1 = createSprite(325,20,6,80);
  w1.shapeColor = "blue";
  v_wallsGroup.add(w1);

  w2 = createSprite(535,20,6,300);
  w2.shapeColor = "blue";
  v_wallsGroup.add(w2);

  w3 = createSprite(270,190,6,270);
  w3.shapeColor = "blue";
  v_wallsGroup.add(w3);

  w4 = createSprite(110,110,6,110);
  w4.shapeColor = "blue";
  v_wallsGroup.add(w4);
  
  w5 = createSprite(642,140,6,165);
  w5.shapeColor = "blue";
  v_wallsGroup.add(w5);

  w6 = createSprite(218,85,6,60);
  w6.shapeColor = "blue";
  v_wallsGroup.add(w6);

  w7 = createSprite(430,85,6,55);
  w7.shapeColor = "blue";
  v_wallsGroup.add(w7);

  w8 = createSprite(165,135,6,55);
  w8.shapeColor = "blue";
  v_wallsGroup.add(w8);

  w9 = createSprite(325,165,6,115);
  w9.shapeColor = "blue";
  v_wallsGroup.add(w9);

  w10 = createSprite(59,219,6,110);
  w10.shapeColor = "blue";
  v_wallsGroup.add(w10);

  w11 = createSprite(218,219,6,100);
  w11.shapeColor = "blue";
  v_wallsGroup.add(w11);

  w12 = createSprite(484,270,6,220);
  w12.shapeColor = "blue";
  v_wallsGroup.add(w12);

  w13 = createSprite(429,270,6,220);
  w13.shapeColor = "blue";
  v_wallsGroup.add(w13);

  w14 = createSprite(376,320,6,220);
  w14.shapeColor = "blue";
  v_wallsGroup.add(w14);

  w15 = createSprite(57,430,6,215);
  w15.shapeColor = "blue";
  v_wallsGroup.add(w15);

  w16 = createSprite(165,350,6,165);
  w16.shapeColor = "blue";
  v_wallsGroup.add(w16);

  w17 = createSprite(112,295,6,60);
  w17.shapeColor = "blue";
  v_wallsGroup.add(w17);

  w18 = createSprite(643,510,6,270);
  w18.shapeColor = "blue";
  v_wallsGroup.add(w18);

  w19 = createSprite(270,560,6,160);
  w19.shapeColor = "blue";
  v_wallsGroup.add(w19);

  w20 = createSprite(377,560,6,160);
  w20.shapeColor = "blue";
  v_wallsGroup.add(w20);

  w21 = createSprite(325,430,6,110);
  w21.shapeColor = "blue";
  v_wallsGroup.add(w21);

  w22 = createSprite(536,400,6,50);
  w22.shapeColor = "blue";
  v_wallsGroup.add(w22);
  
  w23 = createSprite(430,460,6,60);
  w23.shapeColor = "blue";
  v_wallsGroup.add(w23);

  w24 = createSprite(217,460,6,55);
  w24.shapeColor = "blue";
  v_wallsGroup.add(w24);

  w25 = createSprite(590,455,6,60);
  w25.shapeColor = "blue";
  v_wallsGroup.add(w25);

  w26 = createSprite(430,680,6,80);
  w26.shapeColor = "blue";
  v_wallsGroup.add(w26);

  w27 = createSprite(483,535,6,110);
  w27.shapeColor = "blue";
  v_wallsGroup.add(w27);

  w28 = createSprite(589,560,6,55);
  w28.shapeColor = "blue";
  v_wallsGroup.add(w28);

  w30 = createSprite(483,670,6,60);
  w30.shapeColor = "blue";
  v_wallsGroup.add(w30);

  w31 = createSprite(110,560,6,50);
  w31.shapeColor = "blue";
  v_wallsGroup.add(w31);

  w32 = createSprite(535,510,6,55);
  w32.shapeColor = "blue";
  v_wallsGroup.add(w32);

  w33 = createSprite(535,615,6,60);
  w33.shapeColor = "blue";
  v_wallsGroup.add(w33);

  w34 = createSprite(535,298,6,60);
  w34.shapeColor = "blue";
  v_wallsGroup.add(w34);
  
  w35 = createSprite(589,350,6,55);
  w35.shapeColor = "blue";
  v_wallsGroup.add(w35);

  w36 = createSprite(590,240,6,55);
  w36.shapeColor = "blue";
  v_wallsGroup.add(w36);

  w37 = createSprite(643,298,6,58);
  w37.shapeColor = "blue";
  v_wallsGroup.add(w37);
  
}


function horizontalWalls(){
  w38 = createSprite(80,60,55,6);
  w38.shapeColor = "blue";
  h_wallsGroup.add(w38);

  w39 = createSprite(10,110,100,6);
  w39.shapeColor = "blue";
  h_wallsGroup.add(w39);

  w40 = createSprite(10,270,100,6);
  w40.shapeColor = "blue";
  h_wallsGroup.add(w40);

  w41 = createSprite(10,535,100,6);
  w41.shapeColor = "blue";

  w42 = createSprite(218,641,325,6);
  w42.shapeColor = "blue";
  h_wallsGroup.add(w42);

  w43 = createSprite(590,641,110,6);
  w43.shapeColor = "blue";
  h_wallsGroup.add(w43);

  w44 = createSprite(215,60,110,6);
  w44.shapeColor = "blue";
  h_wallsGroup.add(w44);

  w45 = createSprite(350,60,60,6);
  w45.shapeColor = "blue";
  h_wallsGroup.add(w45);

  w47 = createSprite(460,60,55,6);
  w47.shapeColor = "blue";
  h_wallsGroup.add(w47);

  w48 = createSprite(615,60,55,6);
  w48.shapeColor = "blue";
  h_wallsGroup.add(w48);

  w49 = createSprite(456,112,272,6);
  w49.shapeColor = "blue";
  h_wallsGroup.add(w49);

  w50 = createSprite(130,588,180,6);
  w50.shapeColor = "blue";
  h_wallsGroup.add(w50);

  w51 = createSprite(190,430,265,6);
  w51.shapeColor = "blue";
  h_wallsGroup.add(w51);

  w52 = createSprite(455,430,165,6);
  w52.shapeColor = "blue";
  h_wallsGroup.add(w52);

  w53 = createSprite(217,535,220,6);
  w53.shapeColor = "blue";
  h_wallsGroup.add(w53);

  w54 = createSprite(430,535,100,6);
  w54.shapeColor = "blue";
  h_wallsGroup.add(w54);

  w55 = createSprite(510,588,165,6);
  w55.shapeColor = "blue";
  h_wallsGroup.add(w55);

  w56 = createSprite(215,324,105,6);
  w56.shapeColor = "blue";
  h_wallsGroup.add(w56);

  w57 = createSprite(350,323,60,6);
  w57.shapeColor = "blue";
  h_wallsGroup.add(w57);

  w58 = createSprite(350,270,60,6);
  w58.shapeColor = "blue";
  h_wallsGroup.add(w58);

  w59 = createSprite(165,165,110,6);
  w59.shapeColor = "blue";
  h_wallsGroup.add(w59);

  w60 = createSprite(430,165,110,6);
  w60.shapeColor = "blue";
  h_wallsGroup.add(w60);

  w61 = createSprite(616,165,58,6);
  w61.shapeColor = "blue";
  h_wallsGroup.add(w61);

  w62 = createSprite(112,218,115,6);
  w62.shapeColor = "blue";
  h_wallsGroup.add(w62);

  w63 = createSprite(540,218,105,6);
  w63.shapeColor = "blue";
  h_wallsGroup.add(w63);

  w64 = createSprite(690,218,100,6);
  w64.shapeColor = "blue";
  h_wallsGroup.add(w64);

  w65 = createSprite(139,376,60,6);
  w65.shapeColor = "blue";
  h_wallsGroup.add(w65);

  w66 = createSprite(191,270,55,6);
  w66.shapeColor = "blue";
  h_wallsGroup.add(w66);

  w67 = createSprite(85,323,55,6);
  w67.shapeColor = "blue";
  h_wallsGroup.add(w67);

  w68 = createSprite(270,376,110,6);
  w68.shapeColor = "blue";
  h_wallsGroup.add(w68);

  w69 = createSprite(160,483,107,6);
  w69.shapeColor = "blue";
  h_wallsGroup.add(w69);

  w70 = createSprite(350,483,50,6);
  w70.shapeColor = "blue";
  h_wallsGroup.add(w70);

  w71 = createSprite(538,483,110,6);
  w71.shapeColor = "blue";
  h_wallsGroup.add(w71);

  w72 = createSprite(350,588,60,6);
  w72.shapeColor = "blue";
  h_wallsGroup.add(w72);

  w73 = createSprite(510,376,50,6);
  w73.shapeColor = "blue";
  h_wallsGroup.add(w73);

  w74 = createSprite(615,376,60,6);
  w74.shapeColor = "blue";
  h_wallsGroup.add(w74);

  w75 = createSprite(560,323,60,6);
  w75.shapeColor = "blue";
  h_wallsGroup.add(w75);

  w76 = createSprite(615,270,55,6);
  w76.shapeColor = "blue";
  h_wallsGroup.add(w76);

  w77 = createSprite(680,323,70,6);
  w77.shapeColor = "blue";
  h_wallsGroup.add(w77);

}

function displayCoins(){
  c1 = createSprite(70,40,10,10);
  c1.addImage(coin);
  c1.scale = 0.1;
  coins_group.add(c1);

  c2 = createSprite(120,40,10,10);
  c2.addImage(coin);
  c2.scale = 0.1;
  coins_group.add(c2);

  c3 = createSprite(170,40,10,10);
  c3.addImage(coin);
  c3.scale = 0.1;
  coins_group.add(c3);

  c4 = createSprite(220,40,10,10);
  c4.addImage(coin);
  c4.scale = 0.1;
  coins_group.add(c4);

  c5 = createSprite(270,40,10,10);
  c5.addImage(coin);
  c5.scale = 0.1;
  coins_group.add(c5);

  c6 = createSprite(360,40,10,10);
  c6.addImage(coin);
  c6.scale = 0.1;
  coins_group.add(c6);

  c7 = createSprite(410,40,10,10);
  c7.addImage(coin);
  c7.scale = 0.1;
  coins_group.add(c7);

  c8 = createSprite(460,40,10,10);
  c8.addImage(coin);
  c8.scale = 0.1;
  coins_group.add(c8);

  c9 = createSprite(510,40,10,10);
  c9.addImage(coin);
  c9.scale = 0.1;
  coins_group.add(c9);

  c10 = createSprite(560,40,10,10);
  c10.addImage(coin);
  c10.scale = 0.1;
  coins_group.add(c10);

  c11 = createSprite(610,40,10,10);
  c11.addImage(coin);
  c11.scale = 0.1;
  coins_group.add(c11);

  c12 = createSprite(660,40,10,10);
  c12.addImage(coin);
  c12.scale = 0.1;
  coins_group.add(c12);

  c13 = createSprite(665,90,10,10);
  c13.addImage(coin);
  c13.scale = 0.1;
  coins_group.add(c13);

  c14 = createSprite(665,140,10,10);
  c14.addImage(coin);
  c14.scale = 0.1;
  coins_group.add(c14);

  c15 = createSprite(665,190,10,10);
  c15.addImage(coin);
  c15.scale = 0.1;
  coins_group.add(c15);

  c16 = createSprite(50,665,10,10);
  c16.addImage(coin);
  c16.scale = 0.1;
  coins_group.add(c16);

  c17 = createSprite(100,665,10,10);
  c17.addImage(coin);
  c17.scale = 0.1;
  coins_group.add(c17);

  c18 = createSprite(150,665,10,10);
  c18.addImage(coin);
  c18.scale = 0.1;
  coins_group.add(c18);

  c19 = createSprite(200,665,10,10);
  c19.addImage(coin);
  c19.scale = 0.1;
  coins_group.add(c19);

  c20 = createSprite(250,665,10,10);
  c20.addImage(coin);
  c20.scale = 0.1;
  coins_group.add(c20);

  c21 = createSprite(300,665,10,10);
  c21.addImage(coin);
  c21.scale = 0.1;
  coins_group.add(c21);

  c22 = createSprite(350,665,10,10);
  c22.addImage(coin);
  c22.scale = 0.1;
  coins_group.add(c22);

  c23 = createSprite(400,665,10,10);
  c23.addImage(coin);
  c23.scale = 0.1;
  coins_group.add(c23);

  c24 = createSprite(455,665,10,10);
  c24.addImage(coin);
  c24.scale = 0.1;
  coins_group.add(c24);

  c25 = createSprite(510,665,10,10);
  c25.addImage(coin);
  c25.scale = 0.1;
  coins_group.add(c25);

  c26 = createSprite(560,665,10,10);
  c26.addImage(coin);
  c26.scale = 0.1;
  coins_group.add(c26);

  c27 = createSprite(610,665,10,10);
  c27.addImage(coin);
  c27.scale = 0.1;
  coins_group.add(c27);

  c28 = createSprite(660,665,10,10);
  c28.addImage(coin);
  c28.scale = 0.1;
  coins_group.add(c28);

  c29 = createSprite(665,620,10,10);
  c29.addImage(coin);
  c29.scale = 0.1;
  coins_group.add(c29);

  c30 = createSprite(665,570,10,10);
  c30.addImage(coin);
  c30.scale = 0.1;
  coins_group.add(c30);

  c31 = createSprite(665,520,10,10);
  c31.addImage(coin);
  c31.scale = 0.1;
  coins_group.add(c31);

  c32 = createSprite(665,470,10,10);
  c32.addImage(coin);
  c32.scale = 0.1;
  coins_group.add(c32);

  c33 = createSprite(665,420,10,10);
  c33.addImage(coin);
  c33.scale = 0.1;
  coins_group.add(c33);

  c34 = createSprite(665,370,10,10);
  c34.addImage(coin);
  c34.scale = 0.1;
  coins_group.add(c34);

  c35 = createSprite(665,296,10,10);
  c35.addImage(coin);
  c35.scale = 0.1;
  coins_group.add(c35);

  c36 = createSprite(665,246,10,10);
  c36.addImage(coin);
  c36.scale = 0.1;
  coins_group.add(c36);

  c37 = createSprite(35,618,10,10);
  c37.addImage(coin);
  c37.scale = 0.1;
  coins_group.add(c37);

  c38 = createSprite(35,563,10,10);
  c38.addImage(coin);
  c38.scale = 0.1;
  coins_group.add(c38);

  c39 = createSprite(35,510,10,10);
  c39.addImage(coin);
  c39.scale = 0.1;
  coins_group.add(c39);

  c40 = createSprite(35,460,10,10);
  c40.addImage(coin);
  c40.scale = 0.1;
  coins_group.add(c40);

  c41 = createSprite(35,410,10,10);
  c41.addImage(coin);
  c41.scale = 0.1;
  coins_group.add(c41);

  c42 = createSprite(35,360,10,10);
  c42.addImage(coin);
  c42.scale = 0.1;
  coins_group.add(c42);

  c43 = createSprite(35,310,10,10);
  c43.addImage(coin);
  c43.scale = 0.1;
  coins_group.add(c43);

  c44 = createSprite(35,240,10,10);
  c44.addImage(coin);
  c44.scale = 0.1;
  coins_group.add(c44);

  c45 = createSprite(35,190,10,10);
  c45.addImage(coin);
  c45.scale = 0.1;
  coins_group.add(c45);

  c46 = createSprite(35,140,10,10);
  c46.addImage(coin);
  c46.scale = 0.1;
  coins_group.add(c46);

  c47 = createSprite(35,80,10,10);
  c47.addImage(coin);
  c47.scale = 0.1;
  coins_group.add(c7);

  c48 = createSprite(90,80,10,10);
  c48.addImage(coin);
  c48.scale = 0.1;
  coins_group.add(c48);

  c49 = createSprite(135,80,10,10);
  c49.addImage(coin);
  c49.scale = 0.1;
  coins_group.add(c49);

  c50 = createSprite(185,80,10,10);
  c50.addImage(coin);
  c50.scale = 0.1;
  coins_group.add(c50);

  c51 = createSprite(245,80,10,10);
  c51.addImage(coin);
  c51.scale = 0.1;
  coins_group.add(c51);

  c52 = createSprite(300,80,10,10);
  c52.addImage(coin);
  c52.scale = 0.1;
  coins_group.add(c52);

  c53 = createSprite(350,80,10,10);
  c53.addImage(coin);
  c53.scale = 0.1;
  coins_group.add(c53);

  c54 = createSprite(400,80,10,10);
  c54.addImage(coin);
  c54.scale = 0.1;
  coins_group.add(c54);

  c55 = createSprite(455,80,10,10);
  c55.addImage(coin);
  c55.scale = 0.1;
  coins_group.add(c55);

  c56 = createSprite(505,80,10,10);
  c56.addImage(coin);
  c56.scale = 0.1;
  coins_group.add(c56);

  c57 = createSprite(560,80,10,10);
  c57.addImage(coin);
  c57.scale = 0.1;
  coins_group.add(c57);

  c58 = createSprite(610,80,10,10);
  c58.addImage(coin);
  c58.scale = 0.1;
  coins_group.add(c58);
}
