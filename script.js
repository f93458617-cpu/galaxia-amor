const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const stars = [];

for (let i = 0; i < 1500; i++) {

    const t = Math.random() * Math.PI * 2;

    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

    stars.push({
        x: x * 22,
        y: -y * 22,
        r: Math.random() * 2 + 1,
        a: Math.random() * Math.PI * 2,
        s: 0.001 + Math.random() * 0.002
    });
}

function animate() {

    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.save();

    ctx.translate(canvas.width/2,canvas.height/2);

    stars.forEach(star=>{

        star.a += star.s;

        const x =
            star.x*Math.cos(star.a)-
            star.y*Math.sin(star.a);

        const y =
            star.x*Math.sin(star.a)+
            star.y*Math.cos(star.a);

        ctx.beginPath();
        ctx.arc(x,y,star.r,0,Math.PI*2);

        ctx.fillStyle="#ff4fa3";
        ctx.shadowColor="#ff4fa3";
        ctx.shadowBlur=20;

        ctx.fill();

    });

    ctx.restore();

    requestAnimationFrame(animate);

}

animate();
