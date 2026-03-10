const canvas = document.getElementById("grass");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let blades = [];
let bladeCount = 300;

class Blade {
  constructor(x){
    this.x = x;
    this.height = Math.random()*60 + 40;
    this.offset = Math.random()*Math.PI;
  }

  draw(time){
    let sway = Math.sin(time + this.offset) * 10;

    ctx.beginPath();
    ctx.moveTo(this.x, canvas.height);

    ctx.quadraticCurveTo(
      this.x + sway,
      canvas.height - this.height/2,
      this.x + sway,
      canvas.height - this.height
    );

    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

for(let i=0;i<bladeCount;i++){
  blades.push(new Blade(Math.random()*canvas.width));
}

function animate(time){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  blades.forEach(blade=>{
    blade.draw(time*0.002);
  });

  requestAnimationFrame(animate);
}

animate();