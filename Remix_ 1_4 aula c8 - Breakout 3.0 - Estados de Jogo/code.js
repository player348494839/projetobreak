var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//criando obejetos de sprites
var box1 = createSprite(25, 125, 50,50);
var box2 = createSprite(75, 125, 50,50);
var box3 = createSprite(125, 125, 50,50);
var box4 = createSprite(175, 125, 50,50);
var box5 = createSprite(225, 125, 50,50);
var box6 = createSprite(275, 125, 50,50);
var box7 = createSprite(325, 125, 50,50);
var box8 = createSprite(375, 125, 50,50);
var box9 = createSprite(25, 75, 50,50);
var box10 = createSprite(375, 75, 50,50);
var box11 = createSprite(325, 75, 50,50);
var box12 = createSprite(275, 75, 50,50);
var box13 = createSprite(225, 75, 50,50);
var box14 = createSprite(175, 75, 50,50);
var box15 = createSprite(125, 75, 50,50);
var box16 = createSprite(75, 75, 50,50);

var bola = createSprite(200, 200, 20, 20);
var raquete = createSprite(200,325,70,10);

var score = 0;

var estadoJogo = "inicio";

//colorindo os objetos de sprite
box1.shapeColor = "black";
box2.shapeColor = "white";
box3.shapeColor = "black";
box4.shapeColor = "white";
box5.shapeColor = "black";
box6.shapeColor = "white";
box7.shapeColor = "black";
box8.shapeColor = "white";
box9.shapeColor = "white";
box10.shapeColor = "black";
box11.shapeColor = "white";
box12.shapeColor = "black";
box13.shapeColor = "white";
box14.shapeColor = "black";
box15.shapeColor = "white";
box16.shapeColor = "black";
raquete.shapeColor = "black";
bola.shapeColor = "orange";





function draw() {
  //definindo a cor do fundo
  background("lightblue");
  
  //criando bordas de sprite
  createEdgeSprites();
  
  //defindo a colisão da bola com as bordas superior, direita e esquerda
  bola.bounceOff(topEdge);
  bola.bounceOff(leftEdge);
  bola.bounceOff(rightEdge);
  
  textSize(20)
  //estados do Jogo
  if(estadoJogo == "inicio"){
    text("aperte space para começar",97,197);
    
    if(keyDown("space")){
      //dando velocidade a bola
      bola.velocityX = 4;
      bola.velocityY = 4;
      estadoJogo = "jogando";
    }
    
  }
  if(estadoJogo ==  "jogando"){
    //defindo a colisão da bola com a raquete
    bola.bounceOff(raquete);
    
    //eixo X da raquete segue o eixo X do mouse
    raquete.x = World.mouseX;
    
    if (bola.isTouching(box1)) {
   bola.bounceOff(box1);
   box1.destroy();
   score ++;
    }
 if (bola.isTouching(box2)) {
   bola.bounceOff(box2);
   box2.destroy();
   score ++;
 }
 if (bola.isTouching(box3)) {
   bola.bounceOff(box3);
   box3.destroy();
   score ++;
 }
 if (bola.isTouching(box4)) {
   bola.bounceOff(box4);
   box4.destroy();
   score ++;
 }
 if (bola.isTouching(box5)) {
   bola.bounceOff(box5);
   box5.destroy();
   score ++;
 }
 if (bola.isTouching(box6)) {
   bola.bounceOff(box6);
   box6.destroy();
   score ++;
 }
 if (bola.isTouching(box7)) {
   bola.bounceOff(box7);
   box7.destroy();
   score ++;
 }
 if (bola.isTouching(box8)) {
   bola.bounceOff(box8);
   box8.destroy();
   score ++;
 }
 if (bola.isTouching(box9)) {
   bola.bounceOff(box9);
   box9.destroy();
   score ++;
 }
 if (bola.isTouching(box10)) {
   bola.bounceOff(box10);
   box10.destroy();
   score ++;
 }
 if (bola.isTouching(box11)) {
   bola.bounceOff(box11);
   box11.destroy();
   score ++;
 }
 if (bola.isTouching(box12)) {
    bola.bounceOff(box12);
   box12.destroy();
   score ++;
 }
 if (bola.isTouching(box13)) {
   bola.bounceOff(box13);
   box13.destroy();
   score ++;
 }
 if (bola.isTouching(box14)) {
   bola.bounceOff(box14);
   box14.destroy();
   score ++;
   
  }
  if (bola.isTouching(box15)) {
   bola.bounceOff(box15);
   box15.destroy();
   score ++;
  }
  if (bola.isTouching(box16)) {
   bola.bounceOff(box16);
   box16.destroy();
   score ++;
  }
  if(score == 16  || bola.y > 325)
    estadoJogo = "fim";
    if (score == 16) {
    text("voce venceu", 97,301); 
  }
  else
    text("voce perdeu", 97,244);  
  }
  
 
  
  if(estadoJogo ==  "fim"){
    //text("fim de jogo",97,197);
    
  
   bola.velocityX = 0;
     bola.velocityY = 0;
     score = 0;
  }
  
 textSize(20);
 fill("white");
 stroke("white");
 
 text("Pontuação: "+score, 250, 20);

  
  //fazer os sprites aparecerem na tela
  drawSprites(); 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
