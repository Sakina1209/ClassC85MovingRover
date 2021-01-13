 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");

 var pictures = ["nasa1.jpg" , "nasa2.jpg" , "nasa3.jpeg" , "nasa4.jpg" , "nasa5.jpg"];

  math_random = Math.floor(Math.random() * 5);
  console.log(math_random);
  background_image = pictures[math_random];
  console.log("background_image" + background_image);

 rover_height = 100;
 rover_width = 90;
 rover_x = 10;
 rover_y = 10 ; 

 rover_image = "rover.png";

 function add() {
     background_img = new Image();
     background_img.onload = uploadBackground;
     background_img.src= background_image;

     rover_img = new Image();
     rover_img.onload = uploadRover;
     rover_img.src = rover_image;
 }

 function uploadBackground(){
     ctx.drawImage(background_img , 0 , 0 , canvas.width , canvas.height);
 }

 function uploadRover(){
     ctx.drawImage(rover_img , rover_x , rover_y ,rover_height, rover_width);
 }

 window.addEventListener("keydown" , my_keydown);
 function my_keydown(e){
     var key_press = e.keyCode;
     console.log(key_press);

     if (key_press == 38){
        up();
        console.log("up");
     }

     if (key_press == 40){
         down();
         console.log("down");
     }

     if (key_press == 37){
         left();
         console.log("left");
     }

     if (key_press == 39){
         right();
         console.log("right");
     }

 }
 function up(){
 
    if (rover_y >= 0 ){
        rover_y = rover_y - 10 ;
        console.log("When up arrow key is pressed x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadRover();
    }

 }

 function down(){
     if(rover_y <= 500 ){
         rover_y = rover_y + 10;
         console.log("When down arrow key is pressed x = " + rover_x + "y = " + rover_y);
         uploadBackground();
         uploadRover();
     }
 }

 function right(){

    if (rover_x <= 710){
        rover_x = rover_x + 10;
        console.log("When right arrow key is pressed x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
 }

 function left(){

    if (rover_x >= 0){
        rover_x = rover_x - 10 ;
        console.log("When left arrow key is pressed x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
 }

  