document.addEventListener("DOMContentLoaded", () => {

    // ===== CARRUSEL =====
    const images = document.querySelectorAll('.carousel img');
    let i = 0;

    function show() {
        images.forEach(img => img.classList.remove('active'));
        images[i].classList.add('active');
    }

    setInterval(() => {
        i = (i + 1) % images.length;
        show();
    }, 3000);

    // ===== CONFETI =====
    function confeti() {
        const emojis = ["✨","🎉","💖","⭐"];

        for (let i = 0; i < 20; i++) {
            const el = document.createElement("div");
            el.innerText = emojis[Math.random()*emojis.length|0];
            el.style.position = "fixed";
            el.style.left = Math.random()*100+"vw";
            el.style.top = "-10px";
            el.style.fontSize = "20px";
            el.style.animation = "fall 4s linear";

            document.body.appendChild(el);

            setTimeout(()=>el.remove(),4000);
        }
    }

    setInterval(confeti, 5000);

    // ===== CONTADOR =====
    const evento = new Date("July 03, 2026 08:00:00").getTime();

    setInterval(() => {
        let now = new Date().getTime();
        let diff = evento - now;

        let d = Math.floor(diff / (1000*60*60*24));
        let h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        let m = Math.floor((diff%(1000*60*60))/(1000*60));

        document.getElementById("timer").innerHTML =
            `${d} días ${h}h ${m}m`;
    }, 1000);

});

// animación confeti
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity:0;
    }
}`;
document.head.appendChild(style);