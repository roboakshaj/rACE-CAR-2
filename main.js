canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


rover_width=100;
rover_height=90;
background_image="background.jpg";
rover="car1.png";
rover1="car1.png";
rover_x=10;
rover_y=10;
rover1_x=10;
rover1_y=20;

function add(){
 background_image2=new Image();
 background_image2.onload=uploadbackground;
 background_image2.src=background_image;

 
 rover2=new Image();
 rover2.onload=uploadrover;
 rover2.src=rover;

}



function uploadbackground(){
    ctx.drawImage(background_image2,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover2,rover_x,rover_y,rover_width,rover_height);
}


function my_keydown (e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38')
    {
        up();
        console.log("up");
    }
    
    
    if (keypressed=='40')
    {
        down();
        console.log("down");
    }
    
    if (keypressed=='37')
    {
        left();
        console.log("left");
    }
    
    if (keypressed=='39')
    {
        right();
        console.log("right");
    }
    
    
    }

    
function up(){
    if(rover_y>0){
        rover_y=rover_y-10;
        console.log ("when up arrow is pressed, x="+rover_x +" and y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<500){
        rover_y=rover_y+10;
        console.log ("when down arrow is pressed, x="+rover_x +" and y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>0){
        rover_x=rover_x-10;
        console.log ("when left arrow is pressed, x="+rover_x +" and y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<700){
        rover_x=rover_x+10;
        console.log ("when right arrow is pressed, x="+rover_x +" and y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}