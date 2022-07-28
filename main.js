var canvas = new fabric.Canvas(myCanvas);
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
function load_img(){
    fabric.Image.fromURL("golf-h.png", function (Img) {
        hole_object=Img;
        hole_object.scaleToWidth(50);
        hole_object.scaleToHeight(50);
        hole_object.set({
            top: hole_y,
            left: hole_x
        });
        canvas.add(hole_object);
});
    ball_update();
}
function ball_update(){
    fabric.Image.fromURL("ball.png", function (Img)) {
        ball_object = Img;
        ball_object.scaleToWidth(50);
        ball_object.scaleToHeight(50);
        ball_object.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    

    else {
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }

    function up(){
    if(ball_y>=0){
        ball_y=ball_y-ball_image_height;
        canvas.remove(ball.png);
    }
}

function down(){
    if(ball_y<=600){
                ball_y=ball_y+ball_image_height;
        canvas.remove(ball.png);
    }
}

function right(){
    if(ball_x<=1000){
        ball_x=ball_x+ball_image_width;
        canvas.remove(ball.png);
    }
}

function left(){
    if(ball_x>=0){
                ball_x=ball_x-ball_image_width;
        canvas.remove(ball.png);
    }
}
}
