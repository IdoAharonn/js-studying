const div=document.getElementById("div");
const color= document.getElementById("color");
const size= document.getElementById("size");

function handleColorChange(){
    div.style.border = "1px solid " + color.value;
}
function handleSizeChange(){
    div.style.width =  size.value+"px";
    div.style.height = size.value+"px";

}
