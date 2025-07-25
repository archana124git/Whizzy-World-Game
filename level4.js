function checkEmoji(selected) {
  const oddOne = '🐶';
  const correctAudio = document.getElementById('correctAudio');
  const wrongAudio = document.getElementById('wrongAudio');
  const winAudio = document.getElementById('winAudio');

  if (selected === oddOne) {
    correctAudio.play();
    setTimeout(() => {
      Swal.fire({
        title: "You got it!",
        text: "🐶 is the odd one out!",
        icon: "success",
        confirmButtonText: "Go to Level 5"
      }).then(() => {
        winAudio.play();
        window.location.href = "level5.html";
      });
    }, 700);
  } else {
    wrongAudio.play();
    Swal.fire({
      title: "Oops!",
      text: "That's not the odd one. Try again!",
      icon: "error",
      confirmButtonText: "Retry"
    });
  }
}
