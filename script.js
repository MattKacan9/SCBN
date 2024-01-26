document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
  
    // Array of smiley face characters
    const smileyFaces = ["😊", "😄", "😃", "😁", "😆", "😅", "😂", "🤣", "😇", "🙂"];
  
    // Display smiley faces
    smileyFaces.forEach((face) => {
      const smiley = document.createElement("div");
      smiley.classList.add("smiley");
      smiley.textContent = face;
      container.appendChild(smiley);
    });
  });