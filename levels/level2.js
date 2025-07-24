window.onload = function () {
  const gameArea = document.getElementById("gameArea");

  const colors = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Green", value: "green" },
    { name: "Orange", value: "orange" },
  ];

  // Randomly choose a color
  const target = colors[Math.floor(Math.random() * colors.length)];

  const heading = document.createElement("h2");
  heading.innerText = "🎨 Match the Color Name to the Color!";
  heading.style.fontSize = "28px";
  heading.style.color = "#0d47a1";
  heading.style.marginBottom = "30px";
  gameArea.appendChild(heading);

  const colorBox = document.createElement("div");
  colorBox.style.width = "150px";
  colorBox.style.height = "150px";
  colorBox.style.backgroundColor = target.value;
  colorBox.style.border = "4px solid #333";
  colorBox.style.borderRadius = "15px";
  colorBox.style.margin = "auto";
  colorBox.style.marginBottom = "30px";
  gameArea.appendChild(colorBox);

  const buttonsContainer = document.createElement("div");
  buttonsContainer.style.display = "grid";
  buttonsContainer.style.gridTemplateColumns = "repeat(2, 140px)";
  buttonsContainer.style.gap = "20px";
  buttonsContainer.style.justifyContent = "center";

  const shuffled = colors.sort(() => 0.5 - Math.random());

  shuffled.forEach((color) => {
    const btn = document.createElement("button");
    btn.innerText = color.name;
    btn.style.fontSize = "24px";
    btn.style.padding = "12px";
    btn.style.borderRadius = "10px";
    btn.style.border = "2px solid #444";
    btn.style.backgroundColor = "#f8f9fa";
    btn.style.cursor = "pointer";

    btn.onclick = () => {
      if (color.name === target.name) {
        Swal.fire({
          title: "🎉 Correct!",
          text: "Well done! 🌟",
          icon: "success",
          confirmButtonText: "Next Level ▶️",
        }).then(() => {
          window.location.href = "level3.html";
        });
      } else {
        Swal.fire({
          title: "❌ Wrong!",
          text: "Oops! Try again!",
          icon: "error",
          confirmButtonText: "Retry 🔁",
        });
      }
    };

    buttonsContainer.appendChild(btn);
  });

  gameArea.appendChild(buttonsContainer);
};
