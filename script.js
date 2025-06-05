function playMusic() {
  document.getElementById("song").play();
}

// 🎁 TYPEWRITER TEXT
const text = `I am so lucky and blessed to have you in my life. You make my life brighter and better every day with your smile, kindness and presence. Couldn't ask for a better start of my year when you came into my life on 12th Jan. I know you don’t enjoy your birthday and this year has been tough, but I’m certain things will get better soon. Hang in there and be strong (which you are). I’ll always be there for you — no matter what. I love you. Happy birthday again ❤️❤️❤️`;

let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("message").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 10); // super smooth & faster
  }
}

window.onload = () => {
  typeWriter();
  startHeartRain(); // Assuming this function exists below
};

  function startHeartRain() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 3 + Math.random() * 2 + "s";
      document.querySelector(".hearts").appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 300);
  }
  // 🎉 Confetti on button click
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  let confettis = [];

  function createConfetti() {
    for (let i = 0; i < 300; i++) {
      confettis.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: random(2, 6),
        d: random(1, 5),
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      });
    }
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.d;
      if (c.y > canvas.height) c.y = -10;
    });
  }

  let confettiInterval = setInterval(drawConfetti, 20);

  document.querySelector("button").addEventListener("click", () => {
    confettis = [];
    createConfetti();
    clearInterval(confettiInterval);  // This stops the confetti
    showSlideshow();  // Then start the slideshow
  });

let currentSlide = 0;

function startSlideshow() {
  const slides = document.querySelectorAll('#slideshow .slide');
  slides.forEach(slide => slide.style.display = 'none');
  slides[currentSlide].style.display = 'block';
  currentSlide = (currentSlide + 1) % slides.length;
  setTimeout(startSlideshow, 2000);
}

function showSlideshow() {
  document.getElementById('slideshow').style.display = 'block';
  startSlideshow();
}


