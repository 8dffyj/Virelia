// for index.ejs
function copyIP() {
  const ip = "play.virelia.live";
  navigator.clipboard.writeText(ip).then(() => {
    const copyBtn = document.querySelector(".copy-btn");
    const icon = copyBtn.querySelector("i");
    icon.className = "fas fa-check";
    copyBtn.style.background = "#4CAF50";

    setTimeout(() => {
      icon.className = "fas fa-copy";
      copyBtn.style.background = "";
    }, 2000);
  });
}

// Mobile navigation toggle
document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("active");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Floating animation for blocks
function animateBlocks() {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    const randomDelay = Math.random() * 2;
    block.style.animationDelay = randomDelay + "s";
  });
}
animateBlocks();

// guide.ejs
        function copyIP() {
            const serverIP = 'play.virelia.live';
            navigator.clipboard.writeText(serverIP).then(() => {
                const button = event.target.closest('.copy-btn-guide');
                const originalHTML = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i>';
                button.style.background = 'linear-gradient(45deg, #00FF00, #00AA00)';
                
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.style.background = 'linear-gradient(45deg, #FFD84A, #FF9C00)';
                }, 2000);
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header-guide');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.background = 'rgba(26, 26, 26, 0.9)';
            }
        });

        // Guide.ejs
function copyIP() {
  navigator.clipboard.writeText('play.virelia.live');
  const btn = document.querySelector('.copy-btn-guide');
  btn.innerHTML = '<i class="fas fa-check"></i>';
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-copy"></i>';
  }, 2000);
}