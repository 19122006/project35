//Create variables here
var dog, happyDog
var foodS, foodStock
var database

function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png")
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
   database = firebase.database()
	createCanvas(600, 600);
  dog = createSprite(300,300,10,10) 
  dog.addImage(dogImage)
   foodStock = database.ref('Food')
    foodStock.on("value",readstock)
    dog.scale=0.4
  
}


function draw() {  
 background(46,139,87);
 
    if (keyWentDown(UP_ARROW)) {
      writeStock(foodS)
      dog.addImage(happyDogImage)
    }
drawSprites();
//text(note:Press UP_ARROW key feed drago milk!)
// textSize(20)
 //fill("white")
// stroke()
 
    }  
  
  function readstock (data) {
  foodS = data.val()
}

function writeStock (x) {
   if (x<=0) {
     x=0 
   }else{
     x=x-1
   }
   
  database.ref('/').update({
    Food:x
  })
}



