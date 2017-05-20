var myMusic;
var r,g,b;
var x = 200;
var y = 200;;
var speedx =  7;
var speedy = 7;


function preload(){
    myMusic = loadSound('js/poeticjustice.mp3');
}

function setup(){
    cnv = createCanvas(900,900);
    amplitude = new p5.Amplitude();
     r = random(0,255);
  g = random(0,255);
  b = random(0,255);
}



function draw(){
 background(255);  
 stroke(4);
 fill(r,g,b);
 groove();
  stroke(0);
    move();
}

function groove(){
    var level = amplitude.getLevel();
    var size = map(level,0,1,0,600);
    ellipse(width/2,height/2,size,size);
    fill(r,g,b);
     ellipse(300,300,size,size);
     fill(r,g,b);
     ellipse(200,200,size,size);
     fill(r,g,b);
     ellipse(100,200,size,size);
    
     line(100,150,size,size);
      stroke(r,g,b);
     line(200,250,size,size);
     
     stroke(r,g,b);
     
 
}


function move(){
   y = y + speedy;
    x = x + speedx;
  if(y > height || y < 0){
        y = random(height);
         r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  }
 if(x > width || x<0){
   x =  random(width);  
    r = random(0,255);
    g = random(0,50);
    b = random(0,100);
   
 } 
}


 function mouseClicked(){
    if(myMusic.isPlaying()){
         myMusic.pause();
          
 }
 else{
       myMusic.play();
         r = random(0,255);
  g = random(0,255);
  b = random(0,255);
       
   }
 }
 
 
 //function mouseReleashed(){
//  if(myMusic.isPlaying()){
 //  myMusic.pause();
 // }
 //}
 
 