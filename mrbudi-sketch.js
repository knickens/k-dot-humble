var myMusic;
var r,g,b;

function preload(){
    myMusic = loadSound('js/humble.m4a');
}

function setup(){
    cnv = createCanvas(400,400);
    amplitude = new p5.Amplitude(.7);
    myMusic.setVolume(1.0);
    myMusic.play();

}

function draw(){
    background(0);
    r = random(150,255);
    g = random(0,255);
    b = random(150,255);
    fill(r,0,b);
    
    groove();
    

}

function groove(){
    var level = amplitude.getLevel();
    var size = map(level,0,1,0,200);
    
    //rectangles
    fill(100);
    for(var i=0; i<9; i++){
        rectMode(CENTER);
        rect((i+1)*40, height, 30, size*random(2,8));
    }

    
    //corners
    fill(r,0,b);
    ellipse(size,size,size,size);
    ellipse(width-size,height-size,size,size);
    ellipse(size,height-size,size,size);
    ellipse(width-size,size,size,size);
    
    //press mouse turns red and makes bigger
    if(mouseIsPressed){
        size=size*4;
        fill(r,0,0);
    }
    noStroke();
    ellipse(width/2,height/2,size,size);
}

//  function mouseClicked(){
//     if(myMusic.isPlaying()){
//          myMusic.setVolume(0.001);
//          size=size*1000;
//          //myMusic.pause();
//  }
//  else{
//       myMusic.play();
//       fill(r,g,b);
//   }
//  }

//function mouseReleased(){
 //  myMusic.pause();
//}

