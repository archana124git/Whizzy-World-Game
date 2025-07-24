function checkMatch(selected) {
  const correctEmoji = '🍇';
  const correctAudio = document.getElementById('correctAudio');
  const wrongAudio = document.getElementById('wrongAudio');
  const winAudio = document.getElementById('winAudio');

  if (selected === correctEmoji) {
    correctAudio.play();

    setTimeout(() => {
      Swal.fire({
        title: 'Correct!',
        text: 'Great job!',
        icon: 'success',
        confirmButtonText: 'Go to Level 4',
      }).then(() => {
        winAudio.play();
        window.location.href = "level4.html";
      });
    }, 800);

  } else {
    wrongAudio.play();
    Swal.fire({
      title: 'Oops!',
      text: 'That’s not the right shadow. Try again!',
      icon: 'error',
      confirmButtonText: 'Try Again',
    });
  }
}
