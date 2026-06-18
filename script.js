document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // 🎠 CARRUSEL PRO
  // =========================
  const images = document.querySelectorAll('.carousel img');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const dotsContainer = document.querySelector('.dots');

  let i = 0;

  // crear dots
  images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      i = index;
      show();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function show() {
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    images[i].classList.add('active');
    dots[i].classList.add('active');
  }

  // botones
  next.addEventListener("click", () => {
    i = (i + 1) % images.length;
    show();
  });

  prev.addEventListener("click", () => {
    i = (i - 1 + images.length) % images.length;
    show();
  });

  // auto
  setInterval(() => {
    i = (i + 1) % images.length;
    show();
  }, 4000);

  show();

  // =========================
  // 🎉 CONFETI PRO
  // =========================
  function confeti() {
    const emojis = ["✨","🎉","💖","⭐"];

    for (let j = 0; j < 20; j++) {
      const el = document.createElement("div");
      el.innerText = emojis[Math.random() * emojis.length | 0];

      el.style.position = "fixed";
      el.style.left = Math.random() * 100 + "vw";
      el.style.top = "-10px";
      el.style.fontSize = "20px";
      el.style.animation = "fall 4s linear";
      el.style.zIndex = "9999";

      document.body.appendChild(el);

      setTimeout(() => el.remove(), 4000);
    }
  }

  setInterval(confeti, 5000);

  // =========================
  // ⏳ COUNTDOWN PRO
  // =========================
  const eventDate = new Date("July 03, 2026 08:30:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      document.querySelector(".countdown").innerHTML = "🎉 ¡Hoy es el gran día!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

});

// =========================
// 🎨 ANIMACIÓN CONFETI
// =========================
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);