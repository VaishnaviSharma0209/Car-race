canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var background_array=[
    "racing.jpg",
    "Racetrack2.jfif",
    "https://sportsbase.io/images/gpfans/copy_620x348/368786041a65276162ad5be4b53d1cd49aa4c380.jpg",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/18/12/formula-1.jpg"
]
var random_number=Math.floor(Math.random()*4);
console.log("Background number:" + random_number);
var j=0
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
background_image=background_array[random_number];
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
        left1();
        console.log("left1");
    }
    if (keypressed=='38'){
        up1();
        console.log("up1");
    }
    if (keypressed=='39'){
        right1();
        console.log("right1");
    }
    if (keypressed=='40'){
        down1();
        console.log("down1");
    }
    //....car2......//
    if (keypressed=='65'){
        left2();
        console.log("left2");
    }
    if (keypressed=='87'){
        up2();
        console.log("up2");
    }
    if (keypressed=='68'){
        right2();
        console.log("right2");
    }
    if (keypressed=='83'){
        down2();
        console.log("down2");
    }
}
function left1() {
    if (car1_x>=0){
        car1_x=car1_x-10;
        console.log("When left is pressed x=" + car1_x + "y=" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function right1() {
    if (car1_x<=700){
        car1_x=car1_x+10;
        console.log("When right is pressed x=" + car1_x + "y=" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
    if (car1_x > 700 && j=='0');{
        console.log("car1 won");
        document.getElementById('game_status').innerHTML = "Game Status: Car 1 Won!!!!!!!!!!!!!"
        j=1
    }

}
function down1() {
    if (car1_y<=500){
        car1_y=car1_y+10;
        console.log("When down is pressed x=" + car1_x + "y=" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function up1() {
    if (car1_y>=0){
        car1_y=car1_y-10;
        console.log("When up is pressed x=" + car1_x + "y=" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
//......car2........//
function left2() {
    if (car2_x>=0){
        car2_x=car2_x-10;
        console.log("When a is pressed x=" + car2_x + "y=" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function right2() {
    if (car2_x<=700){
        car2_x=car2_x+10;
        console.log("When d is pressed x=" + car2_x + "y=" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
    if (car2_x > 700 && j=='0'){
        console.log("car2 won");
        document.getElementById('game_status').innerHTML = "Game Status: Car 2 Won!!!!!!!!!!!!!"
    }
}
function down2() {
    if (car2_y<=500){
        car2_y=car2_y+10;
        console.log("When s is pressed x=" + car2_x + "y=" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function up2() {
    if (car2_y>=0){
        car2_y=car2_y-10;
        console.log("When w is pressed x=" + car2_x + "y=" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}