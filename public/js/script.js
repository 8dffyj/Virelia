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
 function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(function() {
                showCopyNotification();
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
                // Fallback for older browsers
                const textArea = document.createElement("textarea");
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showCopyNotification();
            });
        }

        function showCopyNotification() {
            const notification = document.getElementById('copyNotification');
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }