function checkAnswer(selected) {
  const correctSound = new Audio('assets/correct.mp3');
  const wrongSound = new Audio('assets/wrong.mp3');
  const winSound = new Audio('assets/win.mp3');

  const feedback = document.getElementById('feedback');

  if (selected === 'apple') {
    correctSound.play();
    feedback.textContent = "🎉 Correct! Well done!";
    feedback.style.color = "green";

    setTimeout(() => {
      winSound.play();
      window.location.href = "level2.html";
    }, 1500);
  } else {
    wrongSound.play();
    feedback.textContent = "❌ Oops! Try again.";
    feedback.style.color = "red";
  }
}
