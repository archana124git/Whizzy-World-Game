const emojiList = ["🎉", "🍭", "🎈", "🍬", "⭐", "🧁"];
const totalToCatch = 5;
let caught = 0;

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
  emoji.classList.add("emoji");

  const gameArea = document.getElementById("game-area");
  const maxX = gameArea.clientWidth - 60;
  const maxY = gameArea.clientHeight - 60;

  emoji.style.left = Math.random() * maxX + "px";
  emoji.style.top = Math.random() * maxY + "px";

  emoji.addEventListener("click", () => {
    caught++;
    emoji.remove();
    if (caught >= totalToCatch) {
      setTimeout(() => {
        Swal.fire({
          title: "🎉 You Did It!",
          text: "You’ve completed the final level!",
          icon: "success",
          confirmButtonText: "Restart Game",
        }).then(() => {
          window.location.href = "level1.html";
        });
      }, 300);
    }
  });

  gameArea.appendChild(emoji);

  // Remove if not clicked after 3s
  setTimeout(() => emoji.remove(), 3000);
}

function dropEmojis() {
  const interval = setInterval(() => {
    if (caught >= totalToCatch) {
      clearInterval(interval);
    } else {
      createEmoji();
    }
  }, 1000);
}

window.onload = () => {
  Swal.fire({
    title: "Level 5: Final Emoji Catch",
    text: "Are you ready for the final challenge?",
    icon: "question",
    confirmButtonText: "Start!",
  }).then(() => {
    dropEmojis();
  });
};
function showCongratulations() {
  document.getElementById('congrats').style.display = 'block';

  // Fire confetti
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}
