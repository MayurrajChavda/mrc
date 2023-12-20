let main = document.getElementById('slider');
let img2 = document.getElementById('img2');
let bar = document.getElementById('bar');
let cursorX;
window.addEventListener('load',function(){
    bar.style.left =  '50%';
    img2.style.width =  '50%';
});
main.addEventListener('mousemove',function(event){
    cursorX = event.clientX-((window.innerWidth-main.clientWidth)/2);
    bar.style.left =  `${cursorX/10}%`;
    img2.style.width =  `${(cursorX/10)}%`;
});
