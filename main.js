canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var carwidth=100;
var carheight=90;
backgroundimage="racing.jpg";
carimage="car1.png";
carx=10;
cary=10;
c2y=100;
c2x=10;
car2image="car2.jpg"
function add(){
    bgimage=new Image();
    bgimage.onload=uploadbackground;
    bgimage.src=backgroundimage;
    cimage=new Image();
    cimage.onload=uploadcar;
     cimage.src=carimage;
     c2image=new Image();
     c2image.onload=uploadcar2;
     c2image.src=car2image;
}
function uploadbackground(){
    ctx.drawImage(bgimage,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(cimage,carx,cary,carwidth,carheight);
}
function uploadcar2(){
    ctx.drawImage(c2image,c2x,c2y,carwidth,carheight);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var keypress=e.keyCode;
    console.log(keypress);
    if(keypress=="38"){
        up();
    }
    if(keypress=="40"){
        down();
    }
    if(keypress=="37"){
        left();
    }
    if(keypress=="39"){
        right();
    }
}
function up(){
    if(rovery>=0){
        rovery=rovery-10;
        uploadbackground();
        uploadrover();


    }
}
function down(){
    if(rovery<=500){
        rovery=rovery+10;
        uploadbackground();
        uploadrover();
        

    }}
    function left(){
        if(roverx>=0){
            roverx=roverx-10;
            uploadbackground();
            uploadrover();
            
    
        
    }
}
function right(){
    if(roverx<=800){
        roverx=roverx+10;
        uploadbackground();
        uploadrover();
        

    }
}