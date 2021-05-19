var canvas=new fabric.Canvas("myCanvas")

width_block=30
height_block=30

player_x=10
player_y=10

player_object=""

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
player_object=Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object)
    })
}

block_image_object=""

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
block_image_object=Img;

block_image_object.scaleToWidth(width_block);
block_image_object.scaleToHeight(height_block);
block_image_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_image_object)
})
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    console.log(e)
    keypress=e.keyCode
    console.log(keypress)

    if(e.shiftKey ==true && keypress=="80"){
        console.log("p and shift pressed together")
        width_block=width_block+10
        height_block=height_block+10
    document.getElementById("current_width").innerHTML=width_block
    document.getElementById("current_height").innerHTML=height_block
    }
    if(e.shiftKey ==true && keypress=="77"){
        console.log("m and shift pressed together")
        width_block=width_block-10
        height_block=height_block-10
    document.getElementById("current_width").innerHTML=width_block
    document.getElementById("current_height").innerHTML=height_block
    }
    if (keypress=='38'){
        up()
        console.log('up')
    }
    if (keypress=='40'){
        down()
        console.log('down')
    }
    if (keypress=='37'){
        left()
        console.log('left')
    }
    if (keypress=='39'){
        right()
        console.log('right')
    }
    if (keypress=="87"){
        new_image("wall.jpg")
        console.log("w")
    }
    if (keypress=="71"){
        new_image("ground.png")
        console.log("g")
    }
    if (keypress=="76"){
        new_image("light_green.png")
        console.log("l")
    }
    if (keypress=="84"){
        new_image("trunk.jpg")
        console.log("t")
    }
    if (keypress=="82"){
        new_image("roof.jpg")
        console.log("r")
    }
    if (keypress=="89"){
        new_image("yellow_wall.png")
        console.log("y")
    }
    if (keypress=="68"){
        new_image("dark_green.png")
        console.log("w")
    }
    if (keypress=="85"){
        new_image("unique.png")
        console.log("u")
    }
    if (keypress=="67"){
        new_image("cloud.jpg")
        console.log("c")
    }
}
function up(){
    if (player_y>=0){
        player_y=player_y-height_block
        console.log("block image height =" +height_block)
        console.log("when up arrow key is pressed X = " + player_x + "Y = " + player_y)
        canvas.remove(player_object) 
        player_update()
    }
}
function down(){
    if (player_y<=500){
        player_y=player_y+height_block
        console.log("block image height =" +height_block)
        console.log("when down key is pressed X = " + player_x + "Y = " + player_y)
        canvas.remove(player_object) 
        player_update()
    }
}
function right (){
    if (player_x<=900){
        player_x=player_x+width_block
        console.log("block image width =" +width_block)
        console.log("when right arrow key is pressed X = " + player_x + "Y = " + player_y)
        canvas.remove(player_object) 
        player_update()
    }
}
function left(){
    if (player_y<=0){
        player_x=player_x-height_block
        console.log("block image width =" +width_block)
        console.log("when left arrow key is pressed X = " + player_x + "Y = " + player_y)
        canvas.remove(player_object) 
        player_update()
    }
}