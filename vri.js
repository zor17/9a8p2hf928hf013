highestZ = 1;
class boxes{
    holdingBox = false;

    prevMouseX = 0;
    prevMouseY = 0;

    MouseX = 0;
    MouseY = 0;

    currentBoxX = 0;
    currentBoxY = 0;

    displacementX = 0;
    displacementY = 0;

    init(box){
        box.addEventListener('mousedown', (e) => {
            
            this.holdingBox = true;
            box.style.zIndex = highestZ;
            highestZ++;
            if(e.button === 0){
            this.prevMouseX = this.MouseX;
            this.prevMouseY = this.MouseY;
        }
        })

        document.addEventListener('mousemove', (e) => {
            this.MouseX = e.clientX;
            this.MouseY = e.clientY;
            this.displacementX = this.MouseX - this.prevMouseX;
            this.displacementY = this.MouseY - this.prevMouseY;
            
             if(this.holdingBox){
                this.currentBoxX += this.displacementX;
                this.currentBoxY += this.displacementY;
                this.prevMouseX = this.MouseX;
                this.prevMouseY = this.MouseY;
                box.style.transform = `translate(${this.currentBoxX}px, ${this.currentBoxY}px)`;
            }
        })

        window.addEventListener('mouseup', (e) => {
            this.holdingBox = false;
        })
    }
}
const b = Array.from(document.querySelectorAll('.box'));
b.forEach(element => {
    new boxes().init(element);
});
i=0;
const audio = new Audio('aud.mp3');
document.getElementById('box').addEventListener('click' , function(){
    if(i === 0){
    audio.play()
    i++;}
})
document.getElementById('stop').addEventListener('click' , function(){
    audio.pause()
    i=0;}
)



document.querySelector(".menu").onclick = () => {
    document.getElementById("box").classList.remove('active2')
    document.body.classList.remove('active2')
    document.querySelector(".butt").classList.remove('active2')
    document.getElementById("box1").classList.remove('active2')
    document.getElementById("box2").classList.remove('active2')
    document.getElementById("box3").classList.remove('active2')
    document.getElementById("box4").classList.remove('active2')

    document.getElementById("box").classList.remove('active3')
    document.body.classList.remove('active3')
    document.querySelector(".butt").classList.remove('active3')
    document.getElementById("box1").classList.remove('active3')
    document.getElementById("box2").classList.remove('active3')
    document.getElementById("box3").classList.remove('active3')
    document.getElementById("box4").classList.remove('active3')

    document.getElementById("menu").classList.toggle('active')
    document.getElementById("box").classList.toggle('active')
    document.body.classList.toggle('active')
    document.querySelector(".butt").classList.toggle('active')
    document.getElementById("box1").classList.toggle('active')
    document.getElementById("box2").classList.toggle('active')
    document.getElementById("box3").classList.toggle('active')
    document.getElementById("box4").classList.toggle('active')
}
document.querySelector(".menu2").onclick = () => {
    document.getElementById("box").classList.remove('active3')
    document.body.classList.remove('active3')
    document.body.classList.remove('active')
    document.querySelector(".butt").classList.remove('active3')
    document.getElementById("box1").classList.remove('active3')
    document.getElementById("box2").classList.remove('active3')
    document.getElementById("box3").classList.remove('active3')
    document.getElementById("box4").classList.remove('active3')

    document.getElementById("box").classList.remove('active')
    document.body.classList.remove('active')
    document.querySelector(".butt").classList.remove('active')
    document.getElementById("box1").classList.remove('active')
    document.getElementById("box2").classList.remove('active')
    document.getElementById("box3").classList.remove('active')
    document.getElementById("box4").classList.remove('active')

    document.getElementById("box").classList.toggle('active2')
    document.body.classList.toggle('active2')
    document.querySelector(".butt").classList.toggle('active2')
    document.getElementById("box1").classList.toggle('active2')
    document.getElementById("box2").classList.toggle('active2')
    document.getElementById("box3").classList.toggle('active2')
    document.getElementById("box4").classList.toggle('active2')
}
document.querySelector(".menu3").onclick = () => {
    document.getElementById("box").classList.remove('active2')
    document.body.classList.remove('active2')
    document.body.classList.remove('active')
    document.querySelector(".butt").classList.remove('active2')
    document.getElementById("box1").classList.remove('active2')
    document.getElementById("box2").classList.remove('active2')
    document.getElementById("box3").classList.remove('active2')
    document.getElementById("box4").classList.remove('active2')

    document.getElementById("box").classList.remove('active')
    document.body.classList.remove('active')
    document.querySelector(".butt").classList.remove('active')
    document.getElementById("box1").classList.remove('active')
    document.getElementById("box2").classList.remove('active')
    document.getElementById("box3").classList.remove('active')
    document.getElementById("box4").classList.remove('active')

    document.getElementById("box").classList.toggle('active3')
    document.body.classList.toggle('active3')
    document.querySelector(".butt").classList.toggle('active3')
    document.getElementById("box1").classList.toggle('active3')
    document.getElementById("box2").classList.toggle('active3')
    document.getElementById("box3").classList.toggle('active3')
    document.getElementById("box4").classList.toggle('active3')
}




