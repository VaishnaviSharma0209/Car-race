canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_img="car1.png";
car1_x=10;
car1_y=10;
car1_height=90;
car1_width=200;
car2_img="car2.png";
car2_x=10;
car2_y=100;
car2_height=90;
car2_width=200;
background_image="racing.jpg";
function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_img;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_img;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='37'){
        //left1();
        console.log("left1");
    }
    if (keypressed=='38'){
        //up1();
        console.log("up1");
    }
    if (keypressed=='39'){
        //right1();
        console.log("right1");
    }
    if (keypressed=='40'){
        //down1();
        console.log("down1");
    }
    //....car2......//
    if (keypressed=='65'){
        //left2();
        console.log("left2");
    }
    if (keypressed=='87'){
        //up2();
        console.log("up2");
    }
    if (keypressed=='68'){
        //right2();
        console.log("right2");
    }
    if (keypressed=='83'){
        //down2();
        console.log("down2");
    }
}